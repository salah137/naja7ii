import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Image from 'next/image';
import Head from 'next/head';
import icon from "../assets/logo.png";
import "./global-style.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Naja7i",
  description: "make your learning more efficant",
  icons : [
    
  ]
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
      <link rel="icon" href="public/logo.png ujhb i "/> 
      </Head>
      <body className={inter.className}>
        <header>
          <div className="logo">
            <Image src={icon} alt="naja7i" className="logo-icon" />
            <h2>Naja7i</h2>
          </div>
        </header>
        {children}
      </body>

    </html>
  );
}
