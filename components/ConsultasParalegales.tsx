"use client";
import { useState, useEffect } from "react";

const BIN_ID  = "69f2975936566621a8093b60";
const API_KEY = "$2a$10$hTQ9ny/9OowI0/q50Q9/I..Xq5RAFwmApaR138XUO21csReUuBmUm";
const BIN_URL = `https://api.jsonbin.io/v3/b/${BIN_ID}`;
const TEAMS_URL = "https://vinateaytoyama.webhook.office.com/webhookb2/95624d5b-ca93-46d8-a883-d86797afe80e@5d66dd42-f62c-4f3e-9cb6-cf2a29a623a4/IncomingWebhook/535e1a71150a47dea1a4ca8a998fe75c/10cac26c-420a-4e6f-a583-97f0f501c17c/V2jZJpVyNfIHDxqg70f7D3vFQRZVBUIxzys1Rn6d_wDjk1";

const NOMBRES = ["Claudia", "Edu", "Nestor", "Jemima", "Jose", "Brando", "Alessandra"];
const CATEGORIAS = ["Agendamiento", "Archivo definitivo", "Bitácora / Situación", "Ejecución", "Flujo procesal", "MyBiG", "Notificaciones", "Otros", "Plazos", "Sentencias"];

type Consulta = {
  id: string;
  nombre: string;
  categoria: string;
  consulta: string;
  fecha: string;
  estado: "pendiente" | "respondida";
  respuesta?: string;
};

async function getCQ(): Promise<Consulta[]> {
  try {
    const res = await fetch(`${BIN_URL}/latest`, { headers: { "X-Master-Key": API_KEY } });
    if (!res.ok) throw new Error("HTTP " + res.status);
    const data = await res.json();
    return Array.isArray(data.record?.consultas) ? data.record.consultas : [];
  } catch { return []; }
}

async function saveCQ(data: Consulta[]): Promise<boolean> {
  try {
    const res = await fetch(BIN_URL, {
      method: "PUT",
      headers: { "Content-Type": "application/json", "X-Master-Key": API_KEY, "X-Bin-Versioning": "false" },
      body: JSON.stringify({ consultas: data }),
    });
    return res.ok;
  } catch { return false; }
}

async function notificarTeams(consulta: Consulta) {
  const [d, m, y] = consulta.fecha.split("-").reverse();
  const fechaFormateada = `${y}/${m}/${d}`;
  try {
    fetch(TEAMS_URL, {
      method: "POST",
      mode: "no-cors",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        "@type": "MessageCard",
        "@context": "http://schema.org/extensions",
        "themeColor": "E6223D",
        "summary": "Nueva consulta paralegal",
        "sections": [{
          "activityTitle": "📋 Nueva Consulta — Plataforma Paralegal",
          "activitySubtitle": fechaFormateada,
          "facts": [
            { "name": "👤 De:", "value": consulta.nombre },
            { "name": "📂 Categoría:", "value": consulta.categoria },
            { "name": "❓ Consulta:", "value": consulta.consulta }
          ]
        }]
      })
    });
  } catch(e) { console.log("Teams:", e); }
}

