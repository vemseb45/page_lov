import type { MomentoHistoria, MetricaHero, FiltroHistoria } from '@/frontend/types/majoTypes';

// ============================================================
// Data Emocional: La Historia de Majo & Yo — 2025–2026
// ============================================================

export const majoTimeline: MomentoHistoria[] = [
  // ── JUNIO 2025 ──────────────────────────────────────────────
  {
    id: 1,
    fecha: '20 de junio de 2025',
    titulo: 'Razón 1: Tu espíritu unico y tu capacidad para sorprenderme',
    descripcion:
      'Ese día que jugamos baloncesto me dijiste que no sabías jugar, ¡pero me sorprendiste ! Y sí, ese mismo día que te "robaste mi magia". Ese día me di cuenta de tu espíritu competitivo y de una energía que te caracteriza: "la buena vibra."',
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
      'Este día fue el día del aprendiz, en el que estabas muy estresada. A pesar de que no hubo apoyo del Sena ni nada, sacaste una solución y tuviste la mejor disposición. A pesar de que no bailé :v y de que te vi muy brava, me gustó estar ahí solo por ti, y porque dijiste que estabas dando abrazos gratis solo por bailar.',
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
    fecha: '',
    titulo: 'Razón 3: La profunda atracción hacia tu autenticidad',
    descripcion:
      'Me encantas en todas tus facetas: desde la Majo en pijama (¡que me encanta!), la Majo consentida, la Majo brava, la Majo mamá regañona, hasta la Majo corporativa con gafas, que te ves bien preciosa :3.',
    etiqueta: '• 👓 Autenticidad Pura •',
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
      'Conocer tu faceta de "niña chiquita". Este día fue cuando me comenzaste a hablar como una bebé, cuando fuimos a comer helado y también me contaste que tus helados favoritos eran los de Crepes y no los de Popsy (y yo :O), y tambien que eres fan de probar todos los sabores de helado.',
    etiqueta: '• 🍦 Helado Juntos •',
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
    fecha: '',
    titulo: 'Razón 5: Tu manera descomplicada',
    descripcion:
      'A pesar de los escenarios, tú siempre estás ahí conmigo, así sea en un andén y estar echando chistes , estar en un parque viendo un partido de fútbol y estar jugando como niños pequeños, esos momentos son los mas lindos para mi. No importa el lugar donde estemos, tu disposición siempre está ahí.',
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
      'Este día hicimos nuestra Fusión en Spotify, donde teníamos una compatibilidad del 94% que actualmente está en el 97%. Es curioso que seamos tan compatibles pero a la vez tan diferentes; creo que eso nos caracteriza... no lo sé, pero simplemente, al fin y al cabo, podemos sacar nuestra verdadera versión.',
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
    titulo: 'Razón 7: Tu muchosidad',
    descripcion:
      'Este día fue tu cumpleaños. A pesar del regalo que te di, te sorprendió bastante que tuviera este gesto por ti; por lo que me cuentas, te pusiste nerviosa pero a la vez feliz. Simplemente unos girasoles y unas chanclas de tiburón te hicieron feliz.',
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
      'El día en el que me di cuenta de que ya no era un gusto, sino que quería algo más allá de un gusto; tal vez las atracciones "extremas" tuvieron algo que ver, pero como te lo he mencionado antes, este día tomé mi decisión de que no ibas a ser un gusto pasajero.',
    etiqueta: '🎢 Salitre Mágico • El Día que mi Corazón te Eligió',
    icono: '',
    iconoEtiqueta: '',
    categoria: 'intimidad',
    lado: 'derecha',
    variante: 'secondary',
    keepsakeType: 'image',
    imagenUrl: '/amor.jpg',
  },

  {
    id: 9,
    fecha: '',
    titulo: 'Razón 9: La paz de detener el tiempo a tu lado',
    descripcion:
      'Esos momentos en los que me siento tan tranquilo contigo que simplemente no quiero hacer nada más. Sentir ese calorcito bonito de nuestra relación, donde por instantes el tiempo parece detenerse lentamente, pero al mismo tiempo vuela.',
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
      'La madurez en nuestra relación me gusta tanto... no hay ninguna razón por la que pueda llegar a desconfiar de ti o que me generes algún tipo de inseguridad; simplemente tener conversaciones maduras y hablar de las cosas que hemos hecho en nuestras vidas, la manera en que molestamos o nos "celamos" es única, o así lo siento yo. Amo estar con una mujer como tu.',
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
      'Imposible olvidar cuando empezamos a molestar con que a cierta cantidad de besos nos íbamos a ganar una olla exprés. Es demasiado divertido recordar cómo nació ese juego tan nuestro... y lo mejor de todo es que estoy seguro de que esa meta ya la alcanzamos.',
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
      'Me enamora cómo me sigues las bobadas y te apasionas con las cosas que me gustan, desde la NBA hasta los videojuegos. Pasar de hablar de básquet a ponernos a chismear juntos como si fuéramos dos señoras pensionadas es la complicidad más divertida y hermosa.',
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
    titulo: 'Razón 13: El día que lo hicimos oficial',
    descripcion:
      'El día que nuestra historia tuvo título oficial. Ya estaba totalmente decidido a decírtelo, ese dia cargando el ramo por toda la septima me temblaban las piernas :D estaba muy nervioso. Jamás olvidaré la frase que me dijiste cuando te pase a Vianca: "¿Esto es en serio? Esto no me pasa a mí". Un momento muy lindo para mi.',
    etiqueta: '💐•  17 de Diciembre • ',
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
  subtitulo: '— Majo, el amor de mi vida 💌',
};
