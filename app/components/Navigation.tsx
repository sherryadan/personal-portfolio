"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { cn } from "../lib/utils";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { href: "/#about", label: "About" },
    { href: "/#skills", label: "Skills" },
    { href: "/#experience", label: "Experience" },
    { href: "/#projects", label: "Projects" },
    { href: "/#education", label: "Education" },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b",
        scrolled
          ? "bg-gray-950/80 backdrop-blur-md py-3 shadow-lg shadow-amber-900/20 border-stone-800"
          : "bg-transparent py-5 border-transparent"
      )}
    >
      <nav className="container mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="text-2xl font-bold bg-gradient-to-r from-amber-300 to-yellow-500 bg-clip-text text-transparent hover:from-amber-200 hover:to-yellow-400 transition-all"
          >
            My Programania
          </Link>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-stone-200 hover:text-white focus:outline-none"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>

          <div
            className={cn(
              "absolute md:relative top-full left-0 right-0 bg-gray-950/95 md:bg-transparent backdrop-blur-md md:backdrop-blur-none",
              "transition-all duration-300 ease-in-out",
              isOpen
                ? "opacity-100 translate-y-0 shadow-2xl"
                : "opacity-0 -translate-y-4 md:opacity-100 md:translate-y-0 md:shadow-none pointer-events-none md:pointer-events-auto"
            )}
          >
            <ul className="flex flex-col md:flex-row md:items-center md:space-x-8 p-4 md:p-0">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="block py-2 text-stone-300 hover:text-white hover:bg-amber-900/30 md:hover:bg-transparent md:hover:text-amber-400 transition-all duration-200 font-medium"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li className="flex items-center gap-3 mt-4 md:mt-0">
                <a
                  href="https://www.linkedin.com/in/adan80/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-stone-400 hover:text-white transition-colors"
                  aria-label="LinkedIn"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
                <Link
                  href="/#contact"
                  className="inline-flex items-center justify-center px-6 py-2 bg-gradient-to-r from-amber-500 to-yellow-600 hover:from-amber-400 hover:to-yellow-500 text-white rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-amber-500/30"
                >
                  Let's Connect
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
