"use client"
import { Inter } from "next/font/google";
import "./globals.css";

import NavigationMenu from "./components/NavigationMenu";
import { Provider } from "react-redux";
import store from "@/store";

const inter = Inter({ subsets: ["latin"] });



interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {

  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className}`}>
        <div className="min-h-screen">
          <Provider store={store}>
            <NavigationMenu>{children}</NavigationMenu>
          </Provider>
        </div>
      </body>
    </html>
  );
}
