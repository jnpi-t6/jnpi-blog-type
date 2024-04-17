import PanelBody from "./PanelBody/PanelBody";
import type { PushedProps } from "@/app/types/types";

export default function SidePanel({
  isPushed,
  onClick,
  ...props
}: PushedProps) {
  return (
    <>
      <div
        className={`fixed top-0 left-0 flex flex-col justify-between flex-shrink-0 bg-[#faf9fa] w-0 h-screen transition-[padding-top_0.2s,width_0.2s] border-r-0 z-30 overflow-hidden transform-gpu pt-20 
        ${isPushed ? "w-[240px] border-r-[2px_solid_rgba(133,133,133,0.1)] overflow-y-auto" : ""}`}
        {...props}
      >
        <PanelBody onClick={onClick} isPushed={isPushed} />
      </div>
    </>
  );
}
