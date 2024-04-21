import Link from "next/link";
import GithubIcon from "./icons/GithubIcon";
import ZennIcon from "./icons/ZennIcon";

export default function Footer() {
  return (
    <>
      <footer className="sticky top-[100vh] flex w-full h-16 py-4 bg-amber-50 justify-center items-center">
        <p>© jnpi Blog</p>
        <div className="flex absolute right-0 pr-2">
          <Link
            href="https://zenn.dev/jnpi"
            className="mx-1"
            aria-label="Zenn profile"
          >
            <ZennIcon width="30" />
          </Link>
          <Link
            href="https://github.com/jnpi-t6/jnpi-blog-type"
            className="mx-1"
            aria-label="Github Repository"
          >
            <GithubIcon width="30" />
          </Link>
        </div>
      </footer>
    </>
  );
}
