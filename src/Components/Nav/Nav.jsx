import React, { useState } from "react";

const menuItems = ["Home", "FAQ", "Changelog", "Blog", "Download", "Contact"];

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md px-6 lg:px-10 py-4 mb-20">
      
      <div className="flex items-center justify-between">

        {/* Logo */}
        <h1 className="text-[#130B2D] font-semibold text-xl cursor-pointer">
          CS — Ticket System
        </h1>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-6 text-black">
          {menuItems.map((item) => (
            <button
              key={item}
              className="px-3 py-2 rounded-lg hover:bg-gray-100 transition"
            >
              {item}
            </button>
          ))}

          <button className="px-4 py-2 rounded-lg text-white font-medium bg-gradient-to-r from-[#632EE3] to-[#9F62F2] hover:opacity-90 transition">
            + New Ticket
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>

      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="flex flex-col gap-3 mt-4 lg:hidden">
          {menuItems.map((item) => (
            <button
              key={item}
              className="text-left px-4 py-2 rounded-lg hover:bg-gray-100 transition"
            >
              {item}
            </button>
          ))}

          <button className="px-4 py-2 rounded-lg text-white font-medium bg-gradient-to-r from-[#632EE3] to-[#9F62F2]">
            + New Ticket
          </button>
        </div>
      )}

    </nav>
  );
};

export default Nav;