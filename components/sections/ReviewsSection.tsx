import React, { useState, useEffect } from "react";

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

export default function ReviewsSection() {
  const [activeReview, setActiveReview] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveReview((prev) => (prev + 1) % reviews.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
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
  );
} 