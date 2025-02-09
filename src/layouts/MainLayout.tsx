import React from "react";
import Footer from "../components/Footer";
import { Navbar } from "../components/Navbar";

export function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen w-full">
      <Navbar />

      <main>{children}</main>
      <footer className="bg-white border-t">
        <Footer />
      </footer>
    </div>
  );
}
