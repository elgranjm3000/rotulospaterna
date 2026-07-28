"use client";

import { useState, useEffect } from "react";

const navLinks = [
  { name: "Servicios", href: "#servicios" },
  { name: "Portafolio", href: "#portafolio" },
  { name: "Proyectos", href: "#proyectos" },
  { name: "Nosotros", href: "#nosotros" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 w-full z-50 bg-surface/90 backdrop-blur-md transition-all ${
        isScrolled ? "shadow-md py-2" : "shadow-sm py-4"
      }`}
    >
      <nav className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop flex justify-between items-center">
        <div className="flex items-center gap-2">
          <img
            src="/logo.png"
            alt="Rótulos Paterna"
            className="h-10 w-auto"
          />
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              className="font-inter text-sm font-medium text-on-surface-variant hover:text-primary transition-colors"
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* CTA Button (Desktop) */}
        <div className="hidden md:flex items-center gap-4">
          <a
            className="font-inter text-sm font-medium text-on-surface-variant hover:text-primary transition-colors"
            href="#contacto"
            onClick={(e) => handleNavClick(e, "#contacto")}
          >
            Contacto
          </a>
          <button
            className="bg-secondary-container text-on-secondary-container px-6 py-2.5 rounded-md font-inter text-sm font-medium btn-hover-effect"
            onClick={() => {
              const target = document.querySelector("#contacto");
              if (target) target.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Pedir Presupuesto
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span className="material-symbols-outlined">
            {isMobileMenuOpen ? "close" : "menu"}
          </span>
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-surface border-t border-outline-variant/10">
          <div className="px-margin-mobile py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                className="font-inter text-sm font-medium text-on-surface-variant hover:text-primary transition-colors py-2"
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
              >
                {link.name}
              </a>
            ))}
            <a
              className="font-inter text-sm font-medium text-on-surface-variant hover:text-primary transition-colors py-2"
              href="#contacto"
              onClick={(e) => handleNavClick(e, "#contacto")}
            >
              Contacto
            </a>
            <button
              className="bg-secondary-container text-on-secondary-container px-6 py-3 rounded-md font-inter text-sm font-medium btn-hover-effect w-full"
              onClick={() => {
                const target = document.querySelector("#contacto");
                if (target) {
                  target.scrollIntoView({ behavior: "smooth" });
                  setIsMobileMenuOpen(false);
                }
              }}
            >
              Pedir Presupuesto
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
