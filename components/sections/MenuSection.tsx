import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function MenuSection({ onPrenotaClick }: { onPrenotaClick?: () => void }) {
  return (
    <section id="menu" className="flex flex-col md:flex-row justify-center">
      <div className="w-full md:w-1/2 bg-black py-8 md:py-16 px-4 md:px-20 flex flex-col justify-between">
        <div className="font-montserrat text-white text-lg md:text-2xl tracking-[0.13em] md:tracking-[3.12px] leading-normal max-w-full md:max-w-[601px] mt-32">
          CHE TU ABBIA VOGLIA DI UN CLASSICO INTRAMONTABILE O DI UNA SORPRESA INASPETTATA, IL NOSTRO MENU È PENSATO PER EMOZIONARE IL PALATO E RISVEGLIARE I SENSI.<br /><br />
          SCOPRI IL MENU E PREPARATI A VIVERE UN&apos;ESPERIENZA GASTRONOMICA AUTENTICA, TUTTA DA ASSAPORARE.
        </div>
        <div className="flex flex-col md:flex-row gap-4 mt-8 md:mt-16 self-center md:self-end">
          <Button
            variant="outline"
            className="border-white rounded-none h-auto"
            onClick={onPrenotaClick}
            asChild={typeof onPrenotaClick !== "function"}
          >
            {typeof onPrenotaClick === "function" ? (
              <span className="font-b612 text-xs">PRENOTA UN TAVOLO</span>
            ) : (
              <a href="prenota">
                <span className="font-b612 text-xs">PRENOTA UN TAVOLO</span>
              </a>
            )}
          </Button>
          <Button
            variant="secondary"
            className="rounded-none h-auto"
          >
            <span className="font-b612 text-xs">SCOPRI IL MENÙ</span>
          </Button>
        </div>
      </div>

      <div className="w-full md:w-1/2 relative h-[300px] md:h-[808px]">
        <Image
          src="/scopri.jpg"
          alt="Food presentation"
          fill
          className="object-cover w-full h-full shadow-lg"
          style={{ boxShadow: "0px 4px 4px rgba(0,0,0,0.25)" }}
        />
      </div>
    </section>
  );
} 