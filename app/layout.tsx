import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";
import Menu from "./components/layout/Menu/Menu";
import Footer from "./components/layout/Footer/Footer";

const notosansjp = Noto_Sans_JP({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: "%s | jnpi-Blog",
    default: "jnpi-Blog",
  },
  description: "jnpit6's portfolio",
  openGraph: {
    title: {
      template: "%s | jnpi-Blog",
      default: "jnpi-Blog",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={notosansjp.className}>
        <Menu>{children}</Menu>
        <Footer />
      </body>
    </html>
  );
}
