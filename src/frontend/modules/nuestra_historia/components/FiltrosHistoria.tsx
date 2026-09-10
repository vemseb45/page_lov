'use client';

import { majoFiltros } from '@/frontend/components/conts/majoStoryData';
import type { CategoriaHistoria } from '@/frontend/types/majoTypes';

interface FiltrosHistoriaProps {
  filtroActivo: CategoriaHistoria;
  onFiltroChange: (categoria: CategoriaHistoria) => void;
}

export function FiltrosHistoria({ filtroActivo, onFiltroChange }: FiltrosHistoriaProps) {
  return (
    <section className="w-full px-4 sm:px-6 lg:px-12 mt-4 sm:mt-6 mb-8 sm:mb-12 max-w-[1200px] mx-auto">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-3 bg-surface-container-low rounded-2xl border border-outline-variant/30 shadow-sm">

        {/* Label */}
        <div className="flex items-center gap-2 pl-1 sm:pl-3 shrink-0">
          <span className="material-symbols-outlined text-primary text-[18px] sm:text-[20px]">
          </span>
          <span className="font-label-lg text-label-lg text-on-surface text-[13px] sm:text-[14px]">
            Filtrar Recuerdos:
          </span>
        </div>

        {/* Botones — scroll horizontal en móvil pequeño */}
        <div className="flex items-center gap-2 overflow-x-auto pb-0.5 sm:pb-0 scrollbar-hide snap-x snap-mandatory sm:flex-wrap">
          {majoFiltros.map((filtro) => {
            const activo = filtroActivo === filtro.valor;
            return (
              <button
                key={filtro.valor}
                onClick={() => onFiltroChange(filtro.valor)}
                className={[
                  'px-3.5 sm:px-4 py-2 rounded-full font-label-sm text-label-sm transition-all whitespace-nowrap snap-start shrink-0 touch-manipulation text-[11px] sm:text-[11px]',
                  activo
                    ? 'bg-primary text-on-primary shadow-sm'
                    : 'bg-surface-container-highest text-on-surface hover:bg-primary-fixed hover:text-primary active:bg-primary-fixed',
                ].join(' ')}
              >
                {filtro.emoji ? `${filtro.emoji} ` : ''}
                {filtro.etiqueta}
                {filtro.valor === 'all' ? ` (${filtro.count})` : ''}
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
