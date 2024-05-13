import { Inter } from "next/font/google";
import "@/css/globals.css";
import Nabvar from "@/components/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "StaySwift",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Nabvar />
        {children}
      </body>
    </html>
  );
}
