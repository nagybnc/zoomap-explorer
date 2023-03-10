"use client";
import { SignOut } from "@/app/(auth)/actions";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";

export default function UserInformation() {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return (
      <div className="animate-pulse">
        <div className="flex items-center space-x-3">
          <svg
            className="h-14 w-14 text-gray-200"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
              clipRule="evenodd"
            ></path>
          </svg>
          <div>
            <div className="mb-2 h-2.5 w-32 rounded-full bg-gray-200"></div>
            <div className="h-2 w-48 rounded-full bg-gray-200"></div>
          </div>
        </div>
        <span className="sr-only">Loading...</span>
      </div>
    );
  } else if (status === "authenticated") {
    return (
      <div className="flex items-center gap-2 sm:gap-6">
        <div>
          {session?.user?.image ? (
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
        <span className="hidden sm:flex sm:flex-col">
          <small>Signed in as</small>
          <strong>{session?.user?.email ?? session?.user?.name}</strong>
        </span>
        <SignOut />
      </div>
    );
  }

  return (
    <Link
      href="/signin"
      className="cursor-pointer rounded-md p-2 hover:bg-gray-200"
    >
      Sign in
    </Link>
  );
}
