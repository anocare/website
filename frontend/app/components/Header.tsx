"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown, Phone, Globe } from "lucide-react";
 
export default function Header() {
  const [lang, setLang] = useState("EN");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
 
  // Simulate scroll effect
  useState(() => {
    if (typeof window !== "undefined") {
      const handleScroll = () => setScrolled(window.scrollY > 20);
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }
  });
 
  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/contacts", label: "Contacts" },
    { href: "/about", label: "About" },
    { href: "/subscriptions", label: "Subscriptions" },
  ];
 
  return (
    <header
      className={`w-full fixed top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg"
          : "bg-white shadow-md"
      }`}
    >
      <div className="container mx-auto px-4 lg:px-6">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300 shadow-lg">
              <Phone className="w-5 h-5 text-white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
              Care Helpline
            </span>
          </Link>
 
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-gray-700 font-medium rounded-lg hover:bg-blue-50 hover:text-blue-600 transition-all duration-200 relative group"
              >
                {link.label}
                <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-blue-600 group-hover:w-3/4 group-hover:left-[12.5%] transition-all duration-300" />
              </Link>
            ))}
          </nav>
 
          {/* Right Side Actions */}
          <div className="hidden lg:flex items-center gap-3">
            {/* Language Switcher */}
            <div className="relative group">
              <button className="flex items-center gap-2 px-3 py-2 text-gray-700 hover:text-blue-600 rounded-lg hover:bg-gray-50 transition-all duration-200">
                <Globe className="w-4 h-4" />
                <span className="text-sm font-medium">{lang}</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              <div className="absolute top-full right-0 mt-2 bg-white rounded-lg shadow-xl border border-gray-100 overflow-hidden opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 min-w-[100px]">
                <button
                  onClick={() => setLang("EN")}
                  className="w-full px-4 py-2 text-left text-sm hover:bg-blue-50 hover:text-blue-600 transition-colors"
                >
                  English
                </button>
                <button
                  onClick={() => setLang("HI")}
                  className="w-full px-4 py-2 text-left text-sm hover:bg-blue-50 hover:text-blue-600 transition-colors"
                >
                  हिन्दी
                </button>
              </div>
            </div>
 
            {/* Auth Buttons */}
            <Link
              href="/login"
              className="px-5 py-2.5 text-blue-600 font-medium rounded-lg hover:bg-blue-50 transition-all duration-200"
            >
              Login
            </Link>
            <Link
              href="/signup"
              className="px-5 py-2.5 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-medium rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-200"
            >
              Signup
            </Link>
 
            {/* Request Call Button */}
            <Link
              href="/request-a-call"
              className="flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-green-500 to-green-600 text-white font-medium rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-200"
            >
              <Phone className="w-4 h-4 animate-pulse" />
              Request Call
            </Link>
          </div>
 
          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
 
        {/* Mobile Menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ${
            mobileMenuOpen ? "max-h-screen pb-6" : "max-h-0"
          }`}
        >
          <nav className="flex flex-col gap-2 pt-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-4 py-3 text-gray-700 font-medium rounded-lg hover:bg-blue-50 hover:text-blue-600 transition-all duration-200"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </nav>
 
          <div className="flex flex-col gap-3 pt-4 mt-4 border-t border-gray-200">
            {/* Language Switcher Mobile */}
            <select
              value={lang}
              onChange={(e) => setLang(e.target.value)}
              className="px-4 py-3 border border-gray-200 rounded-lg text-gray-700 font-medium cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="EN">English</option>
              <option value="HI">हिन्दी</option>
            </select>
 
            <Link
              href="/login"
              className="px-4 py-3 text-center border-2 border-blue-600 text-blue-600 font-medium rounded-lg hover:bg-blue-50 transition-all duration-200"
              onClick={() => setMobileMenuOpen(false)}
            >
              Login
            </Link>
            <Link
              href="/signup"
              className="px-4 py-3 text-center bg-gradient-to-r from-blue-600 to-blue-700 text-white font-medium rounded-lg hover:shadow-lg transition-all duration-200"
              onClick={() => setMobileMenuOpen(false)}
            >
              Signup
            </Link>
            <Link
              href="/request-a-call"
              className="flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-green-500 to-green-600 text-white font-medium rounded-lg hover:shadow-lg transition-all duration-200"
              onClick={() => setMobileMenuOpen(false)}
            >
              <Phone className="w-4 h-4" />
              Request Call
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
 