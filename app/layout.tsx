import type { Metadata } from "next";
import "./globals.css";
import { Poppins } from "next/font/google";
import Link from "next/link";

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} antialiased bg-black text-white bg-[url('.././public/lines.png')]`}
      >
        {children}
      </body>
      <footer>
        <div className="flex flex-col items-center justify-center w-full">
          <div className="flex space-x-3">
            <Link
              href="https://www.framer.com/motion/"
              target="_blank"
              rel="noreferrer"
              className="text-white text-base hover:bg-gradient-to-br hover:from-purple-400 hover:to-blue-500 hover:text-transparent hover:bg-clip-text"
            >
              GitHub
            </Link>
            <span className="text-white">|</span>
            <Link
              href="https://www.letam.vercel.com"
              target="_blank"
              rel="noreferrer"
              className="text-white text-base hover:bg-gradient-to-br hover:from-purple-400 hover:to-blue-500 hover:text-transparent hover:bg-clip-text"
            >
              Website
            </Link>
          </div>
          <p className="text-white text-base">Created with 💜 by Letam</p>
        </div>
      </footer>
    </html>
  );
}
