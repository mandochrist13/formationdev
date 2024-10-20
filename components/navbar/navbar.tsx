"use client";

import React, { useState, useEffect } from "react";
import ActionButtons from "./_components/action-buttons";
import Logo from "./_components/logo";
import { Menu } from "./_components/menu";

const Navbar = () => {
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setHasScrolled(true);
      } else {
        setHasScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navbarClasses = `
    flex items-center justify-around md:space-x-10 bg-white h-24 p-2
    sticky top-0 z-50 border-b border-gray-200
  `;

  return (
    <div className={navbarClasses}>
      <Logo />
      <Menu />
      

    {/* <ActionButtons /> */}
    </div>
  );
};

export default Navbar;
