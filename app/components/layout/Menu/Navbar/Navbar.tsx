import MenuButton from "./MenuButton/MenuButton";
import type { PushedProps } from "@/app/types/types";

interface NavProps extends PushedProps {
  showNav: boolean;
}

export default function Navbar({ isPushed, showNav, onClick }: NavProps) {
  return (
    <>
      <nav
        className={`fixed left-0 transition-[top_0.2s] flex justify-start items-center pl-2 pr-4 w-full h-16 bg-[#fafcff] border-b-2 border-[rgba(133,133,133,0.1)] z-40 transform-gpu ${showNav ? "top-0" : "top-[-66px]"}`}
      >
        <MenuButton isPushed={isPushed} onClick={onClick} />
      </nav>
    </>
  );
}
