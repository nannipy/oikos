import Image from "next/image";

export default function StoryMissionSection() {
  return (
    <section id="chi-siamo" className="py-12 md:py-24 px-4 md:px-16 w-full">
      <div className="mx-auto w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
        {/* Storia: testo a sinistra */}
        <div className="order-1 md:order-1 flex flex-col justify-center">
          <h2 className="font-montserrat text-black text-2xl md:text-[32px] tracking-[0.13em] mb-4 md:mb-8 uppercase">
            LA NOSTRA STORIA
          </h2>
          <p style={{ fontFamily: "'B612 Mono', monospace"}} className="text-black text-xs md:text-base leading-6 max-w-full md:max-w-[420px] whitespace-pre-line">
            Oykos nasce dalla passione autentica per la cucina italiana e dall&apos;amore per le sue radici.
            È il risultato di un percorso che intreccia ricette della tradizione italiana con la voglia di innovare e sorprendere.
            Abbiamo iniziato con un sogno semplice: portare in tavola sapori familiari rivisitati con creatività, creando un ponte tra tradizione e contemporaneità.
            Ogni nostro piatto è il frutto di ricerca, dedizione e rispetto per la cultura gastronomica italiana.
          </p>
        </div>
        {/* Storia: immagine a destra */}
        <div className="order-2 md:order-2 flex justify-end">
          <Image
            className="w-full md:w-[400px] h-full md:h-full object-cover border-none shadow-none"
            alt="Chef preparing food"
            width={400}
            height={320}
            src="/storia.jpg"
            style={{ border: 'none', boxShadow: 'none' }}
          />
        </div>
        {/* Mission: immagine a sinistra (sotto) */}
        <div className="order-4 md:order-3 flex justify-start">
          <Image
            className="w-full md:w-[400px] h-full md:h-full object-cover border-none shadow-none"
            width={400}
            height={320}
            alt="Food dish"
            src="/mission.jpg"
            style={{ border: 'none', boxShadow: 'none' }}
          />
        </div>
        {/* Mission: testo a destra (sotto) */}
        <div className="order-3 md:order-4 flex flex-col  ">
          <h2 className="font-montserrat text-black text-2xl md:text-[32px] tracking-[0.13em] mb-4 md:mb-8 uppercase">
            LA NOSTRA MISSIONE
          </h2>
          <p style={{ fontFamily: "'B612 Mono', monospace"}} className=" text-black text-xs md:text-base leading-6 max-w-full md:max-w-[420px] whitespace-pre-line">
            La nostra missione è offrire un&apos;esperienza culinaria che vada oltre il semplice mangiare.
            Vogliamo che ogni piatto racconti una storia, evochi un ricordo, trasmetta emozione.
            In un mondo che corre veloce, Oykos si propone come un luogo dove fermarsi e assaporare il gusto autentico della cucina italiana, con un tocco moderno che ne esalta l&apos;anima.
          </p>
        </div>
      </div>
    </section>
  );
} 