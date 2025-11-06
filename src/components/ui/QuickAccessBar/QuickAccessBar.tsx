"use client";

import Link from "next/link";

type QuickAccessBarProps = {
  url: "string";
  linksArr: {
    tag: string;
    question: string;
    content?: string;
    img?: string;
  }[];
};

const QuickAccessBar = ({ linksArr, url }: QuickAccessBarProps) => {
  return (
    <nav className="shadow-lg dark:text-white duration-200 w-9/10 place-self-center">
      <div className=" py-3 sm:py-0 bg-silver-very-light w-full">
        <ul className="flex gap-4 items-center flex-wrap sm:flex">
          {linksArr.map((item) => (
            <li key={item.tag}>
              <Link
                href={`/${url}#${item.tag}`}
                className="inline-block text-secondary-very-dark px-4 hover:scale-105 p-1 duration-300 hover:text-secondary-dark underline"
              >
                {item.tag}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default QuickAccessBar;
