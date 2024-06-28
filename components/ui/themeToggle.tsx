"use client";
import React, { useEffect, useState } from 'react';
import MoonSlowWindIcon from '../../public/svg/icons/MoonSlowWindIcon';
import Sun03Icon from "../../public/svg/icons/Sun03Icon";
import { Button } from './button';
import toast from 'react-hot-toast';

const ThemeToggle = () => {
  const [theme, setTheme] = useState<string>('light');

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
      toast.success('Switched to Dark Mode!', {
        icon: '🌙',
        style: {
          borderRadius: '15px',
          background: '#333',
          color: '#fff',
        },
      });
    } else {
      document.documentElement.classList.remove('dark');
      toast.success('Switched to Light Mode!', {
        icon: '☀️',
        style: {
          borderRadius: '15px',
          background: '#333',
          color: '#fff',
        },
      });
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'dark' ? 'light' : 'dark'));
  };

  return (
    <Button variant="outline" size="icon" className="ml-2 h-8 w-8" onClick={toggleTheme}>
      {theme === 'dark' ? <MoonSlowWindIcon /> : <Sun03Icon />}
    </Button>
  );
};

export default ThemeToggle;
