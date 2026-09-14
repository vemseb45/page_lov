'use client';

import { useState } from 'react';
import { useNuestraHistoria } from '@/frontend/hooks/useNuestraHistoria';
import { HeroRomantico } from '@/frontend/modules/nuestra_historia/components/HeroRomantico';
import { LineaDeTiempo } from '@/frontend/modules/nuestra_historia/components/LineaDeTiempo';
import { CartaAmorFinal } from '@/frontend/modules/nuestra_historia/components/CartaAmorFinal';

const NAV_LINKS = [
  { label: 'Inicio',          href: '#inicio',   icono: '' },
  { label: 'Línea de Tiempo', href: '#timeline', icono: '' },
  { label: 'Carta de Amor',   href: '#carta',    icono: '' },
];

/* ── Disco de vinilo SVG reutilizable ── */
function DiscoVinilo() {
  return (
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      {/* Cuerpo negro del vinilo */}
      <circle cx="50" cy="50" r="49" fill="#0a0a0a" />
      {/* Brillo sutil del borde */}
      <circle cx="50" cy="50" r="49" fill="none" stroke="#1a1a1a" strokeWidth="1.5" />
      {/* Surcos del vinilo — negro profundo */}
      <circle cx="50" cy="50" r="45" fill="none" stroke="#181818" strokeWidth="1.3" />
      <circle cx="50" cy="50" r="41" fill="none" stroke="#181818" strokeWidth="1.3" />
      <circle cx="50" cy="50" r="37" fill="none" stroke="#181818" strokeWidth="1.3" />
      <circle cx="50" cy="50" r="33" fill="none" stroke="#181818" strokeWidth="1.3" />
      <circle cx="50" cy="50" r="29" fill="none" stroke="#181818" strokeWidth="1.3" />
      {/* Etiqueta central — vinotinto */}
      <circle cx="50" cy="50" r="23" fill="#6c0c28" />
      {/* Anillo interior de la etiqueta */}
      <circle cx="50" cy="50" r="20" fill="none" stroke="#8b263e" strokeWidth="0.8" />
      <circle cx="50" cy="50" r="17" fill="none" stroke="#8b263e" strokeWidth="0.5" />
      {/* Texto de la etiqueta */}
      <text x="50" y="46" textAnchor="middle" fill="#ffffff" fontSize="6.5" fontFamily="serif" fontStyle="italic" fontWeight="600">Amor de</text>
      <text x="50" y="55" textAnchor="middle" fill="#ffffff" fontSize="6.5" fontFamily="serif" fontStyle="italic" fontWeight="600">Primavera</text>
      {/* Agujero central */}
      <circle cx="50" cy="50" r="3.8" fill="#0a0a0a" />
    </svg>
  );
}

