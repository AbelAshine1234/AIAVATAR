"use client";

import Link from "next/link";
import { useState } from "react";

import { GithubIcon, HeyGenLogo } from "./Icons"; // Assuming these are correctly defined
import { Menu, X } from "lucide-react"; // Import icons for mobile menu

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to manage mobile menu visibility

  return (
    // Nav bar background: Changed to a standard Tailwind red (bg-red-700)
    <nav className="bg-red-700 text-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo/Brand Name: 'Chala' (Text remains white as it's directly on the red nav bar) */}
        <div className="flex items-center">
          <Link
            href="/"
            className="flex items-center space-x-2 text-lg font-bold"
          >
            {/* You can still use an icon here if you have a specific logo */}
            {/* <HeyGenLogo className="h-6 w-6" /> */}
            <span>Chala</span>
          </Link>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center space-x-4">
          <Link
            href="http://localhost:8080"
            // Button style: White background, BLACK text, subtle gray hover, added shadow
            className="bg-white text-black hover:bg-gray-200 px-4 py-2 rounded transition-colors text-sm font-medium shadow-sm"
          >
            Home
          </Link>
          <Link
            href="http://localhost:8080/destinations"
            className="bg-white text-black hover:bg-gray-200 px-4 py-2 rounded transition-colors text-sm font-medium shadow-sm"
            target="_blank"
            rel="noopener noreferrer"
          >
            Destinations
          </Link>
          <Link
            href="http://localhost:8080/packages"
            className="bg-white text-black hover:bg-gray-200 px-4 py-2 rounded transition-colors text-sm font-medium shadow-sm"
            target="_blank"
            rel="noopener noreferrer"
          >
            Tour Packages
          </Link>
          <Link
            href="http://localhost:8080/ecommerce"
            className="bg-white text-black hover:bg-gray-200 px-4 py-2 rounded transition-colors text-sm font-medium shadow-sm"
            target="_blank"
            rel="noopener noreferrer"
          >
            Zenbil
          </Link>
          <Link
            href="http://localhost:8080/admin"
            className="bg-white text-black hover:bg-gray-200 px-4 py-2 rounded transition-colors text-sm font-medium shadow-sm"
            target="_blank"
            rel="noopener noreferrer"
          >
            Admin
          </Link>
          <a
            href="http://localhost:8080" // This link stays as is, assuming it's specific to the avatar app's home
            className="bg-white text-black hover:bg-gray-200 px-4 py-2 rounded transition-colors text-sm font-medium shadow-sm"
            target="_blank"
            rel="noopener noreferrer"
          >
            MEET CHALA
          </a>
          {/* Example of another icon/link you might have, e.g., for GitHub */}
          {/* <Link href="https://github.com/your-repo" target="_blank" rel="noopener noreferrer">
            <GithubIcon className="h-6 w-6 text-white hover:text-gray-200 transition-colors" />
          </Link> */}
        </div>

        {/* Mobile Menu Button (Hamburger) */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white focus:outline-none"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        // Mobile menu background: Darker red for contrast
        <div className="md:hidden bg-red-800 py-2">
          <div className="flex flex-col items-center space-y-3 px-4">
            <Link
              href="/"
              // Mobile button style: White background, dark text, subtle gray hover
              className="block w-full text-center py-2 bg-white text-black hover:bg-gray-200 rounded text-base font-medium shadow-sm"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="http://localhost:3001/destinations"
              className="block w-full text-center py-2 bg-white text-black hover:bg-gray-200 rounded text-base font-medium shadow-sm"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsMenuOpen(false)}
            >
              Destinations
            </Link>
            <Link
              href="http://localhost:3001/packages"
              className="block w-full text-center py-2 bg-white text-black hover:bg-gray-200 rounded text-base font-medium shadow-sm"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsMenuOpen(false)}
            >
              Tour Packages
            </Link>
            <Link
              href="http://localhost:3001/ecommerce"
              className="block w-full text-center py-2 bg-white text-black hover:bg-gray-200 rounded text-base font-medium shadow-sm"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsMenuOpen(false)}
            >
              Zenbil
            </Link>
            <Link
              href="http://localhost:3001/admin"
              className="block w-full text-center py-2 bg-white text-black hover:bg-gray-200 rounded text-base font-medium shadow-sm"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsMenuOpen(false)}
            >
              Admin
            </Link>
            <a
              href="http://localhost:3000"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center py-2 bg-white text-black hover:bg-gray-200 rounded text-base font-medium shadow-sm"
              onClick={() => setIsMenuOpen(false)}
            >
              MEET CHALA
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
