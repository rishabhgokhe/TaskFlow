import CustomLinkButton from "@/components/elements/CustomLinkButton";
import ThemeToggle from "@/components/elements/themeToggle";
import { ToolTipIcon } from "@/components/elements/TootTipIcon";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { aboutData, iconLinkData } from "@/lib/Data";
import Link from "next/link";
import React from "react";

import MailOpenIcon from "@/public/svg/icons/MailOpenIcon"
import CircleArrowUpRightIcon from "@/public/svg/icons/CircleArrowUpRightIcon";
import UserCircleIcon from "@/public/svg/icons/UserCircleIcon";

export default function About() {
  return (
    <div className="min-h-screen flex flex-col items-center bg-gradient-to-r from-[#63D471] to-[#233329] p-4 md:p-10 dark:bg-gradient-to-r dark:from-[#28313B] dark:to-[#485461]">
      <div className="bg-white dark:bg-gray-900 rounded-3xl shadow-lg p-4 md:p-10 max-w-5xl w-full text-center">
        <ThemeToggle />
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4 md:mb-6">
          About Us
        </h1>
        <div className="flex flex-col items-center mb-4 md:mb-6">
          <Avatar className="w-28 md:w-40 h-28 md:h-40 mb-2 md:mb-4">
            <AvatarImage src="https://avatars.githubusercontent.com/u/120303705?v=4" />
            <AvatarFallback>
              <UserCircleIcon className="w-full h-full text-gray-300" />
            </AvatarFallback>
          </Avatar>
          <div className="text-lg md:text-xl text-gray-800 dark:text-white font-semibold">
            Rishabh Gokhe
          </div>
          <div className="text-sm md:text-base text-gray-600 dark:text-gray-400">Founder</div>
        </div>
        <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4 md:mb-6">
          {aboutData.welcomeText}
        </p>
        <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4 md:mb-6">
          {aboutData.founderText}
        </p>
        <div className="text-left">
          <h2 className="text-lg md:text-2xl font-semibold text-gray-800 dark:text-white mb-2 md:mb-4">
            Our Mission
          </h2>
          <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4 md:mb-6">
            {aboutData.missionText}
          </p>
          <div className="flex justify-center items-center mb-2 sm:mb-0">
            <CustomLinkButton
              href="subscribe-newsletter"
              name="Subscribe to Newsletter"
              rightIcon={<MailOpenIcon />}
            />
          </div>
          <h2 className="text-lg md:text-2xl font-semibold text-gray-800 dark:text-white mb-2 md:mb-4">
            What We Offer
          </h2>
          <ul className="list-disc text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4 md:mb-6">
            {aboutData.whatWeOffer.map((item, id) => (
              <li key={id} className="mb-2">
                <span className="font-semibold">{item.listTitle} </span>:{" "}
                {item.listDescription}
              </li>
            ))}
          </ul>
          <h2 className="text-lg md:text-2xl font-semibold text-gray-800 dark:text-white mb-2 md:mb-4">
            Our Values
          </h2>
          <ul className="list-disc text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4 md:mb-6">
            {aboutData.values.map((item, id) => (
              <li key={id} className="mb-2">
                <span className="font-semibold">{item.listTitle} </span>:{" "}
                {item.listDescription}
              </li>
            ))}
          </ul>
          <Separator className="dark:bg-slate-700" />
          <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4 md:mb-6">
            Join us on our journey to transform task management and
            productivity. Whether you are a freelancer, entrepreneur, or part of
            a large organization, TaskFlow is here to empower you to achieve
            more.
          </p>

          <div className="flex flex-col-reverse justify-center sm:flex-row sm:space-x-4 items-center w-full sm:w-auto">
            <ul className="flex gap-2 md:gap-4">
              {iconLinkData.map((item, id) => (
                <ToolTipIcon
                  key={id}
                  name={item.name}
                  triggerJsxElement={
                    <a key={id} href={item.link}>
                      {item.icon}
                    </a>
                  }
                />
              ))}
            </ul>

            <Separator className="sm:hidden my-2 md:my-3 border-[#C8C8C8] dark:bg-neutral-700" />
            <ToolTipIcon
              name="Visit My Portfolio"
              triggerJsxElement={
                <Link href={"https://portfolio-rishabhgokhe.vercel.app/"}>
                  <Button
                    size={"sm"}
                    className="portfolio-button gap-1 shadow-lg"
                    variant={"outline"}
                  >
                    <CircleArrowUpRightIcon />
                    Portfolio
                  </Button>
                </Link>
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
}
