
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
//       <div className="flex w-full h-screen place-content-center place-items-center">
//         Loading...
//       </div>
//     );
//   }
//   return (
//     <div className="flex flex-col w-full place-content-center place-items-center gap-15 ">
//       <div className="w-full">
//         <NavBar />
//         <QuickAccessBar url="get-help" linksArr={sections} />
//       </div>
//       <h1 className="font-serif text-5xl font-bold uppercase text-primary">
//         Your guide to our library
//         {/* t("help", "quick_description.address").split("?")[0] */}
//       </h1>
//       <Image
//         src={heroSectionImg}
//         alt="background-img"
//         className="w-screen h-screen"
//       />
//       <main className="flex flex-col py-10 px-30">
//         {sections.map((section, idx) => (
//           <div id={section.tag} key={SECTION_KEYS[idx]} className="">
//             <section className="flex flex-col gap-20">
//               <div className="w-full h-[10rem] flex place-content-center p-10">
//                 <div className="w-full h-1 px-10 bg-light-black"></div>
//               </div>
//               <h2 className="font-serif text-4xl font-bold text-secondary">
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
//                       idx === 2 ? "text-xl font-light" : "text-xl"
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
import heroSectionImg from "@/app/assets/website/big_background.jpg";
import QuickAccessBar from "@/components/ui/QuickAccessBar/QuickAccessBar";
import { useTranslation } from "@/context/TranslationContext";
import { getHelpQuickLinks } from "@/_lib";

const GetHelp = () => {
    const { t, lang, setLang } = useTranslation();

    return (
        <div className="flex flex-col w-full place-content-center place-items-center gap-15 ">
            <div className="w-full">
                {/* <NavBar /> */}
                <QuickAccessBar linksArr={getHelpQuickLinks} />
            </div>
            <h1 className="font-serif text-5xl font-bold uppercase text-primary">
                Your guide to our library
            </h1>
            <Image
                src={heroSectionImg}
                alt="background-img"
                className="w-screen h-screen"
            />
            <main className="flex flex-col py-10 px-30">
                {getHelpQuickLinks.map((link) => (
                    <div id={`${link?.tag}`} key={link?.tag} className="">
                        <section className="flex flex-col gap-20">
                            <div className="w-full h-[10rem] flex place-content-center p-10">
                                <div className="w-full h-1 px-10"></div>
                            </div>
                            <h2 className="font-serif text-4xl font-bold text-secondary">
                                {/* {link?.address} */}
                                {t("help.quick_description.address")}
                            </h2>
                            {link?.content ? (
                                <div
                                    className={` ${link.image
                                        ? "flex gap-10 text-justify font-roboto px-15"
                                        : "flex-col "
                                        }`}
                                >
                                    <p
                                        className={`${link.image ? "text-xl font-roboto" : "text-xl"
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
            {/* <Footer /> */}
        </div>
    );
};

export default GetHelp;
