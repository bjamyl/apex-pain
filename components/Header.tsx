"use client";

import { useState } from "react";
import { Menu, X, Search, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { RiMenu4Fill } from "react-icons/ri";
import AccordionMenu from "./AccordionMenu";
import { useRouter } from "next/navigation";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const logo = "/apex-dark-logo.png";
  const router = useRouter();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const regularMenuItems = [
    { name: "Home", href: "/" },
    { name: "Contact", href: "/contact" },
    { name: "Awareness", href: "/awareness" },
  ];

  return (
    <div className="xl:hidden">
      {/* Header */}
      <header className="bg-white shadow-sm relative z-50">
        <div className="flex items-center justify-between px-4 py-2">
          {/* Logo */}
          <div className="flex items-center">
            <img src={logo} alt="apex-logo" className="h-16" />
          </div>

          {/* Hamburger Menu Button */}
          <RiMenu4Fill
            onClick={toggleMenu}
            size={40}
            className=" text-defaultGreen hover:cursor-pointer"
          />
        </div>
      </header>

      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300 ${
          isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={toggleMenu}
      />

      {/* Sliding Menu */}
      <div
        className={`fixed top-0 left-0 h-full w-full md:w-80 bg-white z-50 transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Menu Header */}
        <div className="flex items-start justify-between ">
          <div className="flex items-center">
            <img src={logo} alt="apex-logo" className="h-16 ml-4 mt-6" />
          </div>

          {/* Close Button */}
          <Button
            size="icon"
            onClick={toggleMenu}
            className="bg-gray-100 rounded-none shadow-none"
            aria-label="Close menu"
          >
            <X className="" size={20} color="black" />
          </Button>
        </div>

        {/* Navigation Menu */}
        <nav className="flex-1 overflow-y-auto mt-16 mx-2">
          <div className="py-2">
            {/* Regular Menu Items */}
            {regularMenuItems.map((item, index) => (
              <button
                key={index}
                className="w-full flex items-center px-6 text-left hover:bg-gray-50 transition-colors duration-200 text-gray-700 text-base font-medium"
                onClick={() => {
                  router.push(item.href);
                  toggleMenu();
                }}
              >
                <span className="border-b w-full py-4">{item.name}</span>
              </button>
            ))}

            {/* Services Accordion */}
            <AccordionMenu toggleMenu={toggleMenu} />
          </div>
        </nav>
      </div>
    </div>
  );
}
