import type { PushedProps } from "@/app/types/types";

export default function Overlay({ isPushed, onClick }: PushedProps) {
  return (
    <>
      <div
        className={`fixed top-0 left-0 w-full h-full bg-[#4c4b4b] transition-opacity duration-400 z-20 ${isPushed ? "opacity-60 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
        onClick={onClick}
        role="presentation"
      ></div>
    </>
  );
}
