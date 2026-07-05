"use client";
import DisplayIcon from "./DisplayIcon";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faBookOpen, faClockRotateLeft, faUser } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { useState } from "react";

function Header() {
  const [active, setActive] = useState("Home");

  const navItems = [
    { label: "Home", link: "/", icon: faHouse },
    { label: "Practice", link: "/practice", icon: faBookOpen },
    { label: "History", link: "/history", icon: faClockRotateLeft },
    { label: "Profile", link: "/profile", icon: faUser },
  ];

  return (
    <header className="w-full h-20 bg-white/80 border-b border-gray-200 flex justify-center">
      
      {/* container */}
      <div className="w-300 flex justify-between items-center">
        
        {/* Logo */}
        <div className="flex items-center gap-2">
          <DisplayIcon />
        </div>

        {/* Navbar */}
        <nav className="flex gap-3">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.link}
              onClick={() => setActive(item.label)}
            >
              <div
                className={`flex items-center gap-2 px-4 py-2 rounded-lg transition
                ${
                  active === item.label
                    ? "bg-linear-to-r from-blue-600 via-purple-600 to-pink-600 text-white"
                    : "text-black/25"
                }`}
              >
                <FontAwesomeIcon icon={item.icon} />
                <span>{item.label}</span>
              </div>
            </Link>
          ))}
        </nav>

      </div>
    </header>
  );
}

export default Header;