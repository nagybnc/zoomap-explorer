import { Metadata } from "next";
import Footer from "./footer";
import "./globals.css";

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
      <body>
        {children}
        <Footer />
      </body>
    </html>
  );
}
