import MenuButton from "./MenuButton/MenuButton";
import type { PushedProps } from "@/app/types/types";

export default function Navbar({ isPushed, onClick }: PushedProps) {
  return (
    <>
      <nav className="fixed left-0 transition-[top_0.2s] flex justify-start items-center pl-2 pr-4 w-full h-16 bg-[#fafcff] border-b-[2px_solid_rgba(133,133,133,0.1)] z-40 transform-gpu top-0">
        <MenuButton isPushed={isPushed} onClick={onClick} />
      </nav>
    </>
  );
}
