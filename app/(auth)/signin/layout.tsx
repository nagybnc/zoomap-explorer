import { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Sign in to our platform",
};

export default function Layout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
