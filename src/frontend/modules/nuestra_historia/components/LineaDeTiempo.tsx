'use client';

import Image from 'next/image';
import type { MomentoHistoria } from '@/frontend/types/majoTypes';

interface LineaDeTiempoProps {
  momentos: MomentoHistoria[];
  puntosBesos: number;
}

export function LineaDeTiempo({ momentos, puntosBesos }: LineaDeTiempoProps) {
  if (momentos.length === 0) {
    return (
      <section className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-12 pb-16 text-center py-16">
        <span className="material-symbols-outlined text-primary text-[48px] opacity-40">search_off</span>
        <p className="font-body-md text-body-md text-on-surface-variant mt-3">
          No hay recuerdos en esta categoría aún.
        </p>
      </section>
    );
  }

  return (
    <section className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-12 relative pb-16 sm:pb-24">
      {/* Línea central — solo desktop */}
      <div className="hidden md:block absolute left-1/2 top-0 bottom-12 -translate-x-1/2 w-0.5 bg-gradient-to-b from-primary via-secondary to-primary-fixed/40" />

      <div className="space-y-8 sm:space-y-12 md:space-y-16">
        {momentos.map((momento) => (
          <EntradaTimeline
            key={momento.id}
            momento={momento}
            puntosBesos={puntosBesos}
          />
        ))}
      </div>
    </section>
  );
}

/* ── Entrada individual ──────────────────────────────────────────────────── */

interface EntradaTimelineProps {
  momento: MomentoHistoria;
  puntosBesos: number;
}

function EntradaTimeline({ momento, puntosBesos }: EntradaTimelineProps) {
  const esIzquierda = momento.lado === 'izquierda';

  const nodoBg: Record<MomentoHistoria['variante'], string> = {
    primary: 'bg-primary text-on-primary',
    secondary: 'bg-secondary text-on-secondary',
    tertiary: 'bg-tertiary text-on-tertiary',
  };

  const badgeBg: Record<MomentoHistoria['variante'], string> = {
    primary: 'bg-primary-fixed text-primary',
    secondary: 'bg-secondary-fixed text-secondary',
    tertiary: 'bg-tertiary-fixed text-tertiary',
  };

  return (
    <div
      className={[
        /* Móvil: siempre columna vertical. Desktop: fila en zig-zag */
        'flex flex-col md:items-center gap-5 sm:gap-6 md:gap-8 group',
        esIzquierda ? 'md:flex-row' : 'md:flex-row-reverse',
      ].join(' ')}
    >
      {/* ── Columna de texto ── */}
      <div
        className={[
          'w-full md:w-1/2 flex flex-col',
          /* En móvil: alineado a la izquierda siempre */
          'items-start text-left',
          /* En desktop: respeta el lado */
          esIzquierda ? 'md:text-right md:items-end' : 'md:text-left md:items-start',
        ].join(' ')}
      >
        {/* Badge fecha */}
        <div
          className={`inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1 rounded-full ${badgeBg[momento.variante]} font-label-sm text-label-sm mb-2 shadow-sm text-[10px] sm:text-[11px]`}
        >
          <span className="material-symbols-outlined text-[12px] sm:text-[14px]">{momento.icono}</span>
          {momento.fecha}
        </div>

        <h3 className="font-headline-sm text-[18px] sm:text-headline-sm text-primary leading-snug">
          {momento.titulo}
        </h3>

        <p
          className="font-body-md text-[14px] sm:text-body-md text-on-surface-variant mt-2 leading-relaxed"
          dangerouslySetInnerHTML={{
            __html: momento.descripcion.replace(/"([^"]+)"/g, '<em>"$1"</em>'),
          }}
        />

        <div className="mt-3 inline-flex items-center gap-1.5 sm:gap-2 text-secondary font-label-sm text-label-sm bg-surface-container px-3 py-1.5 rounded-lg border border-outline-variant/20 text-[10px] sm:text-[11px]">
          <span className="material-symbols-outlined text-[14px] sm:text-[16px]">{momento.iconoEtiqueta}</span>
          <span>{momento.etiqueta}</span>
        </div>
      </div>

      {/* ── Nodo central — solo desktop ── */}
      <div
        className={`hidden md:flex shrink-0 w-10 h-10 rounded-full ${nodoBg[momento.variante]} items-center justify-center shadow-[0_0_16px_rgba(212,139,151,0.5)] z-10 group-hover:scale-125 transition-transform`}
      >
        <span className="material-symbols-outlined text-[18px]"></span>
      </div>

      {/* ── Divisor móvil en lugar del nodo ── */}
      <div className="md:hidden flex items-center gap-2 my-1">
        <span className="h-px flex-1 bg-outline-variant/40" />
        <span
          className={`w-6 h-6 rounded-full ${nodoBg[momento.variante]} flex items-center justify-center shadow-sm shrink-0`}
        >
          <span className="material-symbols-outlined text-[12px]"></span>
        </span>
        <span className="h-px flex-1 bg-outline-variant/40" />
      </div>

      {/* ── Keepsake visual ── */}
      <div className="w-full md:w-1/2">
        <Keepsake momento={momento} puntosBesos={puntosBesos} />
      </div>
    </div>
  );
}

/* ── Keepsakes ───────────────────────────────────────────────────────────── */

interface KeepsakeProps {
  momento: MomentoHistoria;
  puntosBesos: number;
}

function Keepsake({ momento, puntosBesos }: KeepsakeProps) {
  switch (momento.keepsakeType) {
    case 'image':   return <KeepsakeImagen momento={momento} />;
    case 'quote':   return <KeepsakeQuote momento={momento} />;
    case 'music':   return <KeepsakeMusica />;
    case 'stats':   return <KeepsakeStats puntosBesos={puntosBesos} />;
    case 'card':
    default:        return <KeepsakeCard momento={momento} />;
  }
}

