"use client";

import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Footer from "@/components/ui/Footer";

export default function Desktop() {
  // Dati degli elementi del menu di navigazione
  const navItems = [
    { text: "CHI SIAMO", hasSlash: true },
    { text: "MENU", hasSlash: true },
    { text: "CONTATTI", hasSlash: false },
  ];

  // Recensioni dinamiche
  const reviews = [
    {
      text: `"Location bellissima, servizio ineccepebile e cibo di estrema qualità.\nUna carbonara da fine del mondo.\nComplimenti anche alla ragazza che ci ha servito super cordiale."`,
      author: "Lorenzo A. - Tripadvisor",
    },
    {
      text: `"Esperienza fantastica! Piatti curati e personale gentilissimo.\nTorneremo sicuramente."`,
      author: "Giulia R. - Google",
    },
    {
      text: `"Ambiente accogliente e moderno, cucina che sorprende.\nConsigliatissimo!"`,
      author: "Marco B. - Facebook",
    },
  ];
  const [activeReview, setActiveReview] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveReview((prev) => (prev + 1) % reviews.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [reviews.length]);

  return (
    <div className="bg-white flex flex-col items-center w-full min-h-screen">
      <div className="w-full relative">
        {/* Header */}
        <header className="flex items-center justify-between px-4 md:px-8 py-4 md:py-6 w-full bg-white">
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
                <Button variant="link" className="p-0 h-auto">
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
              <span className="font-b612 text-white text-xs tracking-[0] leading-[16.1px] uppercase">
                PRENOTA ORA
              </span>
            </Button>
          </nav>
          {/* Mobile hamburger placeholder */}
          <div className="md:hidden">
            <Image src="/hamburger.svg" alt="Hamburger" width={24} height={24} />
          </div>
        </header>

        {/* Hero Section */}
        <section
          className="relative w-full h-[500px] md:h-[855px] flex flex-col items-center justify-center bg-cover bg-center"
          style={{
            backgroundImage:
              "linear-gradient(0deg, rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('/hero.jpg')",
          }}
        >
          <div className="absolute left-1/2 top-[20%] md:top-[224px] -translate-x-1/2 w-[90vw] max-w-[1085px] px-2 md:px-0">
            <h1 className="font-montserrat text-white text-3xl md:text-[64px] leading-tight md:leading-[78px] text-center tracking-[0.13em]">
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

        {/* Our Story & Mission Section - nuova griglia 2x2 */}
        <section className="py-12 md:py-24 px-4 md:px-16 w-full">
          <div className="mx-auto w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
            {/* Storia: testo a sinistra */}
            <div className="order-1 md:order-1 flex flex-col justify-center">
              <h2 className="font-montserrat text-black text-2xl md:text-[32px] tracking-[0.13em] mb-4 md:mb-8 uppercase">
                LA NOSTRA STORIA
              </h2>
              <p className="font-b612Mono text-black text-xs md:text-base leading-6 max-w-full md:max-w-[420px] whitespace-pre-line">
                Oykos nasce dalla passione autentica per la cucina italiana e dall&apos;amore per le sue radici.
                È il risultato di un percorso che intreccia ricette della tradizione italiana con la voglia di innovare e sorprendere.
                Abbiamo iniziato con un sogno semplice: portare in tavola sapori familiari rivisitati con creatività, creando un ponte tra tradizione e contemporaneità.
                Ogni nostro piatto è il frutto di ricerca, dedizione e rispetto per la cultura gastronomica italiana.
              </p>
            </div>
            {/* Storia: immagine a destra */}
            <div className="order-2 md:order-2 flex justify-end">
              <Image
                className="w-full md:w-[400px] h-[220px] md:h-full object-cover border-none shadow-none"
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
                className="w-full md:w-[400px] h-[220px] md:h-full object-cover border-none shadow-none"
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
              <p className="font-b612Mono text-black text-xs md:text-base leading-6 max-w-full md:max-w-[420px] whitespace-pre-line">
                La nostra missione è offrire un&apos;esperienza culinaria che vada oltre il semplice mangiare.
                Vogliamo che ogni piatto racconti una storia, evochi un ricordo, trasmetta emozione.
                In un mondo che corre veloce, Oykos si propone come un luogo dove fermarsi e assaporare il gusto autentico della cucina italiana, con un tocco moderno che ne esalta l&apos;anima.
              </p>
            </div>
          </div>
        </section>

        {/* Menu Section */}
        <section className="flex flex-col md:flex-row justify-center">
          <div className="w-full md:w-full bg-black py-8 md:py-16 px-4 md:px-20 flex flex-col justify-between">
            <div className="font-montserrat text-white text-lg md:text-2xl tracking-[0.13em] md:tracking-[3.12px] leading-normal max-w-full md:max-w-[601px]">
              CHE TU ABBIA VOGLIA DI UN CLASSICO INTRAMONTABILE O DI UNA SORPRESA INASPETTATA, IL NOSTRO MENU È PENSATO PER EMOZIONARE IL PALATO E RISVEGLIARE I SENSI.<br /><br />
              SCOPRI IL MENU E PREPARATI A VIVERE UN&apos;ESPERIENZA GASTRONOMICA AUTENTICA, TUTTA DA ASSAPORARE.
            </div>
            <div className="flex flex-col md:flex-row gap-4 mt-8 md:mt-16 self-center md:self-end">
              <Button
                variant="outline"
                className="border-white rounded-none h-auto"
              >
                <span className="font-b612 text-white text-xs">PRENOTA UN TAVOLO</span>
              </Button>
              <Button
                variant="default"
                className="bg-white text-black rounded-none h-auto"
              >
                <span className="font-b612 text-black text-xs">SCOPRI IL MENÙ</span>
              </Button>
            </div>
          </div>
          <div className="w-full md:w-[639px]">
            <Image
              className="w-full h-[300px] md:h-full object-cover border-none shadow-none"
              alt="Food presentation"
              src="/scopri.jpg"
              width={639}
              height={639}
              style={{ border: 'none', boxShadow: 'none' }}
            />
          </div>
        </section>

        {/* Recensioni Section dinamica e animata */}
        <section className="w-full flex flex-col items-center py-16 md:py-24 px-4 md:px-0 bg-white">
          <div className="max-w-[1030px] w-full mx-auto flex flex-col items-center">
            <div className="relative w-full min-h-[180px] md:min-h-[270px] flex items-center justify-center">
              {reviews.map((review, idx) => (
                <blockquote
                  key={idx}
                  className={`
                    font-montserrat font-normal text-black text-xl md:text-[40px] leading-tight md:leading-[45px] text-center uppercase absolute transition-all duration-700
                    ${idx === activeReview ? "opacity-100 scale-100 z-10" : "opacity-0 scale-95 z-0"}
                    w-full md:w-[1030px] left-1/2 -translate-x-1/2
                  `}
                  style={{ top: 0 }}
                >
                  {review.text.split("\n").map((line, i) => (
                    <React.Fragment key={i}>
                      {line}
                      <br className="hidden md:block" />
                    </React.Fragment>
                  ))}
                </blockquote>
              ))}
            </div>
            <div className="font-b612 text-black text-xs md:text-base text-center uppercase mb-8 md:mb-12 leading-[45px] min-h-[45px]">
              {reviews[activeReview].author}
            </div>
            {/* Indicatori stile carosello */}
            <div className="flex flex-row gap-2 items-center justify-center">
              {reviews.map((_, idx) => (
                <button
                  key={idx}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    idx === activeReview
                      ? "bg-black"
                      : "border border-black bg-transparent"
                  }`}
                  aria-label={`Vai alla recensione ${idx + 1}`}
                  onClick={() => setActiveReview(idx)}
                />
              ))}
            </div>
          </div>
        </section>
      </div>
      {/* Sezione DOVE SIAMO? */}
      <section className="relative w-full flex justify-center items-stretch bg-[rgba(236,236,236,0.49)] overflow-hidden" style={{ minHeight: 808 }}>
        {/* Immagine a sinistra */}
        <div className="w-full md:w-1/2 relative h-[300px] md:h-[808px]">
          <Image
            src="/ingresso.jpg"
            alt="Vista Oikos"
            fill
            className="object-cover w-full h-full shadow-lg"
            style={{ boxShadow: "0px 4px 4px rgba(0,0,0,0.25)" }}
          />
        </div>
        {/* Colonna destra: testo e bottoni */}
        <div className="w-full md:w-1/2 flex flex-col justify-center items-center py-12 md:py-0 px-6 md:pr-50 relative z-10">
          <div className="flex flex-col items-start w-full max-w-[400px] mx-auto">
            <h2 className="font-montserrat text-black text-2xl md:text-[40px] leading-[45px] text-left uppercase mb-8">DOVE SIAMO</h2>
            <div className="font-b612 text-black text-xs md:text-base uppercase text-left mb-8">
              <span className="font-b612Mono text-[12px] leading-[26px] block mb-2">VIA FLAMINIA NUOVA 230/232,<br />00191 ROMA, ITALIA</span>
            </div>
            <div className="flex flex-col gap-4 mb-10 ">
              <a href="#prenota" className="flex items-center justify-center px-6 py-2 bg-black text-white font-b612Mono text-xs rounded-none w-full" style={{ minWidth: 133, minHeight: 35 }}>
                PRENOTA UN TAVOLO
              </a>
              <a href="https://maps.google.com/?q=Via+Flaminia+Nuova+230/232,+00191+ROMA,+ITALIA" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center px-6 py-2 border border-black text-black font-b612Mono text-xs rounded-none w-full" style={{ minWidth: 125, minHeight: 35 }}>
                VEDI SULLA MAPPA
              </a>
            </div>
            <h3 className="font-montserrat text-black text-2xl md:text-[32px] leading-[38px] text-center uppercase mb-4 mt-2">ORARI</h3>
            <div className="font-b612Mono  text-black text-xs md:text-base uppercase text-center mb-8">
              <span className="block">LUN-DOM 12:30AM-3:00PM  7:30PM-11PM</span>
            </div>
            {/* Social icons */}
            <div className="flex flex-row gap-4 mt-4 justify-center">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="w-[34px] h-[34px] flex items-center justify-center">
                {/* Instagram SVG */}
                <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.05 2.8335H22.95C27.4833 2.8335 31.1666 6.51683 31.1666 11.0502V22.9502C31.1666 25.1294 30.301 27.2193 28.76 28.7602C27.2191 30.3011 25.1292 31.1668 22.95 31.1668H11.05C6.51665 31.1668 2.83331 27.4835 2.83331 22.9502V11.0502C2.83331 8.87097 3.699 6.78103 5.23992 5.2401C6.78084 3.69918 8.87078 2.8335 11.05 2.8335ZM10.7666 5.66683C9.41404 5.66683 8.11684 6.20415 7.1604 7.16058C6.20397 8.11702 5.66665 9.41422 5.66665 10.7668V23.2335C5.66665 26.0527 7.94748 28.3335 10.7666 28.3335H23.2333C24.5859 28.3335 25.8831 27.7962 26.8396 26.8397C27.796 25.8833 28.3333 24.5861 28.3333 23.2335V10.7668C28.3333 7.94766 26.0525 5.66683 23.2333 5.66683H10.7666ZM24.4375 7.79183C24.9071 7.79183 25.3576 7.9784 25.6896 8.31049C26.0217 8.64259 26.2083 9.09301 26.2083 9.56266C26.2083 10.0323 26.0217 10.4827 25.6896 10.8148C25.3576 11.1469 24.9071 11.3335 24.4375 11.3335C23.9678 11.3335 23.5174 11.1469 23.1853 10.8148C22.8532 10.4827 22.6666 10.0323 22.6666 9.56266C22.6666 9.09301 22.8532 8.64259 23.1853 8.31049C23.5174 7.9784 23.9678 7.79183 24.4375 7.79183ZM17 9.91683C18.8786 9.91683 20.6803 10.6631 22.0087 11.9915C23.337 13.3199 24.0833 15.1215 24.0833 17.0002C24.0833 18.8788 23.337 20.6805 22.0087 22.0088C20.6803 23.3372 18.8786 24.0835 17 24.0835C15.1214 24.0835 13.3197 23.3372 11.9913 22.0088C10.6629 20.6805 9.91665 18.8788 9.91665 17.0002C9.91665 15.1215 10.6629 13.3199 11.9913 11.9915C13.3197 10.6631 15.1214 9.91683 17 9.91683ZM17 12.7502C15.8728 12.7502 14.7918 13.1979 13.9948 13.995C13.1977 14.792 12.75 15.873 12.75 17.0002C12.75 18.1273 13.1977 19.2083 13.9948 20.0054C14.7918 20.8024 15.8728 21.2502 17 21.2502C18.1271 21.2502 19.2082 20.8024 20.0052 20.0054C20.8022 19.2083 21.25 18.1273 21.25 17.0002C21.25 15.873 20.8022 14.792 20.0052 13.995C19.2082 13.1979 18.1271 12.7502 17 12.7502Z" fill="black"/>
                </svg>
              </a>
              <a href="https://tripadvisor.it" target="_blank" rel="noopener noreferrer" aria-label="Tripadvisor" className="w-[34px] h-[34px] flex items-center justify-center">
                {/* Tripadvisor SVG stilizzato */}
                <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_8_343)">
                <path d="M32.6007 13.5024C32.9991 11.7928 34.2667 10.0822 34.2667 10.0822H28.5834C25.3906 8.01777 21.5209 6.92871 17.2274 6.92871C12.7787 6.92871 8.76139 8.03477 5.58982 10.1162H0.267761C0.267761 10.1162 1.51726 11.7981 1.92101 13.496C0.887199 14.924 0.267761 16.6453 0.267761 18.5376C0.267761 23.2296 4.0917 27.0493 8.7837 27.0493C11.4686 27.0493 13.8465 25.7923 15.419 23.8565L17.2221 26.568L19.0538 23.8225C19.8796 24.8853 20.9502 25.7325 22.1744 26.2917C24.2388 27.2267 26.5572 27.3319 28.6822 26.5456C33.082 24.9136 35.3334 19.9996 33.7184 15.6008C33.4402 14.8478 33.054 14.1391 32.572 13.4971L32.6007 13.5024ZM28.1063 24.9402C27.2701 25.2535 26.3797 25.3968 25.4874 25.3617C24.5951 25.3267 23.7188 25.114 22.9096 24.7362C21.7588 24.2025 20.7823 23.3542 20.0929 22.2893C19.8039 21.8643 19.5617 21.4042 19.3789 20.9123C19.1675 20.3523 19.0687 19.7775 19.0134 19.191C18.9083 18.0127 19.074 16.8227 19.5829 15.7156C19.9573 14.9033 20.4883 14.1729 21.1453 13.5661C21.8024 12.9594 22.5727 12.4882 23.4122 12.1796C26.9386 10.8844 30.8497 12.6938 32.1449 16.2075C33.4454 19.7223 31.6359 23.6355 28.1276 24.936H28.1063V24.9402ZM14.4107 22.3413C13.7886 23.2621 12.9503 24.0164 11.9691 24.5382C10.988 25.06 9.8939 25.3333 8.78264 25.3344C5.03732 25.3344 1.98157 22.2797 1.98157 18.5386C1.98157 14.7976 5.03732 11.7376 8.78264 11.7376C12.5301 11.7376 15.5784 14.7976 15.5784 18.5386C15.5784 18.7713 15.5401 18.9806 15.5114 19.2186C15.3956 20.3651 15.0301 21.4499 14.4107 22.3626V22.3413ZM4.45932 18.4494C4.45932 20.7741 6.35164 22.6558 8.67107 22.6558C10.9905 22.6558 12.8775 20.7741 12.8775 18.4494C12.8775 17.3338 12.4343 16.2639 11.6455 15.475C10.8566 14.6861 9.78669 14.243 8.67107 14.243C7.55546 14.243 6.48553 14.6861 5.69667 15.475C4.90781 16.2639 4.46464 17.3338 4.46464 18.4494H4.45932ZM21.5316 18.4494C21.5307 19.281 21.7766 20.0942 22.2381 20.7861C22.6996 21.4779 23.3559 22.0173 24.1241 22.336C24.8923 22.6547 25.7377 22.7384 26.5534 22.5764C27.3691 22.4145 28.1185 22.0142 28.7066 21.4262C29.2947 20.8382 29.6952 20.0889 29.8574 19.2733C30.0196 18.4576 29.9361 17.6121 29.6176 16.8439C29.2991 16.0757 28.7599 15.4192 28.0681 14.9575C27.3764 14.4959 26.5633 14.2498 25.7316 14.2504C24.6177 14.2515 23.5495 14.694 22.7611 15.481C21.9727 16.2681 21.5283 17.3354 21.5252 18.4494H21.5316ZM5.91601 18.4494C5.91629 17.7206 6.20518 17.0216 6.7195 16.5053C7.23382 15.989 7.93169 15.6974 8.66045 15.6943C10.166 15.6943 11.4219 16.9343 11.4219 18.4494C11.4219 19.1825 11.1307 19.8855 10.6123 20.4039C10.0939 20.9223 9.39088 21.2135 8.65779 21.2135C7.92471 21.2135 7.22165 20.9223 6.70328 20.4039C6.18492 19.8855 5.8937 19.1825 5.8937 18.4494H5.91601ZM22.9659 18.4494C22.9659 17.7187 23.2562 17.0179 23.7729 16.5013C24.2896 15.9846 24.9903 15.6943 25.721 15.6943C26.4434 15.7104 27.1306 16.0093 27.635 16.5266C28.1395 17.0439 28.4209 17.7384 28.4188 18.4609C28.4167 19.1835 28.1313 19.8764 27.6239 20.3907C27.1165 20.9051 26.4275 21.2 25.7051 21.2119C25.3422 21.2123 24.9828 21.1411 24.6474 21.0025C24.3121 20.8638 24.0074 20.6603 23.7508 20.4037C23.4941 20.1471 23.2907 19.8424 23.152 19.5071C23.0133 19.1717 22.9422 18.8123 22.9426 18.4494H22.9659ZM17.221 8.41621C20.281 8.41621 23.0435 8.96446 25.4671 10.061C24.545 10.0847 23.6327 10.2566 22.7651 10.5699C21.7133 10.9519 20.7484 11.5404 19.9273 12.3007C19.1062 13.061 18.4455 13.9779 17.9839 14.9973C17.5419 15.9323 17.3092 16.9226 17.2199 17.9245C17.0635 15.8064 16.1227 13.8227 14.5814 12.3614C13.0401 10.9 11.0092 10.0661 8.8857 10.0227C11.3093 8.98252 14.1217 8.41727 17.1594 8.41727L17.221 8.41621Z" fill="black"/>
                </g>
                <defs>
                <clipPath id="clip0_8_343">
                <rect width="34" height="34" fill="white"/>
                </clipPath>
                </defs>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
