import type { MomentoHistoria, MetricaHero, FiltroHistoria } from '@/frontend/types/majoTypes';

// ============================================================
// Data Emocional: La Historia de Majo & Yo — 2025–2026
// ============================================================

export const majoTimeline: MomentoHistoria[] = [
  // ── JUNIO 2025 ──────────────────────────────────────────────
  {
    id: 1,
    fecha: '20 de junio de 2025',
    titulo: 'Razón 1: Tu espíritu lúdico y tu capacidad para sorprenderme',
    descripcion:
      'Cuando jugamos baloncesto y voleibol; jurabas no saber jugar pero me sorprendiste con tu increíble destreza y me "robaste la magia". Eres divertida, competitiva y me cautivaste al instante con esa chispa que no se apaga.',
    etiqueta: '',
    icono: '',
    iconoEtiqueta: '',
    categoria: 'juegos',
    lado: 'izquierda',
    variante: 'primary',
    keepsakeType: 'image',
    imagenUrl: '/fuc news.jpg',
  },
  {
    id: 2,
    fecha: '24 de junio de 2025',
    titulo: 'Razón 2: Tu calidez y tu alegría genuina',
    descripcion:
      'Tu hermosa disposición para celebrar la vida. Cuando me invitaste al Día del Aprendiz prometiendo "regalar abrazos" y motivándome a sacar mis mejores pasos de baile (No baile casi :v).',
    etiqueta: '🤗 Abrazos Gratis • Bailando Contigo',
    icono: '',
    iconoEtiqueta: '',
    categoria: 'juegos',
    lado: 'derecha',
    variante: 'secondary',
    keepsakeType: 'image',
    imagenUrl: '/fiesta.jpg',
  },
  {
    id: 3,
    fecha: '25 - 26 de junio de 2025',
    titulo: 'Razón 3: La profunda atracción hacia tu autenticidad',
    descripcion:
      'Me fascinas en todas tus facetas, desde lo más cotidiano y despreocupado. Decirte que con tus gafas te ves preciosa es solo el reflejo más sincero de una admiración que brota de lo más profundo de mi ser. Eres hermosa sin esfuerzo.',
    etiqueta: '👓 Autenticidad Pura • Mi Niña Linda',
    icono: '',
    iconoEtiqueta: '',
    categoria: 'intimidad',
    lado: 'izquierda',
    variante: 'primary',
    keepsakeType: 'quote',
    cita:
      '"Con tus gafas te ves tan tú, tan radiante y tierna, que quisiera detener los segundos solo para admirarte."',
  },

  // ── JULIO 2025 ───────────────────────────────────────────────
  {
    id: 4,
    fecha: '9 de julio de 2025',
    titulo: 'Razón 4: Tu vulnerabilidad y tu confianza plena en mí',
    descripcion:
      'Conocer tu faceta de "niña chiquita". Que te sintieras tan segura, protegida y en confianza a mi lado como para hablarme como bebé tras salir a comer helado; esa tierna intimidad emocional es el tesoro más sagrado que guardo.',
    etiqueta: '🍦 Helado Juntos • Mi Niña Chiquita',
    icono: '',
    iconoEtiqueta: '',
    categoria: 'intimidad',
    lado: 'derecha',
    variante: 'secondary',
    keepsakeType: 'image',
    imagenUrl: '/otra.jpg',
  },
  {
    id: 5,
    fecha: '16 de julio de 2025',
    titulo: 'Razón 5: Tu humildad y gratitud en momentos atípicos',
    descripcion:
      'Apreciar mi compañía incondicional sin importar el escenario. Valorar unas ricas empanadas calientes o permitirme acompañarte a "chismear" en una funeraria durante un momento familiar retador. Estar juntos es todo lo que verdaderamente cuenta.',
    etiqueta: '🥟 Empanadas con Amor • Incondicionales Siempre',
    icono: '',
    iconoEtiqueta: '',
    categoria: 'intimidad',
    lado: 'izquierda',
    variante: 'primary',
    keepsakeType: 'card',
    cardContenido: {
      icono: '',
      titulo: 'Apoyo en Todo Clima',
      texto:
        'No necesitamos palacios ni cenas lujosas; contigo una banca compartiendo empanadas y palabras de consuelo se convierte en el lugar más sagrado de la tierra.',
      pie: 'En las buenas, en las difíciles  siempre.',
    },
  },
  {
    id: 6,
    fecha: '16 de julio de 2025',
    titulo: 'Razón 6: Nuestra innegable compatibilidad',
    descripcion:
      'El increíble 97% de match en Spotify. Desde el jazz más sofisticado para reflexionar, hasta el perreo intenso para reír, el vallenato que desgarra el pecho y cantar a todo pulmón con Luis Alfonso.',
    etiqueta: '🎵 97% Spotify Match • Del Jazz al Perreo y Luis Alfonso',
    icono: '',
    iconoEtiqueta: '',
    categoria: 'musica',
    lado: 'derecha',
    variante: 'tertiary',
    keepsakeType: 'music',
  },
  {
    id: 7,
    fecha: '25 de julio de 2025',
    titulo: 'Razón 7: Tu esencia pura, tus pasiones y tu capacidad de asombro',
    descripcion:
      'los girasoles radiantes y las legendarias "chanclas de tiburón", sumado a descubrir tu amor fiel por Mulán. Tu felicidad infantil y desprevenida me derrite por completo.',
    etiqueta: '🌻 Girasoles & Chanclas Tiburón 🦈 • Mulán en el Corazón',
    icono: '',
    iconoEtiqueta: '',
    categoria: 'juegos',
    lado: 'izquierda',
    variante: 'primary',
    keepsakeType: 'image',
    imagenUrl: '/sandu.jpeg',
  },
  {
    id: 8,
    fecha: '31 de agosto de 2025',
    titulo: 'Razón 8: El instante en que me enamoré de ti',
    descripcion:
      'El día en que mis dudas se evaporaron por completo. Dicen que las atracciones extremas como las de Salitre Mágico ayudan a enamorarse, pero lo que sentí no fue adrenalina pasajera; fue la certeza de que quería sostener tu mano en cada caída libre. Acepté sin miedo que estaba enamorado de ti.',
    etiqueta: '🎢 Salitre Mágico • El Día que mi Corazón te Eligió',
    icono: '',
    iconoEtiqueta: '',
    categoria: 'intimidad',
    lado: 'derecha',
    variante: 'secondary',
    keepsakeType: 'image',
    imagenUrl: '/amor.jpg',
  },

  // ── AGOSTO 2025 ──────────────────────────────────────────────
  {
    id: 9,
    fecha: '',
    titulo: 'Razón 9: La paz de detener el tiempo a tu lado',
    descripcion:
      'Esos momentos en los que me siento tan pleno y tranquilo contigo que simplemente no quiero hacer nada más. Sentir ese calorcito bonito de nuestra relación, donde por instantes el tiempo parece detenerse lentamente, pero al mismo tiempo vuela porque estar a tu lado es la sensación más hermosa del mundo.',
    etiqueta: '⏳ Tiempo Detenido • Nuestro Calorcito y Paz',
    icono: '',
    iconoEtiqueta: '',
    categoria: 'intimidad',
    lado: 'izquierda',
    variante: 'primary',
    keepsakeType: 'image',
    imagenUrl: '/juntos.jpg',
  },
  {
    id: 10,
    fecha: '',
    titulo: 'Razón 10: La certeza de una lealtad inquebrantable',
    descripcion:
      'La madurez, complicidad y humor con el que vivimos cada día me hacen sentir el hombre más seguro del mundo. Amo estar con una mujer seria, firme y real. Sé perfectamente la certeza y lealtad recíproca que tenemos; nuestro amor es transparencia absoluta y en tus brazos no hay dudas.',
    etiqueta: '🛡️ Seguridad & Lealtad • Transparencia Pura',
    icono: '',
    iconoEtiqueta: '',
    categoria: 'intimidad',
    lado: 'derecha',
    variante: 'secondary',
    keepsakeType: 'image',
    imagenUrl: '/bolos.jpg',
  },
  {
    id: 11,
    fecha: '',
    titulo: 'Razón 11: El reto de la Olla Exprés y el juego de los besos',
    descripcion:
      'Imposible olvidar cuando empezamos a molestar con que a cierta cantidad de besos nos íbamos a ganar una olla exprés. Es demasiado divertido recordar cómo nació ese juego tan nuestro... y lo mejor de todo es que estoy completamente seguro de que esa meta ya la recontra alcanzamos.',
    etiqueta: '🍲 Meta Cumplida • Millones de Besos & Risas',
    icono: '',
    iconoEtiqueta: '',
    categoria: 'juegos',
    lado: 'izquierda',
    variante: 'primary',
    keepsakeType: 'stats',
  },
  {
    id: 12,
    fecha: '',
    titulo: 'Razón 12: De la NBA al chisme de señoras pensionadas',
    descripcion:
      'Me enamora locamente cómo me sigues las bobadas y te apasionas con las cosas que me gustan, desde la NBA hasta los videojuegos. Pasar de hablar de básquet a ponernos a chismear juntos como si fuéramos dos señoras pensionadas es la complicidad más divertida y hermosa que existe.',
    etiqueta: '🏀 NBA, Videojuegos & Chisme • Dos Señoras Pensionadas',
    icono: '',
    iconoEtiqueta: '',
    categoria: 'musica',
    lado: 'derecha',
    variante: 'tertiary',
    keepsakeType: 'image',
    imagenUrl: '/spidi.jpg',
  },
  {
    id: 13,
    fecha: '17 de diciembre de 2025',
    titulo: 'Razón 13: El día que lo hicimos oficial ("Esto no me pasa a mí")',
    descripcion:
      'El día que nuestra historia tuvo título oficial. Ya estaba totalmente decidido a decírtelo, cargando con nervios ese ramo gigante de flores tras mucho tiempo sin hacerlo. Jamás olvidaré la frase que me dijiste y me marcó el alma: "¿Esto es en serio? Esto no me pasa a mí". Un momento hermoso, divertido y grabado al detalle en mi corazón.',
    etiqueta: '💐 17 de Diciembre • "Esto no me pasa a mí" & El Ramo Inolvidable',
    icono: '',
    iconoEtiqueta: '',
    categoria: 'intimidad',
    lado: 'izquierda',
    variante: 'primary',
    keepsakeType: 'image',
    imagenUrl: '/el dia.jpg',
  },

  // ── 2026: EL AMOR CONSOLIDADO ────────────────────────────────
  {
    id: 14,
    fecha: '2026 — Presente',
    titulo: 'El amor que el tiempo confirmó',
    descripcion:
      'El amor que se consolidó. El tiempo demostró que eres mi lugar seguro, mi cómplice y mi alegría. Seguimos construyendo juntos un futuro lleno de risas, besos y noches conversandono.',
    etiqueta: '♾️ Siempre juntos • Nuestro Futuro',
    icono: '',
    iconoEtiqueta: '',
    categoria: 'intimidad',
    lado: 'derecha',
    variante: 'primary',
    keepsakeType: 'quote',
    cita:
      '"Cada día que pasa, elijo amarte más que ayer y menos que mañana. Gracias por ser mi lugar en el mundo, Majo."',
  },
];