function KeepsakeImagen({ momento }: { momento: MomentoHistoria }) {
  if (!momento.imagenUrl) return null;
  return (
    <div className="bg-surface-container-lowest p-3 sm:p-4 rounded-2xl shadow-sm border border-outline-variant/30 hover:shadow-md transition-shadow">
      <div className="h-44 sm:h-48 w-full rounded-xl overflow-hidden bg-surface-container relative">
        <Image
          src={momento.imagenUrl}
          alt={momento.titulo}
          fill
          className="object-cover"
          unoptimized
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 500px"
        />
        <div className="absolute bottom-2.5 left-2.5 sm:bottom-3 sm:left-3 bg-surface/90 backdrop-blur-md px-2.5 py-1 rounded-full text-primary font-label-sm text-label-sm flex items-center gap-1 text-[10px] sm:text-[11px]">
          <span className="material-symbols-outlined text-[12px] sm:text-[14px]">{momento.icono}</span>
          {momento.etiqueta.split('•')[0].trim()}
        </div>
      </div>
    </div>
  );
}

function KeepsakeQuote({ momento }: { momento: MomentoHistoria }) {
  return (
    <div className="bg-surface-container-lowest p-5 sm:p-6 rounded-2xl border border-outline-variant/30 relative">
      <div className="flex items-center justify-between border-b border-surface-variant pb-2.5 sm:pb-3 mb-2.5 sm:mb-3">
        <span className="font-label-sm text-label-sm text-primary uppercase font-bold text-[10px] sm:text-[11px]">
          Nota al Alma
        </span>
        <span className="material-symbols-outlined text-secondary text-[16px] sm:text-[18px]"></span>
      </div>
      <p className="font-headline-sm text-[17px] sm:text-[19px] italic text-on-surface leading-snug">
        {momento.cita}
      </p>
    </div>
  );
}

function KeepsakeMusica() {
  return (
    <div className="bg-inverse-surface text-inverse-on-surface p-5 sm:p-6 rounded-2xl shadow-xl relative overflow-hidden">
      <div className="flex items-center justify-between mb-3 sm:mb-4">
        <div className="flex items-center gap-2">
          <span className="material-symbols-outlined text-secondary-container text-[18px] sm:text-[20px]">
          </span>
          <span className="font-label-md text-label-md text-inverse-on-surface/80 text-[11px] sm:text-[12px]">
            Spotify
          </span>
        </div>
        <span className="font-headline-md text-[22px] sm:text-headline-md text-secondary-container font-bold">
          94%
        </span>
      </div>

      <div className="space-y-2">
        <div className="flex justify-between font-label-sm text-label-sm text-inverse-on-surface/70 text-[10px] sm:text-[11px]">
          <span>Jazz Acústico & Sensual</span>
          <span>100% Sintonía</span>
        </div>
        <div className="w-full bg-inverse-on-surface/20 rounded-full h-1.5 overflow-hidden">
          <div className="bg-secondary-container h-full w-[94%]" />
        </div>
        <div className="flex justify-between font-label-sm text-label-sm text-inverse-on-surface/70 pt-1 sm:pt-2 text-[10px] sm:text-[11px]">
          <span>Luis Alfonso & Vallenato Sentido</span>
          <span>A Todo Pulmón</span>
        </div>
        <div className="w-full bg-inverse-on-surface/20 rounded-full h-1.5 overflow-hidden">
          <div className="bg-secondary-container h-full w-full" />
        </div>
      </div>
    </div>
  );
}

function KeepsakeStats({ puntosBesos }: { puntosBesos: number }) {
  return (
    <div className="bg-surface-container-lowest p-5 sm:p-6 rounded-2xl border border-secondary-container shadow-sm flex items-center justify-between gap-3">
      <div className="min-w-0">
        <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary font-bold text-[10px] sm:text-[11px]">
          Saldo de Recompensas
        </span>
        <p className="font-display-lg text-[26px] sm:text-[32px] leading-tight text-primary mt-1 font-bold">
          {puntosBesos.toLocaleString('es-CO')} Besos
        </p>
        <p className="font-body-sm text-body-sm text-on-surface-variant mt-1 text-[12px] sm:text-[14px]">
          Candidata oficial a la Olla Express 🥘
        </p>
      </div>
      <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-secondary-container/40 flex items-center justify-center text-primary shrink-0">
        <span className="material-symbols-outlined text-[26px] sm:text-[32px]"></span>
      </div>
    </div>
  );
}

function KeepsakeCard({ momento }: { momento: MomentoHistoria }) {
  if (!momento.cardContenido) return null;
  const { icono, titulo, texto, pie } = momento.cardContenido;

  return (
    <div className="bg-surface-container-lowest p-4 sm:p-6 rounded-2xl shadow-sm border border-outline-variant/30 flex items-start gap-3 sm:gap-4">
      <div className="w-11 h-11 sm:w-14 sm:h-14 rounded-2xl bg-secondary-container text-on-secondary-container flex items-center justify-center shrink-0">
        <span className="material-symbols-outlined text-[22px] sm:text-[28px]">{icono}</span>
      </div>
      <div className="flex flex-col gap-1 min-w-0">
        <p className="font-headline-sm text-[16px] sm:text-[18px] text-on-surface leading-snug">
          {titulo}
        </p>
        <p className="font-body-sm text-body-sm text-on-surface-variant text-[12px] sm:text-[14px] leading-relaxed">
          {texto}
        </p>
        {pie && (
          <div className="mt-2 pt-2 border-t border-surface-variant">
            <span className="font-label-sm text-label-sm text-secondary italic text-[10px] sm:text-[11px]">
              {pie}
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
