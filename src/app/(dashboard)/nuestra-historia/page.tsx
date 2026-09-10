'use client';

import { useState } from 'react';
import { useNuestraHistoria } from '@/frontend/hooks/useNuestraHistoria';
import { HeroRomantico } from '@/frontend/modules/nuestra_historia/components/HeroRomantico';
import { FiltrosHistoria } from '@/frontend/modules/nuestra_historia/components/FiltrosHistoria';
import { LineaDeTiempo } from '@/frontend/modules/nuestra_historia/components/LineaDeTiempo';
import { CartaAmorFinal } from '@/frontend/modules/nuestra_historia/components/CartaAmorFinal';

const NAV_LINKS = [
  { label: 'Inicio',           href: '#inicio' },
  { label: 'Línea de Tiempo',  href: '#timeline' },
  { label: 'Nuestra Química',  href: '#quimica' },
  { label: 'Carta de Amor',    href: '#carta' },
];

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
    <div className="bg-surface font-body-md text-body-md text-on-surface antialiased selection:bg-secondary-container selection:text-on-secondary-container min-h-screen">

      {/* ══════════════════════════════════════════════════════════
          NAVBAR — fijo, mobile-first con menú hamburguesa
      ══════════════════════════════════════════════════════════ */}
      <header className="fixed top-0 w-full z-50 bg-surface/90 backdrop-blur-md shadow-[0_1px_12px_rgba(108,12,40,0.06)]">
        <div className="h-16 sm:h-20 max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-12 flex items-center justify-between">

          {/* Logo */}
          <a href="#inicio" className="group flex items-center gap-2">
            <span className="font-headline-sm text-[16px] sm:text-headline-sm text-primary tracking-normal">
              Nuestra Historia
            </span>
          </a>

          {/* Badge estado — solo xl */}
          <div className="hidden xl:flex items-center gap-2 bg-surface-container-low px-3 py-1 rounded-full shadow-[0_0_12px_rgba(212,139,151,0.2)]">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            <span className="font-label-sm text-label-sm text-primary">
              2025 • Cada día más enamorado
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
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Canción — oculto en móvil muy pequeño */}
            <div className="hidden sm:flex items-center gap-2 bg-surface-container-low px-3 py-1.5 rounded-full">
              <span className="material-symbols-outlined text-primary text-[16px] sm:text-[18px]"></span>
              <span className="font-label-sm text-label-sm text-on-surface-variant hidden lg:inline text-[11px]">
                Nuestra Canción
              </span>
              <span className="material-symbols-outlined text-on-surface-variant text-[14px] sm:text-[16px] cursor-pointer hover:text-primary transition-colors">
              </span>
            </div>

            {/* Avatar */}
            <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-primary flex items-center justify-center ring-2 ring-secondary-container/40">
              <span className="material-symbols-outlined text-on-primary text-[14px] sm:text-[18px]"></span>
            </div>

            {/* Hamburguesa — solo móvil */}
            <button
              onClick={() => setMenuAbierto((v) => !v)}
              className="md:hidden w-9 h-9 flex items-center justify-center rounded-full bg-surface-container-low hover:bg-surface-container transition-colors touch-manipulation"
              aria-label={menuAbierto ? 'Cerrar menú' : 'Abrir menú'}
              aria-expanded={menuAbierto}
            >
              <span className="material-symbols-outlined text-primary text-[20px]">
                {menuAbierto ? 'close' : 'menu'}
              </span>
            </button>
          </div>
        </div>

        {/* Menú móvil desplegable */}
        {menuAbierto && (
          <div className="md:hidden bg-surface/95 backdrop-blur-md border-t border-outline-variant/30 px-4 py-4 flex flex-col gap-1 animate-slide-up">
            {NAV_LINKS.map((item, i) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMenuAbierto(false)}
                className={[
                  'flex items-center gap-3 px-4 py-3 rounded-xl font-label-lg text-label-lg transition-colors touch-manipulation',
                  i === 0
                    ? 'bg-primary-container text-on-primary'
                    : 'text-on-surface-variant hover:bg-surface-container-low hover:text-primary',
                ].join(' ')}
              >
                <span className="material-symbols-outlined text-[18px]">
                  {['home', 'timeline', 'favorite', 'mail'].at(i)}
                </span>
                {item.label}
              </a>
            ))}

            {/* Canción en menú móvil */}
            <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-surface-container-low mt-1">
              <span className="material-symbols-outlined text-primary text-[18px]">music_note</span>
              <span className="font-label-lg text-label-lg text-on-surface-variant flex-1 text-[13px]">
                Nuestra Canción
              </span>
              <span className="material-symbols-outlined text-on-surface-variant text-[18px] cursor-pointer hover:text-primary">
                play_arrow
              </span>
            </div>
          </div>
        )}
      </header>

      {/* ══════════════════════════════════════════════════════════
          CONTENIDO PRINCIPAL
      ══════════════════════════════════════════════════════════ */}
      <main id="inicio" className="w-full pt-16 sm:pt-20 bg-surface min-h-screen">
        <div className="flex flex-col w-full overflow-x-hidden">

          {/* Hero con stats y polaroid */}
          <HeroRomantico puntosBesos={puntosBesos} onSumarBeso={sumarBeso} />

          {/* Filtros de categoría */}
          <div id="timeline">
            <FiltrosHistoria filtroActivo={filtroActivo} onFiltroChange={setFiltro} />
          </div>

          {/* Línea de tiempo zig-zag */}
          <LineaDeTiempo momentos={momentosFiltrados} puntosBesos={puntosBesos} />

          {/* Carta final + Footer + Toast */}
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
