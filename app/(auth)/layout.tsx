import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import type { ReactNode } from "react";

export default async function Layout({ children }: { children: ReactNode }) {
  const session = await getServerSession();

  if (session) {
    redirect("/");
  }

  return (
    <div className="flex items-center justify-center h-full">
      <div className="w-full max-w-lg p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 ">
        {children}
      </div>
    </div>
  );
}
