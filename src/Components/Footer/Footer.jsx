import React from "react";

const footerSections = [
  {
    title: "Company",
    links: ["About Us", "Our Mission", "Contact Sales"],
  },
  {
    title: "Services",
    links: ["Products & Services", "Customer Stories", "Download Apps"],
  },
  {
    title: "Information",
    links: ["Privacy Policy", "Terms & Conditions", "Join Us"],
  },
  {
    title: "Social Links",
    links: [
      "@CS — Ticket System",
      "@CS — Ticket System",
      "@CS — Ticket System",
      "support@cst.com",
    ],
  },
];

const Footer = () => {
  return (
    <footer className="mt-20 bg-black text-gray-300 px-6 md:px-10 lg:px-16 py-10">
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">

        {/* Brand */}
        <div className="flex flex-col gap-3 sm:col-span-2 lg:col-span-1">
          <h1 className="text-xl font-semibold text-white">
            CS — Ticket System
          </h1>
          <p className="text-sm leading-relaxed">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </p>
        </div>

        {/* Sections */}
        {footerSections.map((section) => (
          <div key={section.title} className="flex flex-col gap-3">
            <h2 className="text-lg font-semibold text-white">
              {section.title}
            </h2>

            {section.links.map((link, index) => (
              <p
                key={index}
                className="text-sm hover:text-white cursor-pointer transition"
              >
                {link}
              </p>
            ))}
          </div>
        ))}

      </div>

      {/* Bottom */}
      <div className="border-t border-gray-700 mt-10 pt-5 text-center text-sm">
        © 2025 CS — Ticket System. All rights reserved.
      </div>

    </footer>
  );
};

export default Footer;