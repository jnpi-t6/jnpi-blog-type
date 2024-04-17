"use client";
import { useState, ReactNode } from "react";
import Navbar from "./Navbar/Navbar";
import Overlay from "./Overlay/Overlay";
import Inner from "./Inner/Inner";
import SidePanel from "./SidePanel/SidePanel";

interface MenuProps {
  children: ReactNode;
}

export default function Menu({ children }: MenuProps) {
  const [isPushed, setIsPushed] = useState(false);
  const toggleMenuOpen = () => {
    setIsPushed(!isPushed);
  };

  const closeMenu = () => {
    setIsPushed(false);
  };

  return (
    <>
      <div className="relative w-full">
        <Navbar isPushed={isPushed} onClick={toggleMenuOpen} />
        <SidePanel isPushed={isPushed} onClick={closeMenu} />
        <Inner>{children}</Inner>
        <Overlay isPushed={isPushed} onClick={closeMenu} />
      </div>
    </>
  );
}
