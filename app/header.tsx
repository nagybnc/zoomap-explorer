import { SignOut } from "./(auth)/actions";
import { getServerSession } from "next-auth/next";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";

export default async function Header() {
  const session = await getServerSession();

  return (
    <header className="flex items-center justify-between bg-gray-50 p-4">
      <Link href="/" className="hidden cursor-pointer sm:block">
        🌎 ZooMap Explorer
      </Link>
      <Navbar />
      <div>
        {session?.user ? (
          <div className="flex items-center gap-6">
            <div className="hidden sm:block">
              {session.user.image ? (
                <Image
                  className="rounded-full p-1 ring-2 ring-gray-300"
                  src={session.user.image}
                  alt={session.user.email || ""}
                  width={40}
                  height={40}
                />
              ) : (
                <div className="relative h-10 w-10 overflow-hidden rounded-full bg-gray-100">
                  <svg
                    className="absolute -left-1 h-12 w-12 text-gray-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </div>
              )}
            </div>
            <span className="flex flex-col">
              <small>Signed in as</small>
              <strong>{session.user.email ?? session.user.name}</strong>
            </span>
            <SignOut />
          </div>
        ) : (
          <Link
            href="/signin"
            className="cursor-pointer rounded-md p-2 hover:bg-gray-200"
          >
            Sign in
          </Link>
        )}
      </div>
    </header>
  );
}
