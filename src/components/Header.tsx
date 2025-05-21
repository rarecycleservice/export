import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

export const Header = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-primary text-primary-foreground py-4 shadow-md relative">
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-xl font-bold flex items-center gap-2">
          <img
            src="/assets/images/products/RA Recycle Service logo white.png"
            alt="RA Recycle Service"
            className="h-14 w-auto sm:h-18"
          />
          <span >RA Recycle Service</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            <li>
              <Link
                to="/"
                className={`hover:underline transition-colors ${
                  isActive("/") ? "font-medium underline" : ""
                }`}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/products"
                className={`hover:underline transition-colors ${
                  isActive("/products") ? "font-medium underline" : ""
                }`}
              >
                Products
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className={`hover:underline transition-colors ${
                  isActive("/about") ? "font-medium underline" : ""
                }`}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className={`hover:underline transition-colors ${
                  isActive("/contact") ? "font-medium underline" : ""
                }`}
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>

        {/* Hamburger (Only Show When Menu is Closed) */}
        <div className="md:hidden z-50">
          {!isMenuOpen && (
            <button onClick={() => setIsMenuOpen(true)} className="p-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-menu"
              >
                <line x1="4" x2="20" y1="12" y2="12" />
                <line x1="4" x2="20" y1="6" y2="6" />
                <line x1="4" x2="20" y1="18" y2="18" />
              </svg>
            </button>
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-0 left-0 w-full bg-primary text-white transform transition-transform duration-300 ease-in-out z-40 ${
          isMenuOpen ? "translate-y-0" : "-translate-y-full"
        } shadow-lg rounded-b-xl p-6`}
      >
        <div className="flex justify-end">
          <button
            onClick={() => setIsMenuOpen(false)}
            className="text-3xl font-bold text-white"
          >
            &times;
          </button>
        </div>
        <ul className="flex flex-col space-y-4 items-center text-lg mt-4">
          <li>
            <Link
              to="/"
              onClick={() => setIsMenuOpen(false)}
              className={isActive("/") ? "font-semibold underline" : ""}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/products"
              onClick={() => setIsMenuOpen(false)}
              className={isActive("/products") ? "font-semibold underline" : ""}
            >
              Products
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              onClick={() => setIsMenuOpen(false)}
              className={isActive("/about") ? "font-semibold underline" : ""}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              onClick={() => setIsMenuOpen(false)}
              className={isActive("/contact") ? "font-semibold underline" : ""}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
