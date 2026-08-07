"use client";

import { useFadeIn } from "@/hooks/useFadeIn";
import { Logo } from "@/components/Logo";

const footerLinks = {
  empresa: [
    { name: "Servicios", href: "#servicios" },
    { name: "Sobre Nosotros", href: "#nosotros" },
  ],
  legal: [
    { name: "Privacidad", href: "/privacidad" },
    { name: "Aviso Legal", href: "/aviso-legal" },
    { name: "Cookies", href: "/cookies" },
  ],
  soporte: [
    { name: "Contacto", href: "#contacto" },
    { name: "Preguntas Frecuentes", href: "/faq" },
    { name: "Mapa Web", href: "/sitemap" },
  ],
};

const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
  if (href.startsWith("#")) {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  }
};

export function Footer() {
  const { ref, isVisible } = useFadeIn({ threshold: 0.1 });

  return (
    <footer
      ref={ref}
      className={`bg-surface-container-lowest border-t border-outline-variant/30 transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      <div className="max-w-container-max mx-auto px-margin-desktop py-12 flex flex-col md:flex-row justify-between items-start gap-gutter">
        {/* Brand Section */}
        <div className="max-w-xs">
          <div className="flex items-center gap-2 mb-4">
            <Logo className="h-10 w-auto" />
          </div>
          <p className="font-inter text-base text-on-surface-variant leading-relaxed">
            Rótulos en Paterna: fabricación de letras corpóreas, rotulación
            de fachadas, vinilos y rotulación de vehículos. Expertos
            rotulistas en Paterna desde 2008.
          </p>
        </div>

        {/* Links Sections */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-12">
          {/* Empresa */}
          <div className="flex flex-col gap-4">
            <span className="font-inter text-sm font-semibold text-primary uppercase tracking-wider">
              Empresa
            </span>
            {footerLinks.empresa.map((link) => (
              <a
                key={link.name}
                className="font-inter text-base text-on-surface-variant hover:text-secondary-container transition-colors"
                href={link.href}
                onClick={(e) => handleScroll(e, link.href)}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Legal */}
          <div className="flex flex-col gap-4">
            <span className="font-inter text-sm font-semibold text-primary uppercase tracking-wider">
              Legal
            </span>
            {footerLinks.legal.map((link) => (
              <a
                key={link.name}
                className="font-inter text-base text-on-surface-variant hover:text-secondary-container transition-colors"
                href={link.href}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Soporte */}
          <div className="flex flex-col gap-4">
            <span className="font-inter text-sm font-semibold text-primary uppercase tracking-wider">
              Soporte
            </span>
            {footerLinks.soporte.map((link) => (
              <a
                key={link.name}
                className="font-inter text-base text-on-surface-variant hover:text-secondary-container transition-colors"
                href={link.href}
                onClick={(e) => handleScroll(e, link.href)}
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-container-max mx-auto px-margin-desktop py-8 border-t border-outline-variant/10 text-center md:text-left">
        <p className="font-inter text-xs text-on-surface-variant/70">
          © {new Date().getFullYear()} Rótulos Paterna. Todos los derechos
          reservados.
        </p>
      </div>
    </footer>
  );
}
