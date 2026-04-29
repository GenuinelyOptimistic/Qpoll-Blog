import React from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import "../styles/global.css";

export function Layout({ children }) {
  return (
    <div className="min-h-screen bg-white flex flex-col font-sans text-gray-900 overflow-x-hidden">
      <Header />
      <main className="flex-1 pt-[68px]">{children}</main>
      <Footer />
    </div>
  );
}
