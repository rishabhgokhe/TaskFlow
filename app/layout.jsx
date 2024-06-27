import { Inter } from "next/font/google";
import "../styles/globals.scss";
import { Toaster } from "react-hot-toast"

import { ContextProvider } from "@/lib/contextProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "TaskFlow",
  description: "Organising WorkFlow",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
          {children}
          <Toaster />
      </body>
    </html>
  );
}
