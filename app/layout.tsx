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
  title: "Going Medieval",
  description: "Going Medieval game",
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
