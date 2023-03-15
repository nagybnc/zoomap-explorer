import type { ReactNode } from "react";
import type { Metadata } from "next";
// import { getServerSession } from "next-auth";
// import { redirect } from "next/navigation";
import Sidebar from "@/components/map/Sidebar";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Map",
};

export default async function Layout({ children }: { children: ReactNode }) {
  // const session = await getServerSession();

  // if (!session) {
  //   redirect("/signin");
  // }

  return (
    <div className="relative flex h-full flex-col">
      <Script
        src={`https://maps.googleapis.com/maps/api/js?key=${process.env.G_MAP_API_KEY}&libraries=places`}
      />
      <Sidebar />
      {children}
    </div>
  );
}