export default function NuestraHistoriaPage() {
  const [menuAbierto, setMenuAbierto] = useState(false);

  const {
    filtroActivo,
    puntosBesos,
    momentosFiltrados,
    toastVisible,
    toastMensaje,
    setFiltro,
    sumarBeso,
    enviarAbrazovirtual,
  } = useNuestraHistoria();

  return (
    <div className="bg-surface text-on-surface antialiased selection:bg-secondary-container selection:text-on-secondary-container min-h-screen">

      {/* ══════════ NAVBAR ══════════════════════════════════════ */}
      <header className="fixed top-0 w-full z-50 bg-surface/92 backdrop-blur-md shadow-[0_1px_12px_rgba(108,12,40,0.07)]">
        <div className="h-14 sm:h-16 lg:h-20 max-w-[1200px] mx-auto px-3 sm:px-6 lg:px-12 flex items-center justify-between gap-2">

          {/* Logo — siempre visible */}
          <a href="#inicio" className="group flex items-center gap-1.5 shrink-0">
            <span
              className="material-symbols-outlined text-primary text-[18px] sm:text-[20px] group-hover:scale-110 transition-transform"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
            </span>
            <span className="font-headline-sm text-[14px] sm:text-[16px] lg:text-[22px] text-primary tracking-normal leading-none">
              Nuestra Historia
            </span>
          </a>

          {/* Badge — visible en todos los tamaños, texto se acorta en móvil */}
          <div className="flex items-center gap-1.5 sm:gap-2 bg-surface-container-low px-2.5 sm:px-3 py-1 rounded-full shadow-[0_0_12px_rgba(212,139,151,0.2)] min-w-0">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse shrink-0" />
            <span className="font-label-sm text-primary truncate text-[9px] sm:text-[10px] xl:text-label-sm">
              <span className="hidden sm:inline"> </span>Cada día más enamorado
            </span>
          </div>

          {/* Nav links — solo desktop */}
          <nav className="hidden md:flex items-center gap-2 lg:gap-3">
            {NAV_LINKS.map((item, i) => (
              <a
                key={item.label}
                href={item.href}
                className={
                  i === 0
                    ? 'bg-primary-container text-on-primary font-label-lg text-label-lg rounded-full px-4 py-2 shadow-[0_0_16px_rgba(212,139,151,0.3)] transition-colors'
                    : 'font-label-lg text-label-lg text-on-surface-variant hover:text-primary px-3 py-2 rounded-full transition-colors'
                }
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Acciones derecha */}
          <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">

            {/* Nuestra Canción — SIEMPRE visible en todos los tamaños */}
            <a
              href="https://open.spotify.com/track/6ubUesAyvYV5ktyTlRvfXe?si=yk4HiUUfTXW6vj9KnnqoCg&utm_source=whatsapp"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 sm:gap-2 bg-surface-container-low px-2 sm:px-3 py-1.5 rounded-full hover:bg-secondary-container/30 active:bg-secondary-container/50 transition-colors group touch-manipulation"
              title="Amor de Primavera — Conjunto Chaney"
            >
              {/* Disco vinilo giratorio — más grande */}
              <div className="w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10 shrink-0 animate-spin-slow">
                <DiscoVinilo />
              </div>

              {/* Texto — desde sm en adelante */}
              <div className="hidden sm:flex flex-col leading-none">
                <span className="font-label-sm text-primary font-semibold leading-none text-[9px] sm:text-[10px]">
                  Nuestra Canción
                </span>
                <span className="text-on-surface-variant leading-none mt-0.5 text-[8px] hidden lg:block">
                  Amor de Primavera
                </span>
              </div>

              {/* Ícono play */}
              <span
                className="material-symbols-outlined text-primary group-hover:text-secondary transition-colors text-[14px] sm:text-[15px]"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
              </span>
            </a>

            {/* Botón 3 puntos — solo móvil */}
            <button
              onClick={() => setMenuAbierto((v) => !v)}
              className="md:hidden w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center rounded-full bg-surface-container-low hover:bg-surface-container transition-colors touch-manipulation"
              aria-label={menuAbierto ? 'Cerrar menú' : 'Abrir menú'}
              aria-expanded={menuAbierto}
            >
              {menuAbierto
                ? <span className="material-symbols-outlined text-primary text-[20px]"></span>
                : (
                  <span className="flex flex-col items-center gap-[3.5px]">
                    <span className="w-[4px] h-[4px] rounded-full bg-primary block" />
                    <span className="w-[4px] h-[4px] rounded-full bg-primary block" />
                    <span className="w-[4px] h-[4px] rounded-full bg-primary block" />
                  </span>
                )
              }
            </button>
          </div>
        </div>

        {/* Menú móvil desplegable */}
        {menuAbierto && (
          <div className="md:hidden bg-surface/96 backdrop-blur-md border-t border-outline-variant/30 px-4 py-3 flex flex-col gap-1 animate-slide-up">
            {NAV_LINKS.map((item, i) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMenuAbierto(false)}
                className={[
                  'flex items-center gap-3 px-4 py-2.5 rounded-xl font-label-lg transition-colors touch-manipulation text-[13px]',
                  i === 0
                    ? 'bg-primary-container text-on-primary'
                    : 'text-on-surface-variant hover:bg-surface-container-low hover:text-primary',
                ].join(' ')}
              >
                <span className="material-symbols-outlined text-[17px]">
                  {item.icono}
                </span>
                {item.label}
              </a>
            ))}

            {/* Nuestra canción en el menú */}
            <a
              href="https://open.spotify.com/track/6ubUesAyvYV5ktyTlRvfXe?si=yk4HiUUfTXW6vj9KnnqoCg&utm_source=whatsapp"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMenuAbierto(false)}
              className="flex items-center gap-3 px-4 py-2.5 rounded-xl bg-surface-container-low mt-1 hover:bg-secondary-container/30 transition-colors touch-manipulation"
            >
              <div className="w-10 h-10 shrink-0 animate-spin-slow">
                <DiscoVinilo />
              </div>
              <div className="flex flex-col leading-none flex-1">
                <span className="font-label-lg text-on-surface-variant text-[13px]">
                  Nuestra Canción
                </span>
                <span className="font-label-sm text-primary text-[11px] mt-0.5">
                  Amor de Primavera — Conjunto Chaney
                </span>
              </div>
              <span
                className="material-symbols-outlined text-primary text-[20px]"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
              </span>
            </a>
          </div>
        )}
      </header>

      {/* ══════════ CONTENIDO PRINCIPAL ═══════════════════════════ */}
      <main id="inicio" className="w-full pt-14 sm:pt-16 lg:pt-20 bg-surface min-h-screen">
        <div className="flex flex-col w-full overflow-x-hidden">

          <HeroRomantico puntosBesos={puntosBesos} onSumarBeso={sumarBeso} />

          <div id="timeline">
          </div>

          <LineaDeTiempo momentos={momentosFiltrados} puntosBesos={puntosBesos} />

          <div id="carta">
            <CartaAmorFinal
              onEnviarAbrazo={enviarAbrazovirtual}
              toastVisible={toastVisible}
              toastMensaje={toastMensaje}
            />
          </div>
        </div>
      </main>
    </div>
  );
}
