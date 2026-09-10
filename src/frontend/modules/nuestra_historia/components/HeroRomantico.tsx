'use client';

import Image from 'next/image';
import { majoMetricas, majoPolaroid } from '@/frontend/components/conts/majoStoryData';

interface HeroRomanticoProps {
  puntosBesos: number;
  onSumarBeso: () => void;
}

export function HeroRomantico({ puntosBesos, onSumarBeso }: HeroRomanticoProps) {
  return (
    <section className="relative w-full px-4 sm:px-6 lg:px-12 pt-8 sm:pt-12 pb-10 sm:pb-16 max-w-[1200px] mx-auto overflow-hidden">
      {/* Ambient glow orbs — reducidos en móvil */}
      <div className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-[320px] sm:w-[600px] lg:w-[900px] h-[260px] sm:h-[380px] lg:h-[500px] bg-gradient-to-b from-primary-fixed/30 via-secondary-container/20 to-transparent blur-3xl opacity-70" />
      <div className="pointer-events-none absolute top-[30%] -right-20 w-[250px] sm:w-[400px] h-[250px] sm:h-[400px] bg-tertiary-fixed/20 blur-[80px] rounded-full" />
      <div className="pointer-events-none absolute top-[60%] -left-20 w-[280px] sm:w-[450px] h-[280px] sm:h-[450px] bg-secondary-container/25 blur-[100px] rounded-full" />

      {/* Badge flotante */}
      <div className="flex items-center justify-center mb-5 sm:mb-6">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 sm:px-5 sm:py-2 rounded-full bg-surface-container-low shadow-sm border border-outline-variant/30">
          <span
            className="material-symbols-outlined text-primary text-[16px] sm:text-[18px] animate-pulse"
            style={{ fontVariationSettings: "'FILL' 1" }}
          >
          </span>

          <span
            className="material-symbols-outlined text-primary text-[16px] sm:text-[18px] animate-pulse"
            style={{ fontVariationSettings: "'FILL' 1" }}
          >
          </span>
        </div>
      </div>

      {/* Título principal — escala desde móvil */}
      <div className="text-center max-w-4xl mx-auto space-y-4 sm:space-y-5 px-2">
        <h1 className="font-display-lg-mobile text-display-lg-mobile sm:text-[48px] lg:text-display-lg text-primary tracking-tight leading-tight">
          Para la mujer que robó mi corazón:
          <span className="block italic font-headline-sm sm:font-headline-lg text-secondary mt-1 sm:mt-2 text-[22px] sm:text-[32px] lg:text-[40px]">
            Majo ♥️
          </span>
        </h1>
        <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl mx-auto leading-relaxed text-[14px] sm:text-[16px] lg:text-[18px]">
          Desde una perspectiva del alma y la psicología: el amor que siento por ti no es
          superficial, es una conexión indestructible forjada en vulnerabilidad, risas cómplices y
          admiración pura.
        </p>
      </div>

      {/* Grid polaroid + métricas */}
      <div className="mt-10 sm:mt-14 grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start lg:items-center">

        {/* Polaroid — centrado en móvil, columna en desktop */}
        <div className="lg:col-span-4 flex justify-center">
          <div className="group relative bg-surface-container-lowest p-3 sm:p-4 pb-6 sm:pb-8 rounded-xl shadow-xl hover:rotate-0 transition-transform duration-500 -rotate-1 sm:-rotate-2 w-full max-w-[280px] sm:max-w-xs border border-outline-variant/30">
            <div className="w-full h-56 sm:h-72 rounded-lg overflow-hidden relative bg-surface-container">
              <Image
                src={majoPolaroid.imagenUrl}
                alt="Majo con girasoles — momento romántico"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                unoptimized
                sizes="(max-width: 640px) 280px, 320px"
              />
              <div className="absolute top-2.5 right-2.5 sm:top-3 sm:right-3 bg-surface/90 backdrop-blur-sm px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full flex items-center gap-1 shadow-sm">
                <span
                  className="material-symbols-outlined text-primary text-[12px] sm:text-[14px]"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >

                </span>

              </div>
            </div>
            <div className="pt-3 sm:pt-4 text-center">
              <p className="font-headline-sm text-[16px] sm:text-headline-sm text-on-surface italic leading-snug">
                {majoPolaroid.cita}
              </p>
              <span className="font-label-sm text-label-sm text-secondary block mt-1 text-[10px] sm:text-[11px]">
                {majoPolaroid.subtitulo}
              </span>
            </div>
          </div>
        </div>

        {/* Métricas — 2 columnas en móvil, mantiene 2 en desktop */}
        <div className="lg:col-span-8 flex flex-col gap-4 sm:gap-5">
          <div className="grid grid-cols-2 gap-3 sm:gap-4">

            {/* Razones */}
            <MetricaCard
              icono={majoMetricas[0].icono}
              valor={majoMetricas[0].valor}
              etiqueta={majoMetricas[0].etiqueta}
              descripcion={majoMetricas[0].descripcion}
              colorIcon="bg-primary-fixed"
              colorValor="text-primary"
            />

            {/* Spotify */}
            <MetricaCard
              icono={majoMetricas[1].icono}
              valor={majoMetricas[1].valor}
              etiqueta={majoMetricas[1].etiqueta}
              descripcion={majoMetricas[1].descripcion}
              colorIcon="bg-secondary-fixed"
              colorValor="text-secondary"
            />

            {/* Puntos de Besos — interactivo */}
            <div className="bg-surface-container-lowest p-4 sm:p-6 rounded-2xl shadow-sm border border-outline-variant/25 relative overflow-hidden group hover:shadow-md transition-shadow col-span-1">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-tertiary-fixed flex items-center justify-center text-tertiary mb-2 sm:mb-3 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-[18px] sm:text-[22px]"></span>
              </div>
              <div className="font-headline-md text-[20px] sm:text-headline-md text-tertiary font-bold leading-tight">
                {puntosBesos.toLocaleString('es-CO')}
              </div>
              <div className="font-label-lg text-label-lg text-on-surface mt-0.5 sm:mt-1 text-[11px] sm:text-[14px]">
                {majoMetricas[2].etiqueta}
              </div>
              <p className="font-body-sm text-body-sm text-on-surface-variant mt-1 leading-snug text-[11px] sm:text-[14px] hidden sm:block">
                {majoMetricas[2].descripcion}
              </p>
            </div>

            {/* El año mágico — featured */}
            <div className="bg-primary-container p-4 sm:p-6 rounded-2xl shadow-md relative overflow-hidden flex flex-col justify-between group">
              <div className="flex items-center justify-between">
                <span className="font-label-sm text-label-sm uppercase tracking-widest text-on-primary-container text-[9px] sm:text-[11px]">
                </span>
                <span className="material-symbols-outlined text-on-primary-container text-[16px] sm:text-[20px]">
                </span>
              </div>
              <div className="mt-2">
                <div className="font-display-lg text-[32px] sm:text-[42px] leading-none text-on-primary font-bold">
                  {majoMetricas[3].valor}
                </div>
                <div className="font-label-lg text-label-lg text-primary-fixed mt-0.5 sm:mt-1 text-[11px] sm:text-[14px]">
                  {majoMetricas[3].etiqueta}
                </div>
                <p className="font-body-sm text-body-sm text-primary-fixed-dim/90 mt-1 leading-snug text-[11px] sm:text-[14px] hidden sm:block">
                  {majoMetricas[3].descripcion}
                </p>
              </div>
            </div>
          </div>

          {/* Banner psicológico + botón beso */}
          <div className="bg-surface-container-low px-4 sm:px-6 py-3 sm:py-4 rounded-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border border-outline-variant/20">
            <div className="flex items-start sm:items-center gap-2 sm:gap-3">


            </div>
            <button
              onClick={onSumarBeso}
              className="w-full sm:w-auto shrink-0 px-4 py-2.5 sm:py-2 bg-primary text-on-primary rounded-full font-label-sm text-label-sm hover:bg-primary-container hover:text-on-primary-container transition-all flex items-center justify-center gap-1.5 shadow-sm active:scale-95 touch-manipulation"
            >
              <span className="material-symbols-outlined text-[16px]"></span>
              <span>Sumar Beso (+1)</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── Sub-componente tarjeta de métrica ── */
interface MetricaCardProps {
  icono: string;
  valor: string;
  etiqueta: string;
  descripcion: string;
  colorIcon: string;
  colorValor: string;
}

function MetricaCard({ icono, valor, etiqueta, descripcion, colorIcon, colorValor }: MetricaCardProps) {
  return (
    <div className="bg-surface-container-lowest p-4 sm:p-6 rounded-2xl shadow-sm border border-outline-variant/25 relative overflow-hidden group hover:shadow-md transition-shadow">
      <div className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full ${colorIcon} flex items-center justify-center mb-2 sm:mb-3 group-hover:scale-110 transition-transform`}>
        <span className={`material-symbols-outlined text-[18px] sm:text-[22px] ${colorValor}`}>{icono}</span>
      </div>
      <div className={`font-display-lg text-[32px] sm:text-[44px] leading-none ${colorValor} font-bold`}>
        {valor}
      </div>
      <div className="font-label-lg text-label-lg text-on-surface mt-0.5 sm:mt-1 text-[11px] sm:text-[14px]">
        {etiqueta}
      </div>
      <p className="font-body-sm text-body-sm text-on-surface-variant mt-1 leading-snug text-[11px] sm:text-[14px] hidden sm:block">
        {descripcion}
      </p>
    </div>
  );
}
