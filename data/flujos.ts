export type FilaFlujo = {
  Instancia: string;
  Etapa: string;
  Tarea: string;
  "Tipo de plazo (Ley/Resolución/Acuse/Abogado)": string;
  Plazo: string;
  Bitácora: string;
  __flujo__?: string;
};

export const ALL_DATA: Record<string, FilaFlujo[]> = {
  "Ordinario Ddo": [
    {
      "Instancia": "Conserva Instancia",
      "Etapa": "General",
      "Tarea": "APERSONAMIENTO Y/O VARIACION DE DOMICILIO",
      "Tipo de plazo (Ley/Resolución/Acuse/Abogado)": "Convenio",
      "Plazo": "3",
      "Bitácora": "",
      "__flujo__": "Ordinario Ddo"
    },
    {
      "Instancia": "Conserva Instancia",
      "Etapa": "Recurso",
      "Tarea": "RECURSO DE QUEJA",
      "Tipo de plazo (Ley/Resolución/Acuse/Abogado)": "Ley",
      "Plazo": "3",
      "Bitácora": "PENDIENTE DE RECURSO DE QUEJA",
      "__flujo__": "Ordinario Ddo"
    },
    {
      "Instancia": "Conserva Instancia",
      "Etapa": "Recurso",
      "Tarea": "APELACION DE AUTO",
      "Tipo de plazo (Ley/Resolución/Acuse/Abogado)": "Ley",
      "Plazo": "3",
      "Bitácora": "",
      "__flujo__": "Ordinario Ddo"
    },
    {
      "Instancia": "Conserva Instancia",
      "Etapa": "General",
      "Tarea": "CITA CON EL JUEZ",
      "Tipo de plazo (Ley/Resolución/Acuse/Abogado)": "Resolución",
      "Plazo": "0",
      "Bitácora": "",
      "__flujo__": "Ordinario Ddo"
    },
    {
      "Instancia": "Conserva Instancia",
      "Etapa": "General",
      "Tarea": "IMPULSO",
      "Tipo de plazo (Ley/Resolución/Acuse/Abogado)": "Convenio",
      "Plazo": "0",
      "Bitácora": "",
      "__flujo__": "Ordinario Ddo"
    },
    {
      "Instancia": "Conserva Instancia",
      "Etapa": "General",
      "Tarea": "CUMPLE MANDATO",
      "Tipo de plazo (Ley/Resolución/Acuse/Abogado)": "Resolución",
      "Plazo": "3",
      "Bitácora": "",
      "__flujo__": "Ordinario Ddo"
    },
    {
      "Instancia": "Conserva Instancia",
      "Etapa": "General",
      "Tarea": "SOLICITUD DE ARCHIVO DEFINITIVO",
      "Tipo de plazo (Ley/Resolución/Acuse/Abogado)": "Abogado",
      "Plazo": "0",
      "Bitácora": "PENDIENTE DE ARCHIVO DEFINITIVO",
      "__flujo__": "Ordinario Ddo"
    },
    {
      "Instancia": "Conserva Instancia",
      "Etapa": "General",
      "Tarea": "SOLICITUD INFORME ORAL",
      "Tipo de plazo (Ley/Resolución/Acuse/Abogado)": "Convenio",
      "Plazo": "3",
      "Bitácora": "",
      "__flujo__": "Ordinario Ddo"
    },
    {
      "Instancia": "Conserva Instancia",
      "Etapa": "General",
      "Tarea": "CITA PROCURADOR",
      "Tipo de plazo (Ley/Resolución/Acuse/Abogado)": "Resolución",
      "Plazo": "0",
      "Bitácora": "",
      "__flujo__": "Ordinario Ddo"
    },
    {
      "Instancia": "Conserva Instancia",
      "Etapa": "General",
      "Tarea": "DESISTIMIENTO",
      "Tipo de plazo (Ley/Resolución/Acuse/Abogado)": "Abogado",
      "Plazo": "0",
      "Bitácora": "PENDIENTE DE RESOLVER DESISTIMIENTO",
      "__flujo__": "Ordinario Ddo"
    },
    {
      "Instancia": "Conserva Instancia",
      "Etapa": "General",
      "Tarea": "SEGUIMIENTO",
      "Tipo de plazo (Ley/Resolución/Acuse/Abogado)": "Abogado",
      "Plazo": "0",
      "Bitácora": "",
      "__flujo__": "Ordinario Ddo"
    },
    {
      "Instancia": "Conserva Instancia",
      "Etapa": "General",
      "Tarea": "REQUERIR AL JUZGADO / SALA",
      "Tipo de plazo (Ley/Resolución/Acuse/Abogado)": "Abogado",
      "Plazo": "0",
      "Bitácora": "",
      "__flujo__": "Ordinario Ddo"
    },
    {
      "Instancia": "Conserva Instancia",
      "Etapa": "General",
      "Tarea": "INFORMAR AL JUZGADO / SALA",
      "Tipo de plazo (Ley/Resolución/Acuse/Abogado)": "Resolución / Abogado",
      "Plazo": "0",
      "Bitácora": "",
      "__flujo__": "Ordinario Ddo"
    },
    {
      "Instancia": "Conserva Instancia",
      "Etapa": "General",
      "Tarea": "ABSOLVER TRASLADO",
      "Tipo de plazo (Ley/Resolución/Acuse/Abogado)": "Resolución",
      "Plazo": "3",
      "Bitácora": "",
      "__flujo__": "Ordinario Ddo"
    },
    {
      "Instancia": "Conserva Instancia",
      "Etapa": "General",
      "Tarea": "NULIDAD",
      "Tipo de plazo (Ley/Resolución/Acuse/Abogado)": "Abogado",
      "Plazo": "3",
      "Bitácora": "PENDIENTE DE NULIDAD",
      "__flujo__": "Ordinario Ddo"
    },
    {
      "Instancia": "Conserva Instancia",
      "Etapa": "General",
      "Tarea": "SUBSANAR",
      "Tipo de plazo (Ley/Resolución/Acuse/Abogado)": "Resolución / Abogado",
      "Plazo": "0",
      "Bitácora": "",
      "__flujo__": "Ordinario Ddo"
    },
    {
      "Instancia": "Conserva Instancia",
      "Etapa": "General",
      "Tarea": "REUNIONES DE ESTRATEGIA",
      "Tipo de plazo (Ley/Resolución/Acuse/Abogado)": "Convenio",
      "Plazo": "0",
      "Bitácora": "",
      "__flujo__": "Ordinario Ddo"
    },
    {
      "Instancia": "Conserva Instancia",
      "Etapa": "General",
      "Tarea": "REQUERIR AL CLIENTE",
      "Tipo de plazo (Ley/Resolución/Acuse/Abogado)": "Convenio",
      "Plazo": "0",
      "Bitácora": "",
      "__flujo__": "Ordinario Ddo"
    },
    {
      "Instancia": "Conserva Instancia",
      "Etapa": "General",
      "Tarea": "REVISION DE MEDIOS PROBATORIOS",
      "Tipo de plazo (Ley/Resolución/Acuse/Abogado)": "Convenio",
      "Plazo": "0",
      "Bitácora": "",
      "__flujo__": "Ordinario Ddo"
    },
    {
      "Instancia": "PRIMERA INSTANCIA",
      "Etapa": "Conciliación",
      "Tarea": "CONTESTA DE DEMANDA",
      "Tipo de plazo (Ley/Resolución/Acuse/Abogado)": "Resolución",
      "Plazo": "0",
      "Bitácora": "",
      "__flujo__": "Ordinario Ddo"
    },
    {
      "Instancia": "PRIMERA INSTANCIA",
      "Etapa": "Conciliación",
      "Tarea": "DILIGENCIA - AUDIENCIA PREPARATORIA DE CONCILIACION",
      "Tipo de plazo (Ley/Resolución/Acuse/Abogado)": "Resolución",
      "Plazo": "0",
      "Bitácora": "",
      "__flujo__": "Ordinario Ddo"
    },
    {
      "Instancia": "PRIMERA INSTANCIA",
      "Etapa": "Conciliación",
      "Tarea": "DILIGENCIA - AUDIENCIA  DE CONCILIACION",
      "Tipo de plazo (Ley/Resolución/Acuse/Abogado)": "Resolución",
      "Plazo": "0",
      "Bitácora": "PENDIENTE DE AUDIENCIA DE CONCILIACION / CONTESTA DEMANDA",
      "__flujo__": "Ordinario Ddo"
    },
    {
      "Instancia": "PRIMERA INSTANCIA",
      "Etapa": "Conciliación",
      "Tarea": "DILIGENCIA - AUDIENCIA DE CONCILIACION (CONTINUACION)",
      "Tipo de plazo (Ley/Resolución/Acuse/Abogado)": "Resolución / Abogado",
      "Plazo": "0",
      "Bitácora": "PENDIENTE DE CONTINUACION DE AUDIENCIA DE CONCILIACION",
      "__flujo__": "Ordinario Ddo"
    },
    {
      "Instancia": "PRIMERA INSTANCIA",
      "Etapa": "General",
      "Tarea": "SEGUIMIENTO DE OFICIOS",
      "Tipo de plazo (Ley/Resolución/Acuse/Abogado)": "Convenio",
      "Plazo": "",
      "Bitácora": "",
      "__flujo__": "Ordinario Ddo"
    },
    {
      "Instancia": "PRIMERA INSTANCIA",
      "Etapa": "General",
      "Tarea": "DILIGENCIAR OFICIO",
      "Tipo de plazo (Ley/Resolución/Acuse/Abogado)": "Convenio",
      "Plazo": "",
      "Bitácora": "",
      "__flujo__": "Ordinario Ddo"
    },
    {
      "Instancia": "PRIMERA INSTANCIA",
      "Etapa": "Probatoria",
      "Tarea": "DILIGENCIA - AUDIENCIA DE JUZGAMIENTO",
      "Tipo de plazo (Ley/Resolución/Acuse/Abogado)": "Resolución / Abogado",
      "Plazo": "0",
      "Bitácora": "PENDIENTE DE AUDIENCIA DE JUZGAMIENTO",
      "__flujo__": "Ordinario Ddo"
    },
    {
      "Instancia": "PRIMERA INSTANCIA",
      "Etapa": "Probatoria",
      "Tarea": "DILIGENCIA - AUDIENCIA DE JUZGAMIENTO (CONTINUACION)",
      "Tipo de plazo (Ley/Resolución/Acuse/Abogado)": "Resolución / Abogado",
      "Plazo": "0",
      "Bitácora": "PENDIENTE DE CONTINUACION DE AUDIENCIA DE JUZGAMIENTO",
      "__flujo__": "Ordinario Ddo"
    },
    {
      "Instancia": "PRIMERA INSTANCIA",
      "Etapa": "Sentencia",
      "Tarea": "DILIGENCIA - LECTURA DE SENTENCIA (PRIMERA INSTANCIA)",
      "Tipo de plazo (Ley/Resolución/Acuse/Abogado)": "Resolución / Abogado",
      "Plazo": "0",
      "Bitácora": "PENDIENTE DE LECTURA DE SENTENCIA",
      "__flujo__": "Ordinario Ddo"
    },
    {
      "Instancia": "PRIMERA INSTANCIA",
      "Etapa": "Recurso",
      "Tarea": "APELACION DE SENTENCIA",
      "Tipo de plazo (Ley/Resolución/Acuse/Abogado)": "Ley",
      "Plazo": "5",
      "Bitácora": "PENDIENTE DE APELACION DE SENTENCIA / ADHESION",
      "__flujo__": "Ordinario Ddo"
    },
    {
      "Instancia": "PRIMERA INSTANCIA",
      "Etapa": "Recurso",
      "Tarea": "APELACION CONTRAPARTE",
      "Tipo de plazo (Ley/Resolución/Acuse/Abogado)": "Ley",
      "Plazo": "5",
      "Bitácora": "PENDIENTE DE APELACION DE SENTENCIA DE CONTRAPARTE",
      "__flujo__": "Ordinario Ddo"
    },
    {
      "Instancia": "SEGUNDA INSTANCIA",
      "Etapa": "Vista de la causa",
      "Tarea": "DILIGENCIA - AUDIENCIA PREPARATORIA VISTA DE LA CAUSA",
      "Tipo de plazo (Ley/Resolución/Acuse/Abogado)": "Resolución",
      "Plazo": "0",
      "Bitácora": "",
      "__flujo__": "Ordinario Ddo"
    },
    {
      "Instancia": "SEGUNDA INSTANCIA",
      "Etapa": "Vista de la causa",
      "Tarea": "DILIGENCIA - AUDIENCIA DE VISTA DE LA CAUSA",
      "Tipo de plazo (Ley/Resolución/Acuse/Abogado)": "Resolución",
      "Plazo": "0",
      "Bitácora": "PENDIENTE DE AUDIENCIA VISTA DE LA CAUSA",
      "__flujo__": "Ordinario Ddo"
    },
    {
      "Instancia": "SEGUNDA INSTANCIA",
      "Etapa": "Vista de la causa",
      "Tarea": "DILIGENCIA - AUDIENCIA DE VISTA DE LA CAUSA (CONTINUACION)",
      "Tipo de plazo (Ley/Resolución/Acuse/Abogado)": "Resolución / Abogado",
      "Plazo": "0",
      "Bitácora": "PENDIENTE DE CONTINUACION DE VISTA DE LA CAUSA",
      "__flujo__": "Ordinario Ddo"
    },
    {
      "Instancia": "SEGUNDA INSTANCIA",
      "Etapa": "Sentencia",
      "Tarea": "DILIGENCIA - LECTURA DE SENTENCIA (SEGUNDA INSTANCIA)",
      "Tipo de plazo (Ley/Resolución/Acuse/Abogado)": "Resolución / Abogado",
      "Plazo": "0",
      "Bitácora": "PENDIENTE DE LECTURA DE SENTENCIA DE VISTA",
      "__flujo__": "Ordinario Ddo"
    },
    {
      "Instancia": "SEGUNDA INSTANCIA",
      "Etapa": "Recurso",
      "Tarea": "RECURSO DE CASACION",
      "Tipo de plazo (Ley/Resolución/Acuse/Abogado)": "Ley",
      "Plazo": "10",
      "Bitácora": "PENDIENTE DE RECURSO DE CASACION",
      "__flujo__": "Ordinario Ddo"
    },
    {
      "Instancia": "SEGUNDA INSTANCIA",
      "Etapa": "Recurso",
      "Tarea": "RECURSO DE CASACION CONTRAPARTE",
      "Tipo de plazo (Ley/Resolución/Acuse/Abogado)": "Ley",
      "Plazo": "10",
      "Bitácora": "PENDIENTE DE RECURSO DE CASACION DE LA CONTRAPARTE",
      "__flujo__": "Ordinario Ddo"
    },
    {
      "Instancia": "TERCERA INSTANCIA",
      "Etapa": "Calificación del recurso",
      "Tarea": "APERSONAMIENTO Y USO DE LA PALABRA EN SUPREMA",
      "Tipo de plazo (Ley/Resolución/Acuse/Abogado)": "Abogado",
      "Plazo": "0",
      "Bitácora": "PENDIENTE DE APERSONAMIENTO Y USO DE LA PALABRA",
      "__flujo__": "Ordinario Ddo"
    },
    {
      "Instancia": "TERCERA INSTANCIA",
      "Etapa": "Calificación del recurso",
      "Tarea": "DILIGENCIA - VISTA DE CALIFICACION",
      "Tipo de plazo (Ley/Resolución/Acuse/Abogado)": "Resolución",
      "Plazo": "0",
      "Bitácora": "PENDIENTE VISTA DE CALIFICACION",
      "__flujo__": "Ordinario Ddo"
    },
    {
      "Instancia": "TERCERA INSTANCIA",
      "Etapa": "Vista de la causa",
      "Tarea": "DILIGENCIA - AUDIENCIA DE VISTA EN SUPREMA",
      "Tipo de plazo (Ley/Resolución/Acuse/Abogado)": "Resolución",
      "Plazo": "0",
      "Bitácora": "PENDIENTE DE AUDIENCIA DE VISTA EN SUPREMA",
      "__flujo__": "Ordinario Ddo"
    },
    {
      "Instancia": "TERCERA INSTANCIA",
      "Etapa": "Sentencia",
      "Tarea": "DILIGENCIA - LECTURA DE SENTENCIA (TERCERA INSTANCIA)",
      "Tipo de plazo (Ley/Resolución/Acuse/Abogado)": "Resolución / Abogado",
      "Plazo": "0",
      "Bitácora": "PENDIENTE DE LECTURA DE SENTENCIA DE SUPREMA",
      "__flujo__": "Ordinario Ddo"
    },
    {
      "Instancia": "Conserva Instancia",
      "Etapa": "Sentencia",
      "Tarea": "DEMANDA DE AMPARO CONTRA RESOLUCION JUDICIAL",
      "Tipo de plazo (Ley/Resolución/Acuse/Abogado)": "Ley",
      "Plazo": "30",
      "Bitácora": "",
      "__flujo__": "Ordinario Ddo"
    },
    {
      "Instancia": "EJECUCIÓN",
      "Etapa": "Ejecución anticipada",
      "Tarea": "SOLICITUD DE SUSPENSION / CANCELACION DE EJECUCION",
      "Tipo de plazo (Ley/Resolución/Acuse/Abogado)": "Abogado",
      "Plazo": "0",
      "Bitácora": "",
      "__flujo__": "Ordinario Ddo"
    },
    {
      "Instancia": "EJECUCIÓN",
      "Etapa": "Ejecución anticipada",
      "Tarea": "PRESENTAR CARTA FIANZA",
      "Tipo de plazo (Ley/Resolución/Acuse/Abogado)": "Abogado",
      "Plazo": "0",
      "Bitácora": "",
      "__flujo__": "Ordinario Ddo"
    },
    {
      "Instancia": "EJECUCIÓN",
      "Etapa": "Ejecución anticipada",
      "Tarea": "RENOVAR CARTA FIANZA",
      "Tipo de plazo (Ley/Resolución/Acuse/Abogado)": "Resolución",
      "Plazo": "0",
      "Bitácora": "",
      "__flujo__": "Ordinario Ddo"
    },
    {
      "Instancia": "EJECUCIÓN",
      "Etapa": "Obligaciones",
      "Tarea": "CUMPLIR OBLIGACION PRINCIPAL",
      "Tipo de plazo (Ley/Resolución/Acuse/Abogado)": "Resolución",
      "Plazo": "0",
      "Bitácora": "PENDIENTE DE CUMPLIR OBLIGACION PRINCIPAL",
      "__flujo__": "Ordinario Ddo"
    },
    {
      "Instancia": "EJECUCIÓN",
      "Etapa": "Obligaciones",
      "Tarea": "CUMPLIR PAGO DE INTERESES",
      "Tipo de plazo (Ley/Resolución/Acuse/Abogado)": "Resolución",
      "Plazo": "0",
      "Bitácora": "PENDIENTE DE INTERESES",
      "__flujo__": "Ordinario Ddo"
    },
    {
      "Instancia": "EJECUCIÓN",
      "Etapa": "Obligaciones",
      "Tarea": "CUMPLIR PAGO DE COSTOS Y/O CAL",
      "Tipo de plazo (Ley/Resolución/Acuse/Abogado)": "Resolución",
      "Plazo": "0",
      "Bitácora": "PENDIENTE DE COSTOS",
      "__flujo__": "Ordinario Ddo"
    },
    {
      "Instancia": "EJECUCIÓN",
      "Etapa": "Obligaciones",
      "Tarea": "CUMPLIR PAGO DE COSTAS",
      "Tipo de plazo (Ley/Resolución/Acuse/Abogado)": "Resolución",
      "Plazo": "0",
      "Bitácora": "PENDIENTE DE COSTAS",
      "__flujo__": "Ordinario Ddo"
    },
    {
      "Instancia": "EJECUCIÓN",
      "Etapa": "Observación de informe",
      "Tarea": "OBSERVACION DE INFORME",
      "Tipo de plazo (Ley/Resolución/Acuse/Abogado)": "Ley",
      "Plazo": "3",
      "Bitácora": "",
      "__flujo__": "Ordinario Ddo"
    },
    {
      "Instancia": "EJECUCIÓN",
      "Etapa": "Impulso de archivo",
      "Tarea": "SOLICITAR LIQUIDACION",
      "Tipo de plazo (Ley/Resolución/Acuse/Abogado)": "Convenio",
      "Plazo": "5",
      "Bitácora": "",
      "__flujo__": "Ordinario Ddo"
    }
  ],
  "Ordinario Dte": [
    {
      "Instancia": "Conserva Instancia",
      "Etapa": "General",
      "Tarea": "APERSONAMIENTO Y/O VARIACION DE DOMICILIO",
      "Tipo de plazo (Ley/Resolución/Acuse/Abogado)": "Convenio",
      "Plazo": "3",
      "Bitácora": "",
      "__flujo__": "Ordinario Dte"
    },
    {
      "Instancia": "Conserva Instancia",
      "Etapa": "Recurso",
      "Tarea": "RECURSO DE QUEJA",
      "Tipo de plazo (Ley/Resolución/Acuse/Abogado)": "Ley",
      "Plazo": "3",
      "Bitácora": "PENDIENTE DE RECURSO DE QUEJA",
      "__flujo__": "Ordinario Dte"
    },
    {
      "Instancia": "Conserva Instancia",
      "Etapa": "Recurso",
      "Tarea": "APELACION DE AUTO",
      "Tipo de plazo (Ley/Resolución/Acuse/Abogado)": "Ley",
      "Plazo": "3",
      "Bitácora": "",
      "__flujo__": "Ordinario Dte"
    },
    {
      "Instancia": "Conserva Instancia",
      "Etapa": "General",
      "Tarea": "CITA CON EL JUEZ",
      "Tipo de plazo (Ley/Resolución/Acuse/Abogado)": "Resolución",
      "Plazo": "0",
      "Bitácora": "",
      "__flujo__": "Ordinario Dte"
    },
    {
      "Instancia": "Conserva Instancia",
      "Etapa": "General",
      "Tarea": "IMPULSO",
      "Tipo de plazo (Ley/Resolución/Acuse/Abogado)": "Convenio",
      "Plazo": "0",
      "Bitácora": "",
      "__flujo__": "Ordinario Dte"
    },
    {
      "Instancia": "Conserva Instancia",
      "Etapa": "General",
      "Tarea": "CUMPLE MANDATO",
      "Tipo de plazo (Ley/Resolución/Acuse/Abogado)": "Resolución",
      "Plazo": "3",
      "Bitácora": "",
      "__flujo__": "Ordinario Dte"
    },
    {
      "Instancia": "Conserva Instancia",
      "Etapa": "General",
      "Tarea": "SOLICITUD DE ARCHIVO DEFINITIVO",
      "Tipo de plazo (Ley/Resolución/Acuse/Abogado)": "Abogado",
      "Plazo": "0",
      "Bitácora": "PENDIENTE DE ARCHIVO DEFINITIVO",
      "__flujo__": "Ordinario Dte"
    },
    {
      "Instancia": "Conserva Instancia",
      "Etapa": "General",
      "Tarea": "SOLICITUD INFORME ORAL",
      "Tipo de plazo (Ley/Resolución/Acuse/Abogado)": "Convenio",
      "Plazo": "3",
      "Bitácora": "",
      "__flujo__": "Ordinario Dte"
    },
    {
      "Instancia": "Conserva Instancia",
      "Etapa": "General",
      "Tarea": "CITA PROCURADOR",
      "Tipo de plazo (Ley/Resolución/Acuse/Abogado)": "Resolución",
      "Plazo": "0",
      "Bitácora": "",
      "__flujo__": "Ordinario Dte"
    },
    {
      "Instancia": "Conserva Instancia",
      "Etapa": "General",
      "Tarea": "DESISTIMIENTO",
      "Tipo de plazo (Ley/Resolución/Acuse/Abogado)": "Abogado",
      "Plazo": "0",
      "Bitácora": "PENDIENTE DE RESOLVER DESISTIMIENTO",
      "__flujo__": "Ordinario Dte"
    },
    {
      "Instancia": "Conserva Instancia",
      "Etapa": "General",
      "Tarea": "SEGUIMIENTO",
      "Tipo de plazo (Ley/Resolución/Acuse/Abogado)": "Abogado",
      "Plazo": "0",
      "Bitácora": "",
      "__flujo__": "Ordinario Dte"
    },
    {
      "Instancia": "Conserva Instancia",
      "Etapa": "General",
      "Tarea": "REQUERIR AL JUZGADO / SALA",
      "Tipo de plazo (Ley/Resolución/Acuse/Abogado)": "Abogado",
      "Plazo": "0",
      "Bitácora": "",
      "__flujo__": "Ordinario Dte"
    },
    {
      "Instancia": "Conserva Instancia",
      "Etapa": "General",
      "Tarea": "INFORMAR AL JUZGADO / SALA",
      "Tipo de plazo (Ley/Resolución/Acuse/Abogado)": "Resolución / Abogado",
      "Plazo": "0",
      "Bitácora": "",
      "__flujo__": "Ordinario Dte"
    },
    {
      "Instancia": "Conserva Instancia",
      "Etapa": "General",
      "Tarea": "ABSOLVER TRASLADO",
      "Tipo de plazo (Ley/Resolución/Acuse/Abogado)": "Resolución",
      "Plazo": "3",
      "Bitácora": "",
      "__flujo__": "Ordinario Dte"
    },
    {
      "Instancia": "Conserva Instancia",
      "Etapa": "General",
      "Tarea": "NULIDAD",
      "Tipo de plazo (Ley/Resolución/Acuse/Abogado)": "Abogado",
      "Plazo": "3",
      "Bitácora": "PENDIENTE DE NULIDAD",
      "__flujo__": "Ordinario Dte"
    },
    {
      "Instancia": "Conserva Instancia",
      "Etapa": "General",
      "Tarea": "SUBSANAR",
      "Tipo de plazo (Ley/Resolución/Acuse/Abogado)": "Resolución / Abogado",
      "Plazo": "0",
      "Bitácora": "",
      "__flujo__": "Ordinario Dte"
    },
    {
      "Instancia": "Conserva Instancia",
      "Etapa": "General",
      "Tarea": "REUNIONES DE ESTRATEGIA",
      "Tipo de plazo (Ley/Resolución/Acuse/Abogado)": "Convenio",
      "Plazo": "0",
      "Bitácora": "",
      "__flujo__": "Ordinario Dte"
    },
    {
      "Instancia": "Conserva Instancia",
      "Etapa": "General",
      "Tarea": "REQUERIR AL CLIENTE",
      "Tipo de plazo (Ley/Resolución/Acuse/Abogado)": "Convenio",
      "Plazo": "0",
      "Bitácora": "",
      "__flujo__": "Ordinario Dte"
    },
    {
      "Instancia": "Conserva Instancia",
      "Etapa": "General",
      "Tarea": "REVISION DE MEDIOS PROBATORIOS",
      "Tipo de plazo (Ley/Resolución/Acuse/Abogado)": "Convenio",
      "Plazo": "0",
      "Bitácora": "",
      "__flujo__": "Ordinario Dte"
    },
    {
      "Instancia": "PRIMERA INSTANCIA",
      "Etapa": "Admisión",
      "Tarea": "PRESENTACION DE DEMANDA",
      "Tipo de plazo (Ley/Resolución/Acuse/Abogado)": "Abogado",
      "Plazo": "0",
      "Bitácora": "PENDIENTE DE PRESENTACION DE DEMANDA",
      "__flujo__": "Ordinario Dte"
    },
    {
      "Instancia": "PRIMERA INSTANCIA",
      "Etapa": "Conciliación",
      "Tarea": "DILIGENCIA - AUDIENCIA PREPARATORIA DE CONCILIACION",
      "Tipo de plazo (Ley/Resolución/Acuse/Abogado)": "Resolución",
      "Plazo": "0",
      "Bitácora": "",
      "__flujo__": "Ordinario Dte"
    },
    {
      "Instancia": "PRIMERA INSTANCIA",
      "Etapa": "Conciliación",
      "Tarea": "DILIGENCIA - AUDIENCIA  DE CONCILIACION",
      "Tipo de plazo (Ley/Resolución/Acuse/Abogado)": "Resolución",
      "Plazo": "0",
      "Bitácora": "PENDIENTE DE AUDIENCIA DE CONCILIACION / CONTESTA DEMANDA",
      "__flujo__": "Ordinario Dte"
    },
    {
      "Instancia": "PRIMERA INSTANCIA",
      "Etapa": "Conciliación",
      "Tarea": "DILIGENCIA - AUDIENCIA DE CONCILIACION (CONTINUACION)",
      "Tipo de plazo (Ley/Resolución/Acuse/Abogado)": "Resolución / Abogado",
      "Plazo": "0",
      "Bitácora": "PENDIENTE DE CONTINUACION DE AUDIENCIA DE CONCILIACION",
      "__flujo__": "Ordinario Dte"
    },
    {
      "Instancia": "PRIMERA INSTANCIA",
      "Etapa": "General",
      "Tarea": "SEGUIMIENTO DE OFICIOS",
      "Tipo de plazo (Ley/Resolución/Acuse/Abogado)": "Convenio",
      "Plazo": "",
      "Bitácora": "",
      "__flujo__": "Ordinario Dte"
    },
    {
      "Instancia": "PRIMERA INSTANCIA",
      "Etapa": "General",
      "Tarea": "DILIGENCIAR OFICIO",
      "Tipo de plazo (Ley/Resolución/Acuse/Abogado)": "Convenio",
      "Plazo": "",
      "Bitácora": "",
      "__flujo__": "Ordinario Dte"
    },
    {
      "Instancia": "PRIMERA INSTANCIA",
      "Etapa": "Probatoria",
      "Tarea": "DILIGENCIA - AUDIENCIA DE JUZGAMIENTO",
      "Tipo de plazo (Ley/Resolución/Acuse/Abogado)": "Resolución / Abogado",
      "Plazo": "0",
      "Bitácora": "PENDIENTE DE AUDIENCIA DE JUZGAMIENTO",
      "__flujo__": "Ordinario Dte"
    },
    {
      "Instancia": "PRIMERA INSTANCIA",
      "Etapa": "Probatoria",
      "Tarea": "DILIGENCIA - AUDIENCIA DE JUZGAMIENTO (CONTINUACION)",
      "Tipo de plazo (Ley/Resolución/Acuse/Abogado)": "Resolución / Abogado",
      "Plazo": "0",
      "Bitácora": "PENDIENTE DE CONTINUACION DE AUDIENCIA DE JUZGAMIENTO",
      "__flujo__": "Ordinario Dte"
    },
    {
      "Instancia": "PRIMERA INSTANCIA",
      "Etapa": "Sentencia",
      "Tarea": "DILIGENCIA - LECTURA DE SENTENCIA (PRIMERA INSTANCIA)",
      "Tipo de plazo (Ley/Resolución/Acuse/Abogado)": "Resolución / Abogado",
      "Plazo": "0",
      "Bitácora": "PENDIENTE DE LECTURA DE SENTENCIA",
      "__flujo__": "Ordinario Dte"
    },
    {
      "Instancia": "PRIMERA INSTANCIA",
      "Etapa": "Recurso",
      "Tarea": "APELACION DE SENTENCIA",
      "Tipo de plazo (Ley/Resolución/Acuse/Abogado)": "Ley",
      "Plazo": "5",
      "Bitácora": "PENDIENTE DE APELACION DE SENTENCIA / ADHESION",
      "__flujo__": "Ordinario Dte"
    },
    {
      "Instancia": "PRIMERA INSTANCIA",
      "Etapa": "Recurso",
      "Tarea": "APELACION CONTRAPARTE",
      "Tipo de plazo (Ley/Resolución/Acuse/Abogado)": "Ley",
      "Plazo": "5",
      "Bitácora": "PENDIENTE DE APELACION DE SENTENCIA DE CONTRAPARTE",
      "__flujo__": "Ordinario Dte"
    },
    {
      "Instancia": "SEGUNDA INSTANCIA",
      "Etapa": "Vista de la causa",
      "Tarea": "DILIGENCIA - AUDIENCIA PREPARATORIA VISTA DE LA CAUSA",
      "Tipo de plazo (Ley/Resolución/Acuse/Abogado)": "Resolución",
      "Plazo": "0",
      "Bitácora": "",
      "__flujo__": "Ordinario Dte"
    },
    {
      "Instancia": "SEGUNDA INSTANCIA",
      "Etapa": "Vista de la causa",
      "Tarea": "DILIGENCIA - AUDIENCIA DE VISTA DE LA CAUSA",
      "Tipo de plazo (Ley/Resolución/Acuse/Abogado)": "Resolución",
      "Plazo": "0",
      "Bitácora": "PENDIENTE DE AUDIENCIA VISTA DE LA CAUSA",
      "__flujo__": "Ordinario Dte"
    },
    {
      "Instancia": "SEGUNDA INSTANCIA",
      "Etapa": "Vista de la causa",
      "Tarea": "DILIGENCIA - AUDIENCIA DE VISTA DE LA CAUSA (CONTINUACION)",
      "Tipo de plazo (Ley/Resolución/Acuse/Abogado)": "Resolución / Abogado",
      "Plazo": "0",
      "Bitácora": "PENDIENTE DE CONTINUACION DE VISTA DE LA CAUSA",
      "__flujo__": "Ordinario Dte"
    },
    {
      "Instancia": "SEGUNDA INSTANCIA",
      "Etapa": "Sentencia",
      "Tarea": "DILIGENCIA - LECTURA DE SENTENCIA (SEGUNDA INSTANCIA)",
      "Tipo de plazo (Ley/Resolución/Acuse/Abogado)": "Resolución / Abogado",
      "Plazo": "0",
      "Bitácora": "PENDIENTE DE LECTURA DE SENTENCIA DE VISTA",
      "__flujo__": "Ordinario Dte"
    },
    {
      "Instancia": "SEGUNDA INSTANCIA",
      "Etapa": "Recurso",
      "Tarea": "RECURSO DE CASACION",
      "Tipo de plazo (Ley/Resolución/Acuse/Abogado)": "Ley",
      "Plazo": "10",
      "Bitácora": "PENDIENTE DE RECURSO DE CASACION",
      "__flujo__": "Ordinario Dte"
    },
    {
      "Instancia": "SEGUNDA INSTANCIA",
      "Etapa": "Recurso",
      "Tarea": "RECURSO DE CASACION CONTRAPARTE",
      "Tipo de plazo (Ley/Resolución/Acuse/Abogado)": "Ley",
      "Plazo": "10",
      "Bitácora": "PENDIENTE DE RECURSO DE CASACION DE LA CONTRAPARTE",
      "__flujo__": "Ordinario Dte"
    },
    {
      "Instancia": "TERCERA INSTANCIA",
      "Etapa": "Calificación del recurso",
      "Tarea": "APERSONAMIENTO Y USO DE LA PALABRA EN SUPREMA",
      "Tipo de plazo (Ley/Resolución/Acuse/Abogado)": "Abogado",
      "Plazo": "0",
      "Bitácora": "PENDIENTE DE APERSONAMIENTO Y USO DE LA PALABRA",
      "__flujo__": "Ordinario Dte"
    },
    {
      "Instancia": "TERCERA INSTANCIA",
      "Etapa": "Calificación del recurso",
      "Tarea": "DILIGENCIA - VISTA DE CALIFICACION",
      "Tipo de plazo (Ley/Resolución/Acuse/Abogado)": "Resolución",
      "Plazo": "0",
      "Bitácora": "PENDIENTE VISTA DE CALIFICACION",
      "__flujo__": "Ordinario Dte"
    },
    {
      "Instancia": "TERCERA INSTANCIA",
      "Etapa": "Vista de la causa",
      "Tarea": "DILIGENCIA - AUDIENCIA DE VISTA EN SUPREMA",
      "Tipo de plazo (Ley/Resolución/Acuse/Abogado)": "Resolución",
      "Plazo": "0",
      "Bitácora": "PENDIENTE DE AUDIENCIA DE VISTA EN SUPREMA",
      "__flujo__": "Ordinario Dte"
    },
    {
      "Instancia": "TERCERA INSTANCIA",
      "Etapa": "Sentencia",
      "Tarea": "DILIGENCIA - LECTURA DE SENTENCIA (TERCERA INSTANCIA)",
      "Tipo de plazo (Ley/Resolución/Acuse/Abogado)": "Resolución / Abogado",
      "Plazo": "0",
      "Bitácora": "PENDIENTE DE LECTURA DE SENTENCIA DE SUPREMA",
      "__flujo__": "Ordinario Dte"
    },
    {
      "Instancia": "Conserva Instancia",
      "Etapa": "Sentencia",
      "Tarea": "DEMANDA DE AMPARO CONTRA RESOLUCION JUDICIAL",
      "Tipo de plazo (Ley/Resolución/Acuse/Abogado)": "Ley",
      "Plazo": "30",
      "Bitácora": "",
      "__flujo__": "Ordinario Dte"
    },
    {
      "Instancia": "EJECUCIÓN",
      "Etapa": "Ejecución anticipada",
      "Tarea": "SOLICITUD DE SUSPENSION / CANCELACION DE EJECUCION",
      "Tipo de plazo (Ley/Resolución/Acuse/Abogado)": "Abogado",
      "Plazo": "0",
      "Bitácora": "",
      "__flujo__": "Ordinario Dte"
    },
    {
      "Instancia": "EJECUCIÓN",
      "Etapa": "Obligaciones",
      "Tarea": "CUMPLIR PAGO DE INTERESES",
      "Tipo de plazo (Ley/Resolución/Acuse/Abogado)": "Resolución",
      "Plazo": "0",
      "Bitácora": "PENDIENTE DE INTERESES",
      "__flujo__": "Ordinario Dte"
    },
    {
      "Instancia": "EJECUCIÓN",
      "Etapa": "Obligaciones",
      "Tarea": "CUMPLIR PAGO DE COSTOS Y/O CAL",
      "Tipo de plazo (Ley/Resolución/Acuse/Abogado)": "Resolución",
      "Plazo": "0",
      "Bitácora": "PENDIENTE DE COSTOS",
      "__flujo__": "Ordinario Dte"
    },
    {
      "Instancia": "EJECUCIÓN",
      "Etapa": "Obligaciones",
      "Tarea": "CUMPLIR PAGO DE COSTAS",
      "Tipo de plazo (Ley/Resolución/Acuse/Abogado)": "Resolución",
      "Plazo": "0",
      "Bitácora": "PENDIENTE DE COSTAS",
      "__flujo__": "Ordinario Dte"
    },
    {
      "Instancia": "EJECUCIÓN",
      "Etapa": "Observación de informe",
      "Tarea": "OBSERVACION DE INFORME",
      "Tipo de plazo (Ley/Resolución/Acuse/Abogado)": "Ley",
      "Plazo": "3",
      "Bitácora": "",
      "__flujo__": "Ordinario Dte"
    },
    {
      "Instancia": "EJECUCIÓN",
      "Etapa": "Impulso de archivo",
      "Tarea": "SOLICITAR LIQUIDACION",
      "Tipo de plazo (Ley/Resolución/Acuse/Abogado)": "Convenio",
      "Plazo": "5",
      "Bitácora": "",
      "__flujo__": "Ordinario Dte"
    }
  ],
  "Abreviado Ddo": [
    {
      "Instancia": "Conserva Instancia",
      "Etapa": "General",
      "Tarea": "APERSONAMIENTO Y/O VARIACION DE DOMICILIO",
      "Tipo de plazo (Ley/Resolución/Acuse/Abogado)": "Convenio",
      "Plazo": "3",
      "Bitácora": "",
      "__flujo__": "Abreviado Ddo"
    },
    {
      "Instancia": "Conserva Instancia",
      "Etapa": "Recurso",
      "Tarea": "RECURSO DE QUEJA",
      "Tipo de plazo (Ley/Resolución/Acuse/Abogado)": "Ley",
      "Plazo": "3",
      "Bitácora": "PENDIENTE DE RECURSO DE QUEJA",
      "__flujo__": "Abreviado Ddo"
    },
    {
      "Instancia": "Conserva Instancia",
      "Etapa": "Recurso",
      "Tarea": "APELACION DE AUTO",
      "Tipo de plazo (Ley/Resolución/Acuse/Abogado)": "Ley",
      "Plazo": "3",
      "Bitácora": "",
      "__flujo__": "Abreviado Ddo"
    },
    {
      "Instancia": "Conserva Instancia",
      "Etapa": "General",
      "Tarea": "CITA CON EL JUEZ",
      "Tipo de plazo (Ley/Resolución/Acuse/Abogado)": "Resolución",
      "Plazo": "0",
      "Bitácora": "",
      "__flujo__": "Abreviado Ddo"
    },
    {
      "Instancia": "Conserva Instancia",
      "Etapa": "General",
      "Tarea": "IMPULSO",
      "Tipo de plazo (Ley/Resolución/Acuse/Abogado)": "Convenio",
      "Plazo": "0",
      "Bitácora": "",
      "__flujo__": "Abreviado Ddo"
    },
    {
      "Instancia": "Conserva Instancia",
      "Etapa": "General",
      "Tarea": "CUMPLE MANDATO",
      "Tipo de plazo (Ley/Resolución/Acuse/Abogado)": "Resolución",
      "Plazo": "3",
      "Bitácora": "",
      "__flujo__": "Abreviado Ddo"
    },
    {
      "Instancia": "Conserva Instancia",
      "Etapa": "General",
      "Tarea": "SOLICITUD DE ARCHIVO DEFINITIVO",
      "Tipo de plazo (Ley/Resolución/Acuse/Abogado)": "Abogado",
      "Plazo": "0",
      "Bitácora": "PENDIENTE DE ARCHIVO DEFINITIVO",
      "__flujo__": "Abreviado Ddo"
    },
    {
      "Instancia": "Conserva Instancia",
      "Etapa": "General",
      "Tarea": "SOLICITUD INFORME ORAL",
      "Tipo de plazo (Ley/Resolución/Acuse/Abogado)": "Convenio",
      "Plazo": "3",
      "Bitácora": "",
      "__flujo__": "Abreviado Ddo"
    },
    {
      "Instancia": "Conserva Instancia",
      "Etapa": "General",
      "Tarea": "CITA PROCURADOR",
      "Tipo de plazo (Ley/Resolución/Acuse/Abogado)": "Resolución",
      "Plazo": "0",
      "Bitácora": "",
      "__flujo__": "Abreviado Ddo"
    },
    {
      "Instancia": "Conserva Instancia",
      "Etapa": "General",
      "Tarea": "DESISTIMIENTO",
      "Tipo de plazo (Ley/Resolución/Acuse/Abogado)": "Abogado",
      "Plazo": "0",
      "Bitácora": "PENDIENTE DE RESOLVER DESISTIMIENTO",
      "__flujo__": "Abreviado Ddo"
    },
    {
      "Instancia": "Conserva Instancia",
      "Etapa": "General",
      "Tarea": "SEGUIMIENTO",
      "Tipo de plazo (Ley/Resolución/Acuse/Abogado)": "Abogado",
      "Plazo": "0",
      "Bitácora": "",
      "__flujo__": "Abreviado Ddo"
    },
    {
      "Instancia": "Conserva Instancia",
      "Etapa": "General",
      "Tarea": "REQUERIR AL JUZGADO / SALA",
      "Tipo de plazo (Ley/Resolución/Acuse/Abogado)": "Abogado",
      "Plazo": "0",
      "Bitácora": "",
      "__flujo__": "Abreviado Ddo"
    },
    {
      "Instancia": "Conserva Instancia",
      "Etapa": "General",
      "Tarea": "INFORMAR AL JUZGADO / SALA",
      "Tipo de plazo (Ley/Resolución/Acuse/Abogado)": "Resolución / Abogado",
      "Plazo": "0",
      "Bitácora": "",
      "__flujo__": "Abreviado Ddo"
    },
    {
      "Instancia": "Conserva Instancia",
      "Etapa": "General",
      "Tarea": "ABSOLVER TRASLADO",
      "Tipo de plazo (Ley/Resolución/Acuse/Abogado)": "Resolución",
      "Plazo": "3",
      "Bitácora": "",
      "__flujo__": "Abreviado Ddo"
    },
    {
      "Instancia": "Conserva Instancia",
      "Etapa": "General",
      "Tarea": "NULIDAD",
      "Tipo de plazo (Ley/Resolución/Acuse/Abogado)": "Abogado",
      "Plazo": "3",
      "Bitácora": "PENDIENTE DE NULIDAD",
      "__flujo__": "Abreviado Ddo"
    },
    {
      "Instancia": "Conserva Instancia",
      "Etapa": "General",
      "Tarea": "SUBSANAR",
      "Tipo de plazo (Ley/Resolución/Acuse/Abogado)": "Resolución / Abogado",
      "Plazo": "0",
      "Bitácora": "",
      "__flujo__": "Abreviado Ddo"
    },
    {
      "Instancia": "Conserva Instancia",
      "Etapa": "General",
      "Tarea": "REUNIONES DE ESTRATEGIA",
      "Tipo de plazo (Ley/Resolución/Acuse/Abogado)": "Convenio",
      "Plazo": "0",
      "Bitácora": "",
      "__flujo__": "Abreviado Ddo"
    },
    {
      "Instancia": "Conserva Instancia",
      "Etapa": "General",
      "Tarea": "REQUERIR AL CLIENTE",
      "Tipo de plazo (Ley/Resolución/Acuse/Abogado)": "Convenio",
      "Plazo": "0",
      "Bitácora": "",
      "__flujo__": "Abreviado Ddo"
    },
    {
      "Instancia": "Conserva Instancia",
      "Etapa": "General",
      "Tarea": "REVISION DE MEDIOS PROBATORIOS",
      "Tipo de plazo (Ley/Resolución/Acuse/Abogado)": "Convenio",
      "Plazo": "0",
      "Bitácora": "",
      "__flujo__": "Abreviado Ddo"
    },
    {
      "Instancia": "PRIMERA INSTANCIA",
      "Etapa": "Probatoria",
      "Tarea": "CONTESTA DE DEMANDA",
      "Tipo de plazo (Ley/Resolución/Acuse/Abogado)": "Resolución",
      "Plazo": "10",
      "Bitácora": "",
      "__flujo__": "Abreviado Ddo"
    },
    {
      "Instancia": "PRIMERA INSTANCIA",
      "Etapa": "General",
      "Tarea": "SEGUIMIENTO DE OFICIOS",
      "Tipo de plazo (Ley/Resolución/Acuse/Abogado)": "Convenio",
      "Plazo": "",
      "Bitácora": "",
      "__flujo__": "Abreviado Ddo"
    },
    {
      "Instancia": "PRIMERA INSTANCIA",
      "Etapa": "General",
      "Tarea": "DILIGENCIAR OFICIO",
      "Tipo de plazo (Ley/Resolución/Acuse/Abogado)": "Convenio",
      "Plazo": "",
      "Bitácora": "",
      "__flujo__": "Abreviado Ddo"
    },
    {
      "Instancia": "PRIMERA INSTANCIA",
      "Etapa": "Probatoria",
      "Tarea": "DILIGENCIA - AUDIENCIA UNICA PREPARATORIA",
      "Tipo de plazo (Ley/Resolución/Acuse/Abogado)": "Resolución",
      "Plazo": "0",
      "Bitácora": "",
      "__flujo__": "Abreviado Ddo"
    },
    {
      "Instancia": "PRIMERA INSTANCIA",
      "Etapa": "Probatoria",
      "Tarea": "DILIGENCIA - AUDIENCIA UNICA",
      "Tipo de plazo (Ley/Resolución/Acuse/Abogado)": "Resolución",
      "Plazo": "0",
      "Bitácora": "PENDIENTE AUDIENCIA UNICA",
      "__flujo__": "Abreviado Ddo"
    },
    {
      "Instancia": "PRIMERA INSTANCIA",
      "Etapa": "Probatoria",
      "Tarea": "DILIGENCIA - AUDIENCIA UNICA (CONTINUACIÓN)",
      "Tipo de plazo (Ley/Resolución/Acuse/Abogado)": "Resolución",
      "Plazo": "0",
      "Bitácora": "PENDIENTE AUDIENCIA UNICA",
      "__flujo__": "Abreviado Ddo"
    },
    {
      "Instancia": "PRIMERA INSTANCIA",
      "Etapa": "Sentencia",
      "Tarea": "DILIGENCIA - LECTURA DE SENTENCIA (PRIMERA INSTANCIA)",
      "Tipo de plazo (Ley/Resolución/Acuse/Abogado)": "Resolución / Abogado",
      "Plazo": "0",
      "Bitácora": "PENDIENTE DE LECTURA DE SENTENCIA",
      "__flujo__": "Abreviado Ddo"
    },
    {
      "Instancia": "PRIMERA INSTANCIA",
      "Etapa": "Recurso",
      "Tarea": "APELACION DE SENTENCIA",
      "Tipo de plazo (Ley/Resolución/Acuse/Abogado)": "Ley",
      "Plazo": "5",
      "Bitácora": "PENDIENTE DE APELACION DE SENTENCIA / ADHESION",
      "__flujo__": "Abreviado Ddo"
    },
    {
      "Instancia": "PRIMERA INSTANCIA",
      "Etapa": "Recurso",
      "Tarea": "APELACION CONTRAPARTE",
      "Tipo de plazo (Ley/Resolución/Acuse/Abogado)": "Ley",
      "Plazo": "5",
      "Bitácora": "PENDIENTE DE APELACION DE SENTENCIA DE CONTRAPARTE",
      "__flujo__": "Abreviado Ddo"
    },
    {
      "Instancia": "SEGUNDA INSTANCIA",
      "Etapa": "Vista de la causa",
      "Tarea": "DILIGENCIA - AUDIENCIA PREPARATORIA VISTA DE LA CAUSA",
      "Tipo de plazo (Ley/Resolución/Acuse/Abogado)": "Resolución",
      "Plazo": "0",
      "Bitácora": "",
      "__flujo__": "Abreviado Ddo"
    },
    {
      "Instancia": "SEGUNDA INSTANCIA",
      "Etapa": "Vista de la causa",
      "Tarea": "DILIGENCIA - AUDIENCIA DE VISTA DE LA CAUSA",
      "Tipo de plazo (Ley/Resolución/Acuse/Abogado)": "Resolución",
      "Plazo": "0",
      "Bitácora": "PENDIENTE DE AUDIENCIA VISTA DE LA CAUSA",
      "__flujo__": "Abreviado Ddo"
    },
    {
      "Instancia": "SEGUNDA INSTANCIA",
      "Etapa": "Vista de la causa",
      "Tarea": "DILIGENCIA - AUDIENCIA DE VISTA DE LA CAUSA (CONTINUACION)",
      "Tipo de plazo (Ley/Resolución/Acuse/Abogado)": "Resolución / Abogado",
      "Plazo": "0",
      "Bitácora": "PENDIENTE DE CONTINUACION DE VISTA DE LA CAUSA",
      "__flujo__": "Abreviado Ddo"
    },
    {
      "Instancia": "SEGUNDA INSTANCIA",
      "Etapa": "Sentencia",
      "Tarea": "DILIGENCIA - LECTURA DE SENTENCIA (SEGUNDA INSTANCIA)",
      "Tipo de plazo (Ley/Resolución/Acuse/Abogado)": "Resolución / Abogado",
      "Plazo": "0",
      "Bitácora": "PENDIENTE DE LECTURA DE SENTENCIA DE VISTA",
      "__flujo__": "Abreviado Ddo"
    },
    {
      "Instancia": "SEGUNDA INSTANCIA",
      "Etapa": "Recurso",
      "Tarea": "RECURSO DE CASACION",
      "Tipo de plazo (Ley/Resolución/Acuse/Abogado)": "Ley",
      "Plazo": "10",
      "Bitácora": "PENDIENTE DE RECURSO DE CASACION",
      "__flujo__": "Abreviado Ddo"
    },
    {
      "Instancia": "SEGUNDA INSTANCIA",
      "Etapa": "Recurso",
      "Tarea": "RECURSO DE CASACION CONTRAPARTE",
      "Tipo de plazo (Ley/Resolución/Acuse/Abogado)": "Ley",
      "Plazo": "10",
      "Bitácora": "PENDIENTE DE RECURSO DE CASACION DE LA CONTRAPARTE",
      "__flujo__": "Abreviado Ddo"
    },
    {
      "Instancia": "TERCERA INSTANCIA",
      "Etapa": "Calificación del recurso",
      "Tarea": "APERSONAMIENTO Y USO DE LA PALABRA EN SUPREMA",
      "Tipo de plazo (Ley/Resolución/Acuse/Abogado)": "Abogado",
      "Plazo": "0",
      "Bitácora": "PENDIENTE DE APERSONAMIENTO Y USO DE LA PALABRA",
      "__flujo__": "Abreviado Ddo"
    },
    {
      "Instancia": "TERCERA INSTANCIA",
      "Etapa": "Calificación del recurso",
      "Tarea": "DILIGENCIA - VISTA DE CALIFICACION",
      "Tipo de plazo (Ley/Resolución/Acuse/Abogado)": "Resolución",
      "Plazo": "0",
      "Bitácora": "PENDIENTE VISTA DE CALIFICACION",
      "__flujo__": "Abreviado Ddo"
    },
    {
      "Instancia": "TERCERA INSTANCIA",
      "Etapa": "Vista de la causa",
      "Tarea": "DILIGENCIA - AUDIENCIA DE VISTA EN SUPREMA",
      "Tipo de plazo (Ley/Resolución/Acuse/Abogado)": "Resolución",
      "Plazo": "0",
      "Bitácora": "PENDIENTE DE AUDIENCIA DE VISTA EN SUPREMA",
      "__flujo__": "Abreviado Ddo"
    },
    {
      "Instancia": "TERCERA INSTANCIA",
      "Etapa": "Sentencia",
      "Tarea": "DILIGENCIA - LECTURA DE SENTENCIA (TERCERA INSTANCIA)",
      "Tipo de plazo (Ley/Resolución/Acuse/Abogado)": "Resolución / Abogado",
      "Plazo": "0",
      "Bitácora": "PENDIENTE DE LECTURA DE SENTENCIA DE SUPREMA",
      "__flujo__": "Abreviado Ddo"
    },
    {
      "Instancia": "Conserva Instancia",
      "Etapa": "Sentencia",
      "Tarea": "DEMANDA DE AMPARO CONTRA RESOLUCION JUDICIAL",
      "Tipo de plazo (Ley/Resolución/Acuse/Abogado)": "Ley",
      "Plazo": "30",
      "Bitácora": "",
      "__flujo__": "Abreviado Ddo"
    },
    {
      "Instancia": "EJECUCIÓN",
      "Etapa": "Ejecución anticipada",
      "Tarea": "SOLICITUD DE SUSPENSION / CANCELACION DE EJECUCION",
      "Tipo de plazo (Ley/Resolución/Acuse/Abogado)": "Abogado",
      "Plazo": "0",
      "Bitácora": "",
      "__flujo__": "Abreviado Ddo"
    },
    {
      "Instancia": "EJECUCIÓN",
      "Etapa": "Ejecución anticipada",
      "Tarea": "PRESENTAR CARTA FIANZA",
      "Tipo de plazo (Ley/Resolución/Acuse/Abogado)": "Abogado",
      "Plazo": "0",
      "Bitácora": "",
      "__flujo__": "Abreviado Ddo"
    },
    {
      "Instancia": "EJECUCIÓN",
      "Etapa": "Ejecución anticipada",
      "Tarea": "RENOVAR CARTA FIANZA",
      "Tipo de plazo (Ley/Resolución/Acuse/Abogado)": "Resolución",
      "Plazo": "0",
      "Bitácora": "",
      "__flujo__": "Abreviado Ddo"
    },
    {
      "Instancia": "EJECUCIÓN",
      "Etapa": "Obligaciones",
      "Tarea": "CUMPLIR OBLIGACION PRINCIPAL",
      "Tipo de plazo (Ley/Resolución/Acuse/Abogado)": "Resolución",
      "Plazo": "0",
      "Bitácora": "PENDIENTE DE CUMPLIR OBLIGACION PRINCIPAL",
      "__flujo__": "Abreviado Ddo"
    },
    {
      "Instancia": "EJECUCIÓN",
      "Etapa": "Obligaciones",
      "Tarea": "CUMPLIR PAGO DE INTERESES",
      "Tipo de plazo (Ley/Resolución/Acuse/Abogado)": "Resolución",
      "Plazo": "0",
      "Bitácora": "PENDIENTE DE INTERESES",
      "__flujo__": "Abreviado Ddo"
    },
    {
      "Instancia": "EJECUCIÓN",
      "Etapa": "Obligaciones",
      "Tarea": "CUMPLIR PAGO DE COSTOS Y/O CAL",
      "Tipo de plazo (Ley/Resolución/Acuse/Abogado)": "Resolución",
      "Plazo": "0",
      "Bitácora": "PENDIENTE DE COSTOS",
      "__flujo__": "Abreviado Ddo"
    },
    {
      "Instancia": "EJECUCIÓN",
      "Etapa": "Obligaciones",
      "Tarea": "CUMPLIR PAGO DE COSTAS",
      "Tipo de plazo (Ley/Resolución/Acuse/Abogado)": "Resolución",
      "Plazo": "0",
      "Bitácora": "PENDIENTE DE COSTAS",
      "__flujo__": "Abreviado Ddo"
    },
    {
      "Instancia": "EJECUCIÓN",
      "Etapa": "Observación de informe",
      "Tarea": "OBSERVACION DE INFORME",
      "Tipo de plazo (Ley/Resolución/Acuse/Abogado)": "Ley",
      "Plazo": "3",
      "Bitácora": "",
      "__flujo__": "Abreviado Ddo"
    },
    {
      "Instancia": "EJECUCIÓN",
      "Etapa": "Impulso de archivo",
      "Tarea": "SOLICITAR LIQUIDACION",
      "Tipo de plazo (Ley/Resolución/Acuse/Abogado)": "Convenio",
      "Plazo": "5",
      "Bitácora": "",
      "__flujo__": "Abreviado Ddo"
    }
  ],
  "Abreviado Dte": [
    {
      "Instancia": "Conserva Instancia",
      "Etapa": "General",
      "Tarea": "APERSONAMIENTO Y/O VARIACION DE DOMICILIO",
      "Tipo de plazo (Ley/Resolución/Acuse/Abogado)": "Convenio",
      "Plazo": "3",
      "Bitácora": "",
      "__flujo__": "Abreviado Dte"
    },
    {
      "Instancia": "Conserva Instancia",
      "Etapa": "Recurso",
      "Tarea": "RECURSO DE QUEJA",
      "Tipo de plazo (Ley/Resolución/Acuse/Abogado)": "Ley",
      "Plazo": "3",
      "Bitácora": "PENDIENTE DE RECURSO DE QUEJA",
      "__flujo__": "Abreviado Dte"
    },
    {
      "Instancia": "Conserva Instancia",
      "Etapa": "Recurso",
      "Tarea": "APELACION DE AUTO",
      "Tipo de plazo (Ley/Resolución/Acuse/Abogado)": "Ley",
      "Plazo": "3",
      "Bitácora": "",
      "__flujo__": "Abreviado Dte"
    },
    {
      "Instancia": "Conserva Instancia",
      "Etapa": "General",
      "Tarea": "CITA CON EL JUEZ",
      "Tipo de plazo (Ley/Resolución/Acuse/Abogado)": "Resolución",
      "Plazo": "0",
      "Bitácora": "",
      "__flujo__": "Abreviado Dte"
    },
    {
      "Instancia": "Conserva Instancia",
      "Etapa": "General",
      "Tarea": "IMPULSO",
      "Tipo de plazo (Ley/Resolución/Acuse/Abogado)": "Convenio",
      "Plazo": "0",
      "Bitácora": "",
      "__flujo__": "Abreviado Dte"
    },
    {
      "Instancia": "Conserva Instancia",
      "Etapa": "General",
      "Tarea": "CUMPLE MANDATO",
      "Tipo de plazo (Ley/Resolución/Acuse/Abogado)": "Resolución",
      "Plazo": "3",
      "Bitácora": "",
      "__flujo__": "Abreviado Dte"
    },
    {
      "Instancia": "Conserva Instancia",
      "Etapa": "General",
      "Tarea": "SOLICITUD DE ARCHIVO DEFINITIVO",
      "Tipo de plazo (Ley/Resolución/Acuse/Abogado)": "Abogado",
      "Plazo": "0",
      "Bitácora": "PENDIENTE DE ARCHIVO DEFINITIVO",
      "__flujo__": "Abreviado Dte"
    },
    {
      "Instancia": "Conserva Instancia",
      "Etapa": "General",
      "Tarea": "SOLICITUD INFORME ORAL",
      "Tipo de plazo (Ley/Resolución/Acuse/Abogado)": "Convenio",
      "Plazo": "3",
      "Bitácora": "",
      "__flujo__": "Abreviado Dte"
    },
    {
      "Instancia": "Conserva Instancia",
      "Etapa": "General",
      "Tarea": "CITA PROCURADOR",
      "Tipo de plazo (Ley/Resolución/Acuse/Abogado)": "Resolución",
      "Plazo": "0",
      "Bitácora": "",
      "__flujo__": "Abreviado Dte"
    },
    {
      "Instancia": "Conserva Instancia",
      "Etapa": "General",
      "Tarea": "DESISTIMIENTO",
      "Tipo de plazo (Ley/Resolución/Acuse/Abogado)": "Abogado",
      "Plazo": "0",
      "Bitácora": "PENDIENTE DE RESOLVER DESISTIMIENTO",
      "__flujo__": "Abreviado Dte"
    },
    {
      "Instancia": "Conserva Instancia",
      "Etapa": "General",
      "Tarea": "SEGUIMIENTO",
      "Tipo de plazo (Ley/Resolución/Acuse/Abogado)": "Abogado",
      "Plazo": "0",
      "Bitácora": "",
      "__flujo__": "Abreviado Dte"
    },
    {
      "Instancia": "Conserva Instancia",
      "Etapa": "General",
      "Tarea": "REQUERIR AL JUZGADO / SALA",
      "Tipo de plazo (Ley/Resolución/Acuse/Abogado)": "Abogado",
      "Plazo": "0",
      "Bitácora": "",
      "__flujo__": "Abreviado Dte"
    },
    {
      "Instancia": "Conserva Instancia",
      "Etapa": "General",
      "Tarea": "INFORMAR AL JUZGADO / SALA",
      "Tipo de plazo (Ley/Resolución/Acuse/Abogado)": "Resolución / Abogado",
      "Plazo": "0",
      "Bitácora": "",
      "__flujo__": "Abreviado Dte"
    },
    {
      "Instancia": "Conserva Instancia",
      "Etapa": "General",
      "Tarea": "ABSOLVER TRASLADO",
      "Tipo de plazo (Ley/Resolución/Acuse/Abogado)": "Resolución",
      "Plazo": "3",
      "Bitácora": "",
      "__flujo__": "Abreviado Dte"
    },
    {
      "Instancia": "Conserva Instancia",
      "Etapa": "General",
      "Tarea": "NULIDAD",
      "Tipo de plazo (Ley/Resolución/Acuse/Abogado)": "Abogado",
      "Plazo": "3",
      "Bitácora": "PENDIENTE DE NULIDAD",
      "__flujo__": "Abreviado Dte"
    },
    {
      "Instancia": "Conserva Instancia",
      "Etapa": "General",
      "Tarea": "SUBSANAR",
      "Tipo de plazo (Ley/Resolución/Acuse/Abogado)": "Resolución / Abogado",
      "Plazo": "0",
      "Bitácora": "",
      "__flujo__": "Abreviado Dte"
    },
    {
      "Instancia": "Conserva Instancia",
      "Etapa": "General",
      "Tarea": "REUNIONES DE ESTRATEGIA",
      "Tipo de plazo (Ley/Resolución/Acuse/Abogado)": "Convenio",
      "Plazo": "0",
      "Bitácora": "",
      "__flujo__": "Abreviado Dte"
    },
    {
      "Instancia": "Conserva Instancia",
      "Etapa": "General",
      "Tarea": "REQUERIR AL CLIENTE",
      "Tipo de plazo (Ley/Resolución/Acuse/Abogado)": "Convenio",
      "Plazo": "0",
      "Bitácora": "",
      "__flujo__": "Abreviado Dte"
    },
    {
      "Instancia": "Conserva Instancia",
      "Etapa": "General",
      "Tarea": "REVISION DE MEDIOS PROBATORIOS",
      "Tipo de plazo (Ley/Resolución/Acuse/Abogado)": "Convenio",
      "Plazo": "0",
      "Bitácora": "",
      "__flujo__": "Abreviado Dte"
    },
    {
      "Instancia": "PRIMERA INSTANCIA",
      "Etapa": "Admisión",
      "Tarea": "PRESENTACION DE DEMANDA",
      "Tipo de plazo (Ley/Resolución/Acuse/Abogado)": "Abogado",
      "Plazo": "0",
      "Bitácora": "PENDIENTE DE PRESENTACION DE DEMANDA",
      "__flujo__": "Abreviado Dte"
    },
    {
      "Instancia": "PRIMERA INSTANCIA",
      "Etapa": "General",
      "Tarea": "SEGUIMIENTO DE OFICIOS",
      "Tipo de plazo (Ley/Resolución/Acuse/Abogado)": "Convenio",
      "Plazo": "",
      "Bitácora": "",
      "__flujo__": "Abreviado Dte"
    },
    {
      "Instancia": "PRIMERA INSTANCIA",
      "Etapa": "General",
      "Tarea": "DILIGENCIAR OFICIO",
      "Tipo de plazo (Ley/Resolución/Acuse/Abogado)": "Convenio",
      "Plazo": "",
      "Bitácora": "",
      "__flujo__": "Abreviado Dte"
    },
    {
      "Instancia": "PRIMERA INSTANCIA",
      "Etapa": "Probatoria",
      "Tarea": "DILIGENCIA - AUDIENCIA UNICA PREPARATORIA",
      "Tipo de plazo (Ley/Resolución/Acuse/Abogado)": "Resolución",
      "Plazo": "0",
      "Bitácora": "",
      "__flujo__": "Abreviado Dte"
    },
    {
      "Instancia": "PRIMERA INSTANCIA",
      "Etapa": "Probatoria",
      "Tarea": "DILIGENCIA - AUDIENCIA UNICA",
      "Tipo de plazo (Ley/Resolución/Acuse/Abogado)": "Resolución",
      "Plazo": "0",
      "Bitácora": "PENDIENTE AUDIENCIA UNICA",
      "__flujo__": "Abreviado Dte"
    },
    {
      "Instancia": "PRIMERA INSTANCIA",
      "Etapa": "Probatoria",
      "Tarea": "DILIGENCIA - AUDIENCIA UNICA (CONTINUACIÓN)",
      "Tipo de plazo (Ley/Resolución/Acuse/Abogado)": "Resolución",
      "Plazo": "0",
      "Bitácora": "PENDIENTE AUDIENCIA UNICA",
      "__flujo__": "Abreviado Dte"
    },
    {
      "Instancia": "PRIMERA INSTANCIA",
      "Etapa": "Sentencia",
      "Tarea": "DILIGENCIA - LECTURA DE SENTENCIA (PRIMERA INSTANCIA)",
      "Tipo de plazo (Ley/Resolución/Acuse/Abogado)": "Resolución / Abogado",
      "Plazo": "0",
      "Bitácora": "PENDIENTE DE LECTURA DE SENTENCIA",
      "__flujo__": "Abreviado Dte"
    },
    {
      "Instancia": "PRIMERA INSTANCIA",
      "Etapa": "Recurso",
      "Tarea": "APELACION DE SENTENCIA",
      "Tipo de plazo (Ley/Resolución/Acuse/Abogado)": "Ley",
      "Plazo": "5",
      "Bitácora": "PENDIENTE DE APELACION DE SENTENCIA / ADHESION",
      "__flujo__": "Abreviado Dte"
    },
    {
      "Instancia": "PRIMERA INSTANCIA",
      "Etapa": "Recurso",
      "Tarea": "APELACION CONTRAPARTE",
      "Tipo de plazo (Ley/Resolución/Acuse/Abogado)": "Ley",
      "Plazo": "5",
      "Bitácora": "PENDIENTE DE APELACION DE SENTENCIA DE CONTRAPARTE",
      "__flujo__": "Abreviado Dte"
    },
    {
      "Instancia": "SEGUNDA INSTANCIA",
      "Etapa": "Vista de la causa",
      "Tarea": "DILIGENCIA - AUDIENCIA PREPARATORIA VISTA DE LA CAUSA",
      "Tipo de plazo (Ley/Resolución/Acuse/Abogado)": "Resolución",
      "Plazo": "0",
      "Bitácora": "",
      "__flujo__": "Abreviado Dte"
    },
    {
      "Instancia": "SEGUNDA INSTANCIA",
      "Etapa": "Vista de la causa",
      "Tarea": "DILIGENCIA - AUDIENCIA DE VISTA DE LA CAUSA",
      "Tipo de plazo (Ley/Resolución/Acuse/Abogado)": "Resolución",
      "Plazo": "0",
      "Bitácora": "PENDIENTE DE AUDIENCIA VISTA DE LA CAUSA",
      "__flujo__": "Abreviado Dte"
    },
    {
      "Instancia": "SEGUNDA INSTANCIA",
      "Etapa": "Vista de la causa",
      "Tarea": "DILIGENCIA - AUDIENCIA DE VISTA DE LA CAUSA (CONTINUACION)",
      "Tipo de plazo (Ley/Resolución/Acuse/Abogado)": "Resolución / Abogado",
      "Plazo": "0",
      "Bitácora": "PENDIENTE DE CONTINUACION DE VISTA DE LA CAUSA",
      "__flujo__": "Abreviado Dte"
    },
    {
      "Instancia": "SEGUNDA INSTANCIA",
      "Etapa": "Sentencia",
      "Tarea": "DILIGENCIA - LECTURA DE SENTENCIA (SEGUNDA INSTANCIA)",
      "Tipo de plazo (Ley/Resolución/Acuse/Abogado)": "Resolución / Abogado",
      "Plazo": "0",
      "Bitácora": "PENDIENTE DE LECTURA DE SENTENCIA DE VISTA",
      "__flujo__": "Abreviado Dte"
    },
    {
      "Instancia": "SEGUNDA INSTANCIA",
      "Etapa": "Recurso",
      "Tarea": "RECURSO DE CASACION",
      "Tipo de plazo (Ley/Resolución/Acuse/Abogado)": "Ley",
      "Plazo": "10",
      "Bitácora": "PENDIENTE DE RECURSO DE CASACION",
      "__flujo__": "Abreviado Dte"
    },
    {
      "Instancia": "SEGUNDA INSTANCIA",
      "Etapa": "Recurso",
      "Tarea": "RECURSO DE CASACION CONTRAPARTE",
      "Tipo de plazo (Ley/Resolución/Acuse/Abogado)": "Ley",
      "Plazo": "10",
      "Bitácora": "PENDIENTE DE RECURSO DE CASACION DE LA CONTRAPARTE",
      "__flujo__": "Abreviado Dte"
    },
    {
      "Instancia": "TERCERA INSTANCIA",
      "Etapa": "Calificación del recurso",
      "Tarea": "APERSONAMIENTO Y USO DE LA PALABRA EN SUPREMA",
      "Tipo de plazo (Ley/Resolución/Acuse/Abogado)": "Abogado",
      "Plazo": "0",
      "Bitácora": "PENDIENTE DE APERSONAMIENTO Y USO DE LA PALABRA",
      "__flujo__": "Abreviado Dte"
    },
    {
      "Instancia": "TERCERA INSTANCIA",
      "Etapa": "Calificación del recurso",
      "Tarea": "DILIGENCIA - VISTA DE CALIFICACION",
      "Tipo de plazo (Ley/Resolución/Acuse/Abogado)": "Resolución",
      "Plazo": "0",
      "Bitácora": "PENDIENTE VISTA DE CALIFICACION",
      "__flujo__": "Abreviado Dte"
    },
    {
      "Instancia": "TERCERA INSTANCIA",
      "Etapa": "Vista de la causa",
      "Tarea": "DILIGENCIA - AUDIENCIA DE VISTA EN SUPREMA",
      "Tipo de plazo (Ley/Resolución/Acuse/Abogado)": "Resolución",
      "Plazo": "0",
      "Bitácora": "PENDIENTE DE AUDIENCIA DE VISTA EN SUPREMA",
      "__flujo__": "Abreviado Dte"
    },
    {
      "Instancia": "TERCERA INSTANCIA",
      "Etapa": "Sentencia",
      "Tarea": "DILIGENCIA - LECTURA DE SENTENCIA (TERCERA INSTANCIA)",
      "Tipo de plazo (Ley/Resolución/Acuse/Abogado)": "Resolución / Abogado",
      "Plazo": "0",
      "Bitácora": "PENDIENTE DE LECTURA DE SENTENCIA DE SUPREMA",
      "__flujo__": "Abreviado Dte"
    },
    {
      "Instancia": "Conserva Instancia",
      "Etapa": "Sentencia",
      "Tarea": "DEMANDA DE AMPARO CONTRA RESOLUCION JUDICIAL",
      "Tipo de plazo (Ley/Resolución/Acuse/Abogado)": "Ley",
      "Plazo": "30",
      "Bitácora": "",
      "__flujo__": "Abreviado Dte"
    },
    {
      "Instancia": "EJECUCIÓN",
      "Etapa": "Ejecución anticipada",
      "Tarea": "SOLICITUD DE SUSPENSION / CANCELACION DE EJECUCION",
      "Tipo de plazo (Ley/Resolución/Acuse/Abogado)": "Abogado",
      "Plazo": "0",
      "Bitácora": "",
      "__flujo__": "Abreviado Dte"
    },
    {
      "Instancia": "EJECUCIÓN",
      "Etapa": "Obligaciones",
      "Tarea": "CUMPLIR PAGO DE INTERESES",
      "Tipo de plazo (Ley/Resolución/Acuse/Abogado)": "Resolución",
      "Plazo": "0",
      "Bitácora": "PENDIENTE DE INTERESES",
      "__flujo__": "Abreviado Dte"
    },
    {
      "Instancia": "EJECUCIÓN",
      "Etapa": "Obligaciones",
      "Tarea": "CUMPLIR PAGO DE COSTOS Y/O CAL",
      "Tipo de plazo (Ley/Resolución/Acuse/Abogado)": "Resolución",
      "Plazo": "0",
      "Bitácora": "PENDIENTE DE COSTOS",
      "__flujo__": "Abreviado Dte"
    },
    {
      "Instancia": "EJECUCIÓN",
      "Etapa": "Obligaciones",
      "Tarea": "CUMPLIR PAGO DE COSTAS",
      "Tipo de plazo (Ley/Resolución/Acuse/Abogado)": "Resolución",
      "Plazo": "0",
      "Bitácora": "PENDIENTE DE COSTAS",
      "__flujo__": "Abreviado Dte"
    },
    {
      "Instancia": "EJECUCIÓN",
      "Etapa": "Observación de informe",
      "Tarea": "OBSERVACION DE INFORME",
      "Tipo de plazo (Ley/Resolución/Acuse/Abogado)": "Ley",
      "Plazo": "3",
      "Bitácora": "",
      "__flujo__": "Abreviado Dte"
    },
    {
      "Instancia": "EJECUCIÓN",
      "Etapa": "Impulso de archivo",
      "Tarea": "SOLICITAR LIQUIDACION",
      "Tipo de plazo (Ley/Resolución/Acuse/Abogado)": "Convenio",
      "Plazo": "5",
      "Bitácora": "",
      "__flujo__": "Abreviado Dte"
    }
  ],
  "Amparo Ddo": [
    {
      "Instancia": "Conserva Instancia",
      "Etapa": "General",
      "Tarea": "APERSONAMIENTO Y/O VARIACION DE DOMICILIO",
      "Tipo de plazo (Ley/Resolución/Acuse/Abogado)": "Convenio",
      "Plazo": "3",
      "Bitácora": "",
      "__flujo__": "Amparo Ddo"
    },
    {
      "Instancia": "Conserva Instancia",
      "Etapa": "Recurso",
      "Tarea": "RECURSO DE QUEJA",
      "Tipo de plazo (Ley/Resolución/Acuse/Abogado)": "Ley",
      "Plazo": "3",
      "Bitácora": "PENDIENTE DE RECURSO DE QUEJA",
      "__flujo__": "Amparo Ddo"
    },
    {
      "Instancia": "Conserva Instancia",
      "Etapa": "Recurso",
      "Tarea": "APELACION DE AUTO",
      "Tipo de plazo (Ley/Resolución/Acuse/Abogado)": "Ley",
      "Plazo": "3",
      "Bitácora": "",
      "__flujo__": "Amparo Ddo"
    },
    {
      "Instancia": "Conserva Instancia",
      "Etapa": "General",
      "Tarea": "CITA CON EL JUEZ",
      "Tipo de plazo (Ley/Resolución/Acuse/Abogado)": "Resolución",
      "Plazo": "0",
      "Bitácora": "",
      "__flujo__": "Amparo Ddo"
    },
    {
      "Instancia": "Conserva Instancia",
      "Etapa": "General",
      "Tarea": "IMPULSO",
      "Tipo de plazo (Ley/Resolución/Acuse/Abogado)": "Convenio",
      "Plazo": "3",
      "Bitácora": "",
      "__flujo__": "Amparo Ddo"
    },
    {
      "Instancia": "Conserva Instancia",
      "Etapa": "General",
      "Tarea": "CUMPLE MANDATO",
      "Tipo de plazo (Ley/Resolución/Acuse/Abogado)": "Resolución",
      "Plazo": "3",
      "Bitácora": "",
      "__flujo__": "Amparo Ddo"
    },
    {
      "Instancia": "Conserva Instancia",
      "Etapa": "General",
      "Tarea": "SOLICITUD DE ARCHIVO DEFINITIVO",
      "Tipo de plazo (Ley/Resolución/Acuse/Abogado)": "Abogado",
      "Plazo": "0",
      "Bitácora": "PENDIENTE DE ARCHIVO DEFINITIVO",
      "__flujo__": "Amparo Ddo"
    },
    {
      "Instancia": "Conserva Instancia",
      "Etapa": "General",
      "Tarea": "SOLICITUD INFORME ORAL",
      "Tipo de plazo (Ley/Resolución/Acuse/Abogado)": "Convenio",
      "Plazo": "3",
      "Bitácora": "",
      "__flujo__": "Amparo Ddo"
    },
    {
      "Instancia": "Conserva Instancia",
      "Etapa": "General",
      "Tarea": "CITA PROCURADOR",
      "Tipo de plazo (Ley/Resolución/Acuse/Abogado)": "Resolución",
      "Plazo": "0",
      "Bitácora": "",
      "__flujo__": "Amparo Ddo"
    },
    {
      "Instancia": "Conserva Instancia",
      "Etapa": "General",
      "Tarea": "DESISTIMIENTO",
      "Tipo de plazo (Ley/Resolución/Acuse/Abogado)": "Abogado",
      "Plazo": "0",
      "Bitácora": "PENDIENTE DE RESOLVER DESISTIMIENTO",
      "__flujo__": "Amparo Ddo"
    },
    {
      "Instancia": "Conserva Instancia",
      "Etapa": "General",
      "Tarea": "SEGUIMIENTO",
      "Tipo de plazo (Ley/Resolución/Acuse/Abogado)": "Abogado",
      "Plazo": "0",
      "Bitácora": "",
      "__flujo__": "Amparo Ddo"
    },
    {
      "Instancia": "Conserva Instancia",
      "Etapa": "General",
      "Tarea": "REQUERIR AL JUZGADO / SALA",
      "Tipo de plazo (Ley/Resolución/Acuse/Abogado)": "Abogado",
      "Plazo": "0",
      "Bitácora": "",
      "__flujo__": "Amparo Ddo"
    },
    {
      "Instancia": "Conserva Instancia",
      "Etapa": "General",
      "Tarea": "INFORMAR AL JUZGADO / SALA",
      "Tipo de plazo (Ley/Resolución/Acuse/Abogado)": "Resolución / Abogado",
      "Plazo": "0",
      "Bitácora": "",
      "__flujo__": "Amparo Ddo"
    },
    {
      "Instancia": "Conserva Instancia",
      "Etapa": "General",
      "Tarea": "ABSOLVER TRASLADO",
      "Tipo de plazo (Ley/Resolución/Acuse/Abogado)": "Resolución",
      "Plazo": "3",
      "Bitácora": "PENDIENTE DE RESOLVER TRASLADO",
      "__flujo__": "Amparo Ddo"
    },
    {
      "Instancia": "Conserva Instancia",
      "Etapa": "General",
      "Tarea": "NULIDAD",
      "Tipo de plazo (Ley/Resolución/Acuse/Abogado)": "Abogado",
      "Plazo": "3",
      "Bitácora": "PENDIENTE DE NULIDAD",
      "__flujo__": "Amparo Ddo"
    },
    {
      "Instancia": "Conserva Instancia",
      "Etapa": "General",
      "Tarea": "SUBSANAR",
      "Tipo de plazo (Ley/Resolución/Acuse/Abogado)": "Resolución / Abogado",
      "Plazo": "0",
      "Bitácora": "",
      "__flujo__": "Amparo Ddo"
    },
    {
      "Instancia": "Conserva Instancia",
      "Etapa": "General",
      "Tarea": "REUNIONES DE ESTRATEGIA",
      "Tipo de plazo (Ley/Resolución/Acuse/Abogado)": "Convenio",
      "Plazo": "0",
      "Bitácora": "",
      "__flujo__": "Amparo Ddo"
    },
    {
      "Instancia": "Conserva Instancia",
      "Etapa": "General",
      "Tarea": "REQUERIR AL CLIENTE",
      "Tipo de plazo (Ley/Resolución/Acuse/Abogado)": "Convenio",
      "Plazo": "0",
      "Bitácora": "",
      "__flujo__": "Amparo Ddo"
    },
    {
      "Instancia": "Conserva Instancia",
      "Etapa": "General",
      "Tarea": "REVISION DE MEDIOS PROBATORIOS",
      "Tipo de plazo (Ley/Resolución/Acuse/Abogado)": "Convenio",
      "Plazo": "0",
      "Bitácora": "",
      "__flujo__": "Amparo Ddo"
    },
    {
      "Instancia": "PRIMERA INSTANCIA",
      "Etapa": "Postulatoria",
      "Tarea": "CONTESTA DE DEMANDA",
      "Tipo de plazo (Ley/Resolución/Acuse/Abogado)": "Resolución",
      "Plazo": "10",
      "Bitácora": "",
      "__flujo__": "Amparo Ddo"
    },
    {
      "Instancia": "PRIMERA INSTANCIA",
      "Etapa": "General",
      "Tarea": "SEGUIMIENTO DE OFICIOS",
      "Tipo de plazo (Ley/Resolución/Acuse/Abogado)": "",
      "Plazo": "",
      "Bitácora": "",
      "__flujo__": "Amparo Ddo"
    },
    {
      "Instancia": "PRIMERA INSTANCIA",
      "Etapa": "General",
      "Tarea": "DILIGENCIAR OFICIO",
      "Tipo de plazo (Ley/Resolución/Acuse/Abogado)": "",
      "Plazo": "",
      "Bitácora": "",
      "__flujo__": "Amparo Ddo"
    },
    {
      "Instancia": "PRIMERA INSTANCIA",
      "Etapa": "Probatoria",
      "Tarea": "DILIGENCIA - AUDIENCIA UNICA PREPARATORIA",
      "Tipo de plazo (Ley/Resolución/Acuse/Abogado)": "Resolución",
      "Plazo": "0",
      "Bitácora": "",
      "__flujo__": "Amparo Ddo"
    },
    {
      "Instancia": "PRIMERA INSTANCIA",
      "Etapa": "Probatoria",
      "Tarea": "DILIGENCIA - AUDIENCIA UNICA",
      "Tipo de plazo (Ley/Resolución/Acuse/Abogado)": "Resolución",
      "Plazo": "0",
      "Bitácora": "PENDIENTE AUDIENCIA UNICA",
      "__flujo__": "Amparo Ddo"
    },
    {
      "Instancia": "PRIMERA INSTANCIA",
      "Etapa": "Probatoria",
      "Tarea": "DILIGENCIA - AUDIENCIA UNICA (CONTINUACIÓN)",
      "Tipo de plazo (Ley/Resolución/Acuse/Abogado)": "Resolución",
      "Plazo": "0",
      "Bitácora": "PENDIENTE AUDIENCIA UNICA",
      "__flujo__": "Amparo Ddo"
    },
    {
      "Instancia": "PRIMERA INSTANCIA",
      "Etapa": "Sentencia",
      "Tarea": "DILIGENCIA - LECTURA DE SENTENCIA (PRIMERA INSTANCIA)",
      "Tipo de plazo (Ley/Resolución/Acuse/Abogado)": "Resolución / Abogado",
      "Plazo": "0",
      "Bitácora": "PENDIENTE DE LECTURA DE SENTENCIA",
      "__flujo__": "Amparo Ddo"
    },
    {
      "Instancia": "PRIMERA INSTANCIA",
      "Etapa": "Recurso",
      "Tarea": "APELACION DE SENTENCIA",
      "Tipo de plazo (Ley/Resolución/Acuse/Abogado)": "Ley",
      "Plazo": "3",
      "Bitácora": "PENDIENTE DE APELACION DE SENTENCIA / ADHESION",
      "__flujo__": "Amparo Ddo"
    },
    {
      "Instancia": "PRIMERA INSTANCIA",
      "Etapa": "Recurso",
      "Tarea": "APELACION CONTRAPARTE",
      "Tipo de plazo (Ley/Resolución/Acuse/Abogado)": "Ley",
      "Plazo": "3",
      "Bitácora": "PENDIENTE DE APELACION DE SENTENCIA CONTRAPARTE",
      "__flujo__": "Amparo Ddo"
    },
    {
      "Instancia": "SEGUNDA INSTANCIA",
      "Etapa": "Vista de la causa",
      "Tarea": "DILIGENCIA - AUDIENCIA PREPARATORIA VISTA DE LA CAUSA",
      "Tipo de plazo (Ley/Resolución/Acuse/Abogado)": "Resolución",
      "Plazo": "0",
      "Bitácora": "",
      "__flujo__": "Amparo Ddo"
    },
    {
      "Instancia": "SEGUNDA INSTANCIA",
      "Etapa": "Vista de la causa",
      "Tarea": "DILIGENCIA - AUDIENCIA DE VISTA DE LA CAUSA",
      "Tipo de plazo (Ley/Resolución/Acuse/Abogado)": "Resolución",
      "Plazo": "0",
      "Bitácora": "PENDIENTE DE AUDIENCIA VISTA DE LA CAUSA",
      "__flujo__": "Amparo Ddo"
    },
    {
      "Instancia": "SEGUNDA INSTANCIA",
      "Etapa": "Vista de la causa",
      "Tarea": "DILIGENCIA - AUDIENCIA DE VISTA DE LA CAUSA (CONTINUACION)",
      "Tipo de plazo (Ley/Resolución/Acuse/Abogado)": "Resolución / Abogado",
      "Plazo": "0",
      "Bitácora": "PENDIENTE DE CONTINUACION DE VISTA DE LA CAUSA",
      "__flujo__": "Amparo Ddo"
    },
    {
      "Instancia": "SEGUNDA INSTANCIA",
      "Etapa": "Sentencia",
      "Tarea": "DILIGENCIA - LECTURA DE SENTENCIA (SEGUNDA INSTANCIA)",
      "Tipo de plazo (Ley/Resolución/Acuse/Abogado)": "Resolución / Abogado",
      "Plazo": "0",
      "Bitácora": "PENDIENTE DE LECTURA DE SENTENCIA DE SALA",
      "__flujo__": "Amparo Ddo"
    },
    {
      "Instancia": "SEGUNDA INSTANCIA",
      "Etapa": "Recurso",
      "Tarea": "RECURSO DE AGRAVIO CONSTITUCIONAL",
      "Tipo de plazo (Ley/Resolución/Acuse/Abogado)": "Ley",
      "Plazo": "10",
      "Bitácora": "PENDIENTE DE RECURSO DE AGRAVIO CONSTITUCIONAL",
      "__flujo__": "Amparo Ddo"
    },
    {
      "Instancia": "SEGUNDA INSTANCIA",
      "Etapa": "Recurso",
      "Tarea": "RECURSO DE AGRAVIO CONSTITUCIONAL CONTRAPARTE",
      "Tipo de plazo (Ley/Resolución/Acuse/Abogado)": "Ley",
      "Plazo": "11",
      "Bitácora": "PENDIENTE DE RECURSO DE AGRAVIO CONSTITUCIONAL CONTRAPARTE",
      "__flujo__": "Amparo Ddo"
    },
    {
      "Instancia": "TERCERA INSTANCIA",
      "Etapa": "Vista de la causa",
      "Tarea": "APERSONAMIENTO Y USO DE LA PALABRA EN TC",
      "Tipo de plazo (Ley/Resolución/Acuse/Abogado)": "Convenio",
      "Plazo": "3",
      "Bitácora": "PENDIENTE DE APERSONAMIENTO Y USO DE LA PALABRA",
      "__flujo__": "Amparo Ddo"
    },
    {
      "Instancia": "TERCERA INSTANCIA",
      "Etapa": "Vista de la causa",
      "Tarea": "DILIGENCIA - AUDIENCIA DE VISTA EN TC",
      "Tipo de plazo (Ley/Resolución/Acuse/Abogado)": "Resolución",
      "Plazo": "0",
      "Bitácora": "PENDIENTE DE AUDIENCIA DE VISTA EN TC",
      "__flujo__": "Amparo Ddo"
    },
    {
      "Instancia": "TERCERA INSTANCIA",
      "Etapa": "Sentencia",
      "Tarea": "DILIGENCIA - LECTURA DE SENTENCIA (TERCERA INSTANCIA)",
      "Tipo de plazo (Ley/Resolución/Acuse/Abogado)": "Resolución / Abogado",
      "Plazo": "0",
      "Bitácora": "PENDIENTE DE LECTURA DE SENTENCIA DE TC",
      "__flujo__": "Amparo Ddo"
    },
    {
      "Instancia": "EJECUCIÓN",
      "Etapa": "Obligaciones",
      "Tarea": "CUMPLIR OBLIGACION PRINCIPAL",
      "Tipo de plazo (Ley/Resolución/Acuse/Abogado)": "Resolución",
      "Plazo": "0",
      "Bitácora": "PENDIENTE DE CUMPLIR OBLIGACION PRINCIPAL",
      "__flujo__": "Amparo Ddo"
    }
  ],
  "Amparo Dte": [
    {
      "Instancia": "Conserva Instancia",
      "Etapa": "General",
      "Tarea": "APERSONAMIENTO Y/O VARIACION DE DOMICILIO",
      "Tipo de plazo (Ley/Resolución/Acuse/Abogado)": "Convenio",
      "Plazo": "3",
      "Bitácora": "",
      "__flujo__": "Amparo Dte"
    },
    {
      "Instancia": "Conserva Instancia",
      "Etapa": "Recurso",
      "Tarea": "RECURSO DE QUEJA",
      "Tipo de plazo (Ley/Resolución/Acuse/Abogado)": "Ley",
      "Plazo": "3",
      "Bitácora": "PENDIENTE DE RECURSO DE QUEJA",
      "__flujo__": "Amparo Dte"
    },
    {
      "Instancia": "Conserva Instancia",
      "Etapa": "Recurso",
      "Tarea": "APELACION DE AUTO",
      "Tipo de plazo (Ley/Resolución/Acuse/Abogado)": "Ley",
      "Plazo": "3",
      "Bitácora": "",
      "__flujo__": "Amparo Dte"
    },
    {
      "Instancia": "Conserva Instancia",
      "Etapa": "General",
      "Tarea": "CITA CON EL JUEZ",
      "Tipo de plazo (Ley/Resolución/Acuse/Abogado)": "Resolución",
      "Plazo": "0",
      "Bitácora": "",
      "__flujo__": "Amparo Dte"
    },
    {
      "Instancia": "Conserva Instancia",
      "Etapa": "General",
      "Tarea": "IMPULSO",
      "Tipo de plazo (Ley/Resolución/Acuse/Abogado)": "Convenio",
      "Plazo": "3",
      "Bitácora": "",
      "__flujo__": "Amparo Dte"
    },
    {
      "Instancia": "Conserva Instancia",
      "Etapa": "General",
      "Tarea": "CUMPLE MANDATO",
      "Tipo de plazo (Ley/Resolución/Acuse/Abogado)": "Resolución",
      "Plazo": "3",
      "Bitácora": "",
      "__flujo__": "Amparo Dte"
    },
    {
      "Instancia": "Conserva Instancia",
      "Etapa": "General",
      "Tarea": "SOLICITUD DE ARCHIVO DEFINITIVO",
      "Tipo de plazo (Ley/Resolución/Acuse/Abogado)": "Abogado",
      "Plazo": "0",
      "Bitácora": "PENDIENTE DE ARCHIVO DEFINITIVO",
      "__flujo__": "Amparo Dte"
    },
    {
      "Instancia": "Conserva Instancia",
      "Etapa": "General",
      "Tarea": "SOLICITUD INFORME ORAL",
      "Tipo de plazo (Ley/Resolución/Acuse/Abogado)": "Convenio",
      "Plazo": "3",
      "Bitácora": "",
      "__flujo__": "Amparo Dte"
    },
    {
      "Instancia": "Conserva Instancia",
      "Etapa": "General",
      "Tarea": "CITA PROCURADOR",
      "Tipo de plazo (Ley/Resolución/Acuse/Abogado)": "Resolución",
      "Plazo": "0",
      "Bitácora": "",
      "__flujo__": "Amparo Dte"
    },
    {
      "Instancia": "Conserva Instancia",
      "Etapa": "General",
      "Tarea": "DESISTIMIENTO",
      "Tipo de plazo (Ley/Resolución/Acuse/Abogado)": "Abogado",
      "Plazo": "0",
      "Bitácora": "PENDIENTE DE RESOLVER DESISTIMIENTO",
      "__flujo__": "Amparo Dte"
    },
    {
      "Instancia": "Conserva Instancia",
      "Etapa": "General",
      "Tarea": "SEGUIMIENTO",
      "Tipo de plazo (Ley/Resolución/Acuse/Abogado)": "Abogado",
      "Plazo": "0",
      "Bitácora": "",
      "__flujo__": "Amparo Dte"
    },
    {
      "Instancia": "Conserva Instancia",
      "Etapa": "General",
      "Tarea": "REQUERIR AL JUZGADO / SALA",
      "Tipo de plazo (Ley/Resolución/Acuse/Abogado)": "Abogado",
      "Plazo": "0",
      "Bitácora": "",
      "__flujo__": "Amparo Dte"
    },
    {
      "Instancia": "Conserva Instancia",
      "Etapa": "General",
      "Tarea": "INFORMAR AL JUZGADO / SALA",
      "Tipo de plazo (Ley/Resolución/Acuse/Abogado)": "Resolución / Abogado",
      "Plazo": "0",
      "Bitácora": "",
      "__flujo__": "Amparo Dte"
    },
    {
      "Instancia": "Conserva Instancia",
      "Etapa": "General",
      "Tarea": "ABSOLVER TRASLADO",
      "Tipo de plazo (Ley/Resolución/Acuse/Abogado)": "Resolución",
      "Plazo": "3",
      "Bitácora": "PENDIENTE DE RESOLVER TRASLADO",
      "__flujo__": "Amparo Dte"
    },
    {
      "Instancia": "Conserva Instancia",
      "Etapa": "General",
      "Tarea": "NULIDAD",
      "Tipo de plazo (Ley/Resolución/Acuse/Abogado)": "Abogado",
      "Plazo": "3",
      "Bitácora": "PENDIENTE DE NULIDAD",
      "__flujo__": "Amparo Dte"
    },
    {
      "Instancia": "Conserva Instancia",
      "Etapa": "General",
      "Tarea": "SUBSANAR",
      "Tipo de plazo (Ley/Resolución/Acuse/Abogado)": "Resolución / Abogado",
      "Plazo": "0",
      "Bitácora": "",
      "__flujo__": "Amparo Dte"
    },
    {
      "Instancia": "Conserva Instancia",
      "Etapa": "General",
      "Tarea": "REUNIONES DE ESTRATEGIA",
      "Tipo de plazo (Ley/Resolución/Acuse/Abogado)": "Convenio",
      "Plazo": "0",
      "Bitácora": "",
      "__flujo__": "Amparo Dte"
    },
    {
      "Instancia": "Conserva Instancia",
      "Etapa": "General",
      "Tarea": "REQUERIR AL CLIENTE",
      "Tipo de plazo (Ley/Resolución/Acuse/Abogado)": "Convenio",
      "Plazo": "0",
      "Bitácora": "",
      "__flujo__": "Amparo Dte"
    },
    {
      "Instancia": "Conserva Instancia",
      "Etapa": "General",
      "Tarea": "REVISION DE MEDIOS PROBATORIOS",
      "Tipo de plazo (Ley/Resolución/Acuse/Abogado)": "Convenio",
      "Plazo": "0",
      "Bitácora": "",
      "__flujo__": "Amparo Dte"
    },
    {
      "Instancia": "PRIMERA INSTANCIA",
      "Etapa": "Postulatoria",
      "Tarea": "PRESENTACION DE DEMANDA",
      "Tipo de plazo (Ley/Resolución/Acuse/Abogado)": "Abogado",
      "Plazo": "0",
      "Bitácora": "PENDIENTE DE PRESENTACION DE DEMANDA",
      "__flujo__": "Amparo Dte"
    },
    {
      "Instancia": "PRIMERA INSTANCIA",
      "Etapa": "General",
      "Tarea": "SEGUIMIENTO DE OFICIOS",
      "Tipo de plazo (Ley/Resolución/Acuse/Abogado)": "",
      "Plazo": "",
      "Bitácora": "",
      "__flujo__": "Amparo Dte"
    },
    {
      "Instancia": "PRIMERA INSTANCIA",
      "Etapa": "General",
      "Tarea": "DILIGENCIAR OFICIO",
      "Tipo de plazo (Ley/Resolución/Acuse/Abogado)": "",
      "Plazo": "",
      "Bitácora": "",
      "__flujo__": "Amparo Dte"
    },
    {
      "Instancia": "PRIMERA INSTANCIA",
      "Etapa": "Probatoria",
      "Tarea": "DILIGENCIA - AUDIENCIA UNICA PREPARATORIA",
      "Tipo de plazo (Ley/Resolución/Acuse/Abogado)": "Resolución",
      "Plazo": "0",
      "Bitácora": "",
      "__flujo__": "Amparo Dte"
    },
    {
      "Instancia": "PRIMERA INSTANCIA",
      "Etapa": "Probatoria",
      "Tarea": "DILIGENCIA - AUDIENCIA UNICA",
      "Tipo de plazo (Ley/Resolución/Acuse/Abogado)": "Resolución",
      "Plazo": "0",
      "Bitácora": "PENDIENTE AUDIENCIA UNICA",
      "__flujo__": "Amparo Dte"
    },
    {
      "Instancia": "PRIMERA INSTANCIA",
      "Etapa": "Probatoria",
      "Tarea": "DILIGENCIA - AUDIENCIA UNICA (CONTINUACIÓN)",
      "Tipo de plazo (Ley/Resolución/Acuse/Abogado)": "Resolución",
      "Plazo": "0",
      "Bitácora": "PENDIENTE AUDIENCIA UNICA",
      "__flujo__": "Amparo Dte"
    },
    {
      "Instancia": "PRIMERA INSTANCIA",
      "Etapa": "Sentencia",
      "Tarea": "DILIGENCIA - LECTURA DE SENTENCIA (PRIMERA INSTANCIA)",
      "Tipo de plazo (Ley/Resolución/Acuse/Abogado)": "Resolución / Abogado",
      "Plazo": "0",
      "Bitácora": "PENDIENTE DE LECTURA DE SENTENCIA",
      "__flujo__": "Amparo Dte"
    },
    {
      "Instancia": "PRIMERA INSTANCIA",
      "Etapa": "Recurso",
      "Tarea": "APELACION DE SENTENCIA",
      "Tipo de plazo (Ley/Resolución/Acuse/Abogado)": "Ley",
      "Plazo": "3",
      "Bitácora": "PENDIENTE DE APELACION DE SENTENCIA / ADHESION",
      "__flujo__": "Amparo Dte"
    },
    {
      "Instancia": "PRIMERA INSTANCIA",
      "Etapa": "Recurso",
      "Tarea": "APELACION CONTRAPARTE",
      "Tipo de plazo (Ley/Resolución/Acuse/Abogado)": "Ley",
      "Plazo": "3",
      "Bitácora": "PENDIENTE DE APELACION DE SENTENCIA CONTRAPARTE",
      "__flujo__": "Amparo Dte"
    },
    {
      "Instancia": "SEGUNDA INSTANCIA",
      "Etapa": "Vista de la causa",
      "Tarea": "DILIGENCIA - AUDIENCIA PREPARATORIA VISTA DE LA CAUSA",
      "Tipo de plazo (Ley/Resolución/Acuse/Abogado)": "Resolución",
      "Plazo": "0",
      "Bitácora": "",
      "__flujo__": "Amparo Dte"
    },
    {
      "Instancia": "SEGUNDA INSTANCIA",
      "Etapa": "Vista de la causa",
      "Tarea": "DILIGENCIA - AUDIENCIA DE VISTA DE LA CAUSA",
      "Tipo de plazo (Ley/Resolución/Acuse/Abogado)": "Resolución",
      "Plazo": "0",
      "Bitácora": "PENDIENTE DE AUDIENCIA VISTA DE LA CAUSA",
      "__flujo__": "Amparo Dte"
    },
    {
      "Instancia": "SEGUNDA INSTANCIA",
      "Etapa": "Vista de la causa",
      "Tarea": "DILIGENCIA - AUDIENCIA DE VISTA DE LA CAUSA (CONTINUACION)",
      "Tipo de plazo (Ley/Resolución/Acuse/Abogado)": "Resolución / Abogado",
      "Plazo": "0",
      "Bitácora": "PENDIENTE DE CONTINUACION DE VISTA DE LA CAUSA",
      "__flujo__": "Amparo Dte"
    },
    {
      "Instancia": "SEGUNDA INSTANCIA",
      "Etapa": "Sentencia",
      "Tarea": "DILIGENCIA - LECTURA DE SENTENCIA (SEGUNDA INSTANCIA)",
      "Tipo de plazo (Ley/Resolución/Acuse/Abogado)": "Resolución / Abogado",
      "Plazo": "0",
      "Bitácora": "PENDIENTE DE LECTURA DE SENTENCIA DE SALA",
      "__flujo__": "Amparo Dte"
    },
    {
      "Instancia": "SEGUNDA INSTANCIA",
      "Etapa": "Recurso",
      "Tarea": "RECURSO DE AGRAVIO CONSTITUCIONAL",
      "Tipo de plazo (Ley/Resolución/Acuse/Abogado)": "Ley",
      "Plazo": "10",
      "Bitácora": "PENDIENTE DE RECURSO DE AGRAVIO CONSTITUCIONAL",
      "__flujo__": "Amparo Dte"
    },
    {
      "Instancia": "SEGUNDA INSTANCIA",
      "Etapa": "Recurso",
      "Tarea": "RECURSO DE AGRAVIO CONSTITUCIONAL CONTRAPARTE",
      "Tipo de plazo (Ley/Resolución/Acuse/Abogado)": "Ley",
      "Plazo": "11",
      "Bitácora": "PENDIENTE DE RECURSO DE AGRAVIO CONSTITUCIONAL CONTRAPARTE",
      "__flujo__": "Amparo Dte"
    },
    {
      "Instancia": "TERCERA INSTANCIA",
      "Etapa": "Vista de la causa",
      "Tarea": "APERSONAMIENTO Y USO DE LA PALABRA EN TC",
      "Tipo de plazo (Ley/Resolución/Acuse/Abogado)": "Convenio",
      "Plazo": "3",
      "Bitácora": "PENDIENTE DE APERSONAMIENTO Y USO DE LA PALABRA",
      "__flujo__": "Amparo Dte"
    },
    {
      "Instancia": "TERCERA INSTANCIA",
      "Etapa": "Vista de la causa",
      "Tarea": "DILIGENCIA - AUDIENCIA DE VISTA EN TC",
      "Tipo de plazo (Ley/Resolución/Acuse/Abogado)": "Resolución",
      "Plazo": "0",
      "Bitácora": "PENDIENTE DE AUDIENCIA DE VISTA EN TC",
      "__flujo__": "Amparo Dte"
    },
    {
      "Instancia": "TERCERA INSTANCIA",
      "Etapa": "Sentencia",
      "Tarea": "DILIGENCIA - LECTURA DE SENTENCIA (TERCERA INSTANCIA)",
      "Tipo de plazo (Ley/Resolución/Acuse/Abogado)": "Resolución / Abogado",
      "Plazo": "0",
      "Bitácora": "PENDIENTE DE LECTURA DE SENTENCIA DE TC",
      "__flujo__": "Amparo Dte"
    }
  ],
  "Aca Ddo": [
    {
      "Instancia": "Conserva Instancia",
      "Etapa": "General",
      "Tarea": "APERSONAMIENTO Y/O VARIACION DE DOMICILIO",
      "Tipo de plazo (Ley/Resolución/Acuse/Abogado)": "Convenio",
      "Plazo": "3",
      "Bitácora": "",
      "__flujo__": "Aca Ddo"
    },
    {
      "Instancia": "Conserva Instancia",
      "Etapa": "Recurso",
      "Tarea": "RECURSO DE QUEJA",
      "Tipo de plazo (Ley/Resolución/Acuse/Abogado)": "Ley",
      "Plazo": "3",
      "Bitácora": "PENDIENTE DE RECURSO DE QUEJA",
      "__flujo__": "Aca Ddo"
    },
    {
      "Instancia": "Conserva Instancia",
      "Etapa": "Recurso",
      "Tarea": "APELACION DE AUTO",
      "Tipo de plazo (Ley/Resolución/Acuse/Abogado)": "Ley",
      "Plazo": "3",
      "Bitácora": "",
      "__flujo__": "Aca Ddo"
    },
    {
      "Instancia": "Conserva Instancia",
      "Etapa": "General",
      "Tarea": "CITA CON EL JUEZ",
      "Tipo de plazo (Ley/Resolución/Acuse/Abogado)": "Resolución",
      "Plazo": "0",
      "Bitácora": "",
      "__flujo__": "Aca Ddo"
    },
    {
      "Instancia": "Conserva Instancia",
      "Etapa": "General",
      "Tarea": "IMPULSO",
      "Tipo de plazo (Ley/Resolución/Acuse/Abogado)": "Convenio",
      "Plazo": "3",
      "Bitácora": "",
      "__flujo__": "Aca Ddo"
    },
    {
      "Instancia": "Conserva Instancia",
      "Etapa": "General",
      "Tarea": "CUMPLE MANDATO",
      "Tipo de plazo (Ley/Resolución/Acuse/Abogado)": "Resolución",
      "Plazo": "3",
      "Bitácora": "",
      "__flujo__": "Aca Ddo"
    },
    {
      "Instancia": "Conserva Instancia",
      "Etapa": "General",
      "Tarea": "SOLICITUD DE ARCHIVO DEFINITIVO",
      "Tipo de plazo (Ley/Resolución/Acuse/Abogado)": "Abogado",
      "Plazo": "0",
      "Bitácora": "PENDIENTE DE ARCHIVO DEFINITIVO",
      "__flujo__": "Aca Ddo"
    },
    {
      "Instancia": "Conserva Instancia",
      "Etapa": "General",
      "Tarea": "SOLICITUD INFORME ORAL",
      "Tipo de plazo (Ley/Resolución/Acuse/Abogado)": "Convenio",
      "Plazo": "3",
      "Bitácora": "",
      "__flujo__": "Aca Ddo"
    },
    {
      "Instancia": "Conserva Instancia",
      "Etapa": "General",
      "Tarea": "CITA PROCURADOR",
      "Tipo de plazo (Ley/Resolución/Acuse/Abogado)": "Resolución",
      "Plazo": "0",
      "Bitácora": "",
      "__flujo__": "Aca Ddo"
    },
    {
      "Instancia": "Conserva Instancia",
      "Etapa": "General",
      "Tarea": "DESISTIMIENTO",
      "Tipo de plazo (Ley/Resolución/Acuse/Abogado)": "Abogado",
      "Plazo": "0",
      "Bitácora": "PENDIENTE DE RESOLVER DESISTIMIENTO",
      "__flujo__": "Aca Ddo"
    },
    {
      "Instancia": "Conserva Instancia",
      "Etapa": "General",
      "Tarea": "SEGUIMIENTO",
      "Tipo de plazo (Ley/Resolución/Acuse/Abogado)": "Abogado",
      "Plazo": "0",
      "Bitácora": "",
      "__flujo__": "Aca Ddo"
    },
    {
      "Instancia": "Conserva Instancia",
      "Etapa": "General",
      "Tarea": "REQUERIR AL JUZGADO / SALA",
      "Tipo de plazo (Ley/Resolución/Acuse/Abogado)": "Abogado",
      "Plazo": "0",
      "Bitácora": "",
      "__flujo__": "Aca Ddo"
    },
    {
      "Instancia": "Conserva Instancia",
      "Etapa": "General",
      "Tarea": "INFORMAR AL JUZGADO / SALA",
      "Tipo de plazo (Ley/Resolución/Acuse/Abogado)": "Resolución / Abogado",
      "Plazo": "0",
      "Bitácora": "",
      "__flujo__": "Aca Ddo"
    },
    {
      "Instancia": "Conserva Instancia",
      "Etapa": "General",
      "Tarea": "ABSOLVER TRASLADO",
      "Tipo de plazo (Ley/Resolución/Acuse/Abogado)": "Resolución",
      "Plazo": "3",
      "Bitácora": "PENDIENTE DE RESOLVER TRASLADO",
      "__flujo__": "Aca Ddo"
    },
    {
      "Instancia": "Conserva Instancia",
      "Etapa": "General",
      "Tarea": "NULIDAD",
      "Tipo de plazo (Ley/Resolución/Acuse/Abogado)": "Abogado",
      "Plazo": "3",
      "Bitácora": "PENDIENTE DE NULIDAD",
      "__flujo__": "Aca Ddo"
    },
    {
      "Instancia": "Conserva Instancia",
      "Etapa": "General",
      "Tarea": "SUBSANAR",
      "Tipo de plazo (Ley/Resolución/Acuse/Abogado)": "Resolución / Abogado",
      "Plazo": "0",
      "Bitácora": "",
      "__flujo__": "Aca Ddo"
    },
    {
      "Instancia": "Conserva Instancia",
      "Etapa": "General",
      "Tarea": "REUNIONES DE ESTRATEGIA",
      "Tipo de plazo (Ley/Resolución/Acuse/Abogado)": "Convenio",
      "Plazo": "0",
      "Bitácora": "",
      "__flujo__": "Aca Ddo"
    },
    {
      "Instancia": "Conserva Instancia",
      "Etapa": "General",
      "Tarea": "REQUERIR AL CLIENTE",
      "Tipo de plazo (Ley/Resolución/Acuse/Abogado)": "Convenio",
      "Plazo": "0",
      "Bitácora": "",
      "__flujo__": "Aca Ddo"
    },
    {
      "Instancia": "Conserva Instancia",
      "Etapa": "General",
      "Tarea": "REVISION DE MEDIOS PROBATORIOS",
      "Tipo de plazo (Ley/Resolución/Acuse/Abogado)": "Convenio",
      "Plazo": "0",
      "Bitácora": "",
      "__flujo__": "Aca Ddo"
    },
    {
      "Instancia": "PRIMERA INSTANCIA",
      "Etapa": "Postulatoria",
      "Tarea": "CONTESTA DE DEMANDA",
      "Tipo de plazo (Ley/Resolución/Acuse/Abogado)": "Convenio",
      "Plazo": "10",
      "Bitácora": "",
      "__flujo__": "Aca Ddo"
    },
    {
      "Instancia": "PRIMERA INSTANCIA",
      "Etapa": "Probatoria",
      "Tarea": "SOLICITUD INFORME ORAL (ACA-LPT-AA)",
      "Tipo de plazo (Ley/Resolución/Acuse/Abogado)": "Convenio",
      "Plazo": "3",
      "Bitácora": "PENDIENTE DE PROGRAMAR INFORME ORAL",
      "__flujo__": "Aca Ddo"
    },
    {
      "Instancia": "PRIMERA INSTANCIA",
      "Etapa": "Probatoria",
      "Tarea": "SEGUIMIENTO DE OFICIOS",
      "Tipo de plazo (Ley/Resolución/Acuse/Abogado)": "",
      "Plazo": "",
      "Bitácora": "",
      "__flujo__": "Aca Ddo"
    },
    {
      "Instancia": "PRIMERA INSTANCIA",
      "Etapa": "Probatoria",
      "Tarea": "DILIGENCIAR OFICIO",
      "Tipo de plazo (Ley/Resolución/Acuse/Abogado)": "",
      "Plazo": "",
      "Bitácora": "",
      "__flujo__": "Aca Ddo"
    },
    {
      "Instancia": "PRIMERA INSTANCIA",
      "Etapa": "Probatoria",
      "Tarea": "DILIGENCIA - AUDIENCIA DE INFORME ORAL",
      "Tipo de plazo (Ley/Resolución/Acuse/Abogado)": "Resolución",
      "Plazo": "0",
      "Bitácora": "PENDIENTE DE AUDIENCIA INFORME ORAL",
      "__flujo__": "Aca Ddo"
    },
    {
      "Instancia": "PRIMERA INSTANCIA",
      "Etapa": "Sentencia",
      "Tarea": "DILIGENCIA - LECTURA DE SENTENCIA (PRIMERA INSTANCIA)",
      "Tipo de plazo (Ley/Resolución/Acuse/Abogado)": "Resolución / Abogado",
      "Plazo": "0",
      "Bitácora": "PENDIENTE DE LECTURA DE SENTENCIA",
      "__flujo__": "Aca Ddo"
    },
    {
      "Instancia": "PRIMERA INSTANCIA",
      "Etapa": "Recurso",
      "Tarea": "APELACION DE SENTENCIA",
      "Tipo de plazo (Ley/Resolución/Acuse/Abogado)": "Ley",
      "Plazo": "5",
      "Bitácora": "PENDIENTE DE APELACION DE SENTENCIA / ADHESION",
      "__flujo__": "Aca Ddo"
    },
    {
      "Instancia": "PRIMERA INSTANCIA",
      "Etapa": "Recurso",
      "Tarea": "APELACION CONTRAPARTE",
      "Tipo de plazo (Ley/Resolución/Acuse/Abogado)": "Ley",
      "Plazo": "5",
      "Bitácora": "PENDIENTE DE APELACION DE SENTENCIA CONTRAPARTE",
      "__flujo__": "Aca Ddo"
    },
    {
      "Instancia": "SEGUNDA INSTANCIA",
      "Etapa": "Vista de la causa",
      "Tarea": "DILIGENCIA - AUDIENCIA PREPARATORIA VISTA DE LA CAUSA",
      "Tipo de plazo (Ley/Resolución/Acuse/Abogado)": "Resolución",
      "Plazo": "0",
      "Bitácora": "",
      "__flujo__": "Aca Ddo"
    },
    {
      "Instancia": "SEGUNDA INSTANCIA",
      "Etapa": "Vista de la causa",
      "Tarea": "DILIGENCIA - AUDIENCIA DE VISTA DE LA CAUSA",
      "Tipo de plazo (Ley/Resolución/Acuse/Abogado)": "Resolución",
      "Plazo": "0",
      "Bitácora": "PENDIENTE DE AUDIENCIA VISTA DE LA CAUSA",
      "__flujo__": "Aca Ddo"
    },
    {
      "Instancia": "SEGUNDA INSTANCIA",
      "Etapa": "Vista de la causa",
      "Tarea": "DILIGENCIA - AUDIENCIA DE VISTA DE LA CAUSA (CONTINUACION)",
      "Tipo de plazo (Ley/Resolución/Acuse/Abogado)": "Resolución / Abogado",
      "Plazo": "0",
      "Bitácora": "PENDIENTE DE CONTINUACION DE VISTA DE LA CAUSA",
      "__flujo__": "Aca Ddo"
    },
    {
      "Instancia": "SEGUNDA INSTANCIA",
      "Etapa": "Sentencia",
      "Tarea": "DILIGENCIA - LECTURA DE SENTENCIA (SEGUNDA INSTANCIA)",
      "Tipo de plazo (Ley/Resolución/Acuse/Abogado)": "Resolución / Abogado",
      "Plazo": "0",
      "Bitácora": "PENDIENTE DE LECTURA DE SENTENCIA DE VISTA",
      "__flujo__": "Aca Ddo"
    },
    {
      "Instancia": "SEGUNDA INSTANCIA",
      "Etapa": "Recurso",
      "Tarea": "RECURSO DE CASACION",
      "Tipo de plazo (Ley/Resolución/Acuse/Abogado)": "Ley",
      "Plazo": "10",
      "Bitácora": "PENDIENTE DE RECURSO DE CASACION",
      "__flujo__": "Aca Ddo"
    },
    {
      "Instancia": "SEGUNDA INSTANCIA",
      "Etapa": "Recurso",
      "Tarea": "RECURSO DE CASACION CONTRAPARTE",
      "Tipo de plazo (Ley/Resolución/Acuse/Abogado)": "Ley",
      "Plazo": "10",
      "Bitácora": "PENDIENTE DE RECURSO DE CASACION CONTRAPARTE",
      "__flujo__": "Aca Ddo"
    },
    {
      "Instancia": "TERCERA INSTANCIA",
      "Etapa": "Calificación del recurso",
      "Tarea": "APERSONAMIENTO Y USO DE LA PALABRA EN SUPREMA",
      "Tipo de plazo (Ley/Resolución/Acuse/Abogado)": "",
      "Plazo": "3",
      "Bitácora": "PENDIENTE DE APERSONAMIENTO Y USO DE LA PALABRA",
      "__flujo__": "Aca Ddo"
    },
    {
      "Instancia": "TERCERA INSTANCIA",
      "Etapa": "Calificación del recurso",
      "Tarea": "DILIGENCIA - VISTA DE CALIFICACION",
      "Tipo de plazo (Ley/Resolución/Acuse/Abogado)": "Resolución",
      "Plazo": "0",
      "Bitácora": "PENDIENTE VISTA DE CALIFICACION",
      "__flujo__": "Aca Ddo"
    },
    {
      "Instancia": "TERCERA INSTANCIA",
      "Etapa": "Vista de la causa",
      "Tarea": "DILIGENCIA - AUDIENCIA DE VISTA EN SUPREMA",
      "Tipo de plazo (Ley/Resolución/Acuse/Abogado)": "Resolución",
      "Plazo": "0",
      "Bitácora": "PENDIENTE DE AUDIENCIA DE VISTA EN SUPREMA / TC / INFORME ORAL",
      "__flujo__": "Aca Ddo"
    },
    {
      "Instancia": "TERCERA INSTANCIA",
      "Etapa": "Sentencia",
      "Tarea": "DILIGENCIA - LECTURA DE SENTENCIA (TERCERA INSTANCIA)",
      "Tipo de plazo (Ley/Resolución/Acuse/Abogado)": "Resolución / Abogado",
      "Plazo": "0",
      "Bitácora": "PENDIENTE DE LECTURA DE SENTENCIA SUPREMA / TC",
      "__flujo__": "Aca Ddo"
    },
    {
      "Instancia": "EJECUCIÓN",
      "Etapa": "Obligaciones",
      "Tarea": "CUMPLIR OBLIGACION PRINCIPAL",
      "Tipo de plazo (Ley/Resolución/Acuse/Abogado)": "Resolución",
      "Plazo": "0",
      "Bitácora": "PENDIENTE DE CUMPLIR OBLIGACION PRINCIPAL",
      "__flujo__": "Aca Ddo"
    }
  ],
  "Aca Dte": [
    {
      "Instancia": "Conserva Instancia",
      "Etapa": "General",
      "Tarea": "APERSONAMIENTO Y/O VARIACION DE DOMICILIO",
      "Tipo de plazo (Ley/Resolución/Acuse/Abogado)": "Convenio",
      "Plazo": "3",
      "Bitácora": "",
      "__flujo__": "Aca Dte"
    },
    {
      "Instancia": "Conserva Instancia",
      "Etapa": "Recurso",
      "Tarea": "RECURSO DE QUEJA",
      "Tipo de plazo (Ley/Resolución/Acuse/Abogado)": "Ley",
      "Plazo": "3",
      "Bitácora": "PENDIENTE DE RECURSO DE QUEJA",
      "__flujo__": "Aca Dte"
    },
    {
      "Instancia": "Conserva Instancia",
      "Etapa": "Recurso",
      "Tarea": "APELACION DE AUTO",
      "Tipo de plazo (Ley/Resolución/Acuse/Abogado)": "Ley",
      "Plazo": "3",
      "Bitácora": "",
      "__flujo__": "Aca Dte"
    },
    {
      "Instancia": "Conserva Instancia",
      "Etapa": "General",
      "Tarea": "CITA CON EL JUEZ",
      "Tipo de plazo (Ley/Resolución/Acuse/Abogado)": "Resolución",
      "Plazo": "0",
      "Bitácora": "",
      "__flujo__": "Aca Dte"
    },
    {
      "Instancia": "Conserva Instancia",
      "Etapa": "General",
      "Tarea": "IMPULSO",
      "Tipo de plazo (Ley/Resolución/Acuse/Abogado)": "Convenio",
      "Plazo": "3",
      "Bitácora": "",
      "__flujo__": "Aca Dte"
    },
    {
      "Instancia": "Conserva Instancia",
      "Etapa": "General",
      "Tarea": "CUMPLE MANDATO",
      "Tipo de plazo (Ley/Resolución/Acuse/Abogado)": "Resolución",
      "Plazo": "3",
      "Bitácora": "",
      "__flujo__": "Aca Dte"
    },
    {
      "Instancia": "Conserva Instancia",
      "Etapa": "General",
      "Tarea": "SOLICITUD DE ARCHIVO DEFINITIVO",
      "Tipo de plazo (Ley/Resolución/Acuse/Abogado)": "Abogado",
      "Plazo": "0",
      "Bitácora": "PENDIENTE DE ARCHIVO DEFINITIVO",
      "__flujo__": "Aca Dte"
    },
    {
      "Instancia": "Conserva Instancia",
      "Etapa": "General",
      "Tarea": "SOLICITUD INFORME ORAL",
      "Tipo de plazo (Ley/Resolución/Acuse/Abogado)": "Convenio",
      "Plazo": "3",
      "Bitácora": "",
      "__flujo__": "Aca Dte"
    },
    {
      "Instancia": "Conserva Instancia",
      "Etapa": "General",
      "Tarea": "CITA PROCURADOR",
      "Tipo de plazo (Ley/Resolución/Acuse/Abogado)": "Resolución",
      "Plazo": "0",
      "Bitácora": "",
      "__flujo__": "Aca Dte"
    },
    {
      "Instancia": "Conserva Instancia",
      "Etapa": "General",
      "Tarea": "DESISTIMIENTO",
      "Tipo de plazo (Ley/Resolución/Acuse/Abogado)": "Abogado",
      "Plazo": "0",
      "Bitácora": "PENDIENTE DE RESOLVER DESISTIMIENTO",
      "__flujo__": "Aca Dte"
    },
    {
      "Instancia": "Conserva Instancia",
      "Etapa": "General",
      "Tarea": "SEGUIMIENTO",
      "Tipo de plazo (Ley/Resolución/Acuse/Abogado)": "Abogado",
      "Plazo": "0",
      "Bitácora": "",
      "__flujo__": "Aca Dte"
    },
    {
      "Instancia": "Conserva Instancia",
      "Etapa": "General",
      "Tarea": "REQUERIR AL JUZGADO / SALA",
      "Tipo de plazo (Ley/Resolución/Acuse/Abogado)": "Abogado",
      "Plazo": "0",
      "Bitácora": "",
      "__flujo__": "Aca Dte"
    },
    {
      "Instancia": "Conserva Instancia",
      "Etapa": "General",
      "Tarea": "INFORMAR AL JUZGADO / SALA",
      "Tipo de plazo (Ley/Resolución/Acuse/Abogado)": "Resolución / Abogado",
      "Plazo": "0",
      "Bitácora": "",
      "__flujo__": "Aca Dte"
    },
    {
      "Instancia": "Conserva Instancia",
      "Etapa": "General",
      "Tarea": "ABSOLVER TRASLADO",
      "Tipo de plazo (Ley/Resolución/Acuse/Abogado)": "Resolución",
      "Plazo": "3",
      "Bitácora": "PENDIENTE DE RESOLVER TRASLADO",
      "__flujo__": "Aca Dte"
    },
    {
      "Instancia": "Conserva Instancia",
      "Etapa": "General",
      "Tarea": "NULIDAD",
      "Tipo de plazo (Ley/Resolución/Acuse/Abogado)": "Abogado",
      "Plazo": "3",
      "Bitácora": "PENDIENTE DE NULIDAD",
      "__flujo__": "Aca Dte"
    },
    {
      "Instancia": "Conserva Instancia",
      "Etapa": "General",
      "Tarea": "SUBSANAR",
      "Tipo de plazo (Ley/Resolución/Acuse/Abogado)": "Resolución / Abogado",
      "Plazo": "0",
      "Bitácora": "",
      "__flujo__": "Aca Dte"
    },
    {
      "Instancia": "Conserva Instancia",
      "Etapa": "General",
      "Tarea": "REUNIONES DE ESTRATEGIA",
      "Tipo de plazo (Ley/Resolución/Acuse/Abogado)": "Convenio",
      "Plazo": "0",
      "Bitácora": "",
      "__flujo__": "Aca Dte"
    },
    {
      "Instancia": "Conserva Instancia",
      "Etapa": "General",
      "Tarea": "REQUERIR AL CLIENTE",
      "Tipo de plazo (Ley/Resolución/Acuse/Abogado)": "Convenio",
      "Plazo": "0",
      "Bitácora": "",
      "__flujo__": "Aca Dte"
    },
    {
      "Instancia": "Conserva Instancia",
      "Etapa": "General",
      "Tarea": "REVISION DE MEDIOS PROBATORIOS",
      "Tipo de plazo (Ley/Resolución/Acuse/Abogado)": "Convenio",
      "Plazo": "0",
      "Bitácora": "",
      "__flujo__": "Aca Dte"
    },
    {
      "Instancia": "PRIMERA INSTANCIA",
      "Etapa": "Postulatoria",
      "Tarea": "PRESENTACION DE DEMANDA",
      "Tipo de plazo (Ley/Resolución/Acuse/Abogado)": "Abogado",
      "Plazo": "0",
      "Bitácora": "PENDIENTE DE PRESENTACION DE DEMANDA",
      "__flujo__": "Aca Dte"
    },
    {
      "Instancia": "PRIMERA INSTANCIA",
      "Etapa": "Probatoria",
      "Tarea": "SOLICITUD INFORME ORAL (ACA-LPT-AA)",
      "Tipo de plazo (Ley/Resolución/Acuse/Abogado)": "Convenio",
      "Plazo": "3",
      "Bitácora": "PENDIENTE DE PROGRAMAR INFORME ORAL",
      "__flujo__": "Aca Dte"
    },
    {
      "Instancia": "PRIMERA INSTANCIA",
      "Etapa": "Probatoria",
      "Tarea": "SEGUIMIENTO DE OFICIOS",
      "Tipo de plazo (Ley/Resolución/Acuse/Abogado)": "",
      "Plazo": "",
      "Bitácora": "",
      "__flujo__": "Aca Dte"
    },
    {
      "Instancia": "PRIMERA INSTANCIA",
      "Etapa": "Probatoria",
      "Tarea": "DILIGENCIAR OFICIO",
      "Tipo de plazo (Ley/Resolución/Acuse/Abogado)": "",
      "Plazo": "",
      "Bitácora": "",
      "__flujo__": "Aca Dte"
    },
    {
      "Instancia": "PRIMERA INSTANCIA",
      "Etapa": "Probatoria",
      "Tarea": "DILIGENCIA - AUDIENCIA DE INFORME ORAL",
      "Tipo de plazo (Ley/Resolución/Acuse/Abogado)": "Resolución",
      "Plazo": "0",
      "Bitácora": "PENDIENTE DE AUDIENCIA INFORME ORAL",
      "__flujo__": "Aca Dte"
    },
    {
      "Instancia": "PRIMERA INSTANCIA",
      "Etapa": "Sentencia",
      "Tarea": "DILIGENCIA - LECTURA DE SENTENCIA (PRIMERA INSTANCIA)",
      "Tipo de plazo (Ley/Resolución/Acuse/Abogado)": "Resolución / Abogado",
      "Plazo": "0",
      "Bitácora": "PENDIENTE DE LECTURA DE SENTENCIA",
      "__flujo__": "Aca Dte"
    },
    {
      "Instancia": "PRIMERA INSTANCIA",
      "Etapa": "Recurso",
      "Tarea": "APELACION DE SENTENCIA",
      "Tipo de plazo (Ley/Resolución/Acuse/Abogado)": "Ley",
      "Plazo": "5",
      "Bitácora": "PENDIENTE DE APELACION DE SENTENCIA / ADHESION",
      "__flujo__": "Aca Dte"
    },
    {
      "Instancia": "PRIMERA INSTANCIA",
      "Etapa": "Recurso",
      "Tarea": "APELACION CONTRAPARTE",
      "Tipo de plazo (Ley/Resolución/Acuse/Abogado)": "Ley",
      "Plazo": "5",
      "Bitácora": "PENDIENTE DE APELACION DE SENTENCIA CONTRAPARTE",
      "__flujo__": "Aca Dte"
    },
    {
      "Instancia": "SEGUNDA INSTANCIA",
      "Etapa": "Vista de la causa",
      "Tarea": "DILIGENCIA - AUDIENCIA PREPARATORIA VISTA DE LA CAUSA",
      "Tipo de plazo (Ley/Resolución/Acuse/Abogado)": "Resolución",
      "Plazo": "0",
      "Bitácora": "",
      "__flujo__": "Aca Dte"
    },
    {
      "Instancia": "SEGUNDA INSTANCIA",
      "Etapa": "Vista de la causa",
      "Tarea": "DILIGENCIA - AUDIENCIA DE VISTA DE LA CAUSA",
      "Tipo de plazo (Ley/Resolución/Acuse/Abogado)": "Resolución",
      "Plazo": "0",
      "Bitácora": "PENDIENTE DE AUDIENCIA VISTA DE LA CAUSA",
      "__flujo__": "Aca Dte"
    },
    {
      "Instancia": "SEGUNDA INSTANCIA",
      "Etapa": "Vista de la causa",
      "Tarea": "DILIGENCIA - AUDIENCIA DE VISTA DE LA CAUSA (CONTINUACION)",
      "Tipo de plazo (Ley/Resolución/Acuse/Abogado)": "Resolución / Abogado",
      "Plazo": "0",
      "Bitácora": "PENDIENTE DE CONTINUACION DE VISTA DE LA CAUSA",
      "__flujo__": "Aca Dte"
    },
    {
      "Instancia": "SEGUNDA INSTANCIA",
      "Etapa": "Sentencia",
      "Tarea": "DILIGENCIA - LECTURA DE SENTENCIA (SEGUNDA INSTANCIA)",
      "Tipo de plazo (Ley/Resolución/Acuse/Abogado)": "Resolución / Abogado",
      "Plazo": "0",
      "Bitácora": "PENDIENTE DE LECTURA DE SENTENCIA DE VISTA",
      "__flujo__": "Aca Dte"
    },
    {
      "Instancia": "SEGUNDA INSTANCIA",
      "Etapa": "Recurso",
      "Tarea": "RECURSO DE CASACION",
      "Tipo de plazo (Ley/Resolución/Acuse/Abogado)": "Ley",
      "Plazo": "10",
      "Bitácora": "PENDIENTE DE RECURSO DE CASACION",
      "__flujo__": "Aca Dte"
    },
    {
      "Instancia": "SEGUNDA INSTANCIA",
      "Etapa": "Recurso",
      "Tarea": "RECURSO DE CASACION CONTRAPARTE",
      "Tipo de plazo (Ley/Resolución/Acuse/Abogado)": "Ley",
      "Plazo": "10",
      "Bitácora": "PENDIENTE DE RECURSO DE CASACION CONTRAPARTE",
      "__flujo__": "Aca Dte"
    },
    {
      "Instancia": "TERCERA INSTANCIA",
      "Etapa": "Calificación del recurso",
      "Tarea": "APERSONAMIENTO Y USO DE LA PALABRA EN SUPREMA",
      "Tipo de plazo (Ley/Resolución/Acuse/Abogado)": "",
      "Plazo": "3",
      "Bitácora": "PENDIENTE DE APERSONAMIENTO Y USO DE LA PALABRA",
      "__flujo__": "Aca Dte"
    },
    {
      "Instancia": "TERCERA INSTANCIA",
      "Etapa": "Calificación del recurso",
      "Tarea": "DILIGENCIA - VISTA DE CALIFICACION",
      "Tipo de plazo (Ley/Resolución/Acuse/Abogado)": "Resolución",
      "Plazo": "0",
      "Bitácora": "PENDIENTE VISTA DE CALIFICACION",
      "__flujo__": "Aca Dte"
    },
    {
      "Instancia": "TERCERA INSTANCIA",
      "Etapa": "Vista de la causa",
      "Tarea": "DILIGENCIA - AUDIENCIA DE VISTA EN SUPREMA",
      "Tipo de plazo (Ley/Resolución/Acuse/Abogado)": "Resolución",
      "Plazo": "0",
      "Bitácora": "PENDIENTE DE AUDIENCIA DE VISTA EN SUPREMA / TC / INFORME ORAL",
      "__flujo__": "Aca Dte"
    },
    {
      "Instancia": "TERCERA INSTANCIA",
      "Etapa": "Sentencia",
      "Tarea": "DILIGENCIA - LECTURA DE SENTENCIA (TERCERA INSTANCIA)",
      "Tipo de plazo (Ley/Resolución/Acuse/Abogado)": "Resolución / Abogado",
      "Plazo": "0",
      "Bitácora": "PENDIENTE DE LECTURA DE SENTENCIA SUPREMA / TC",
      "__flujo__": "Aca Dte"
    }
  ],
  "ILA Ddo": [
    {
      "Instancia": "Conserva Instancia",
      "Etapa": "General",
      "Tarea": "APERSONAMIENTO Y/O VARIACION DE DOMICILIO",
      "Tipo de plazo (Ley/Resolución/Acuse/Abogado)": "Convenio",
      "Plazo": "3",
      "Bitácora": "",
      "__flujo__": "ILA Ddo"
    },
    {
      "Instancia": "Conserva Instancia",
      "Etapa": "Recurso",
      "Tarea": "RECURSO DE QUEJA",
      "Tipo de plazo (Ley/Resolución/Acuse/Abogado)": "Ley",
      "Plazo": "3",
      "Bitácora": "PENDIENTE DE RECURSO DE QUEJA",
      "__flujo__": "ILA Ddo"
    },
    {
      "Instancia": "Conserva Instancia",
      "Etapa": "Recurso",
      "Tarea": "APELACION DE AUTO",
      "Tipo de plazo (Ley/Resolución/Acuse/Abogado)": "Ley",
      "Plazo": "3",
      "Bitácora": "",
      "__flujo__": "ILA Ddo"
    },
    {
      "Instancia": "Conserva Instancia",
      "Etapa": "General",
      "Tarea": "CITA CON EL JUEZ",
      "Tipo de plazo (Ley/Resolución/Acuse/Abogado)": "Resolución",
      "Plazo": "0",
      "Bitácora": "",
      "__flujo__": "ILA Ddo"
    },
    {
      "Instancia": "Conserva Instancia",
      "Etapa": "General",
      "Tarea": "IMPULSO",
      "Tipo de plazo (Ley/Resolución/Acuse/Abogado)": "Convenio",
      "Plazo": "0",
      "Bitácora": "",
      "__flujo__": "ILA Ddo"
    },
    {
      "Instancia": "Conserva Instancia",
      "Etapa": "General",
      "Tarea": "CUMPLE MANDATO",
      "Tipo de plazo (Ley/Resolución/Acuse/Abogado)": "Resolución",
      "Plazo": "3",
      "Bitácora": "",
      "__flujo__": "ILA Ddo"
    },
    {
      "Instancia": "Conserva Instancia",
      "Etapa": "General",
      "Tarea": "SOLICITUD DE ARCHIVO DEFINITIVO",
      "Tipo de plazo (Ley/Resolución/Acuse/Abogado)": "Abogado",
      "Plazo": "0",
      "Bitácora": "PENDIENTE DE ARCHIVO DEFINITIVO",
      "__flujo__": "ILA Ddo"
    },
    {
      "Instancia": "Conserva Instancia",
      "Etapa": "General",
      "Tarea": "SOLICITUD INFORME ORAL",
      "Tipo de plazo (Ley/Resolución/Acuse/Abogado)": "Convenio",
      "Plazo": "3",
      "Bitácora": "",
      "__flujo__": "ILA Ddo"
    },
    {
      "Instancia": "Conserva Instancia",
      "Etapa": "General",
      "Tarea": "CITA PROCURADOR",
      "Tipo de plazo (Ley/Resolución/Acuse/Abogado)": "Resolución",
      "Plazo": "0",
      "Bitácora": "",
      "__flujo__": "ILA Ddo"
    },
    {
      "Instancia": "Conserva Instancia",
      "Etapa": "General",
      "Tarea": "DESISTIMIENTO",
      "Tipo de plazo (Ley/Resolución/Acuse/Abogado)": "Abogado",
      "Plazo": "0",
      "Bitácora": "PENDIENTE DE RESOLVER DESISTIMIENTO",
      "__flujo__": "ILA Ddo"
    },
    {
      "Instancia": "Conserva Instancia",
      "Etapa": "General",
      "Tarea": "SEGUIMIENTO",
      "Tipo de plazo (Ley/Resolución/Acuse/Abogado)": "Abogado",
      "Plazo": "0",
      "Bitácora": "",
      "__flujo__": "ILA Ddo"
    },
    {
      "Instancia": "Conserva Instancia",
      "Etapa": "General",
      "Tarea": "REQUERIR AL JUZGADO / SALA",
      "Tipo de plazo (Ley/Resolución/Acuse/Abogado)": "Abogado",
      "Plazo": "0",
      "Bitácora": "",
      "__flujo__": "ILA Ddo"
    },
    {
      "Instancia": "Conserva Instancia",
      "Etapa": "General",
      "Tarea": "INFORMAR AL JUZGADO / SALA",
      "Tipo de plazo (Ley/Resolución/Acuse/Abogado)": "Resolución / Abogado",
      "Plazo": "0",
      "Bitácora": "",
      "__flujo__": "ILA Ddo"
    },
    {
      "Instancia": "Conserva Instancia",
      "Etapa": "General",
      "Tarea": "ABSOLVER TRASLADO",
      "Tipo de plazo (Ley/Resolución/Acuse/Abogado)": "Resolución",
      "Plazo": "3",
      "Bitácora": "",
      "__flujo__": "ILA Ddo"
    },
    {
      "Instancia": "Conserva Instancia",
      "Etapa": "General",
      "Tarea": "NULIDAD",
      "Tipo de plazo (Ley/Resolución/Acuse/Abogado)": "Abogado",
      "Plazo": "3",
      "Bitácora": "PENDIENTE DE NULIDAD",
      "__flujo__": "ILA Ddo"
    },
    {
      "Instancia": "Conserva Instancia",
      "Etapa": "General",
      "Tarea": "SUBSANAR",
      "Tipo de plazo (Ley/Resolución/Acuse/Abogado)": "Resolución / Abogado",
      "Plazo": "0",
      "Bitácora": "",
      "__flujo__": "ILA Ddo"
    },
    {
      "Instancia": "Conserva Instancia",
      "Etapa": "General",
      "Tarea": "REUNIONES DE ESTRATEGIA",
      "Tipo de plazo (Ley/Resolución/Acuse/Abogado)": "Convenio",
      "Plazo": "0",
      "Bitácora": "",
      "__flujo__": "ILA Ddo"
    },
    {
      "Instancia": "Conserva Instancia",
      "Etapa": "General",
      "Tarea": "REQUERIR AL CLIENTE",
      "Tipo de plazo (Ley/Resolución/Acuse/Abogado)": "Convenio",
      "Plazo": "0",
      "Bitácora": "",
      "__flujo__": "ILA Ddo"
    },
    {
      "Instancia": "Conserva Instancia",
      "Etapa": "General",
      "Tarea": "REVISION DE MEDIOS PROBATORIOS",
      "Tipo de plazo (Ley/Resolución/Acuse/Abogado)": "Convenio",
      "Plazo": "0",
      "Bitácora": "",
      "__flujo__": "ILA Ddo"
    },
    {
      "Instancia": "PRIMERA INSTANCIA",
      "Etapa": "Probatoria",
      "Tarea": "CONTESTA DE DEMANDA",
      "Tipo de plazo (Ley/Resolución/Acuse/Abogado)": "Resolución",
      "Plazo": "10",
      "Bitácora": "",
      "__flujo__": "ILA Ddo"
    },
    {
      "Instancia": "PRIMERA INSTANCIA",
      "Etapa": "General",
      "Tarea": "SEGUIMIENTO DE OFICIOS",
      "Tipo de plazo (Ley/Resolución/Acuse/Abogado)": "Convenio",
      "Plazo": "",
      "Bitácora": "",
      "__flujo__": "ILA Ddo"
    },
    {
      "Instancia": "PRIMERA INSTANCIA",
      "Etapa": "General",
      "Tarea": "DILIGENCIAR OFICIO",
      "Tipo de plazo (Ley/Resolución/Acuse/Abogado)": "Convenio",
      "Plazo": "",
      "Bitácora": "",
      "__flujo__": "ILA Ddo"
    },
    {
      "Instancia": "PRIMERA INSTANCIA",
      "Etapa": "Probatoria",
      "Tarea": "DILIGENCIA - ALEGATOS",
      "Tipo de plazo (Ley/Resolución/Acuse/Abogado)": "Ley",
      "Plazo": "10",
      "Bitácora": "",
      "__flujo__": "ILA Ddo"
    },
    {
      "Instancia": "PRIMERA INSTANCIA",
      "Etapa": "Sentencia",
      "Tarea": "DILIGENCIA - LECTURA DE SENTENCIA (PRIMERA INSTANCIA)",
      "Tipo de plazo (Ley/Resolución/Acuse/Abogado)": "Ley",
      "Plazo": "10",
      "Bitácora": "PENDIENTE DE LECTURA DE SENTENCIA",
      "__flujo__": "ILA Ddo"
    },
    {
      "Instancia": "PRIMERA INSTANCIA",
      "Etapa": "Recurso",
      "Tarea": "APELACION DE SENTENCIA",
      "Tipo de plazo (Ley/Resolución/Acuse/Abogado)": "Ley",
      "Plazo": "5",
      "Bitácora": "PENDIENTE DE APELACION DE SENTENCIA / ADHESION",
      "__flujo__": "ILA Ddo"
    },
    {
      "Instancia": "PRIMERA INSTANCIA",
      "Etapa": "Recurso",
      "Tarea": "APELACION CONTRAPARTE",
      "Tipo de plazo (Ley/Resolución/Acuse/Abogado)": "Ley",
      "Plazo": "5",
      "Bitácora": "PENDIENTE DE APELACION DE SENTENCIA DE CONTRAPARTE",
      "__flujo__": "ILA Ddo"
    },
    {
      "Instancia": "SEGUNDA INSTANCIA",
      "Etapa": "Calificación del recurso",
      "Tarea": "APERSONAMIENTO Y USO DE LA PALABRA EN SUPREMA",
      "Tipo de plazo (Ley/Resolución/Acuse/Abogado)": "Abogado",
      "Plazo": "0",
      "Bitácora": "PENDIENTE DE APERSONAMIENTO Y USO DE LA PALABRA",
      "__flujo__": "ILA Ddo"
    },
    {
      "Instancia": "SEGUNDA INSTANCIA",
      "Etapa": "Vista de la causa",
      "Tarea": "DILIGENCIA - AUDIENCIA DE VISTA EN SUPREMA",
      "Tipo de plazo (Ley/Resolución/Acuse/Abogado)": "Resolución",
      "Plazo": "0",
      "Bitácora": "PENDIENTE DE AUDIENCIA DE VISTA EN SUPREMA",
      "__flujo__": "ILA Ddo"
    },
    {
      "Instancia": "SEGUNDA INSTANCIA",
      "Etapa": "Sentencia",
      "Tarea": "DILIGENCIA - LECTURA DE SENTENCIA (SEGUNDA INSTANCIA)",
      "Tipo de plazo (Ley/Resolución/Acuse/Abogado)": "Resolución / Abogado",
      "Plazo": "0",
      "Bitácora": "PENDIENTE DE LECTURA DE SENTENCIA DE SUPREMA",
      "__flujo__": "ILA Ddo"
    }
  ],
  "ILA Dte": [
    {
      "Instancia": "Conserva Instancia",
      "Etapa": "General",
      "Tarea": "APERSONAMIENTO Y/O VARIACION DE DOMICILIO",
      "Tipo de plazo (Ley/Resolución/Acuse/Abogado)": "Convenio",
      "Plazo": "3",
      "Bitácora": "",
      "__flujo__": "ILA Dte"
    },
    {
      "Instancia": "Conserva Instancia",
      "Etapa": "Recurso",
      "Tarea": "RECURSO DE QUEJA",
      "Tipo de plazo (Ley/Resolución/Acuse/Abogado)": "Ley",
      "Plazo": "3",
      "Bitácora": "PENDIENTE DE RECURSO DE QUEJA",
      "__flujo__": "ILA Dte"
    },
    {
      "Instancia": "Conserva Instancia",
      "Etapa": "Recurso",
      "Tarea": "APELACION DE AUTO",
      "Tipo de plazo (Ley/Resolución/Acuse/Abogado)": "Ley",
      "Plazo": "3",
      "Bitácora": "",
      "__flujo__": "ILA Dte"
    },
    {
      "Instancia": "Conserva Instancia",
      "Etapa": "General",
      "Tarea": "CITA CON EL JUEZ",
      "Tipo de plazo (Ley/Resolución/Acuse/Abogado)": "Resolución",
      "Plazo": "0",
      "Bitácora": "",
      "__flujo__": "ILA Dte"
    },
    {
      "Instancia": "Conserva Instancia",
      "Etapa": "General",
      "Tarea": "IMPULSO",
      "Tipo de plazo (Ley/Resolución/Acuse/Abogado)": "Convenio",
      "Plazo": "0",
      "Bitácora": "",
      "__flujo__": "ILA Dte"
    },
    {
      "Instancia": "Conserva Instancia",
      "Etapa": "General",
      "Tarea": "CUMPLE MANDATO",
      "Tipo de plazo (Ley/Resolución/Acuse/Abogado)": "Resolución",
      "Plazo": "3",
      "Bitácora": "",
      "__flujo__": "ILA Dte"
    },
    {
      "Instancia": "Conserva Instancia",
      "Etapa": "General",
      "Tarea": "SOLICITUD DE ARCHIVO DEFINITIVO",
      "Tipo de plazo (Ley/Resolución/Acuse/Abogado)": "Abogado",
      "Plazo": "0",
      "Bitácora": "PENDIENTE DE ARCHIVO DEFINITIVO",
      "__flujo__": "ILA Dte"
    },
    {
      "Instancia": "Conserva Instancia",
      "Etapa": "General",
      "Tarea": "SOLICITUD INFORME ORAL",
      "Tipo de plazo (Ley/Resolución/Acuse/Abogado)": "Convenio",
      "Plazo": "3",
      "Bitácora": "",
      "__flujo__": "ILA Dte"
    },
    {
      "Instancia": "Conserva Instancia",
      "Etapa": "General",
      "Tarea": "CITA PROCURADOR",
      "Tipo de plazo (Ley/Resolución/Acuse/Abogado)": "Resolución",
      "Plazo": "0",
      "Bitácora": "",
      "__flujo__": "ILA Dte"
    },
    {
      "Instancia": "Conserva Instancia",
      "Etapa": "General",
      "Tarea": "DESISTIMIENTO",
      "Tipo de plazo (Ley/Resolución/Acuse/Abogado)": "Abogado",
      "Plazo": "0",
      "Bitácora": "PENDIENTE DE RESOLVER DESISTIMIENTO",
      "__flujo__": "ILA Dte"
    },
    {
      "Instancia": "Conserva Instancia",
      "Etapa": "General",
      "Tarea": "SEGUIMIENTO",
      "Tipo de plazo (Ley/Resolución/Acuse/Abogado)": "Abogado",
      "Plazo": "0",
      "Bitácora": "",
      "__flujo__": "ILA Dte"
    },
    {
      "Instancia": "Conserva Instancia",
      "Etapa": "General",
      "Tarea": "REQUERIR AL JUZGADO / SALA",
      "Tipo de plazo (Ley/Resolución/Acuse/Abogado)": "Abogado",
      "Plazo": "0",
      "Bitácora": "",
      "__flujo__": "ILA Dte"
    },
    {
      "Instancia": "Conserva Instancia",
      "Etapa": "General",
      "Tarea": "INFORMAR AL JUZGADO / SALA",
      "Tipo de plazo (Ley/Resolución/Acuse/Abogado)": "Resolución / Abogado",
      "Plazo": "0",
      "Bitácora": "",
      "__flujo__": "ILA Dte"
    },
    {
      "Instancia": "Conserva Instancia",
      "Etapa": "General",
      "Tarea": "ABSOLVER TRASLADO",
      "Tipo de plazo (Ley/Resolución/Acuse/Abogado)": "Resolución",
      "Plazo": "3",
      "Bitácora": "",
      "__flujo__": "ILA Dte"
    },
    {
      "Instancia": "Conserva Instancia",
      "Etapa": "General",
      "Tarea": "NULIDAD",
      "Tipo de plazo (Ley/Resolución/Acuse/Abogado)": "Abogado",
      "Plazo": "3",
      "Bitácora": "PENDIENTE DE NULIDAD",
      "__flujo__": "ILA Dte"
    },
    {
      "Instancia": "Conserva Instancia",
      "Etapa": "General",
      "Tarea": "SUBSANAR",
      "Tipo de plazo (Ley/Resolución/Acuse/Abogado)": "Resolución / Abogado",
      "Plazo": "0",
      "Bitácora": "",
      "__flujo__": "ILA Dte"
    },
    {
      "Instancia": "Conserva Instancia",
      "Etapa": "General",
      "Tarea": "REUNIONES DE ESTRATEGIA",
      "Tipo de plazo (Ley/Resolución/Acuse/Abogado)": "Convenio",
      "Plazo": "0",
      "Bitácora": "",
      "__flujo__": "ILA Dte"
    },
    {
      "Instancia": "Conserva Instancia",
      "Etapa": "General",
      "Tarea": "REQUERIR AL CLIENTE",
      "Tipo de plazo (Ley/Resolución/Acuse/Abogado)": "Convenio",
      "Plazo": "0",
      "Bitácora": "",
      "__flujo__": "ILA Dte"
    },
    {
      "Instancia": "Conserva Instancia",
      "Etapa": "General",
      "Tarea": "REVISION DE MEDIOS PROBATORIOS",
      "Tipo de plazo (Ley/Resolución/Acuse/Abogado)": "Convenio",
      "Plazo": "0",
      "Bitácora": "",
      "__flujo__": "ILA Dte"
    },
    {
      "Instancia": "PRIMERA INSTANCIA",
      "Etapa": "Admisión",
      "Tarea": "PRESENTACION DE DEMANDA",
      "Tipo de plazo (Ley/Resolución/Acuse/Abogado)": "Abogado",
      "Plazo": "0",
      "Bitácora": "PENDIENTE DE PRESENTACION DE DEMANDA",
      "__flujo__": "ILA Dte"
    },
    {
      "Instancia": "PRIMERA INSTANCIA",
      "Etapa": "General",
      "Tarea": "SEGUIMIENTO DE OFICIOS",
      "Tipo de plazo (Ley/Resolución/Acuse/Abogado)": "Convenio",
      "Plazo": "",
      "Bitácora": "",
      "__flujo__": "ILA Dte"
    },
    {
      "Instancia": "PRIMERA INSTANCIA",
      "Etapa": "General",
      "Tarea": "DILIGENCIAR OFICIO",
      "Tipo de plazo (Ley/Resolución/Acuse/Abogado)": "Convenio",
      "Plazo": "",
      "Bitácora": "",
      "__flujo__": "ILA Dte"
    },
    {
      "Instancia": "PRIMERA INSTANCIA",
      "Etapa": "Probatoria",
      "Tarea": "DILIGENCIA - ALEGATOS",
      "Tipo de plazo (Ley/Resolución/Acuse/Abogado)": "Ley",
      "Plazo": "10",
      "Bitácora": "",
      "__flujo__": "ILA Dte"
    },
    {
      "Instancia": "PRIMERA INSTANCIA",
      "Etapa": "Sentencia",
      "Tarea": "DILIGENCIA - LECTURA DE SENTENCIA (PRIMERA INSTANCIA)",
      "Tipo de plazo (Ley/Resolución/Acuse/Abogado)": "Ley",
      "Plazo": "10",
      "Bitácora": "PENDIENTE DE LECTURA DE SENTENCIA",
      "__flujo__": "ILA Dte"
    },
    {
      "Instancia": "PRIMERA INSTANCIA",
      "Etapa": "Recurso",
      "Tarea": "APELACION DE SENTENCIA",
      "Tipo de plazo (Ley/Resolución/Acuse/Abogado)": "Ley",
      "Plazo": "5",
      "Bitácora": "PENDIENTE DE APELACION DE SENTENCIA / ADHESION",
      "__flujo__": "ILA Dte"
    },
    {
      "Instancia": "PRIMERA INSTANCIA",
      "Etapa": "Recurso",
      "Tarea": "APELACION CONTRAPARTE",
      "Tipo de plazo (Ley/Resolución/Acuse/Abogado)": "Ley",
      "Plazo": "5",
      "Bitácora": "PENDIENTE DE APELACION DE SENTENCIA DE CONTRAPARTE",
      "__flujo__": "ILA Dte"
    },
    {
      "Instancia": "SEGUNDA INSTANCIA",
      "Etapa": "Calificación del recurso",
      "Tarea": "APERSONAMIENTO Y USO DE LA PALABRA EN SUPREMA",
      "Tipo de plazo (Ley/Resolución/Acuse/Abogado)": "Abogado",
      "Plazo": "0",
      "Bitácora": "PENDIENTE DE APERSONAMIENTO Y USO DE LA PALABRA",
      "__flujo__": "ILA Dte"
    },
    {
      "Instancia": "SEGUNDA INSTANCIA",
      "Etapa": "Vista de la causa",
      "Tarea": "DILIGENCIA - AUDIENCIA DE VISTA EN SUPREMA",
      "Tipo de plazo (Ley/Resolución/Acuse/Abogado)": "Resolución",
      "Plazo": "0",
      "Bitácora": "PENDIENTE DE AUDIENCIA DE VISTA EN SUPREMA",
      "__flujo__": "ILA Dte"
    },
    {
      "Instancia": "SEGUNDA INSTANCIA",
      "Etapa": "Sentencia",
      "Tarea": "DILIGENCIA - LECTURA DE SENTENCIA (SEGUNDA INSTANCIA)",
      "Tipo de plazo (Ley/Resolución/Acuse/Abogado)": "Resolución / Abogado",
      "Plazo": "0",
      "Bitácora": "PENDIENTE DE LECTURA DE SENTENCIA DE SUPREMA",
      "__flujo__": "ILA Dte"
    }
  ]
};

export const SHEET_NAMES = Object.keys(ALL_DATA);