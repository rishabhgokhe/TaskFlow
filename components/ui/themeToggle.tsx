"use client"

import React, { useEffect, useState } from 'react';
import MoonSlowWindIcon from '../../public/svg/icons/MoonSlowWindIcon'
import Sun03Icon from "../../public/svg/icons/Sun03Icon"
import { Button } from './button';

const ThemeToggle = () => {
  const [theme, setTheme] = useState<string | null>('dark');

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <Button variant="outline" size="icon" className="ml-2 h-8 w-8" onClick={toggleTheme}>
      {theme === 'dark' ? <MoonSlowWindIcon /> : <Sun03Icon />}
    </Button>
  );
};

export default ThemeToggle;