export default function ConsultasParalegales() {
  const [tab, setTab] = useState<"nueva" | "pendientes">("nueva");
  const [consultas, setConsultas] = useState<Consulta[]>([]);
  const [cargando, setCargando] = useState(true);

  const cargar = async () => {
    setCargando(true);
    const data = await getCQ();
    setConsultas(data);
    setCargando(false);
  };

  useEffect(() => { cargar(); }, []);

  const pendientes = consultas.filter(c => c.estado === "pendiente");

  const guardar = async (nuevas: Consulta[]) => {
    setConsultas(nuevas);
    await saveCQ(nuevas);
  };

  return (
    <div>
      <div className="flex border-b border-gray-200 mb-6 mt-4">
        {[
          { id: "nueva", label: "➕ Nueva consulta" },
          { id: "pendientes", label: "📬 Pendientes", badge: pendientes.length },
        ].map(t => (
          <button key={t.id} onClick={() => { setTab(t.id as any); cargar(); }}
            className={`px-4 py-2.5 text-sm font-medium border-b-2 transition-all flex items-center gap-1
              ${tab === t.id ? "text-[#E6223D] border-[#E6223D] font-semibold" : "text-gray-500 border-transparent hover:text-[#042433]"}`}>
            {t.label}
            {t.badge !== undefined && t.badge > 0 && (
              <span className="bg-[#E6223D] text-white text-xs font-bold px-2 py-0.5 rounded-full">{t.badge}</span>
            )}
          </button>
        ))}
      </div>

      {cargando ? (
        <div className="text-center py-12 text-gray-400 text-sm">Cargando consultas...</div>
      ) : (
        <>
          {tab === "nueva" && <FormNueva consultas={consultas} guardar={guardar} setTab={setTab} />}
          {tab === "pendientes" && <Pendientes consultas={consultas} guardar={guardar} />}
        </>
      )}
    </div>
  );
}

