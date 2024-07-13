import React from "react";
import {baseGreenColor} from "@/lib/Colors"

type CustomButtonProps = {
  leftIcon?: JSX.Element;
  rightIcon?: JSX.Element;
  children: string | JSX.Element;
  className?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const CustomButton: React.FC<CustomButtonProps> = ({
  leftIcon,
  rightIcon,
  children,
  className,
  ...props
}) => {
  const defaultClasses =
    `inline-flex items-center justify-center px-3 py-2 text-md font-medium leading-6 text-white bg-[#16A34A] rounded-lg shadow-md hover:bg-black hover:shadow-lg transform hover:-translate-y-1 transition ease-in-out duration-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#16A34A] dark:hover:bg-white dark:hover:text-black dark:border-white`;

    // previous dark hover style dark:hover:border-white dark:hover:border

  return (
    <button
      className={`${defaultClasses} ${className}`}
      {...props}
    >
      {leftIcon && <span className="mr-1">{leftIcon}</span>}
      {children}
      {rightIcon && <span className="ml-1">{rightIcon}</span>}
    </button>
  );
};

export default CustomButton;
