"use client";
import { useState, useMemo } from "react";
import { ALL_DATA, SHEET_NAMES, FilaFlujo } from "@/data/flujos";

export default function TablaFlujos() {
  const [sheet, setSheet] = useState("ALL");
  const [search, setSearch] = useState("");
  const [fInst, setFInst] = useState("");
  const [fEtapa, setFEtapa] = useState("");

  const rows: FilaFlujo[] = useMemo(() => {
    const base = sheet === "ALL"
      ? SHEET_NAMES.flatMap(s => (ALL_DATA[s] || []).map(r => ({ ...r, __flujo__: s })))
      : (ALL_DATA[sheet] || []).map(r => ({ ...r, __flujo__: sheet }));
    return base
      .filter(r => !fInst  || r.Instancia === fInst)
      .filter(r => !fEtapa || r.Etapa === fEtapa)
      .filter(r => !search || Object.values(r).join(" ").toLowerCase().includes(search.toLowerCase()));
  }, [sheet, search, fInst, fEtapa]);

  const instancias = [...new Set(SHEET_NAMES.flatMap(s => ALL_DATA[s].map(r => r.Instancia)))].sort();
  const etapas     = [...new Set(SHEET_NAMES.flatMap(s => ALL_DATA[s].map(r => r.Etapa)))].sort();

  const badgeColor: Record<string, string> = {
    "Ley": "bg-blue-100 text-blue-800",
    "Convenio": "bg-green-100 text-green-800",
  };

  return (
    <div>
      {/* Tabs de flujos */}
      <div className="flex gap-2 flex-wrap py-4">
        {["ALL", ...SHEET_NAMES].map(s => (
          <button key={s}
            onClick={() => { setSheet(s); setFInst(""); setFEtapa(""); }}
            className={`px-4 py-1.5 rounded-full text-sm font-medium border transition-all
              ${sheet === s
                ? s === "ALL" ? "bg-[#042433] text-white border-[#042433]" : "bg-[#E6223D] text-white border-[#E6223D]"
                : "bg-white text-gray-500 border-gray-300 hover:border-[#E6223D] hover:text-[#E6223D]"}`}>
            {s === "ALL" ? "Todos" : s}
          </button>
        ))}
      </div>

      {/* Filtros */}
      <div className="bg-white rounded-xl p-4 mb-4 shadow-sm border-t-4 border-[#E6223D]">
        <div className="flex gap-3 flex-wrap">
          <input value={search} onChange={e => setSearch(e.target.value)}
            placeholder="Buscar en la tabla..."
            className="flex-1 min-w-[180px] px-3 py-2 border border-gray-200 rounded-lg text-sm outline-none focus:border-[#E6223D]" />
          <select value={fInst} onChange={e => setFInst(e.target.value)}
            className="px-3 py-2 border border-gray-200 rounded-lg text-sm outline-none">
            <option value="">Todas las instancias</option>
            {instancias.map(i => <option key={i}>{i}</option>)}
          </select>
          <select value={fEtapa} onChange={e => setFEtapa(e.target.value)}
            className="px-3 py-2 border border-gray-200 rounded-lg text-sm outline-none">
            <option value="">Todas las etapas</option>
            {etapas.map(e => <option key={e}>{e}</option>)}
          </select>
        </div>
      </div>

      {/* Contador */}
      <p className="text-sm text-gray-400 mb-2">{rows.length} resultado{rows.length !== 1 ? "s" : ""}</p>

      {/* Tabla */}
      <div className="rounded-xl overflow-hidden shadow-sm">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-[#042433] text-white">
              <th className="px-3 py-2.5 text-left text-xs uppercase tracking-wide font-semibold w-[11%]">Flujo</th>
              <th className="px-3 py-2.5 text-left text-xs uppercase tracking-wide font-semibold w-[15%]">Instancia</th>
              <th className="px-3 py-2.5 text-left text-xs uppercase tracking-wide font-semibold w-[12%]">Etapa</th>
              <th className="px-3 py-2.5 text-left text-xs uppercase tracking-wide font-semibold">Tarea</th>
              <th className="px-3 py-2.5 text-left text-xs uppercase tracking-wide font-semibold w-[14%]">Tipo plazo</th>
              <th className="px-3 py-2.5 text-center text-xs uppercase tracking-wide font-semibold w-[7%]">Plazo</th>
              <th className="px-3 py-2.5 text-left text-xs uppercase tracking-wide font-semibold w-[13%]">Bitácora</th>
            </tr>
          </thead>
          <tbody className="bg-white">
            {rows.length === 0 ? (
              <tr><td colSpan={7} className="text-center py-12 text-gray-400">No se encontraron resultados</td></tr>
            ) : rows.map((r, i) => (
              <tr key={i} className="border-b border-gray-50 hover:bg-rose-50 transition-colors">
                <td className="px-3 py-2">
                  <span className="bg-[#fde0e4] text-[#E6223D] text-xs font-bold px-2 py-0.5 rounded-full">{r.__flujo__}</span>
                </td>
                <td className="px-3 py-2 text-gray-700">{r.Instancia}</td>
                <td className="px-3 py-2 text-gray-700">{r.Etapa}</td>
                <td className="px-3 py-2 font-medium text-gray-800">{r.Tarea}</td>
                <td className="px-3 py-2">
                  <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${badgeColor[r["Tipo de plazo (Ley/Resolución/Acuse/Abogado)"]] || "bg-gray-100 text-gray-600"}`}>
                    {r["Tipo de plazo (Ley/Resolución/Acuse/Abogado)"]}
                  </span>
                </td>
                <td className="px-3 py-2 text-center font-bold text-gray-800">{r.Plazo}</td>
                <td className="px-3 py-2 text-xs text-gray-400">{r.Bitácora}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}