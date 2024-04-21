import React, { useState } from "react";
import ArrowDropDownIcon from "../icons/ArrowDropDownIcon";
import ArrowDropUpIcon from "../icons/ArrowDropUpIcon";

interface AccordipnProps {
  isPushed: boolean;
  label: string;
  icon: React.ReactElement | null;
  children: React.ReactNode;
}

export default function Accordion({
  label,
  icon,
  isPushed,
  children,
  ...props
}: AccordipnProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    if (isPushed) {
      setIsOpen((prevState) => !prevState);
    } else {
      setIsOpen(true);
    }
  };

  return (
    <div className="flex flex-col flex-shrink-0">
      <div
        onClick={handleClick}
        role="button"
        className="cursor-pointer flex items-center h-16 px-4 text-lg bg-transparent hover:bg-[#eff4f5] text-[#666564] [&>svg]:mr-2 "
      >
        {icon}
        {label}
        {isOpen ? (
          <ArrowDropUpIcon width="24" />
        ) : (
          <ArrowDropDownIcon width="24" />
        )}
      </div>
      <div
        className={`overflow-hidden border-transparent bg-[#faf9fa] [&>a]:px-8 transition-[max-height_0.3s_ease-out] ${isOpen ? "max-h-[128px]" : "max-h-0"}`}
        {...props}
      >
        {children}
      </div>
    </div>
  );
}
