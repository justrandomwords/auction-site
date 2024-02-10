import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import Header from "./_components/Header";

const inter = Nunito({ subsets: ["latin"] });

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
      <body className={`${inter.className} flex flex-col h-screen`}>
        <Header/>
        <div className='px-11 py-14'>
          {children}
        </div>
      </body>
    </html>
  );
}
