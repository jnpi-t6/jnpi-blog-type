import Link from "next/link";

interface MenuEntryProps {
  href: string;
  children: React.ReactNode;
  onClick: () => void;
}

export default function MenuEntry({
  href,
  children,
  ...props
}: MenuEntryProps) {
  return (
    <>
      <Link
        href={`${href}`}
        className="cursor-pointer flex items-center h-16 px-4 text-lg bg-transparent text-[#666564] hover:bg-[#eff4f5] [&>svg]:mr-2"
        role="button"
        {...props}
      >
        {children}
      </Link>
    </>
  );
}
