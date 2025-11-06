"use client";

import { FaEnvelope } from "react-icons/fa6";
import Link from "next/link";

const quickLinksArr = [
  "translators",
  "authors",
  "customers",
  "developers",
  "sellers",
  "delivery",
  "prices",
  "location",
  "join us",
];

const ContactUsPageInfo = [
  {
    address: "General Inquires",
    content: "Account issues, orders, refunds and general questions",
    link: "mailto:batoulkazak297@bookaven.com",
    linkContent: "batoulkazak297@bookaven.com",
  },
  {
    address: "Authors & Publishers",
    content: "Submit your book, discuss publishing, or explore partnerships.",
    link: "mailto:publishing@bookhaven.com",
    linkContent: "publishing@bookhaven.com",
  },
  {
    address: "Technical Support",
    content: "Website bugs login issues or feature requests.",
    link: "mailto:tech@bookhaven.com",
    linkContent: "tech@bookhaven.com",
  },
  {
    address: "Business & Press",
    content: "Media inquires, collaborations or feedback.",
    link: "mailto:hello@bookhaven.com",
    linkContent: "mailto:hello@bookhaven.com",
  },
  {
    address: "Before you contact us check our",
    link: "/get-help",
    linkContent: "Help Center",
  },
  {
    address: "Translators",
    content:
      "Report translation errors, suggest improvements, or join our translation team for 4 languages (EN/DE/AR/RU).",
    link: "mailto:translations@bookhaven.com",
    linkContent: "translations@bookhaven.com",
  },
  {
    address: "Authors",
    content:
      "Submit your manuscript, discuss publishing options, or get feedback on your book.",
    link: "mailto:authors@bookhaven.com",
    linkContent: "authors@bookhaven.com",
  },
  {
    address: "Customers",
    content:
      "Get help with orders, refunds, account issues, or general questions about your reading experience.",
    link: "mailto:customers@bookhaven.com",
    linkContent: "customers@bookhaven.com",
  },
  {
    address: "Developers",
    content:
      "Report bugs, suggest features, or discuss API integrations for our platform.",
    link: "mailto:developers@bookhaven.com",
    linkContent: "developers@bookhaven.com",
  },
  {
    address: "Sellers",
    content:
      "Partner with us to sell your books, lectures, or educational content on our platform.",
    link: "mailto:sellers@bookhaven.com",
    linkContent: "sellers@bookhaven.com",
  },
  {
    address: "Delivery",
    content:
      "Track physical book shipments, report delays, or update your delivery address.",
    link: "mailto:delivery@bookhaven.com",
    linkContent: "delivery@bookhaven.com",
  },
  {
    address: "Prices",
    content:
      "Questions about book pricing, discounts, subscription plans, or free book eligibility.",
    link: "mailto:pricing@bookhaven.com",
    linkContent: "pricing@bookhaven.com",
  },
  {
    address: "Location",
    content:
      "Learn about our global presence, shipping regions, or local availability of physical books.",
    link: "mailto:location@bookhaven.com",
    linkContent: "location@bookhaven.com",
  },
  {
    address: "Join Us",
    content:
      "Explore career opportunities, internships, or volunteer roles at BookHaven.",
    link: "mailto:careers@bookhaven.com",
    linkContent: "careers@bookhaven.com",
  },
  {
    address: "Before you contact us, check our",
    link: "/get-help",
    linkContent: "Help Center",
  },
];

const Contact = () => {
  return (
    <div className="flex flex-col items-center min-h-screen gap-16 py-30 w-9/10">
      <div className="text-center">
        <h1 className="mb-6 font-serif text-4xl font-bold uppercase md:text-5xl text-primary">
          Contact Us
        </h1>
        <p className="p-10 text-xl text-silver-light">
          Whether you are a reader, author or just curious, we are here to
          help
        </p>
        <div className="grid w-full max-w-6xl grid-cols-1 gap-8 px-4 md:grid-cols-2 lg:grid-cols-3"></div>
        <div className="flex place-self-center max-w-[90rem] overflow-x-scroll gap-10 p-10 w-2/3">
          {ContactUsPageInfo.map((card) => (
            <div
              key={card.address}
              className="p-6 transition-all duration-300 border shadow-lg rounded-xl bg-black/20 border-silver-dark hover:border-secondary"
            >
              <h3 className="text-xl font-bold text-secondary">
                {card.address}
              </h3>
              <p className="text-sm text-silver">{card.content}</p>
              <div className="flex gap-5 pt-5 place-items-center place-content-center">
                <div className="flex w-10 h-10 p-2 rounded-full bg-primary-dark place-items-center place-content-center">
                  <FaEnvelope className="text-xl text-silver-very-light" />
                </div>
                <Link
                  href={card.link}
                  className="flex gap-1 font-medium text-primary hover:underline place-items-center"
                >
                  {card.linkContent}
                </Link>
              </div>
            </div>
          ))}
        </div>
        <div className="max-w-xl px-4 italic text-center text-silver-very-light place-self-center p-15">
          <p>
            This library was built by readers, for readers. Every message help
            us make the experience better.
            <span className="text-secondary">The Books Team</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
