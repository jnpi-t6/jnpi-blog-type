"use client";
import { useState, useRef, useEffect, ReactNode } from "react";
import throttle from "lodash.throttle";
import Navbar from "./Navbar/Navbar";
import Overlay from "./Overlay/Overlay";
import Inner from "./Inner/Inner";
import SidePanel from "./SidePanel/SidePanel";

interface MenuProps {
  children: ReactNode;
}

export default function Menu({ children }: MenuProps) {
  const [showNav, setShowNav] = useState(true);
  const lastScrollY = useRef(0); // useRefを使用してlastScrollYを初期化

  useEffect(() => {
    lastScrollY.current = window.scrollY; // コンポーネントがマウントされた後にwindow.scrollYを設定

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      // スクロールの方向を判定
      const isScrollingUp = currentScrollY < lastScrollY.current;
      const isScrollingDown = currentScrollY > lastScrollY.current;

      // トップの時はナビゲーションバーを表示
      if (currentScrollY === 0) {
        setShowNav(true);
      }

      // スクロールダウンでナビゲーションバーを非表示
      else if (isScrollingDown) {
        setShowNav(false);
      }

      // スクロールアップでかつ一定の距離を超えた場合にナビゲーションバーを表示
      else if (isScrollingUp && lastScrollY.current - currentScrollY > 100) {
        setShowNav(true);
      }

      // `throttle` 関数の中で lastScrollY.current を更新
      lastScrollY.current = currentScrollY;
    };

    const throttledHandleScroll = throttle(handleScroll, 100);

    window.addEventListener("scroll", throttledHandleScroll);

    return () => {
      window.removeEventListener("scroll", throttledHandleScroll);
      throttledHandleScroll.cancel(); // クリーンアップ時にthrottleを解除
    };
  }, []);

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
        <Navbar
          isPushed={isPushed}
          showNav={showNav}
          onClick={toggleMenuOpen}
        />
        <SidePanel isPushed={isPushed} showNav={showNav} onClick={closeMenu} />
        <Inner>{children}</Inner>
        <Overlay isPushed={isPushed} onClick={closeMenu} />
      </div>
    </>
  );
}
