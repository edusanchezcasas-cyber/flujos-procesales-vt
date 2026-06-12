"use client";
import { useState } from "react";

const secciones = [
  { id: "notif", label: "Notificaciones" },
  { id: "contingentes", label: "Tareas Contingentes" },
  { id: "aca", label: "Interposición de ACA" },
  { id: "tc", label: "Flujo TC" },
  { id: "archivo", label: "Archivo Definitivo" },
];

export default function FlujosInternos() {
  const [seccion, setSeccion] = useState("notif");
  const [search, setSearch] = useState("");

  return (
    <div>
      <div className="flex gap-2 flex-wrap py-4">
        {secciones.map(s => (
          <button key={s.id} onClick={() => { setSeccion(s.id); setSearch(""); }}
            className={`px-4 py-1.5 rounded-full text-sm font-medium border transition-all
              ${seccion === s.id ? "bg-[#E6223D] text-white border-[#E6223D]" : "bg-white text-gray-500 border-gray-300 hover:border-[#E6223D] hover:text-[#E6223D]"}`}>
            {s.label}
          </button>
        ))}
      </div>

      <div className="mb-4">
        <input value={search} onChange={e => setSearch(e.target.value)}
          placeholder={`Buscar en ${secciones.find(s => s.id === seccion)?.label}...`}
          className="w-full px-4 py-2 border border-gray-200 rounded-lg text-sm outline-none focus:border-[#E6223D]" />
      </div>

      {seccion === "notif" && <Notificaciones search={search} />}
      {seccion === "contingentes" && <Contingentes search={search} />}
      {seccion === "aca" && <ACA search={search} />}
      {seccion === "tc" && <FlujTC search={search} />}
      {seccion === "archivo" && <Archivo search={search} />}
    </div>
  );
}

