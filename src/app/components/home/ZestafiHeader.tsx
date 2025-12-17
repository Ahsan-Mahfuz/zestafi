"use client";
import { useState, useEffect } from "react";

export default function ZestafiHeader() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed bg-white top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? " shadow-lg" : " "
      }`}
    >
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-3">
            <img src="/logo.svg" alt="" className="w-36" />
          </div>
        </div>
      </div>
    </header>
  );
}
