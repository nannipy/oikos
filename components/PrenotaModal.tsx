import React, { useState, useRef, useEffect } from "react";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";

interface PrenotaModalProps {
  open: boolean;
  onClose: () => void;
}

const PrenotaModal: React.FC<PrenotaModalProps> = ({ open, onClose }) => {
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
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    function handleKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [open, onClose]);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        onClose();
      }
    }
    if (open) {
      setTimeout(() => {
        document.addEventListener("mousedown", handleClickOutside);
      }, 0);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [open, onClose]);

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

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-200 bg-opacity-90 overflow-y-auto mt-20">
      <div
        ref={modalRef}
        className="relative w-full max-w-md mx-auto bg-white rounded-none shadow-lg p-0 max-h-[95vh] overflow-y-auto"
        style={{ boxShadow: "0 8px 32px rgba(0,0,0,0.25)" }}
      >
        <button
          onClick={onClose}
          aria-label="Chiudi modale"
          className="absolute top-2 right-2 text-black bg-white rounded-full w-8 h-8 flex items-center justify-center shadow hover:bg-gray-200 z-10"
        >
          &times;
        </button>
        <div className="flex flex-col items-center mb-6 mt-8">
          <Image src="/logo.svg" alt="Logo Oikos" width={44} height={56} priority className="mb-2" />
          <span className="font-montserrat text-black text-2xl tracking-[0.13em] uppercase">ÓIKOS</span>
        </div>
        <Card className="w-full shadow-none border-none rounded-none bg-transparent">
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
    </div>
  );
};

export default PrenotaModal; 