import Link from "next/link";
import Navbar from "@/components/Navbar";
import UserInformation from "../components/UserInformation";

export default async function Header() {
  return (
    <header className="flex items-center justify-between bg-gray-50 p-4 shadow-md">
      <Link href="/" className="hidden cursor-pointer sm:block">
        🚀 Space Objects Explorer
      </Link>
      <Navbar />
      <UserInformation />
    </header>
  );
}
