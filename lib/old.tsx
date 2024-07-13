import PageTemplate from "@/components/elements/PageTemplate";
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqData } from "@/lib/Data";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import Search02Icon from "@/public/svg/icons/Search02Icon";

export function Help() {
  return (
    <PageTemplate>
      <div className="max-w-3xl mx-auto py-8 md:py-10 px-4">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-8">
          Help Center
        </h1>
        <div className="text-gray-700 dark:text-gray-300 space-y-8">
          <p className="text-base md:text-lg leading-relaxed mb-6">
            Welcome to TaskFlow! Learn how to get started with our simple yet
            powerful task management tool.
          </p>

          <Separator className="dark:bg-slate-700" />

          <h2 className="text-lg md:text-xl font-semibold text-gray-800 dark:text-white mb-4">
            FAQs Section{" "}
          </h2>
          <p className="text-base md:text-lg leading-relaxed mb-4">
            Find answers to commonly asked questions about TaskFlow. Search for
            exact results.
          </p>

          <div className="flex justify-center mb-6">
            <div className="relative w-full max-w-2xl">
              <Input className="pl-10" placeholder="Search for a question" />
              <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
                <Search02Icon />
              </div>
            </div>
          </div>

          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqData.map((item, id) => (
              <AccordionItem key={id} value={`item-${id}`} className="">
                <AccordionTrigger className="text-left text-base md:text-lg font-semibold text-gray-800 dark:text-white mb-0 hover:text-indigo-600 dark:hover:text-indigo-300 hover:no-underline">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-base md:text-lg leading-relaxed">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <h2 className="text-lg md:text-xl font-semibold text-gray-800 dark:text-white mb-4">
            Contact Support
          </h2>

          <p className="text-base md:text-lg leading-relaxed">
            Need further assistance? Contact our support team for help at{" "}
            <a
              className="text-blue-600 hover:underline"
              href="mailto:support@taskflow.com"
            >
              support@taskflow.com
            </a>
            .
          </p>
        </div>
      </div>
    </PageTemplate>
  );
}

const releaseNotes = [
  {
    version: "1.0.1",
    date: "2024-07-12",
    notes: [
      "Fixed minor bugs.",
      "Improved performance for faster load times.",
      "Updated user interface for a more intuitive experience.",
    ],
  },
  {
    version: "1.0.0",
    date: "2024-06-01",
    notes: [
      "Initial release of TaskFlow.",
      "Core features include task creation, task editing, and task deletion.",
      "User authentication and profile management.",
    ],
  },
];

export function ReleaseNote() {
  return (
    <PageTemplate>
      <div className="max-w-5xl mx-auto py-8 md:py-10 px-4">
        <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-8 text-center">
          Release Notes
        </h1>
        <div className="grid gap-6 md:gap-8 md:grid-cols-2">
          {releaseNotes.length > 0 ? (
            releaseNotes.map((release, index) => (
              <div
                key={index}
                className="border border-gray-300 dark:border-gray-700 rounded-lg p-6 shadow-lg dark:shadow-none bg-white dark:bg-gray-800"
              >
                <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-2">
                  Version {release.version}
                </h2>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                  Released on {release.date}
                </p>
                <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300">
                  {release.notes.map((note, noteIndex) => (
                    <li key={noteIndex} className="text-lg leading-relaxed">
                      {note}
                    </li>
                  ))}
                </ul>
              </div>
            ))
          ) : (
            <div className="col-span-full text-center">
              <h2 className="text-2xl font-medium text-gray-800 dark:text-white">
                No Recent Releases
              </h2>
            </div>
          )}
        </div>
      </div>
    </PageTemplate>
  );
}

import CustomLinkButton from "@/components/elements/CustomLinkButton";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { aboutData } from "@/lib/Data";
import MailOpenIcon from "@/public/svg/icons/MailOpenIcon";
import UserCircleIcon from "@/public/svg/icons/UserCircleIcon";

export default function About() {
  return (
    <PageTemplate>
      <>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4 md:mb-6">
          About <span className="text-red-500">Us</span>
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
          <div className="text-sm md:text-base text-gray-600 dark:text-gray-400">
            Founder
          </div>
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
              rightIcon={<MailOpenIcon />}
            >
              Subscribe to Newsletter
            </CustomLinkButton>
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
        </div>
      </>
    </PageTemplate>
  );
}

import { ScrollArea } from "@/components/ui/scroll-area";
import { termsAndConditionData } from "@/lib/Data";

export function TermsAndCondition() {
  return (
    <PageTemplate>
      <>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4 md:mb-6">
          Terms and Conditions
        </h1>
        <div className="text-gray-700 dark:text-gray-300 space-y-8 text-left">
          <section>
            <h2 className="text-lg md:text-2xl font-semibold text-gray-800 dark:text-white mb-2 md:mb-4">
              1. Introduction
            </h2>
            <p className="text-base md:text-lg leading-relaxed mb-4 md:mb-6">
              {termsAndConditionData.introduction}
            </p>
          </section>
          <section>
            <h2 className="text-lg md:text-2xl font-semibold text-gray-800 dark:text-white mb-2 md:mb-4">
              2. Acceptance of Terms
            </h2>
            <p className="text-base md:text-lg leading-relaxed mb-4 md:mb-6">
              {termsAndConditionData.acceptanceOfTerms}
            </p>
          </section>
          <section>
            <h2 className="text-lg md:text-2xl font-semibold text-gray-800 dark:text-white mb-2 md:mb-4">
              3. License to Use
            </h2>
            <p className="text-base md:text-lg leading-relaxed mb-4 md:mb-6">
              {termsAndConditionData.licenseToUse}
            </p>
          </section>
          <section>
            <h2 className="text-lg md:text-2xl font-semibold text-gray-800 dark:text-white mb-2 md:mb-4">
              4. User Obligations
            </h2>
            <p className="text-base md:text-lg leading-relaxed mb-4 md:mb-6">
              {termsAndConditionData.userObligations.heading}
            </p>
            <ul className="list-disc pl-6 space-y-2">
              {termsAndConditionData.userObligations.listItems.map(
                (item, id) => (
                  <li key={id}>{item}</li>
                )
              )}
            </ul>
          </section>
          <section>
            <h2 className="text-lg md:text-2xl font-semibold text-gray-800 dark:text-white mb-2 md:mb-4">
              5. Limitation of Liability
            </h2>
            <p className="text-base md:text-lg leading-relaxed mb-4 md:mb-6">
              {termsAndConditionData.limitationOfLiability}
            </p>
          </section>
          <section>
            <h2 className="text-lg md:text-2xl font-semibold text-gray-800 dark:text-white mb-2 md:mb-4">
              6. Changes to These Terms
            </h2>
            <p className="text-base md:text-lg leading-relaxed mb-4 md:mb-6">
              {termsAndConditionData.changesToTheseTerms}
            </p>
          </section>
          <section>
            <h2 className="text-lg md:text-2xl font-semibold text-gray-800 dark:text-white mb-2 md:mb-4">
              7. Contact Information
            </h2>
            <p className="text-base md:text-lg leading-relaxed mb-4 md:mb-6">
              {termsAndConditionData.contactInformation}
            </p>
          </section>
          <Separator className="dark:bg-slate-700 my-8" />
          <h2 className="text-lg md:text-2xl font-semibold text-gray-800 dark:text-white mb-2 md:mb-4">
            Full Terms and Conditions
          </h2>
          <ScrollArea className="h-64 w-full rounded-md border p-4 mb-6 bg-gray-50 dark:bg-gray-900 overflow-y-scroll">
            <pre className="whitespace-pre-wrap leading-relaxed text-base md:text-lg">
              {termsAndConditionData.termsAndCondition}
            </pre>
          </ScrollArea>
        </div>
      </>
    </PageTemplate>
  );
}

import Image from "next/image";
import BannerImage from "@/public/images/TaskFlow Banner.png";

import Coffee01Icon from "@/public/svg/icons/Coffee01Icon";
import BuyMeACoffeeBrandLogo from "@/public/svg/icons/BuyMeACoffeeBrandLogo";
import { iconLinkData } from "@/lib/Data";

export function SupportMe() {
  return (
    <PageTemplate>
      <div className="max-w-3xl mx-auto py-8 md:py-10 px-4">
        <div className="mb-6 rounded-2xl overflow-hidden shadow-lg">
          <Image src={BannerImage} alt="TaskFlow Banner" placeholder="blur" />
        </div>

        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-8">
          Support <span className="text-red-500">Me</span>
        </h1>
        <div className="text-gray-700 dark:text-gray-300 space-y-8">
          <p className="text-base md:text-lg leading-relaxed mb-6">
            Your support enables me to create valuable content and resources for
            free, helping people improve their productivity and organization.
          </p>
          <h2 className="text-lg md:text-xl font-semibold text-gray-800 dark:text-white mb-4">
            How Can You Support?
          </h2>
          <ul className="list-disc pl-6 space-y-2 text-start">
            <li className="text-base md:text-lg leading-relaxed">
              Consider buying me a coffee to fuel late-night coding sessions!
            </li>
            <li className="text-base md:text-lg leading-relaxed">
              Your support helps in covering website hosting costs and
              tools/software used for content creation.
            </li>
          </ul>
          <Separator className="my-8 dark:bg-slate-700" />

          <h2 className="text-lg md:text-xl font-semibold text-gray-800 dark:text-white mb-4">
            Payment Options
          </h2>
          <div className="border rounded-2xl p-2">
            <a
              className="my-2 cursor-pointer inline-flex items-center justify-center px-6 py-3 text-lg font-medium leading-6 text-white bg-[#4CA053] rounded-lg shadow-md hover:bg-black hover:shadow-lg transform hover:-translate-y-1 transition ease-in-out duration-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#4CA053]"
              onClick={() =>
                window.open("https://buymeacoffee.com/rishabhgokhe", "_blank")
              }
            >
              <span className="mr-1">
                <Coffee01Icon />
              </span>{" "}
              Buy me a coffee
            </a>
            <p className="text-xs flex justify-center items-center gap-1">
              Powered by <BuyMeACoffeeBrandLogo />
            </p>
          </div>

          <Separator className="my-8 dark:bg-slate-700" />
          <h2 className="text-lg md:text-xl font-semibold text-gray-800 dark:text-white mb-4">
            About Me
          </h2>
          <p className="text-base md:text-lg leading-relaxed mb-6">
            Hi there! 👋 I&apos;m{" "}
            <a
              className="font-semibold hover:text-green-500 transition ease-in-out duration-500"
              href={iconLinkData[0].link}
            >
              Rishabh Gokhe
            </a>
            , the developer behind TaskFlow. I&apos;m passionate about creating
            useful and user-friendly web applications that help people improve
            their productivity and organization. I&apos;m always learning new
            technologies to enhance my skills and deliver better solutions.
            TaskFlow is a project born out of my desire to create a simple yet
            powerful tool for managing tasks. I believe that staying organized
            is key to success, and TaskFlow is designed to help users achieve
            just that.
          </p>
        </div>
      </div>
    </PageTemplate>
  );
}
