import React from "react";
import Link from "next/link";
import HamburgerIcon from "./icons/HamburgerIcon";
import HamburgerCloseIcon from "./icons/HamburgerCloseIcon";
import type { PushedProps } from "@/app/types/types";

const MenuButton = ({ isPushed, onClick }: PushedProps) => {
  return (
    <>
      <div className="flex flex-row">
        <button
          onClick={onClick}
          className="text-[#666564] cursor-pointer opacity-50 bg-inherit border-0 rounded-lg px-2 mr-2 z-30 hover:bg-gray-200"
          type="button"
          aria-label="Menu Button"
          aria-pressed="false"
        >
          {isPushed ? <HamburgerCloseIcon /> : <HamburgerIcon />}
        </button>
        <Link href="/" className="text-2xl text-gray-500 no-underline relative">
          jnpi Blog
        </Link>
      </div>
    </>
  );
};

export default MenuButton;
