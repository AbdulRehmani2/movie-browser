import type { Metadata } from "next";
import { Ubuntu } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const ubuntu = Ubuntu({ subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  metadataBase: new URL(`https://${process.env.NEXT_PUBLIC_VERCEL_URL}/`),
  title: "Latest Movies and TV Shows",
  description:
    "A app to meet all your movie browsing needs. In an instand find the movie or the TV show you have been looking for. This website provides a seamless interface and an intuitive design which makes it easier to navigate and find what you are looking for.",
  keywords: [
    "movie",
    "trending movies",
    "new movies",
    "movies",
    "suggest movies",
    "recommend movies",
    "search movies",
  ],
  openGraph: {
    title: "Movie Browser",
    description:
      "A app to meet all your movie browsing needs. In an instand find the movie or the TV show you have been looking for.",
    type: "website",
    locale: "en-us",
    url: `https://${process.env.NEXT_PUBLIC_VERCEL_URL}/`,
    siteName: "Movies Browser",
  },
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
        <Footer />
      </body>
    </html>
  );
}
