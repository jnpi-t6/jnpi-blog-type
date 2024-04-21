import PanelBody from "./PanelBody/PanelBody";
import type { PushedProps } from "@/app/types/types";

interface PanelProps extends PushedProps {
  showNav: boolean;
}

export default function SidePanel({
  isPushed,
  showNav,
  onClick,
  ...props
}: PanelProps) {
  return (
    <>
      <div
        className={`fixed top-0 left-0 flex flex-col justify-between flex-shrink-0 bg-[#faf9fa] w-0 h-screen transition-[padding-top_0.2s,width_0.2s] border-r-0 z-30 overflow-auto transform-gpu 
        ${isPushed ? "w-[240px] border-r-[2px_solid_rgba(133,133,133,0.1)] overflow-y-auto" : ""} 
        ${showNav ? "pt-20" : "pt-0"}`}
        {...props}
      >
        <PanelBody onClick={onClick} isPushed={isPushed} />
      </div>
    </>
  );
}
