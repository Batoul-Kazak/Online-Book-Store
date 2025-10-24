// "use client";

// import Image from "next/image";
// import NavBar from "../components/NavBar/NavBar";
// import QuickAccessBar from "../components/QuickAccessBar/QuickAccessBar";
// import backgroundImg from "@/app/assets/website/background2.jpg";
// import heroSectionImg from "@/app/assets/website/big_background.jpg";
// import Footer from "../components/Footer/Footer";
// import { useEffect, useState, useTransition } from "react";
// import { useTranslation } from "../context/TranslationContext";

// const SECTION_KEYS = [
//   "quick_description",
//   "questions",
//   "buy_books",
//   "search_filters",
//   "free_books",
//   "sell_books",
//   "delivery_to_your_home",
//   "preferences",
//   "book_translation",
//   "e_books",
//   "online_reading",
//   "notes",
// ];

// const GetHelp = () => {
//   const { t, lang } = useTranslation();
//   const [sections, setSections] = useState<any[]>([]);

//   useEffect(() => {
//     const loadedSections = SECTION_KEYS.map((key) => t("help", key));
//     setSections(loadedSections);
//   }, [lang, t]);

//   if (sections.length === 0) {
//     return (
//       <div className="w-full h-screen flex place-content-center place-items-center">
//         Loading...
//       </div>
//     );
//   }
//   return (
//     <div className="flex flex-col place-content-center place-items-center gap-15 w-full ">
//       <div className="w-full">
//         <NavBar />
//         <QuickAccessBar url="get-help" linksArr={sections} />
//       </div>
//       <h1 className="text-6xl font-bold uppercase font-serif text-primary">
//         Your guide to our library
//         {/* t("help", "quick_description.address").split("?")[0] */}
//       </h1>
//       <Image
//         src={heroSectionImg}
//         alt="background-img"
//         className="w-screen h-screen"
//       />
//       <main className="flex flex-col  px-30 py-10">
//         {sections.map((section, idx) => (
//           <div id={section.tag} key={SECTION_KEYS[idx]} className="">
//             <section className="flex flex-col gap-20">
//               <div className="w-full h-[10rem] flex place-content-center p-10">
//                 <div className="w-full px-10 h-1 bg-light-black"></div>
//               </div>
//               <h2 className="text-5xl font-serif font-bold text-secondary">
//                 {section.address}
//               </h2>
//               {idx === 2 ? (
//                 <div
//                   className={` ${
//                     idx === 2
//                       ? "flex gap-10 text-justify font-roboto px-15"
//                       : "flex-col "
//                   }`}
//                 >
//                   <p
//                     className={`${
//                       idx === 2 ? "text-2xl font-light" : "text-2xl"
//                     }`}
//                   >
//                     {section.content}
//                   </p>
//                   {idx === 2 && (
//                     <Image
//                       src={backgroundImg}
//                       alt="lib-img"
//                       className="w-4/6 h-1/2"
//                     />
//                   )}
//                 </div>
//               ) : section.questions ? (
//                 <ul className="">
//                   {section.questions.map((q) => (
//                     <li key={q.id} className="flex flex-col">
//                       <h3>{q.question}</h3>
//                       <p>{q.answer}</p>
//                     </li>
//                   ))}
//                 </ul>
//               ) : null}
//             </section>
//           </div>
//         ))}
//       </main>
//       <Footer />
//     </div>
//   );
// };

// export default GetHelp;

"use client";

import Image from "next/image";
import NavBar from "../components/NavBar/NavBar";
import QuickAccessBar from "../components/QuickAccessBar/QuickAccessBar";
import backgroundImg from "@/app/assets/website/background2.jpg";
import heroSectionImg from "@/app/assets/website/big_background.jpg";
import Footer from "../components/Footer/Footer";
import { useTranslation } from "../context/TranslationContext";