function FormNueva({ consultas, guardar, setTab }: {
  consultas: Consulta[];
  guardar: (c: Consulta[]) => Promise<void>;
  setTab: (t: any) => void;
}) {
  const [nombre, setNombre] = useState("");
  const [categoria, setCategoria] = useState("");
  const [texto, setTexto] = useState("");
  const [fecha, setFecha] = useState(new Date().toISOString().split("T")[0]);
  const [enviando, setEnviando] = useState(false);
  const [ok, setOk] = useState(false);

  const enviar = async () => {
    if (!nombre || !categoria || !texto) { alert("Por favor completa todos los campos."); return; }
    setEnviando(true);
    const nueva: Consulta = {
      id: Date.now().toString(),
      nombre, categoria, consulta: texto, fecha,
      estado: "pendiente",
    };
    await guardar([...consultas, nueva]);
    await notificarTeams(nueva);
    setNombre(""); setCategoria(""); setTexto("");
    setFecha(new Date().toISOString().split("T")[0]);
    setEnviando(false);
    setOk(true);
    setTimeout(() => { setOk(false); setTab("pendientes"); }, 1500);
  };

  return (
    <div className="bg-white rounded-xl shadow-sm p-6 max-w-2xl">
      <h3 className="text-base font-bold text-[#042433] mb-4">📝 Registrar nueva consulta</h3>
      {ok && <div className="bg-green-50 border border-green-300 rounded-lg p-3 mb-4 text-sm text-green-800 font-medium">✅ Consulta enviada correctamente.</div>}
      <div className="space-y-4">
        <div>
          <label className="block text-xs font-bold text-[#042433] uppercase tracking-wide mb-1">Paralegal</label>
          <select value={nombre} onChange={e => setNombre(e.target.value)}
            className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm outline-none focus:border-[#E6223D]">
            <option value="">— Selecciona tu nombre —</option>
            {NOMBRES.map(n => <option key={n}>{n}</option>)}
          </select>
        </div>
        <div>
          <label className="block text-xs font-bold text-[#042433] uppercase tracking-wide mb-1">Categoría</label>
          <select value={categoria} onChange={e => setCategoria(e.target.value)}
            className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm outline-none focus:border-[#E6223D]">
            <option value="">— Selecciona una categoría —</option>
            {CATEGORIAS.map(c => <option key={c}>{c}</option>)}
          </select>
        </div>
        <div>
          <label className="block text-xs font-bold text-[#042433] uppercase tracking-wide mb-1">Fecha</label>
          <input type="date" value={fecha} onChange={e => setFecha(e.target.value)}
            className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm outline-none focus:border-[#E6223D]" />
        </div>
        <div>
          <label className="block text-xs font-bold text-[#042433] uppercase tracking-wide mb-1">Consulta</label>
          <textarea value={texto} onChange={e => setTexto(e.target.value)} rows={4}
            placeholder="Describe tu consulta con el mayor detalle posible..."
            className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm outline-none focus:border-[#E6223D] resize-vertical" />
        </div>
        <button onClick={enviar} disabled={enviando}
          className="px-6 py-2.5 bg-[#E6223D] text-white font-semibold text-sm rounded-lg hover:bg-[#B01A2E] disabled:bg-gray-300 transition-colors">
          {enviando ? "Enviando..." : "Enviar consulta ↗"}
        </button>
      </div>
    </div>
  );
}

function Pendientes({ consultas, guardar }: {
  consultas: Consulta[];
  guardar: (c: Consulta[]) => Promise<void>;
}) {
  const [respuestas, setRespuestas] = useState<Record<string, string>>({});

  const responder = async (id: string) => {
    const texto = respuestas[id]?.trim();
    if (!texto) { alert("Escribe una respuesta antes de enviar."); return; }
    await guardar(consultas.map(c => c.id === id ? { ...c, estado: "respondida", respuesta: texto } : c));
    setRespuestas(prev => { const n = { ...prev }; delete n[id]; return n; });
  };

  const pendientes = consultas.filter(c => c.estado === "pendiente");
  const respondidas = consultas.filter(c => c.estado === "respondida");

  if (!consultas.length)
    return <div className="bg-white rounded-xl p-12 text-center text-gray-400 text-sm">No hay consultas registradas aún.</div>;

  return (
    <div className="space-y-6">
      {pendientes.length > 0 && (
        <div>
          <h3 className="text-sm font-bold text-[#042433] mb-3">Pendientes ({pendientes.length})</h3>
          <div className="space-y-3">
            {pendientes.map(c => (
              <div key={c.id} className="bg-white rounded-xl shadow-sm border-l-4 border-[#E6223D] p-4">
                <div className="flex items-center gap-3 mb-2 flex-wrap">
                  <span className="font-bold text-sm text-[#042433]">{c.nombre}</span>
                  <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2 py-0.5 rounded-full">{c.categoria}</span>
                  <span className="bg-[#fde0e4] text-[#E6223D] text-xs font-bold px-2 py-0.5 rounded-full">Pendiente</span>
                  <span className="text-xs text-gray-400 ml-auto">{c.fecha}</span>
                </div>
                <p className="text-sm text-gray-700 mb-3">{c.consulta}</p>
                <div className="flex flex-col gap-2">
                  <textarea
                    value={respuestas[c.id] || ""}
                    onChange={e => setRespuestas(prev => ({ ...prev, [c.id]: e.target.value }))}
                    placeholder="Escribe la respuesta..."
                    rows={3}
                    className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm outline-none focus:border-green-500 resize-vertical" />
                  <button onClick={() => responder(c.id)}
                    className="self-start px-4 py-2 bg-[#042433] text-white text-xs font-bold rounded-lg hover:bg-[#0a3a54] transition-colors">
                    Responder
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {respondidas.length > 0 && (
        <div>
          <h3 className="text-sm font-bold text-gray-400 mb-3">Respondidas ({respondidas.length})</h3>
          <div className="space-y-3">
            {respondidas.map(c => (
              <div key={c.id} className="bg-white rounded-xl shadow-sm border-l-4 border-green-400 p-4">
                <div className="flex items-center gap-3 mb-2 flex-wrap">
                  <span className="font-bold text-sm text-[#042433]">{c.nombre}</span>
                  <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2 py-0.5 rounded-full">{c.categoria}</span>
                  <span className="bg-green-100 text-green-800 text-xs font-bold px-2 py-0.5 rounded-full">Respondida</span>
                  <span className="text-xs text-gray-400 ml-auto">{c.fecha}</span>
                </div>
                <p className="text-sm text-gray-700 mb-3">{c.consulta}</p>
                <div className="bg-gray-50 rounded-lg p-3">
                  <div className="text-xs font-bold text-green-700 uppercase tracking-wide mb-1">Respuesta</div>
                  <p className="text-sm text-gray-700">{c.respuesta}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}