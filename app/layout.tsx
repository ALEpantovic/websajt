import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {Roboto} from '@next/font/google'

const roboto = Roboto({
  subsets:['latin'],
  weight:['400','700']
})

export const metadata: Metadata = {
  title: "Going Medieval Game: Home Page",
  description: "Embark on an epic journey in Going Medieval, a captivating colony simulation game where you build, expand, and defend your medieval kingdom. Explore, gather resources, and engage in thrilling battles to ensure the survival and prosperity of your colony. Experience the thrill of medieval life, from the daily challenges of managing your settlement to the grand strategies of warfare and diplomacy. Join the ranks of the most skilled builders and rulers in the medieval world.",
  applicationName: "Going Medieval website",
  authors: [{ name: "Aleksandar Pantovic", url: "https://alepantovic.github.io/websajt/" }, { name: "Foxy Voxel", url: "https://foxyvoxel.io/" }],
  generator: "Next.js",
  keywords: ["Next.js","TailwindCSS", "React", "Web App", "medieval game", "colony simulation", "building game", "medieval kingdom", "strategy game", "medieval life", "resource management", "medieval battles", "medieval strategy"],
  referrer: "origin",
  themeColor: "#000000",
  colorScheme: "dark",
  viewport: "width=device-width, initial-scale=1",
  creator: "Aleksandar Pantovic",
  publisher: "Foxy Voxel",
  robots: "index, follow",
 };
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.className}`}>
        <div className="flex flex-col min-h-screen">
          <Navbar/>
          <main className="flex-grow">
            {children}
          </main>
          <Footer/>
        </div>
      </body>
    </html>
  );
}
