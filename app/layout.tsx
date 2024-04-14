import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "./styles/globals.css";

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
      <body className={notosansjp.className}>{children}</body>
    </html>
  );
}
