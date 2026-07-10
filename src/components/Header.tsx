"use client";

import { useEffect, useState } from "react";

const navLinks = [
  { href: "#top", id: "top", icon: "🏠", label: "Home" },
  { href: "#about", id: "about", icon: "👤", label: "About" },
  { href: "#projects", id: "projects", icon: "💼", label: "Projects" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("top");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
      let current = "top";
      for (const id of ["about", "projects"]) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 120) current = id;
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#111111]/95 backdrop-blur-md border-b border-gray-800/50 shadow-xl"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#top" className="group flex items-center space-x-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-[#ff6b6b] to-[#ffb400] transition-transform duration-300 group-hover:scale-110">
              <span className="text-lg font-bold text-white">손</span>
            </div>
            <span className="bg-gradient-to-r from-[#fb923c] to-[#facc15] bg-clip-text text-xl font-bold text-transparent">
              Portfolio
            </span>
          </a>

          <div className="hidden items-center space-x-8 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`relative rounded-lg px-4 py-2 font-medium transition-all duration-300 ${
                  active === link.id
                    ? "text-[#fb923c] bg-[#ff6b6b]/10"
                    : "text-gray-300 hover:text-white hover:bg-white/5"
                }`}
              >
                <span className="flex items-center space-x-2">
                  <span className="text-lg">{link.icon}</span>
                  <span>{link.label}</span>
                </span>
              </a>
            ))}
          </div>

          <a
            href="#contact"
            className="rounded-lg bg-gradient-to-r from-[#ff6b6b] to-[#ffb400] px-6 py-2.5 font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(255,107,107,0.3)]"
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}