const getHelpQuickLinks = [
  {
    tag: "quick description",
    address: "Who we are and what we offer to our customers ?",
    content:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi sunt eos, sed facilis voluptatem laborum officia eius sapiente voluptatum, delectus deleniti soluta perspiciatis porro ex, dignissimos repellendus mollitia veniam aliquam! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi sunt eos, sed facilis voluptatem laborum officia eius sapiente voluptatum, delectus deleniti soluta perspiciatis porro ex, dignissimos repellendus mollitia veniam aliquam! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi sunt eos, sed facilis voluptatem laborum officia eius sapiente voluptatum, delectus deleniti soluta perspiciatis porro ex, dignissimos repellendus mollitia veniam aliquam! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi sunt eos, sed facilis voluptatem laborum officia eius sapiente voluptatum, delectus deleniti soluta perspiciatis porro ex, dignissimos repellendus mollitia veniam aliquam! ",
    image: backgroundImg,
  },
  {
    tag: "questions",
    address: "Top Frequent Questions users ask",
    questions: [
      {
        id: "q1",
        question: "question1",
        answer:
          "sdkfmsdnfs df sdf sdm f,msd f,m sd,mf sd,mf ,smd f,smd f,smd f,msd f,m sd,mf s,dm f,smd fm sd,mf ,sdm f,sdm f,msd f,",
      },
      {
        id: "q2",
        question: "question2",
        answer:
          "sdkfmsdnfs df sdf sdm f,msd f,m sd,mf sd,mf ,smd f,smd f,smd f,msd f,m sd,mf s,dm f,smd fm sd,mf ,sdm f,sdm f,msd f,",
      },
      {
        id: "q3",
        question: "question3",
        answer:
          "sdkfmsdnfs df sdf sdm f,msd f,m sd,mf sd,mf ,smd f,smd f,smd f,msd f,m sd,mf s,dm f,smd fm sd,mf ,sdm f,sdm f,msd f,",
      },
      {
        id: "q4",
        question: "question4",
        answer:
          "sdkfmsdnfs df sdf sdm f,msd f,m sd,mf sd,mf ,smd f,smd f,smd f,msd f,m sd,mf s,dm f,smd fm sd,mf ,sdm f,sdm f,msd f,",
      },
      {
        id: "q5",
        question: "question5",
        answer:
          "sdkfmsdnfs df sdf sdm f,msd f,m sd,mf sd,mf ,smd f,smd f,smd f,msd f,m sd,mf s,dm f,smd fm sd,mf ,sdm f,sdm f,msd f,",
      },
      {
        id: "q6",
        question: "question6",
        answer:
          "sdkfmsdnfs df sdf sdm f,msd f,m sd,mf sd,mf ,smd f,smd f,smd f,msd f,m sd,mf s,dm f,smd fm sd,mf ,sdm f,sdm f,msd f,",
      },
    ],
  },
  {
    tag: "buy books",
    address: "How i can buy a book?",
    content:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi sunt eos, sed facilis voluptatem laborum officia eius sapiente voluptatum, delectus deleniti soluta perspiciatis porro ex, dignissimos repellendus mollitia veniam aliquam! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi sunt eos, sed facilis voluptatem laborum officia eius sapiente voluptatum, delectus deleniti soluta perspiciatis porro ex, dignissimos repellendus mollitia veniam aliquam!",
  },
  {
    tag: "search & filters",
    address: "How search and filter operation can save your time and effort?",
    content:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi sunt eos, sed facilis voluptatem laborum officia eius sapiente voluptatum, delectus deleniti soluta perspiciatis porro ex, dignissimos repellendus mollitia veniam aliquam! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi sunt eos, sed facilis voluptatem laborum officia eius sapiente voluptatum, delectus deleniti soluta perspiciatis porro ex, dignissimos repellendus mollitia veniam aliquam!",
  },
  {
    tag: "sell books",
    address:
      "How i can buy my Lectures/Strories/Books? and how i can get feedbacks about my books",
    content:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi sunt eos, sed facilis voluptatem laborum officia eius sapiente voluptatum, delectus deleniti soluta perspiciatis porro ex, dignissimos repellendus mollitia veniam aliquam! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi sunt eos, sed facilis voluptatem laborum officia eius sapiente voluptatum, delectus deleniti soluta perspiciatis porro ex, dignissimos repellendus mollitia veniam aliquam!",
  },
  {
    tag: "free books",
    address: "How i can find free versions of books i want?",
    content:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi sunt eos, sed facilis voluptatem laborum officia eius sapiente voluptatum, delectus deleniti soluta perspiciatis porro ex, dignissimos repellendus mollitia veniam aliquam! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi sunt eos, sed facilis voluptatem laborum officia eius sapiente voluptatum, delectus deleniti soluta perspiciatis porro ex, dignissimos repellendus mollitia veniam aliquam!",
  },
  {
    tag: "delivery to your home",
    address: "How to get hand copies from books?",
    content:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi sunt eos, sed facilis voluptatem laborum officia eius sapiente voluptatum, delectus deleniti soluta perspiciatis porro ex, dignissimos repellendus mollitia veniam aliquam!, Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi sunt eos, sed facilis voluptatem laborum officia eius sapiente voluptatum, delectus deleniti soluta perspiciatis porro ex, dignissimos repellendus mollitia veniam aliquam!",
  },
  ,
  {
    tag: "preferences",
    address: "How i can manage my prefrences?",
    content:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi sunt eos, sed facilis voluptatem laborum officia eius sapiente voluptatum, delectus deleniti soluta perspiciatis porro ex, dignissimos repellendus mollitia veniam aliquam! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi sunt eos, sed facilis voluptatem laborum officia eius sapiente voluptatum, delectus deleniti soluta perspiciatis porro ex, dignissimos repellendus mollitia veniam aliquam!",
  },
  //   ,{
  // "book translation"
  //
  // },{
  // "e-books"
  //
  // },
  // {
  // "online reading"
  //
  // },{
  //
  // "notes"
  // }
];

