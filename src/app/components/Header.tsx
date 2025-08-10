"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { id: "home", label: "HOME", href: "/" },
    { id: "services", label: "SERVICES", href: "/services" },
    { id: "portfolio", label: "PORTFOLIO", href: "/portfolio" },
    { id: "expertise", label: "EXPERTISE", href: "/expertise" },
    { id: "website-development", label: "WEBSITE DEVELOPMENT", href: "/website-development" },
    { id: "blogs", label: "BLOGS", href: "/blogs" },
    { id: "contact", label: "CONTACT US", href: "/contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black bg-opacity-80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* LOGO */}
          <Link href="/" className="flex items-center gap-3">
            <div className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-white">
              <Image
                src="/image/logo.png"
                alt="Logo"
                fill
                className="object-cover"
              />
            </div>
            <span className="text-white text-xl font-bold hidden sm:inline-block">
              WORKOWNIX
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-6 text-sm font-medium text-white uppercase tracking-wide">
            {navItems.map((item) => (
              <Link
                key={item.id}
                href={item.href}
                className="hover:text-blue-400 transition"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white hover:text-blue-400 transition"
              aria-label="Toggle Menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-2 border-t border-white/10 pt-4 pb-6">
            <nav className="flex flex-col gap-3 text-sm font-medium text-white uppercase">
              {navItems.map((item) => (
                <Link
                  key={item.id}
                  href={item.href}
                  className="hover:text-blue-400 transition px-2 py-1"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