function Notificaciones({ search }: { search: string }) {
  return (
    <div className="space-y-4">
      <Card titulo="Agendamiento de Notificaciones">
        <table className="w-full text-sm border-collapse">
          <thead><tr className="bg-[#042433] text-white text-xs">
            <th className="px-3 py-2 text-left w-1/4">Horario</th>
            <th className="px-3 py-2 text-left">Actividad</th>
            <th className="px-3 py-2 text-left w-1/4">Detalle</th>
          </tr></thead>
          <tbody>
            <tr className="border-b border-gray-100 hover:bg-gray-50">
              <td className="px-3 py-2 font-semibold text-[#042433] text-xs">Hasta las 4:00 pm</td>
              <td className="px-3 py-2 text-xs"><strong>Agendamiento de notificaciones</strong><br /><span className="text-gray-500">1° reporte "pendientes" · 2° y 3° reporte día anterior</span></td>
              <td className="px-3 py-2 text-xs"><span className="bg-[#d8e6ee] text-[#042433] text-xs font-bold px-2 py-0.5 rounded-full mr-1">60 notif. total</span><span className="bg-blue-100 text-blue-800 text-xs font-bold px-2 py-0.5 rounded-full">30 c/u</span></td>
            </tr>
            <tr className="border-b border-gray-100 hover:bg-gray-50">
              <td className="px-3 py-2 font-semibold text-[#042433] text-xs">4:00 – 4:30 pm</td>
              <td className="px-3 py-2 text-xs"><strong>Validación</strong><br /><span className="text-gray-500">1° reporte del día</span></td>
              <td className="px-3 py-2 text-xs"><span className="bg-[#fde0e4] text-[#E6223D] text-xs font-bold px-2 py-0.5 rounded-full">50 notif. 50%</span></td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="px-3 py-2 font-semibold text-[#042433] text-xs">4:30 – 5:30 pm</td>
              <td className="px-3 py-2 text-xs"><strong>Agendamiento del 50% restante</strong><br /><span className="text-gray-500">Revisando las que tienen plazos cortos del total de ambos</span></td>
              <td className="px-3 py-2 text-xs"><span className="bg-green-100 text-green-800 text-xs font-bold px-2 py-0.5 rounded-full mr-1">100 notif. 100%</span><span className="bg-blue-100 text-blue-800 text-xs font-bold px-2 py-0.5 rounded-full">40 total · 20 c/u</span></td>
            </tr>
          </tbody>
        </table>
      </Card>

      <Card titulo="Reportes">
        <table className="w-full text-sm border-collapse">
          <thead><tr className="bg-[#042433] text-white text-xs">
            <th className="px-3 py-2 text-left w-1/4">Horario</th>
            <th className="px-3 py-2 text-left">Reporte</th>
            <th className="px-3 py-2 text-left w-1/5">Responsable</th>
          </tr></thead>
          <tbody>
            {[
              { hora: "~12:00 pm", rep: "3er reporte de notificaciones", det: "Incluye notif. del TC y recogidas por Juanjo (~35 promedio)", resp: "Nestor", color: "bg-[#d8e6ee] text-[#042433]" },
              { hora: "~4:00 pm", rep: "1er reporte de notificaciones (~40 promedio)", det: "", resp: "Nestor", color: "bg-[#d8e6ee] text-[#042433]" },
              { hora: "~4:00 pm", rep: "Reporte de tareas diarias", det: "", resp: "Jose", color: "bg-blue-100 text-blue-800" },
              { hora: "~7:00 pm", rep: "2do reporte de notificaciones (~25 promedio)", det: "", resp: "Nestor", color: "bg-[#d8e6ee] text-[#042433]" },
              { hora: "Mar y Jue 1:00 pm", rep: "Reporte de diligencias", det: "", resp: "Jose", color: "bg-blue-100 text-blue-800" },
            ].map((r, i) => (
              <tr key={i} className="border-b border-gray-100 hover:bg-gray-50">
                <td className="px-3 py-2 font-semibold text-[#042433] text-xs">{r.hora}</td>
                <td className="px-3 py-2 text-xs"><strong>{r.rep}</strong>{r.det && <><br /><span className="text-gray-500">{r.det}</span></>}</td>
                <td className="px-3 py-2"><span className={`text-xs font-bold px-2 py-0.5 rounded-full ${r.color}`}>{r.resp}</span></td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>

      <Card titulo="Resoluciones Físicas (Procurador)">
        <div className="space-y-2">
          {[
            { n: "1", texto: "Recepción de notificaciones en físico (Brando)", color: "blue" },
            { n: "2", texto: "Escaneo, registro en ND / MB y reporte de notificaciones en físico (Brando)", color: "blue" },
            { n: "3", texto: "Inclusión en el 3° reporte de notificaciones (Nestor)", color: "blue" },
            { n: "4", texto: "Agendamiento de tareas de las notificaciones (Nestor)", color: "blue" },
          ].map(p => <Paso key={p.n} {...p} />)}
        </div>
      </Card>
    </div>
  );
}

function Contingentes({ search }: { search: string }) {
  return (
    <div className="space-y-4">
      <Card titulo="Flujo de Tareas Contingentes">
        <table className="w-full text-sm border-collapse">
          <thead><tr className="bg-[#042433] text-white text-xs">
            <th className="px-3 py-2 text-left w-1/4">Horario</th>
            <th className="px-3 py-2 text-left">Acción</th>
            <th className="px-3 py-2 text-left w-1/4">Responsable</th>
          </tr></thead>
          <tbody>
            {[
              { hora: "11:00 a.m.", acc: "Reporte de tareas contingentes", det: "Paralegal Procesal envía a socios, supervisores y asociados", resp: "Paralegal Procesal", color: "bg-[#fde0e4] text-[#E6223D]" },
              { hora: "Hasta 12:30 p.m.", acc: "Solicitud de reprogramación", det: "Opción A: Enviar correo REPROGRAMAR TAREA CONTINGENTE · Opción B: Responder correo REPORTE DE TAREAS DIARIAS", resp: "Equipos legales", color: "bg-[#d8e6ee] text-[#042433]" },
              { hora: "4:00 p.m.", acc: "Reporte de Tareas Diarias + estado de contingentes", det: "", resp: "Paralegal Procesal", color: "bg-[#fde0e4] text-[#E6223D]" },
              { hora: "5:00 – 6:00 p.m.", acc: "Control de supervisores", det: "", resp: "Supervisores", color: "bg-[#d8e6ee] text-[#042433]" },
              { hora: "8:00 – 8:30 p.m.", acc: "Recordatorios a todos los involucrados", det: "", resp: "Paralegal Procesal", color: "bg-[#fde0e4] text-[#E6223D]" },
              { hora: "9:00 p.m.", acc: "Reporte final", det: "", resp: "Paralegal Procesal", color: "bg-[#fde0e4] text-[#E6223D]" },
            ].map((r, i) => (
              <tr key={i} className="border-b border-gray-100 hover:bg-gray-50">
                <td className="px-3 py-2 font-semibold text-[#042433] text-xs">{r.hora}</td>
                <td className="px-3 py-2 text-xs"><strong>{r.acc}</strong>{r.det && <><br /><span className="text-gray-500">{r.det}</span></>}</td>
                <td className="px-3 py-2"><span className={`text-xs font-bold px-2 py-0.5 rounded-full ${r.color}`}>{r.resp}</span></td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>

      <Card titulo="Tareas sujetas a seguimiento">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
          <div className="bg-[#fdf2f3] border border-[#f5c0c5] rounded-lg p-3">
            <div className="text-xs font-bold text-[#E6223D] uppercase tracking-wide mb-2">Recursos</div>
            <ul className="text-xs text-gray-700 space-y-1">
              {["Recurso de casación / Agravio constitucional", "Recurso de queja", "Apelación de sentencia", "Apelación de auto"].map(i => <li key={i}>• {i}</li>)}
            </ul>
          </div>
          <div className="bg-[#f0f6ff] border border-[#b5d4f4] rounded-lg p-3">
            <div className="text-xs font-bold text-[#156082] uppercase tracking-wide mb-2">Ejecución</div>
            <ul className="text-xs text-gray-700 space-y-1">
              {["Cumple mandato", "Cumplir obligación principal", "Cumplir pago de intereses", "Cumplir pago de costas, costos y/o CAL"].map(i => <li key={i}>• {i}</li>)}
            </ul>
          </div>
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-3">
            <div className="text-xs font-bold text-[#042433] uppercase tracking-wide mb-2">Otras tareas</div>
            <ul className="text-xs text-gray-700 space-y-1">
              {["Solicitud informe oral", "Oposición a medida cautelar", "Observación de informe pericial", "Contesta demanda (excepciones) NLPT", "Renovación carta fianza", "Presentación de demanda", "Solicitud de nulidad de resolución"].map(i => <li key={i}>• {i}</li>)}
            </ul>
          </div>
        </div>
      </Card>
    </div>
  );
}

function ACA({ search }: { search: string }) {
  return (
    <div className="space-y-4">
      <Card titulo="¿Cuándo se interpone una ACA?">
        <p className="text-sm text-gray-700">La Acción Contencioso Administrativa (ACA) se interpone cuando se cuestiona una resolución administrativa ante el Poder Judicial. El plazo es de <strong>3 meses</strong> desde notificada la resolución que agota la vía administrativa.</p>
      </Card>
      <Card titulo="Flujo de Interposición de ACA">
        <div className="space-y-2">
          {[
            { n: "1", texto: "Identificar la resolución administrativa que agota la vía administrativa.", color: "blue" },
            { n: "2", texto: "Verificar el plazo de 3 meses desde la notificación.", color: "blue" },
            { n: "3", texto: "Coordinar con el abogado la elaboración de la demanda.", color: "blue" },
            { n: "4", texto: "Registrar en MyBiG como proceso nuevo (ACA Dte o ACA Ddo según corresponda).", color: "blue" },
            { n: "5", texto: "Agendar PRESENTACION DE DEMANDA y INFORMAR AL CLIENTE.", color: "red" },
          ].map(p => <Paso key={p.n} {...p} />)}
        </div>
      </Card>
      <Card titulo="Plazos clave">
        <table className="w-full text-sm border-collapse">
          <thead><tr className="bg-[#042433] text-white text-xs"><th className="px-3 py-2 text-left">Acto</th><th className="px-3 py-2 text-left w-1/3">Plazo</th></tr></thead>
          <tbody>
            {[
              ["Interposición de demanda ACA", "3 meses desde notificación de resolución"],
              ["Contestación de demanda (Ddo)", "10 días hábiles"],
              ["Apelación de sentencia", "5 días hábiles"],
              ["Recurso de casación", "10 días hábiles"],
            ].map(([acto, plazo]) => (
              <tr key={acto} className="border-b border-gray-100 hover:bg-gray-50">
                <td className="px-3 py-2 text-xs text-gray-700">{acto}</td>
                <td className="px-3 py-2 text-xs font-semibold text-[#042433]">{plazo}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>
    </div>
  );
}

function FlujTC({ search }: { search: string }) {
  return (
    <div className="space-y-4">
      <div className="bg-yellow-50 border border-yellow-300 rounded-xl p-4 flex gap-3">
        <span className="text-xl">⚠️</span>
        <p className="text-sm text-gray-800"><strong>Importante:</strong> Las resoluciones del TC llegan a la <strong>Casilla TC</strong> (ventanilla jurisdiccional). Responsable principal: <strong>Jose Gutiérrez</strong>.</p>
      </div>
      <Card titulo="Flujo de Resoluciones del Tribunal Constitucional (TC)">
        <div className="space-y-2">
          {[
            { n: "1", texto: "Recibir alerta por correo de notificación del TC. (Jose Gutiérrez)", color: "red" },
            { n: "2", texto: "Ingresar a la ventanilla jurisdiccional del TC: ventanillajurisdiccional.sedetc.gob.pe (Jose Gutiérrez)", color: "blue" },
            { n: "3", texto: "Revisar y descargar documentos. (Jose Gutiérrez)", color: "blue" },
            { n: "4", texto: "Renombrar documentos y registrar en ND / MB. ND (Jose Gutiérrez) / MB (Nestor) · Inclusión en el reporte de notificaciones", color: "blue" },
            { n: "5", texto: "Agendar tareas de las notificaciones. (Jose Gutiérrez)", color: "blue" },
          ].map(p => <Paso key={p.n} {...p} />)}
        </div>
      </Card>
    </div>
  );
}

function Archivo({ search }: { search: string }) {
  return (
    <div className="space-y-4">
      <Card titulo="Criterios para Archivar un Proceso">
        <div className="space-y-2">
          {[
            { n: "1", texto: "Notificación de la resolución de archivo definitivo. Generalmente se requiere la notificación.", color: "blue" },
            { n: "2", texto: "Excepciones a la notificación: Basta con identificar la resolución por movimientos del CEJ, siempre que se consulte y apruebe con el abogado.", color: "blue" },
            { n: "3", texto: "Plazo de apelación: 5 días hábiles desde la notificación. Si han transcurrido sin apelación del demandante, se procede a dar de baja previa consulta con el abogado.", color: "red" },
            { n: "4", texto: "Cuestionamientos: La resolución puede ser cuestionada si el demandante presenta un escrito alegando que no fue notificado.", color: "blue" },
            { n: "5", texto: "Inasistencia de las partes: Si han pasado 30 días desde la diligencia sin solicitar reprogramación, o si acumulan 2 inasistencias, se impulsa la resolución de archivo definitivo.", color: "blue" },
            { n: "6", texto: "Por excepción de incompetencia: NO se archivan — solo se desactivan con fecha 01-01-2030. Excepción: cliente Lindley, se da de baja con fecha correspondiente y forma de terminación: EXCEPCIONES.", color: "red" },
          ].map(p => <Paso key={p.n} {...p} />)}
        </div>
      </Card>

      <Card titulo="Archivo por Notificación o Movimientos del CEJ">
        <p className="text-sm text-gray-700 mb-3">El procedimiento inicia con la recepción de la resolución que declara archivar el proceso. Se verifica si han transcurrido <strong>5 días desde la notificación</strong>. Si no han pasado, el proceso se mantiene activo salvo indicación del abogado.</p>
        <div className="space-y-2">
          {[
            { n: "1", texto: "Verificar que hayan pasado 5 días hábiles desde la notificación.", color: "blue" },
            { n: "2", texto: "Consultar al abogado por correo si procede el archivo definitivo.", color: "blue" },
            { n: "3", texto: "Ingresar al expediente en MB y actualizar los datos necesarios.", color: "blue" },
            { n: "4", texto: "Verificar que no existan tareas pendientes y desactivar el proceso.", color: "blue" },
            { n: "5", texto: "Informar por correo al abogado responsable, supervisor y área de facturación.", color: "blue" },
          ].map(p => <Paso key={p.n} {...p} />)}
        </div>
      </Card>

      <Card titulo="Archivo por Indicación del Abogado (por correo)">
        <div className="space-y-2">
          {[
            { n: "1", texto: "Recibir solicitud de archivo por correo del abogado.", color: "blue" },
            { n: "2", texto: "Ingresar al expediente en MB.", color: "blue" },
            { n: "3", texto: "Actualizar datos: si el proceso culminó → Archivo Definitivo · si no culminó → Devuelto al Cliente", color: "blue" },
            { n: "4", texto: "Verificar que no existan tareas pendientes y desactivar el proceso.", color: "blue" },
            { n: "5", texto: "Notificar por correo al abogado responsable, supervisor y área de facturación.", color: "blue" },
          ].map(p => <Paso key={p.n} {...p} />)}
        </div>
      </Card>

      <Card titulo="Datos a llenar en MB al Archivar">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <div className="bg-[#fde0e4] rounded-lg px-3 py-2 text-xs font-bold text-[#E6223D] mb-3">ARCHIVO DEFINITIVO — Proceso ya culminó</div>
            <table className="w-full text-xs border-collapse">
              <thead><tr className="bg-[#042433] text-white"><th className="px-3 py-2 text-left">Campo</th><th className="px-3 py-2 text-left">Exp. Principal</th><th className="px-3 py-2 text-left">Cuadernos</th></tr></thead>
              <tbody>
                {[
                  ["Bitácora", "ARCHIVO DEFINITIVO", "ARCHIVO DEFINITIVO"],
                  ["Estado interno", "EJECUCIÓN", "EJECUCIÓN"],
                  ["Fecha término", "Fecha en que se solicita dar de baja", "01-01-2030"],
                  ["Situación", "Archivo Definitivo", "Archivo Definitivo"],
                  ["Forma de terminación", "Forma en que culminó el proceso", "Abandono del proceso"],
                  ["Provisión", "0", "0"],
                  ["Calificación", "Remoto", "Remoto"],
                ].map(([campo, principal, cuaderno]) => (
                  <tr key={campo} className="border-b border-gray-100">
                    <td className="px-3 py-2 font-semibold text-[#042433]">{campo}</td>
                    <td className="px-3 py-2 text-gray-700">{principal}</td>
                    <td className="px-3 py-2 text-gray-700">{cuaderno}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div>
            <div className="bg-blue-50 rounded-lg px-3 py-2 text-xs font-bold text-blue-800 mb-3">DEVUELTO AL CLIENTE — Proceso no culminó</div>
            <table className="w-full text-xs border-collapse">
              <thead><tr className="bg-[#042433] text-white"><th className="px-3 py-2 text-left">Campo</th><th className="px-3 py-2 text-left">Exp. Principal</th><th className="px-3 py-2 text-left">Cuadernos</th></tr></thead>
              <tbody>
                {[
                  ["Bitácora", "DEVUELTO AL CLIENTE", "DEVUELTO AL CLIENTE"],
                  ["Fecha término", "Fecha en que se solicita devolver", "01-01-2030"],
                  ["Situación", "Devuelto a cliente", "Devuelto a cliente"],
                  ["Forma de terminación", "Devuelto a cliente", "Abandono del proceso"],
                ].map(([campo, principal, cuaderno]) => (
                  <tr key={campo} className="border-b border-gray-100">
                    <td className="px-3 py-2 font-semibold text-[#042433]">{campo}</td>
                    <td className="px-3 py-2 text-gray-700">{principal}</td>
                    <td className="px-3 py-2 text-gray-700">{cuaderno}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </Card>

      <Card titulo="Baja por Excepción de Incompetencia">
        <div className="bg-yellow-50 border border-yellow-300 rounded-lg p-3 flex gap-2 mb-4">
          <span>⚠️</span>
          <p className="text-xs text-gray-800"><strong>No se archivan los casos por excepción de incompetencia.</strong> Solo se desactivan con fecha 01-01-2030. Excepción: cliente <strong>Lindley</strong>, se da de baja con fecha correspondiente y forma de terminación: EXCEPCIONES.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <div className="bg-[#fde0e4] rounded-lg px-3 py-2 text-xs font-bold text-[#E6223D] mb-3">LINDLEY</div>
            <table className="w-full text-xs border-collapse">
              <thead><tr className="bg-[#042433] text-white"><th className="px-3 py-2 text-left">Campo</th><th className="px-3 py-2 text-left">Exp. Principal</th><th className="px-3 py-2 text-left">Cuadernos</th></tr></thead>
              <tbody>
                {[
                  ["Bitácora", "ARCHIVO DEFINITIVO", "ARCHIVO DEFINITIVO"],
                  ["Estado interno", "EJECUCIÓN", "EJECUCIÓN"],
                  ["Fecha término", "Fecha en que se solicita dar de baja", "01-01-2030"],
                  ["Situación", "Archivo Definitivo", "Archivo Definitivo"],
                  ["Forma de terminación", "Excepciones", "Abandono del proceso"],
                  ["Provisión", "0", "0"],
                  ["Calificación", "Remoto", "Remoto"],
                ].map(([campo, principal, cuaderno]) => (
                  <tr key={campo} className="border-b border-gray-100">
                    <td className="px-3 py-2 font-semibold text-[#042433]">{campo}</td>
                    <td className="px-3 py-2 text-gray-700">{principal}</td>
                    <td className="px-3 py-2 text-gray-700">{cuaderno}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div>
            <div className="bg-gray-100 rounded-lg px-3 py-2 text-xs font-bold text-[#042433] mb-3">TODOS LOS DEMÁS CLIENTES</div>
            <table className="w-full text-xs border-collapse">
              <thead><tr className="bg-[#042433] text-white"><th className="px-3 py-2 text-left">Campo</th><th className="px-3 py-2 text-left">Exp. Principal</th><th className="px-3 py-2 text-left">Cuadernos</th></tr></thead>
              <tbody>
                {[
                  ["Bitácora", "No cambia", "No cambia"],
                  ["Estado interno", "No cambia", "No cambia"],
                  ["Fecha término", "01-01-2030", "01-01-2030"],
                  ["Forma de terminación", "Excepciones", "Abandono del proceso"],
                  ["Provisión", "No cambia", "No cambia"],
                ].map(([campo, principal, cuaderno]) => (
                  <tr key={campo} className="border-b border-gray-100">
                    <td className="px-3 py-2 font-semibold text-[#042433]">{campo}</td>
                    <td className="px-3 py-2 text-gray-700">{principal}</td>
                    <td className="px-3 py-2 text-gray-700">{cuaderno}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </Card>
    </div>
  );
}

// Componentes auxiliares
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

function Paso({ n, texto, color }: { n: string; texto: string; color?: string }) {
  return (
    <div className="flex gap-3 items-start text-sm">
      <span className={`text-xs font-bold px-2 py-0.5 rounded shrink-0 mt-0.5
        ${color === "red" ? "bg-[#E6223D] text-white" : color === "blue" ? "bg-[#156082] text-white" : "bg-[#042433] text-white"}`}>
        {n}
      </span>
      <span className="text-gray-700 text-xs">{texto}</span>
    </div>
  );
}