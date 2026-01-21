"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Sun, Moon } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState("light");

  // Load theme from localStorage on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    // eslint-disable-next-line react-hooks/exhaustive-deps
    setTheme(savedTheme);
    document.documentElement.classList.toggle("dark", savedTheme === "dark");
  }, []);

  // Toggle theme function
  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  // Close mobile menu on escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    
    if (open) {
      document.addEventListener("keydown", handleEscape);
      return () => document.removeEventListener("keydown", handleEscape);
    }
  }, [open]);

  return (
    <nav className="border-b border-purple-500 bg-purple-400 dark:border-purple-900 dark:bg-gray-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <h1 className="flex items-center text-xl font-extrabold tracking-tight">
              <span className="text-gray-900 dark:text-white">URL</span>
              <span className="mx-1 inline-block animate-pulse text-yellow-300 dark:text-green-400">
                /
              </span>
              <span className="text-purple-950 dark:text-purple-300">
                Shortener
              </span>
            </h1>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden items-center space-x-6 md:flex">
            <NavLink href="/">Home</NavLink>
            <NavLink href="/about">About</NavLink>

            {/* Styled Buttons */}
            <Link
              href="/shorten"
              className="rounded-lg shadow-lg bg-gray-900 px-4 py-2 text-sm font-semibold text-white transition-all hover:bg-gray-950 hover:shadow-xl dark:bg-purple-600 dark:hover:bg-purple-500"
            >
              Try Now
            </Link>
            <Link
              href="/github"
              className="rounded-lg shadow-lg border-2 border-gray-900 px-4 py-2 text-sm font-semibold text-gray-900 transition-all hover:bg-gray-900 hover:text-white dark:border-purple-400 dark:text-purple-400 dark:hover:bg-purple-900/20"
            >
              GitHub
            </Link>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="rounded-md cursor-pointer p-2 text-white hover:bg-purple-500 dark:text-gray-300 dark:hover:bg-gray-800 transition-colors"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>

          {/* Mobile Menu Button + Theme Toggle */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={toggleTheme}
              className="rounded-md p-2 text-white hover:bg-purple-500 dark:text-gray-300 dark:hover:bg-gray-800 transition-colors"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            <button
              onClick={() => setOpen(!open)}
              className="rounded-md p-2 text-white hover:bg-purple-500 dark:text-gray-300 dark:hover:bg-gray-800"
              aria-label="Toggle menu"
            >
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="border-t border-purple-500 bg-purple-400 dark:border-purple-900 dark:bg-gray-950 md:hidden">
          <div className="space-y-2 px-4 py-4">
            <MobileNavLink href="/" onClick={() => setOpen(false)}>
              Home
            </MobileNavLink>
            <MobileNavLink href="/about" onClick={() => setOpen(false)}>
              About
            </MobileNavLink>
            
            {/* Mobile Styled Buttons */}
            <Link
              href="/shorten"
              onClick={() => setOpen(false)}
              className="block shadow-lg rounded-lg bg-gray-900 px-4 py-2.5 text-center text-base font-semibold text-white hover:bg-purple-800 dark:bg-purple-600 dark:hover:bg-purple-500"
            >
              Try Now
            </Link>
            <Link
              href="/github"
              onClick={() => setOpen(false)}
              className="block shadow-lg rounded-lg border-2 border-gray-900 px-4 py-2.5 text-center text-base font-semibold text-gray-900 hover:bg-purple-950 hover:text-white dark:border-purple-400 dark:text-purple-400 dark:hover:bg-purple-400 dark:hover:text-gray-950"
            >
              GitHub
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

/* ---------- Reusable Link Components ---------- */

const NavLink = ({ href, children }) => (
  <Link
    href={href}
    className="text-sm font-medium text-white transition hover:text-purple-900 dark:text-gray-300 dark:hover:text-purple-400"
  >
    {children}
  </Link>
);

const MobileNavLink = ({ href, children, onClick }) => (
  <Link
    href={href}
    onClick={onClick}
    className="block rounded-md px-3 py-2 text-base font-medium text-white hover:bg-purple-500 dark:text-gray-200 dark:hover:bg-gray-800"
  >
    {children}
  </Link>
);

export default Navbar;