"use client";
import { useState } from "react";

export default function SentenciasYPagos() {
  const [tab, setTab] = useState<"registro" | "cap">("registro");

  return (
    <div>
      <div className="flex gap-2 flex-wrap py-4">
        {[{ id: "registro", label: "Registro y Pagos" }, { id: "cap", label: "Tipos y campos de sentencias" }].map(p => (
          <button key={p.id} onClick={() => setTab(p.id as any)}
            className={`px-4 py-1.5 rounded-full text-sm font-medium border transition-all
              ${tab === p.id ? "bg-[#E6223D] text-white border-[#E6223D]" : "bg-white text-gray-500 border-gray-300 hover:border-[#E6223D] hover:text-[#E6223D]"}`}>
            {p.label}
          </button>
        ))}
      </div>

      {tab === "registro" && (
        <div className="space-y-4">
          {/* Regla general */}
          <div className="bg-yellow-50 border border-yellow-300 rounded-xl p-4 flex gap-3">
            <span className="text-xl">⚠️</span>
            <p className="text-sm text-gray-800"><strong>Regla general:</strong> Se debe agendar <strong>"Informar al cliente"</strong> dentro del plazo de <strong>3 días</strong>. Aplica a todos los tipos de proceso.</p>
          </div>

          {/* Plazos por tipo */}
          <Card titulo="Plazos de Recursos por Tipo de Proceso">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { titulo: "Ordinario / Abreviado", instancias: [
                  { label: "Primera Instancia", items: [
                    { dias: "5d", color: "blue", texto: "Apelación contraparte — A favor" },
                    { dias: "5d", color: "red", texto: "Apelación de sentencia — En contra" },
                    { exc: "Excepción", texto: "Fundado en parte: ambas tareas (dte. y ddo.) — solo cuando seamos dtes." },
                  ]},
                  { label: "Segunda Instancia", items: [
                    { dias: "10d", color: "blue", texto: "Rec. casación contraparte — A favor" },
                    { dias: "10d", color: "red", texto: "Rec. casación — En contra" },
                    { exc: "Excepción", texto: "Fundado en parte: ambas tareas — solo cuando seamos dtes." },
                  ]},
                  { label: "Tercera Instancia", items: [
                    { accion: "Acción", texto: "Informar al cliente. De corresponder: demanda de amparo (aplica Cerro Verde)." },
                  ]},
                ]},
                { titulo: "Proceso de Amparo", instancias: [
                  { label: "Primera Instancia", items: [
                    { dias: "3d", color: "blue", texto: "Apelación contraparte — A favor" },
                    { dias: "3d", color: "red", texto: "Apelación de sentencia — En contra" },
                    { exc: "Excepción 2", texto: "Puede comenzar en sala la primera instancia." },
                  ]},
                  { label: "Segunda Instancia", items: [
                    { dias: "10d", color: "blue", texto: "Rec. agravio constitucional — A favor" },
                    { dias: "10d", color: "red", texto: "Rec. agravio constitucional — En contra" },
                    { exc: "Excepción 2", texto: "Si llega a Suprema, es su segunda instancia." },
                  ]},
                  { label: "Tercera Instancia", items: [
                    { accion: "Acción", texto: "Informar al cliente." },
                  ]},
                ]},
                { titulo: "Contencioso Administrativo (ACA)", instancias: [
                  { label: "Primera Instancia", items: [
                    { dias: "5d", color: "blue", texto: "Apelación contraparte — A favor" },
                    { dias: "5d", color: "red", texto: "Apelación de sentencia — En contra" },
                  ]},
                  { label: "Segunda Instancia", items: [
                    { dias: "10d", color: "blue", texto: "Rec. casación contraparte — A favor" },
                    { dias: "10d", color: "red", texto: "Rec. casación — En contra" },
                  ]},
                  { label: "Tercera Instancia", items: [
                    { accion: "Acción", texto: "Informar al cliente." },
                  ]},
                ]},
                { titulo: "ILA / Juzgado de Paz Letrado", instancias: [
                  { label: "Primera Instancia", items: [
                    { dias: "5d", color: "blue", texto: "Apelación contraparte — A favor" },
                    { dias: "5d", color: "red", texto: "Apelación de sentencia — En contra" },
                  ]},
                  { label: "Segunda Instancia", items: [
                    { accion: "Acción", texto: "Informar al cliente." },
                  ]},
                ]},
              ].map(proc => (
                <div key={proc.titulo} className="border border-gray-200 rounded-xl overflow-hidden">
                  <div className="bg-[#042433] px-4 py-3">
                    <span className="text-white font-semibold text-sm">{proc.titulo}</span>
                  </div>
                  <div className="p-4 space-y-3">
                    {proc.instancias.map(inst => (
                      <div key={inst.label}>
                        <div className="text-xs font-bold text-[#156082] uppercase tracking-wide mb-2">{inst.label}</div>
                        {inst.items.map((item: any, i) => (
                          <div key={i} className="flex gap-2 items-start mb-1 text-sm">
                            {item.dias && <span className={`text-xs font-bold px-2 py-0.5 rounded shrink-0 ${item.color === "blue" ? "bg-[#156082] text-white" : "bg-[#E6223D] text-white"}`}>{item.dias}</span>}
                            {item.exc && <span className="text-xs font-bold px-2 py-0.5 rounded shrink-0 bg-[#fde0e4] text-[#E6223D]">{item.exc}</span>}
                            {item.accion && <span className="text-xs font-bold px-2 py-0.5 rounded shrink-0 bg-gray-100 text-gray-500">{item.accion}</span>}
                            <span className={item.exc ? "text-[#E6223D] text-xs" : item.accion ? "text-gray-500 text-xs italic" : "text-gray-700"}>{item.texto}</span>
                          </div>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* Registro de sentencias */}
          <Card titulo="Registro de Sentencias">
            <div className="overflow-x-auto">
              <table className="w-full text-xs border-collapse">
                <thead>
                  <tr className="bg-[#042433] text-white">
                    <th className="px-3 py-2 text-left w-1/4"></th>
                    <th className="px-3 py-2 text-left">Primera instancia</th>
                    <th className="px-3 py-2 text-left">Segunda instancia</th>
                    <th className="px-3 py-2 text-left">Tercera instancia</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-100">
                    <td className="px-3 py-2 font-semibold text-[#042433]">Sentencia</td>
                    <td className="px-3 py-2"><Tags items={["Fundada","Infundada","Fundada en parte","Otras formas"]} /></td>
                    <td className="px-3 py-2"><Tags items={["Fundada","Infundada","Fundada en parte","Nula"]} /></td>
                    <td className="px-3 py-2"><Tags items={["Fundada","Infundada","Fundada en parte","Nula"]} /></td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="px-3 py-2 font-semibold text-[#042433]">Tarea</td>
                    <td className="px-3 py-2 text-gray-700"><div><strong>En contra:</strong> Apelación de sentencia</div><div><strong>A favor:</strong> Apelación contraparte</div></td>
                    <td className="px-3 py-2 text-gray-700"><div><strong>En contra:</strong> Rec. casación / Agravio</div><div><strong>A favor:</strong> Rec. casación / Agravio</div></td>
                    <td className="px-3 py-2 text-gray-500 italic">No corresponde</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="px-3 py-2 font-semibold text-[#042433]">Actualización</td>
                    <td className="px-3 py-2 text-gray-700"><div><strong>Situación:</strong> Primera instancia</div><div><strong>Bitácora:</strong> Pendiente de conceder apelación de sentencia</div></td>
                    <td className="px-3 py-2 text-gray-700"><div><strong>Situación:</strong> Segunda instancia</div><div><strong>Bitácora:</strong> Pendiente de conceder rec. casación / agravio</div></td>
                    <td className="px-3 py-2 text-gray-700"><div><strong>Situación:</strong> Ejecución</div><div><strong>Bitácora:</strong> Pendiente de archivo definitivo / cumplir obligación principal</div></td>
                  </tr>
                  <tr>
                    <td className="px-3 py-2 font-semibold text-[#042433]">Provisión</td>
                    <td className="px-3 py-2"><Tags items={["Posible","Probable","Remoto"]} /></td>
                    <td className="px-3 py-2"><Tags items={["Posible","Probable","Remoto"]} /></td>
                    <td className="px-3 py-2"><Tags items={["Posible","Probable","Remoto"]} /></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Card>

          {/* Provisión V&T */}
          <Card titulo="Provisión V&T">
            <div className="grid grid-cols-3 gap-4">
              {[
                { label: "Posible", color: "bg-[#156082]", monto: "Sin monto — S/ 0", items: ["Al inicio de un proceso", "Fallo sin monto cuantificable"] },
                { label: "Probable", color: "bg-[#E6223D]", monto: "Con monto — Capital sentenciado", items: ["Fallo con monto cuantificable"] },
                { label: "Remoto", color: "bg-[#899298]", monto: "Sin monto — S/ 0", items: ["Fallo infundado, improcedente o demanda finalizada"] },
              ].map(p => (
                <div key={p.label} className="border border-gray-200 rounded-lg overflow-hidden">
                  <div className={`${p.color} px-3 py-2 text-white font-bold text-sm`}>{p.label}</div>
                  <div className="p-3">
                    <div className={`text-sm font-bold mb-2 ${p.label === "Probable" ? "text-[#E6223D]" : "text-gray-400"}`}>{p.monto}</div>
                    <ul className="text-xs text-gray-500 space-y-1">
                      {p.items.map(i => <li key={i}>• {i}</li>)}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* Registro de pagos */}
          <Card titulo="Registro de Pagos">
            <div className="overflow-x-auto">
              <table className="w-full text-xs border-collapse">
                <thead>
                  <tr className="bg-[#042433] text-white">
                    <th className="px-3 py-2 text-left w-1/6"></th>
                    <th className="px-3 py-2 text-left">Obligación principal</th>
                    <th className="px-3 py-2 text-left">Intereses</th>
                    <th className="px-3 py-2 text-left">Costos y CAL</th>
                    <th className="px-3 py-2 text-left">Costas</th>
                    <th className="px-3 py-2 text-left">Monto conciliado</th>
                    <th className="px-3 py-2 text-left">Nada pendiente</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-100">
                    <td className="px-3 py-2 font-semibold text-[#042433]">Tarea</td>
                    <td className="px-3 py-2">Cumplir obligación principal</td>
                    <td className="px-3 py-2">Cumplir pago de intereses</td>
                    <td className="px-3 py-2">Cumplir costas, costos y/o CAL</td>
                    <td className="px-3 py-2">Cumplir costas, costos y/o CAL</td>
                    <td className="px-3 py-2">Cumplir obligación principal</td>
                    <td className="px-3 py-2 text-gray-400 italic">No corresponde</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="px-3 py-2 font-semibold text-[#042433]">Bitácora</td>
                    <td className="px-3 py-2">Pendiente de cumplir obligación principal</td>
                    <td className="px-3 py-2">Pendiente de intereses</td>
                    <td className="px-3 py-2">Pendiente de costos / CAL</td>
                    <td className="px-3 py-2">Pendiente de costas</td>
                    <td className="px-3 py-2">Pendiente de cumplir obligación principal</td>
                    <td className="px-3 py-2">Pendiente de archivo definitivo</td>
                  </tr>
                  <tr>
                    <td className="px-3 py-2 font-semibold text-[#042433]">Al presentar escrito</td>
                    <td className="px-3 py-2 italic text-gray-600" colSpan={4}>Levantar tarea y actualizar bitácora: Pendiente de lo que quede pendiente de pago.</td>
                    <td className="px-3 py-2 italic text-gray-600">Pendiente de archivo definitivo.</td>
                    <td className="px-3 py-2 text-gray-400 italic">No corresponde</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Card>
        </div>
      )}

      {tab === "cap" && (
        <div className="space-y-4">
          {/* Campos del registro */}
          <Card titulo="Campos del Registro de Sentencias">
            <table className="w-full text-sm border-collapse">
              <thead><tr className="bg-[#042433] text-white text-xs"><th className="px-3 py-2 text-left w-1/4">Campo</th><th className="px-3 py-2 text-left">Detalle</th></tr></thead>
              <tbody>
                {[
                  ["Fecha", "Fecha de notificación de la resolución a casilla 108030 o al agendar el recurso."],
                  ["Sentencia", "La decisión final respecto de las pretensiones de la demanda. No se registra la decisión respecto de un recurso. En cuadernos incidentales no se realiza este registro."],
                  ["Resultado V&T", "Toda sentencia en contra es desfavorable, excepto cuando es menor al 20% de la cuantía. Conciliación siempre es favorable."],
                  ["Resultado Cliente", "Favorable: ganado al 100%. Desfavorable: cualquier resultado con pérdida."],
                  ["Detalle de Sentencia", "La parte resolutoria de la sentencia o auto final."],
                  ["Reposición", "Cuando se ordena reposición. En recursos de casación, depende si confirma o reforma la sentencia previa."],
                  ["Contactos", "Juez · Vocal Ponente · Vocal Alterno"],
                ].map(([campo, detalle]) => (
                  <tr key={campo} className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="px-3 py-2 font-semibold text-[#042433] text-xs">{campo}</td>
                    <td className="px-3 py-2 text-gray-700 text-xs">{detalle}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Card>

          {/* Tipos de sentencia */}
          <Card titulo="Tipos de Sentencia">
            <div className="grid grid-cols-2 gap-3">
              {[
                { tipo: "Fundada", desc: "El juez acoge íntegramente la demanda.", hdr: "bg-[#E6223D]" },
                { tipo: "Fundada en parte", desc: "El juez acoge parcialmente la demanda.", hdr: "bg-[#156082]" },
                { tipo: "Improcedente", desc: "No se cumplieron los requisitos procesales.", hdr: "bg-[#899298]" },
                { tipo: "Nulo", desc: "Tribunal superior anula sentencia previa por vicios procesales graves.", hdr: "bg-[#042433]" },
              ].map(s => (
                <div key={s.tipo} className="border border-gray-200 rounded-lg overflow-hidden">
                  <div className={`${s.hdr} px-3 py-2 text-white font-bold text-xs`}>{s.tipo}</div>
                  <div className="px-3 py-2 text-xs text-gray-700">{s.desc}</div>
                </div>
              ))}
            </div>
          </Card>

          {/* Autos finales */}
          <Card titulo="Autos Finales">
            <table className="w-full text-sm border-collapse">
              <thead><tr className="bg-[#042433] text-white text-xs"><th className="px-3 py-2 text-left w-1/4">Auto final</th><th className="px-3 py-2 text-left">Detalle</th></tr></thead>
              <tbody>
                {[
                  ["Desistimiento", "No se registra si el desistimiento es de un recurso."],
                  ["Conciliación", "Siempre impulsado por el Juez. Puede celebrarse en cualquier etapa."],
                  ["Transacción", "Acuerdo privado informado al juez, con eficacia de cosa juzgada."],
                  ["Excepción", "Incompetencia, prescripción, cosa juzgada, litispendencia, falta de legitimidad."],
                  ["Abandono", "Inactividad. Incluye inasistencias sin pedido de reprogramación en los 30 días posteriores."],
                  ["Acumulación", "Se registra el auto en el proceso acumulado. El proceso al que acumulan prosigue."],
                  ["Consignación", "Depósito judicial para cumplir total o parcialmente una obligación."],
                ].map(([auto, detalle]) => (
                  <tr key={auto} className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="px-3 py-2 font-semibold text-[#042433] text-xs">{auto}</td>
                    <td className="px-3 py-2 text-gray-700 text-xs">{detalle}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Card>

          {/* Montos y estados */}
          <Card titulo="Montos y Estados">
            <table className="w-full text-sm border-collapse mb-4">
              <thead><tr className="bg-[#042433] text-white text-xs"><th className="px-3 py-2 text-left w-1/4">Campo</th><th className="px-3 py-2 text-left">Detalle</th></tr></thead>
              <tbody>
                {[
                  ["Monto de sentencia", "Suma total sentenciada. No incluye intereses, costos ni costas."],
                  ["Calificación V&T", "Posible / Probable / Remoto"],
                  ["Obligación principal", "Deuda principal sin intereses, costas ni otros conceptos."],
                  ["Intereses", "Obligación accesoria por retardo. Siempre presente cuando la obligación principal es cuantitativa."],
                  ["Costos / CAL", "Gastos de defensa + aporte al colegio de abogados. Indicados en sentencia."],
                  ["Costas", "Gastos judiciales de la tramitación. Indicados en sentencia."],
                ].map(([campo, detalle]) => (
                  <tr key={campo} className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="px-3 py-2 font-semibold text-[#042433] text-xs">{campo}</td>
                    <td className="px-3 py-2 text-gray-700 text-xs">{detalle}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <div className="text-xs font-bold text-[#042433] uppercase tracking-wide mb-2">Estado</div>
                {[
                  { label: "Por pagar", desc: "Hay requerimiento/monto. Aún no se cumple.", color: "bg-blue-100 text-blue-800" },
                  { label: "Por liquidar", desc: "Sin requerimiento ni monto. Aún no se cumple.", color: "bg-gray-100 text-gray-600" },
                  { label: "No corresponde", desc: "Sentencia indica que no corresponde ejecutar ese concepto.", color: "bg-[#d8e6ee] text-[#042433]" },
                  { label: "No hay dato", desc: "Sin documentación suficiente pero se sabe que correspondía cumplirse.", color: "bg-gray-100 text-gray-500" },
                ].map(e => (
                  <div key={e.label} className="flex gap-2 items-start mb-2">
                    <span className={`text-xs font-bold px-2 py-0.5 rounded-full shrink-0 ${e.color}`}>{e.label}</span>
                    <span className="text-xs text-gray-600">{e.desc}</span>
                  </div>
                ))}
              </div>
              <div>
                <div className="text-xs font-bold text-[#042433] uppercase tracking-wide mb-2">Procesado</div>
                {[
                  { label: "Sí", desc: "Se cumplió. No requiere estado (excepto \"No hay dato\").", color: "bg-green-100 text-green-800" },
                  { label: "No", desc: "Aún no cumplido. Requiere siempre de un estado.", color: "bg-[#fde0e4] text-[#E6223D]" },
                ].map(e => (
                  <div key={e.label} className="flex gap-2 items-start mb-2">
                    <span className={`text-xs font-bold px-2 py-0.5 rounded-full shrink-0 ${e.color}`}>{e.label}</span>
                    <span className="text-xs text-gray-600">{e.desc}</span>
                  </div>
                ))}
              </div>
            </div>
          </Card>
        </div>
      )}
    </div>
  );
}

function Card({ titulo, children }: { titulo: string; children: React.ReactNode }) {
  return (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden">
      <div className="bg-[#042433] px-4 py-3">
        <span className="text-white font-semibold text-sm">{titulo}</span>
      </div>
      <div className="p-4">{children}</div>
    </div>
  );
}

function Tags({ items }: { items: string[] }) {
  const colors: Record<string, string> = {
    "Fundada": "bg-[#fde0e4] text-[#E6223D]",
    "Fundada en parte": "bg-blue-100 text-blue-800",
    "Probable": "bg-[#fde0e4] text-[#E6223D]",
    "Posible": "bg-blue-100 text-blue-800",
    "Remoto": "bg-gray-100 text-gray-600",
  };
  return (
    <div className="flex gap-1 flex-wrap">
      {items.map(i => (
        <span key={i} className={`text-xs font-semibold px-2 py-0.5 rounded-full ${colors[i] || "bg-gray-100 text-gray-600"}`}>{i}</span>
      ))}
    </div>
  );
}