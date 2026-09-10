'use client';

import { useState, useCallback, useMemo } from 'react';
import { majoTimeline } from '@/frontend/components/conts/majoStoryData';
import type { CategoriaHistoria, MomentoHistoria } from '@/frontend/types/majoTypes';

const BESOS_INICIALES = 1_000_000;

export interface UseNuestraHistoriaReturn {
  filtroActivo: CategoriaHistoria;
  puntosBesos: number;
  momentosFiltrados: MomentoHistoria[];
  toastVisible: boolean;
  toastMensaje: string;
  setFiltro: (categoria: CategoriaHistoria) => void;
  sumarBeso: () => void;
  enviarAbrazovirtual: () => void;
  cerrarToast: () => void;
}

export function useNuestraHistoria(): UseNuestraHistoriaReturn {
  const [filtroActivo, setFiltroActivo] = useState<CategoriaHistoria>('all');
  const [puntosBesos, setPuntosBesos] = useState<number>(BESOS_INICIALES);
  const [toastVisible, setToastVisible] = useState(false);
  const [toastMensaje, setToastMensaje] = useState('');

  /** Muestra un toast durante 3.6 s y luego lo oculta */
  const mostrarToast = useCallback((mensaje: string) => {
    setToastMensaje(mensaje);
    setToastVisible(true);
    const timer = setTimeout(() => setToastVisible(false), 3600);
    return () => clearTimeout(timer);
  }, []);

  /** Cambia el filtro activo de la línea de tiempo */
  const setFiltro = useCallback((categoria: CategoriaHistoria) => {
    setFiltroActivo(categoria);
  }, []);

  /** Suma 1 punto de beso y muestra toast con el nuevo total */
  const sumarBeso = useCallback(() => {
    setPuntosBesos((prev) => {
      const nuevo = prev + 1;
      mostrarToast(
        `💋 ¡Has sumado un beso más para Majo! Total: ${nuevo.toLocaleString('es-CO')} besos acumulados.`
      );
      return nuevo;
    });
  }, [mostrarToast]);

  /** Dispara el toast de abrazo virtual */
  const enviarAbrazovirtual = useCallback(() => {
    mostrarToast('¡Abrazo gigante y apretado enviado a Majo! Te amo infinitamente ♥️');
  }, [mostrarToast]);

  /** Oculta el toast manualmente */
  const cerrarToast = useCallback(() => {
    setToastVisible(false);
  }, []);

  /** Lista de momentos filtrada por categoría */
  const momentosFiltrados = useMemo<MomentoHistoria[]>(() => {
    if (filtroActivo === 'all') return majoTimeline;
    return majoTimeline.filter((m) => m.categoria === filtroActivo);
  }, [filtroActivo]);

  return {
    filtroActivo,
    puntosBesos,
    momentosFiltrados,
    toastVisible,
    toastMensaje,
    setFiltro,
    sumarBeso,
    enviarAbrazovirtual,
    cerrarToast,
  };
}
