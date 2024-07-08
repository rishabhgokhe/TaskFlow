import { Inter } from "next/font/google";
import "../styles/globals.scss";
import { Toaster } from "react-hot-toast";
import UserContextProvider from "@/context/User/UserContextProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "TaskFlow",
  description: "Organising WorkFlow",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <UserContextProvider>
          {children}
          <Toaster position="top-right" />
        </UserContextProvider>
      </body>
    </html>
  );
}
