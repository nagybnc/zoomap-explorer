import { Metadata } from "next";
import Footer from "./footer";
import "./globals.css";
import Header from "./header";

export const metadata: Metadata = {
  title: "Home",
  description: "🌎 ZooMap Explorer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex h-screen flex-col justify-between">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
