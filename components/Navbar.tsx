"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";

const navItems: Record<string, { name: string }> = {
  "/": {
    name: "Home",
  },
  "/map": {
    name: "Map",
  },
};

export default function Navbar() {
  const pathname = usePathname() || "/";

  return (
    <ul className="flex space-x-4 md:text-sm md:font-medium">
      {Object.entries(navItems).map(([path, { name }]) => {
        const isActive = path === pathname;

        return (
          <li key={path} className="cursor-pointer">
            <Link
              href={path}
              className={`block py-2 text-lg ${
                isActive
                  ? "text-blue-700 underline underline-offset-2"
                  : "hover:text-blue-800 hover:underline hover:underline-offset-2"
              }`}
            >
              {name}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
