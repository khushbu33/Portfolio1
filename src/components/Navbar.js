import { useState } from "react";
import { Menu, X } from "lucide-react"; // or another icon library you're using

export default function Navbar() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full h-max bg-gradient-to-r from-[#B5A0D1] via-[#A8C0E7] to-[#B8D8E0] shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo & Branding */}
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <span className="text-3xl font-serif font-bold text-gray-800 bg-opacity-30 bg-white px-3 py-1 rounded-lg">
                KK
              </span>
            </div>
            <div className="hidden md:block ml-4">
              <span className="text-gray-800 font-semibold text-lg">
                Khushbu Kumari
              </span>
            </div>
          </div>

          {/* Navigation Links (Desktop) */}
          <div className="hidden md:block">
            <ul className="flex space-x-10">
              <li>
                <a className="text-gray-800 hover:text-[#E8D29A] px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 ease-in-out cursor-pointer">
                  About
                </a>
              </li>
              <li>
                <a className="text-gray-800 hover:text-[#E8D29A] px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 ease-in-out cursor-pointer">
                  Skills
                </a>
              </li>
              <li>
                <a className="text-gray-800 hover:text-[#E8D29A] px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 ease-in-out cursor-pointer">
                  Tracer
                </a>
              </li>
              <li>
                <a className="text-gray-800 hover:text-[#E8D29A] px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 ease-in-out cursor-pointer">
                  Projects
                </a>
              </li>
              <li>
                <a className="text-gray-800 hover:text-[#E8D29A] px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 ease-in-out cursor-pointer">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Mobile Menu Icon */}
          <div className="md:hidden">
            <button
              onClick={() => setMenuOpen(!isMenuOpen)}
              className="text-gray-800 hover:text-[#E8D29A] focus:outline-none transition-colors duration-200"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu (if open) */}
        {isMenuOpen && (
          <div className="md:hidden bg-gradient-to-b from-[#B5A0D1] to-[#B8D8E0] p-4 rounded-b-lg">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a className="text-gray-800 hover:text-[#E8D29A] block px-3 py-2 rounded-md transition-colors duration-300 ease-in-out">
                About
              </a>
              <a className="text-gray-800 hover:text-[#E8D29A] block px-3 py-2 rounded-md transition-colors duration-300 ease-in-out">
                Skills
              </a>
              <a className="text-gray-800 hover:text-[#E8D29A] block px-3 py-2 rounded-md transition-colors duration-300 ease-in-out">
                Projects
              </a>
              <a className="text-gray-800 hover:text-[#E8D29A] block px-3 py-2 rounded-md transition-colors duration-300 ease-in-out">
                Contact
              </a>
              <a className="text-gray-800 hover:text-[#E8D29A] block px-3 py-2 rounded-md transition-colors duration-300 ease-in-out">
                Tracer
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
