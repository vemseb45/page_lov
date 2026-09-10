// ============================================================
// Tipos para la Carta de Amor Interactiva de Majo
// ============================================================

export type CategoriaHistoria = 'all' | 'juegos' | 'intimidad' | 'musica';

export interface MomentoHistoria {
  id: number;
  fecha: string;
  titulo: string;
  descripcion: string;
  etiqueta: string;
  icono: string;
  iconoEtiqueta: string;
  categoria: Exclude<CategoriaHistoria, 'all'>;
  /** Lado en el que aparece en el zig-zag del timeline en desktop */
  lado: 'izquierda' | 'derecha';
  /** Variante de color para el nodo y la fecha-badge */
  variante: 'primary' | 'secondary' | 'tertiary';
  /** Tipo de keepsake visual que se renderiza */
  keepsakeType: 'image' | 'quote' | 'card' | 'stats' | 'music';
  /** URL de imagen (solo si keepsakeType === 'image') */
  imagenUrl?: string;
  /** Texto de cita (solo si keepsakeType === 'quote') */
  cita?: string;
  /** Contenido de la tarjeta simple */
  cardContenido?: {
    icono: string;
    titulo: string;
    texto: string;
    pie?: string;
  };
}

export interface MetricaHero {
  id: string;
  valor: string;
  etiqueta: string;
  descripcion: string;
  icono: string;
  variante: 'primary' | 'secondary' | 'tertiary' | 'featured';
}

export interface FiltroHistoria {
  valor: CategoriaHistoria;
  etiqueta: string;
  emoji: string;
  count: number;
}

export interface EstadoNuestraHistoria {
  filtroActivo: CategoriaHistoria;
  puntosBesos: number;
  momentosFiltrados: MomentoHistoria[];
}
