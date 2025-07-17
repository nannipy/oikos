import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

export default function HeroSection() {
  return (
    <section
      className="relative w-full h-[500px] md:h-[855px] flex flex-col items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage:
          "linear-gradient(0deg, rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('/hero.jpg')",
      }}
    >
      <div className="absolute left-1/2 top-[20%] md:top-[224px] -translate-x-1/2 w-[90vw] max-w-[1085px] px-2 md:px-0">
        <h1 className="font-montserrat text-white text-3xl md:text-[64px] leading-tight md:leading-[78px] text-center tracking-[0.10em]">
          BENVENUTI NELLA NOSTRA<br />TRATTORIA MODERNA
        </h1>
      </div>
      <div className="absolute left-1/2 bottom-24 md:top-[707px] -translate-x-1/2 w-[90vw] max-w-[749px] px-2 md:px-0">
        <p className="font-b612 text-white text-xs md:text-base text-center leading-6 md:leading-[200%]">
          Oikos offre un&#39;esperienza culinaria unica, fondendo tradizione e innovazione.<br />
          Scopri i sapori autentici in un ambiente accogliente e contemporaneo.
        </p>
      </div>
      <Button
        variant="ghost"
        size="icon"
        className="absolute left-1/2 bottom-8 -translate-x-1/2"
      >
        <ArrowDown className="w-4 h-4 text-white" />
      </Button>
    </section>
  );
} 