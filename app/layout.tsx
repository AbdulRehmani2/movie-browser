import type { Metadata } from "next";
import { Ubuntu } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const ubuntu = Ubuntu({ subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  title: "Latest Movies and TV Shows",
  description:
    "A app to meet all your movie browsing needs. In an instand find the movie or the TV show you have been looking for. This website provides a seamless interface and an intuitive design which makes it easier to navigate and find what you are looking for.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${ubuntu.className} bg-slate-950 text-slate-300`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
