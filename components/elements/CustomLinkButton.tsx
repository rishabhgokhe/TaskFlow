import React from "react";

export default function CustomLinkButton({
  href,
  leftIcon,
  rightIcon,
  name,
}: {
  href: string;
  leftIcon?: JSX.Element;
  rightIcon?: JSX.Element;
  name: string;
}) {
  return (
    <a
      href={href}
      className="inline-flex items-center justify-center px-6 py-3 text-lg font-medium leading-6 text-white bg-[#4CA053] rounded-lg shadow-md hover:bg-black hover:shadow-lg transform hover:-translate-y-1 transition ease-in-out duration-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#4CA053]"
    >
      {leftIcon && <span className="mr-2">{leftIcon}</span>}
      {name}
      {rightIcon && <span className="ml-2">{rightIcon}</span>}
    </a>
  );
}
