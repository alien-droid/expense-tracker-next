import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import Header from "@/app/components/Header";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const dm_sans = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "$Tracker",
  description: "A Simple Money Tracker with Authentication and managing expenses",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={dm_sans.className}>
          <Header />
          <main className="container">{children}</main>
          <ToastContainer autoClose={3000}/>
          </body>
      </html>
    </ClerkProvider>
  );
}