const GetHelp = () => {
  const { t, lang, setLang } = useTranslation();

  return (
    <div className="flex flex-col place-content-center place-items-center gap-15 w-full ">
      <div className="w-full">
        <NavBar />
        <QuickAccessBar linksArr={getHelpQuickLinks} />
      </div>
      <h1 className="text-6xl font-bold uppercase font-serif text-primary">
        Your guide to our library
      </h1>
      <Image
        src={heroSectionImg}
        alt="background-img"
        className="w-screen h-screen"
      />
      <main className="flex flex-col  px-30 py-10">
        {getHelpQuickLinks.map((link) => (
          <div id={`${link?.tag}`} key={link?.tag} className="">
            <section className="flex flex-col gap-20">
              <div className="w-full h-[10rem] flex place-content-center p-10">
                <div className="w-full px-10 h-1 bg-light-black"></div>
              </div>
              <h2 className="text-5xl font-serif font-bold text-secondary">
                {/* {link?.address} */}
                {t("help.quick_description.address")}
              </h2>
              {link?.content ? (
                <div
                  className={` ${
                    link.image
                      ? "flex gap-10 text-justify font-roboto px-15"
                      : "flex-col "
                  }`}
                >
                  <p
                    className={`${
                      link.image ? "text-2xl font-roboto" : "text-2xl"
                    }`}
                  >
                    {/* {link.content} */}
                    {t("help.quick_description.content")}
                  </p>
                  {link?.image && (
                    <Image
                      src={link.image}
                      alt={`${link.image}-img`}
                      className="w-4/6 h-1/2"
                    />
                  )}
                </div>
              ) : link?.questions ? (
                <ul className="">
                  {link.questions.map((question, i) => (
                    <li key={question.id} className="flex flex-col">
                      {/* <h3>{t("help.questions.questions")[i].address}</h3> */}
                      <p>{t("help.questions.questions.answer")}</p>
                    </li>
                  ))}
                </ul>
              ) : (
                <></>
              )}
            </section>
          </div>
        ))}
      </main>
      <Footer />
    </div>
  );
};

export default GetHelp;
