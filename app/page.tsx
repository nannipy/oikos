"use client";

import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Footer from "@/components/ui/Footer";
import Navbar from "@/components/ui/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import StoryMissionSection from "@/components/sections/StoryMissionSection";
import MenuSection from "@/components/sections/MenuSection";
import ReviewsSection from "@/components/sections/ReviewsSection";
import LocationSection from "@/components/sections/LocationSection";
import PrenotaModal from "@/components/PrenotaModal";


export default function Desktop() {
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

  const [openPrenotaModal, setOpenPrenotaModal] = useState(false);

  // Funzione per passare come prop ai pulsanti
  const handleOpenPrenota = () => setOpenPrenotaModal(true);
  const handleClosePrenota = () => setOpenPrenotaModal(false);

  return (
    <div className="bg-white flex flex-col items-center w-full min-h-screen">
      <PrenotaModal open={openPrenotaModal} onClose={handleClosePrenota} />
      <div className="w-full relative">
        {/* Header */}
        <Navbar onPrenotaClick={handleOpenPrenota} />
        {/* Hero Section */}
        <HeroSection />
        {/* Our Story & Mission Section */}
        <StoryMissionSection />
        {/* Menu Section */}
        <MenuSection onPrenotaClick={handleOpenPrenota} />
        {/* Recensioni Section dinamica e animata */}
        <ReviewsSection />
      </div>
      {/* Sezione DOVE SIAMO? */}
      <LocationSection />
      <Footer />
    </div>
  );
}
