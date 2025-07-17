import { Button } from "@/components/ui/button";
import Image from "next/image";
import React, { useState } from "react";

interface NavbarProps {
  navItems?: { text: string; hasSlash: boolean }[];
}

const defaultNavItems = [
  { text: "CHI SIAMO", hasSlash: true },
  { text: "MENU", hasSlash: true },
  { text: "CONTATTI", hasSlash: false },
];

const sectionIds: Record<string, string> = {
  "CHI SIAMO": "chi-siamo",
  "MENU": "menu",
  "CONTATTI": "contatti",
};

const handleNavClick = (text: string) => {
  const id = sectionIds[text];
  if (id) {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  }
};

const Navbar: React.FC<NavbarProps> = ({ navItems = defaultNavItems }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 flex items-center justify-between px-4 md:px-8 py-4 md:py-6 w-full bg-white ">
      <div className="flex items-center gap-3 md:gap-5">
        <Image
          src="/logo.svg"
          alt="Logo Oikos"
          width={44}
          height={56}
          className="block"
          priority
        />
        <div className="font-montserrat text-black text-2xl md:text-4xl tracking-[0.13em] flex items-center">
          ÓIKOS
        </div>
      </div>
      <nav className="hidden md:flex items-center gap-4">
        {navItems.map((item, index) => (
          <React.Fragment key={index}>
            <Button variant="link" className="p-0 h-auto" onClick={() => handleNavClick(item.text)}>
              <span className="font-b612 text-black text-xs tracking-[0] leading-[16.1px] uppercase">
                {item.text}
              </span>
            </Button>
            {item.hasSlash && (
              <span className="font-b612 text-black text-xs text-center tracking-[0] leading-[16.1px] uppercase">
                /
              </span>
            )}
          </React.Fragment>
        ))}
        <Button className="bg-black rounded-none ml-4 h-auto">
          <span className="font-b612 text-xs tracking-[0] leading-[16.1px] uppercase">
            PRENOTA ORA
          </span>
        </Button>
      </nav>
      {/* Mobile hamburger  */}
      <div className="md:hidden">
        <button onClick={() => setMobileMenuOpen(true)} aria-label="Apri menu mobile">
          <Image src="/hamburger.svg" alt="Hamburger" width={24} height={24} />
        </button>
      </div>
      {/* Mobile menu overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-60 flex flex-col">
          <div className="flex justify-end p-4">
            <button onClick={() => setMobileMenuOpen(false)} aria-label="Chiudi menu mobile" className="text-white text-2xl">&times;</button>
          </div>
          <nav className="flex flex-col items-center gap-6 mt-8">
            {navItems.map((item, index) => (
              <Button
                key={index}
                variant="link"
                className="p-0 h-auto text-white text-xl"
                onClick={() => {
                  handleNavClick(item.text);
                  setMobileMenuOpen(false);
                }}
              >
                <span className="font-b612 text-white text-xl tracking-[0] leading-[16.1px] uppercase">
                  {item.text}
                </span>
              </Button>
            ))}
            <Button className="rounded-none mt-6 w-3/4" onClick={() => setMobileMenuOpen(false)}>
              <span className="font-b612 text-xs">
                PRENOTA ORA
              </span>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar; 