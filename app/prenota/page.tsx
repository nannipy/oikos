"use client";

import React, { useState } from "react";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const PrenotaPage = () => {
  const [form, setForm] = useState({
    nome: "",
    email: "",
    telefono: "",
    data: "",
    orario: "",
    persone: 2,
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess(false);
    try {
      const res = await fetch("/api/prenota", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setSuccess(true);
        setForm({ nome: "", email: "", telefono: "", data: "", orario: "", persone: 2 });
      } else {
        const data = await res.json();
        setError(data.message || "Errore nell'invio della prenotazione.");
      }
    } catch {
      setError("Errore di rete. Riprova più tardi.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col items-center mb-6">
        <Image src="/logo.svg" alt="Logo Oikos" width={44} height={56} priority className="mb-2" />
        <span className="font-montserrat text-black text-2xl tracking-[0.13em] uppercase">ÓIKOS</span>
      </div>
      <Card className="w-full max-w-md shadow-lg border-black border rounded-none">
        <CardHeader>
          <CardTitle className="font-montserrat text-2xl md:text-3xl tracking-[0.13em] text-black text-center uppercase">Prenota un tavolo</CardTitle>
        </CardHeader>
        <form onSubmit={handleSubmit} className="space-y-5">
          <CardContent className="space-y-5">
            <div>
              <label htmlFor="nome" className="block text-xs font-b612 text-black mb-1 uppercase">Nome</label>
              <input type="text" id="nome" name="nome" required value={form.nome} onChange={handleChange} className="mt-1 block w-full rounded-none border border-black px-3 py-2 font-b612 text-black focus:border-black focus:ring-black" />
            </div>
            <div>
              <label htmlFor="email" className="block text-xs font-b612 text-black mb-1 uppercase">Email</label>
              <input type="email" id="email" name="email" required value={form.email} onChange={handleChange} className="mt-1 block w-full rounded-none border border-black px-3 py-2 font-b612 text-black focus:border-black focus:ring-black" />
            </div>
            <div>
              <label htmlFor="telefono" className="block text-xs font-b612 text-black mb-1 uppercase">Telefono</label>
              <input type="tel" id="telefono" name="telefono" required value={form.telefono} onChange={handleChange} className="mt-1 block w-full rounded-none border border-black px-3 py-2 font-b612 text-black focus:border-black focus:ring-black" />
            </div>
            <div className="flex gap-3">
              <div className="flex-1">
                <label htmlFor="data" className="block text-xs font-b612 text-black mb-1 uppercase">Data</label>
                <input type="date" id="data" name="data" required value={form.data} onChange={handleChange} className="mt-1 block w-full rounded-none border border-black px-3 py-2 font-b612 text-black focus:border-black focus:ring-black" />
              </div>
              <div className="flex-1">
                <label htmlFor="orario" className="block text-xs font-b612 text-black mb-1 uppercase">Orario</label>
                <input type="time" id="orario" name="orario" required value={form.orario} onChange={handleChange} className="mt-1 block w-full rounded-none border border-black px-3 py-2 font-b612 text-black focus:border-black focus:ring-black" min="12:00" max="23:00" step="900" />
              </div>
            </div>
            <div>
              <label htmlFor="persone" className="block text-xs font-b612 text-black mb-1 uppercase">Numero di persone</label>
              <select id="persone" name="persone" required value={form.persone} onChange={handleChange} className="mt-1 block w-full rounded-none border border-black px-3 py-2 font-b612 text-black focus:border-black focus:ring-black">
                {[...Array(12)].map((_, i) => (
                  <option key={i+1} value={i+1}>{i+1}</option>
                ))}
              </select>
            </div>
            {error && <div className="text-red-600 text-xs font-b612 text-center">{error}</div>}
            {success && <div className="text-green-700 text-xs font-b612 text-center">Prenotazione inviata! Ti risponderemo via email.</div>}
          </CardContent>
          <CardFooter>
            <Button type="submit" className="w-full bg-black text-white py-2 px-4 rounded-none font-b612 uppercase tracking-wider hover:bg-gray-800 transition" disabled={loading}>
              {loading ? "Invio in corso..." : "Prenota ora"}
            </Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
};

export default PrenotaPage; 