// ── Métricas del Hero ────────────────────────────────────────
export const majoMetricas: MetricaHero[] = [
  {
    id: 'razones',
    valor: '13+',
    etiqueta: 'Razones Inolvidables',
    descripcion: 'Cada fecha grabada como un hito sagrado de nuestra historia.',
    icono: '1',
    variante: 'primary',
  },
  {
    id: 'spotify',
    valor: '97%',
    etiqueta: 'Match Musical Spotify',
    descripcion: 'Del jazz suave y Luis Alfonso hasta el perreo más alegre.',
    icono: '2',
    variante: 'secondary',
  },
  {
    id: 'besos',
    valor: '1,000,000',
    etiqueta: 'Puntos de Besos',
    descripcion: '¡Casi gano la codiciada Olla Express con cada beso! 😉',
    icono: '3',
    variante: 'tertiary',
  },
  {
    id: 'anio',
    valor: '2025',
    etiqueta: 'El Año Mágico',
    descripcion: 'El instante preciso donde el destino decidió cruzarnos.',
    icono: '',
    variante: 'featured',
  },
];

// ── Filtros ───────────────────────────────────────────────────
export const majoFiltros: FiltroHistoria[] = [
  { valor: 'all',       etiqueta: 'Todos',               emoji: '',  count: majoTimeline.length },
  { valor: 'juegos',    etiqueta: 'Risas & Juegos',       emoji: '🏀', count: majoTimeline.filter(m => m.categoria === 'juegos').length },
  { valor: 'intimidad', etiqueta: 'Confianza & Intimidad',emoji: '🍦', count: majoTimeline.filter(m => m.categoria === 'intimidad').length },
  { valor: 'musica',    etiqueta: 'Música & Anécdotas',   emoji: '🎵', count: majoTimeline.filter(m => m.categoria === 'musica').length },
];

// ── Polaroid Hero ─────────────────────────────────────────────
export const majoPolaroid = {
  imagenUrl: '/sonrisa majo.jpg',
  cita: '"Tu sonrisa desarma todo mi mundo"',
  subtitulo: 'Crónica 2025 • Majo & Yo',
};
