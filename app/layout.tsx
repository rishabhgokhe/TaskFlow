import { Inter } from "next/font/google";
import "../styles/globals.scss";
import { Toaster } from "react-hot-toast";
import { ThemeProvider } from "next-themes";
import ClientProvider from "@/redux/ClientProvider";
import UserContextProvider from "@/context/User/UserContextProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "TaskFlow",
  description: "Organising WorkFlow",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ClientProvider>
            <ThemeProvider attribute="class">
              {children}
              <Toaster position="top-right" />
            </ThemeProvider>
        </ClientProvider>
      </body>
    </html>
  );
}
