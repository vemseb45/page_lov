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
    etiqueta: '🏀 Voleibol & Baloncesto • La Magia Robada',
    icono: '',
    iconoEtiqueta: '',
    categoria: 'juegos',
    lado: 'izquierda',
    variante: 'primary',
    keepsakeType: 'image',
    imagenUrl: '/fotos de majo y yo.jpg',
  },
  {
    id: 2,
    fecha: '24 de junio de 2025',
    titulo: 'Razón 2: Tu calidez y tu alegría genuina',
    descripcion:
      'Tu hermosa disposición para celebrar la vida. Cuando me invitaste al Día del Aprendiz prometiendo "regalar abrazos" y motivándome a sacar mis mejores pasos de baile. Contigo la timidez desaparece y todo es música.',
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
    imagenUrl: '/arbol salitre.jpg',
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
      pie: 'En las buenas, en las difíciles y siempre.',
    },
  },
  {
    id: 6,
    fecha: '16 de julio de 2025',
    titulo: 'Razón 6: Nuestra innegable compatibilidad de almas',
    descripcion:
      'El increíble 94% de match en Spotify. Desde el jazz más sofisticado para reflexionar, hasta el perreo intenso para reír, el vallenato que desgarra el pecho y cantar a todo pulmón con Luis Alfonso. Nuestras almas vibran al mismo compás.',
    etiqueta: '🎵 94% Spotify Match • Del Jazz al Perreo y Luis Alfonso',
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
      'Ver tu emoción desbordante al recibir tu regalo de cumpleaños: los girasoles radiantes y las legendarias "chanclas de tiburón", sumado a descubrir tu amor fiel por Mulán. Tu felicidad infantil y desprevenida me derrite por completo.',
    etiqueta: '🌻 Girasoles & Chanclas Tiburón 🦈 • Mulán en el Corazón',
    icono: '',
    iconoEtiqueta: '',
    categoria: 'juegos',
    lado: 'izquierda',
    variante: 'primary',
    keepsakeType: 'image',
    imagenUrl: '/otraaa.jpg',
  },
  {
    id: 8,
    fecha: '29 de julio de 2025',
    titulo: 'Razón 8: Nuestra complicidad humorística inquebrantable',
    descripcion:
      'La química única para convertir el caos en carcajadas. La legendaria anécdota en el Transmilenio cuando Andrés se enojó por el pasaje y nosotros dos simplemente estallamos de risa cómplice. Transformamos cualquier estrés en pura alegría compartida.',
    etiqueta: '🚌 Aventura en Transmilenio • Risas Incontrolables',
    icono: '',
    iconoEtiqueta: '',
    categoria: 'musica',
    lado: 'derecha',
    variante: 'secondary',
    keepsakeType: 'card',
    cardContenido: {
      icono: '',
      titulo: 'El enojo de Andrés y nuestra risa eterna',
      texto:
        'No podíamos parar de reír en pleno bus. Mirarte y saber exactamente qué estás pensando es magia pura.',
    },
  },

  // ── AGOSTO 2025 ──────────────────────────────────────────────
  {
    id: 9,
    fecha: '8 de agosto de 2025',
    titulo: 'Razón 9: Tu ternura y mi instinto de cuidarte',
    descripcion:
      'Amar tu faceta de mujer consentida. Cuando te sientes indispuesta, solo anhelo arroparte con cobijas suaves, consentirte y cuidarte; despiertas en mí el deseo más noble, sincero y protector de acompañarte en cada instante.',
    etiqueta: '🧸 Modo Consentida • Cuidarte es mi Privilegio',
    icono: '',
    iconoEtiqueta: '',
    categoria: 'intimidad',
    lado: 'izquierda',
    variante: 'primary',
    keepsakeType: 'card',
    cardContenido: {
      icono: '',
      titulo: 'Mi Refugio Seguro',
      texto:
        'Verte descansar bajo las cobijas me confirma que mi lugar favorito es cuidando de ti.',
    },
  },
  {
    id: 10,
    fecha: '12 de agosto de 2025',
    titulo: 'Razón 10: La seguridad inquebrantable frente a los celos cómicos',
    descripcion:
      'La madurez, complicidad y humor con el que vivimos cada momento (¡como las bromas sobre Dionisio!). Detrás del juego y los celos en broma, existe una certeza y lealtad recíproca a prueba de todo. En tus brazos no hay dudas.',
    etiqueta: '🛡️ Bromas con Dionisio • Confianza Absoluta',
    icono: '',
    iconoEtiqueta: '',
    categoria: 'intimidad',
    lado: 'derecha',
    variante: 'secondary',
    keepsakeType: 'card',
    cardContenido: {
      icono: '',
      titulo: 'Pilar Psicológico: Confianza Madura',
      texto:
        'Reírnos de Dionisio y bromear sin herirnos demuestra que el vínculo no está fundamentado en el miedo, sino en la elección diaria de caminar de la mano.',
    },
  },
  {
    id: 11,
    fecha: '13 de agosto de 2025',
    titulo: 'Razón 11: Nuestro romanticismo lúdico y el juego de los besos',
    descripcion:
      'El famoso sistema de recompensas donde sumas puntos en forma de besos... con la cómica y codiciada meta de ganarte una "olla express". Mantienes la chispa, el juego y la ternura encendidos de una manera deliciosamente divertida.',
    etiqueta: '🍲 Meta: La Olla Express • Recompensa de Besos',
    icono: '',
    iconoEtiqueta: '',
    categoria: 'juegos',
    lado: 'izquierda',
    variante: 'primary',
    keepsakeType: 'stats',
  },
  {
    id: 12,
    fecha: '13 - 14 de agosto de 2025',
    titulo: 'Razón 12: La riqueza infinita de nuestras charlas nocturnas',
    descripcion:
      'Poder hablar de tus pijamas de satín y las cobijas suaves, para luego pasar a debatir apasionadamente sobre LeBron James vs Stephen Curry en la NBA. Contigo cada noche es un universo fascinante donde el aburrimiento jamás existe.',
    etiqueta: '🌙 Pijamas de Satín & Cobijas • LeBron vs Curry NBA 🏀',
    icono: '',
    iconoEtiqueta: '',
    categoria: 'musica',
    lado: 'derecha',
    variante: 'tertiary',
    keepsakeType: 'card',
    cardContenido: {
      icono: '',
      titulo: 'Noches que no tienen precio',
      texto:
        'De tus pijamas de satín y las cobijas, al debate más apasionado de LeBron vs Curry. Contigo no hay noche aburrida.',
    },
  },
  {
    id: 13,
    fecha: '15 de agosto de 2025',
    titulo: 'Razón 13: Mi admiración constante en cualquier contexto',
    descripcion:
      'Verte en tu brigada con tu uniforme y tus botas, luciendo con orgullo como "la más linda de toda la brigada". Me encantas, me inspiras, me llenas el pecho de orgullo y te admiro en todas y cada una de tus versiones.',
    etiqueta: '🥾 La Más Linda de la Brigada • Orgullo Total',
    icono: '',
    iconoEtiqueta: '',
    categoria: 'intimidad',
    lado: 'izquierda',
    variante: 'primary',
    keepsakeType: 'image',
    imagenUrl: '/moto.jpg',
  },

  // ── 2026: EL AMOR CONSOLIDADO ────────────────────────────────
  {
    id: 14,
    fecha: '2026 — Presente',
    titulo: 'El amor que el tiempo confirmó',
    descripcion:
      'El amor que se consolidó. El tiempo demostró que eres mi lugar seguro, mi cómplice y mi alegría. Seguimos construyendo juntos un futuro lleno de risas, besos y noches conversando hasta el amanecer.',
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
    valor: '94%',
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
