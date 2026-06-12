  "use client";
import { useState } from "react";
import TablaFlujos from "@/components/TablaFlujos";
import SentenciasYPagos from "@/components/SentenciasYPagos";
import FlujosInternos from "@/components/FlujosInternos";
import ConsultasParalegales from "@/components/ConsultasParalegales";

export default function Home() {
  const [page, setPage] = useState("flujos");

  return (
    <div className="min-h-screen bg-[#f4f6f8]">
      <div className="bg-[#042433] px-6 py-1.5 flex items-center justify-between">
        <span className="text-xs text-white/50 uppercase tracking-widest">
          Vinatea & Toyama — Paralegal Procesal
        </span>
        <div className="flex gap-4">
          {[
            { label: "CEJ", url: "https://cej.pj.gob.pe/cej/forms/busquedaform.html" },
            { label: "SINOE", url: "https://casillas.pj.gob.pe/sinoe/login.xhtml" },
            { label: "Harvey", url: "https://harvey-ai.us.auth0.com" },
          ].map(l => (
            <a key={l.label} href={l.url} target="_blank"
              className="text-xs text-white/70 hover:text-white transition-colors">
              {l.label} ↗
            </a>
          ))}
        </div>
      </div>

      <header className="bg-[#042433] px-6 pb-4 pt-2 flex items-center gap-4 border-b-4 border-[#E6223D]">
        <div>
          <div className="text-white font-bold text-lg">Flujos Procesales — Paralegal Procesal</div>
          <div className="text-white/50 text-xs mt-0.5">Consulta inteligente de tareas procesales laborales</div>
        </div>
      </header>

      <div className="bg-[#042433] px-6 border-t border-white/10">
        <div className="flex">
          {[
            { id: "flujos", label: "Flujos Procesales" },
            { id: "sentencias", label: "Sentencias y Pagos" },
            { id: "internos", label: "Flujos Internos" },
            { id: "consultas", label: "Consultas Paralegales" },
          ].map(n => (
            <button key={n.id} onClick={() => setPage(n.id)}
              className={`py-2.5 px-4 text-sm font-medium border-b-2 transition-all
                ${page === n.id ? "text-white border-[#E6223D]" : "text-white/50 border-transparent hover:text-white"}`}>
              {n.label}
            </button>
          ))}
        </div>
      </div>

      <main className="max-w-6xl mx-auto px-6 py-6">
        {page === "flujos" && <TablaFlujos />}
        {page === "sentencias" && <SentenciasYPagos />}
        {page === "internos" && <FlujosInternos />}
        {page === "consultas" && <ConsultasParalegales />}
      </main>
    </div>
  );
}