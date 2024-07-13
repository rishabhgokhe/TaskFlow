import React from "react";
import { footerLinksData} from "@/lib/Data";
import { Separator } from "../ui/separator";

import FooterIconLink from "../elements/FooterIconLink";

export default function Footer() {
  return (
    <footer className="mt-5 gap-1 shadow-md space-y-1 border rounded-lg w-full flex flex-col justify-between items-center p-2">
      <div className="gap-3 flex flex-wrap justify-center items-center">
        {footerLinksData.map((item, id) => (
          <>
            <a
              key={id}
              href={item.link}
              className={`relative flex items-center gap-1 no-underline text-gray-700 dark:text-[#CACACA] after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-full after:h-[2px] after:bg-gray-200 after:scale-x-0 hover:after:scale-x-100 after:origin-left after:transition-transform after:duration-500 dark:hover:after:bg-blue-500 hover:after:bg-blue-500`}
            >
              {/* <span className="">{item.icon}</span> */}
              {item.name}
            </a>
            {id === footerLinksData.length - 1 ? "" : " | "}
          </>
        ))}
      </div>

      <Separator />
      {/* div of bottom links and copyright text */}
      <div className="gap-1 dark:text-[#CACACA] space-y-1 rounded-lg w-full flex flex-col-reverse sm:flex-row justify-between items-center">
        <p>
          © {new Date().getFullYear()} Copyright:{" "}
          <span className="font-bold text-xl dark:text-white">
            Rishabh Gokhe
          </span>
        </p>
        {/* <p className="text-xl sm:text-2xl font-bold playwrite text-center sm:text-left text-[var(--text-light)] dark:text-[var(--text-dark)]">
        Developed by Rishabh Gokhe
      </p> */}

        <FooterIconLink />
      </div>
    </footer>
  );
}
