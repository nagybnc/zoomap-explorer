import Link from "next/link";

export default function Header() {
  return (
    <header className="flex items-center justify-between bg-gray-50 p-4">
      <Link href="/" className="hidden cursor-pointer sm:block">
        🌎 ZooMap Explorer
      </Link>
    </header>
  );
}
