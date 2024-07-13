"use client";
import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import toast from "react-hot-toast";
import { ToolTipIcon } from "../elements/TootTipIcon";
import { Button } from "../ui/button";

import MoonSlowWindIcon from "@/public/svg/icons/MoonSlowWindIcon";
import Sun03Icon from "@/public/svg/icons/Sun03Icon";

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const [icon, setIcon] = useState<JSX.Element>(<Sun03Icon />);

  useEffect(() => {
    if (theme === "dark") {
      setIcon(<MoonSlowWindIcon />);
    } else {
      setIcon(<Sun03Icon />);
    }
  }, [theme]);

  const toggleTheme = () => {
    if (theme === "dark") {
      setTheme("light");
      setIcon(<Sun03Icon />);
      toast.success("Switched to Light Mode!", {
        icon: "☀️",
        style: {
          borderRadius: "15px",
          background: "#333",
          color: "#fff",
        },
      });
    } else {
      setTheme("dark");
      setIcon(<MoonSlowWindIcon />);
      toast.success("Switched to Dark Mode!", {
        icon: "🌙",
        style: {
          borderRadius: "15px",
          background: "#333",
          color: "#fff",
        },
      });
    }
  };

  return (
    <ToolTipIcon
      name={`Switch to ${theme === "light" ? "dark" : "light"} Mode`}
      triggerJsxElement={
        <Button
          variant="outline"
          size="icon"
          className="ml-2 h-8 w-8"
          onClick={toggleTheme}
        >
          {icon}
        </Button>
      }
    />
  );
};

export default ThemeToggle;