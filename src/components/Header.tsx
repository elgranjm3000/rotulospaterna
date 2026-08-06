"use client";

import { useState, useEffect } from "react";

const navLinks = [
  { name: "Servicios", href: "/#servicios" },
  { name: "Nosotros", href: "/#nosotros" },
  { name: "Contacto", href: "/#contacto" },
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
    const hash = href.split("#")[1];
    const target = document.getElementById(hash) || document.querySelector(`#${hash}`);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    } else {
      // Si no está en esta página (ej: blog), navegar a la landing
      window.location.href = href;
    }
  };

  return (
    <header
      className={`fixed top-0 w-full z-50 bg-surface/90 backdrop-blur-md transition-all ${
        isScrolled ? "shadow-md py-3" : "shadow-sm py-4"
      }`}
    >
      <nav className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop flex items-center justify-between gap-4">
        {/* Logo */}
        <a href="#" className="flex-shrink-0">
          <img
            src="/logo.png"
            alt="Rótulos Paterna"
            className="h-10 w-auto"
          />
        </a>

        {/* Desktop Nav - Centered */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link.name}
              className="font-inter text-sm font-semibold text-on-surface hover:text-secondary-container transition-colors"
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* CTA Button (Desktop) */}
        <div className="hidden md:block flex-shrink-0">
          <button
            className="bg-secondary-container text-on-secondary-container px-5 py-2.5 rounded-lg font-inter text-sm font-bold btn-hover-effect shadow-md"
            onClick={() => {
              const target = document.getElementById("contacto");
              if (target) {
                target.scrollIntoView({ behavior: "smooth" });
              } else {
                window.location.href = "/#contacto";
              }
            }}
          >
            Pedir Presupuesto
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 flex-shrink-0"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Abrir menú"
        >
          <span className="material-symbols-outlined text-3xl">
            {isMobileMenuOpen ? "close" : "menu"}
          </span>
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-surface-container">
          <div className="px-margin-mobile py-6 flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                className="font-inter text-base font-semibold text-primary hover:text-secondary-container transition-colors py-3 px-2 rounded-lg hover:bg-surface-container-low"
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
              >
                {link.name}
              </a>
            ))}
            <div className="pt-3">
              <button
                className="bg-secondary-container text-on-secondary-container px-6 py-3.5 rounded-lg font-inter text-base font-bold btn-hover-effect w-full shadow-md"
                onClick={() => {
                  const target = document.getElementById("contacto");
                  if (target) {
                    target.scrollIntoView({ behavior: "smooth" });
                    setIsMobileMenuOpen(false);
                  } else {
                    window.location.href = "/#contacto";
                  }
                }}
              >
                Pedir Presupuesto
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
