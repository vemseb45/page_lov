'use client';

interface CartaAmorFinalProps {
  onEnviarAbrazo: () => void;
  toastVisible: boolean;
  toastMensaje: string;
}

export function CartaAmorFinal({
  onEnviarAbrazo,
  toastVisible,
  toastMensaje,
}: CartaAmorFinalProps) {
  return (
    <>
      {/* ── Sección carta ── */}
      <section className="max-w-[900px] mx-auto px-4 sm:px-6 lg:px-12 pb-16 sm:pb-24">
        <div className="relative bg-surface-container-lowest p-6 sm:p-8 md:p-14 rounded-3xl shadow-xl border border-outline-variant/40 overflow-hidden">

          {/* Glow decorativo */}
          <div className="absolute -right-8 -bottom-8 w-36 sm:w-48 h-36 sm:h-48 bg-primary-fixed/20 rounded-full blur-2xl pointer-events-none" />

          {/* Encabezado */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 border-b border-surface-variant pb-5 sm:pb-6 mb-6 sm:mb-8">
            <div className="flex items-center gap-2 sm:gap-3">
              <span
                className="material-symbols-outlined text-primary text-[22px] sm:text-[28px]"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
              </span>
              <span className="font-headline-sm text-[18px] sm:text-headline-sm text-primary leading-snug">
                Mi Carta de Amor
              </span>
            </div>
            <span className="font-label-sm text-label-sm text-secondary uppercase tracking-widest font-semibold text-[10px] sm:text-[11px]">
              Septiembre 2026
            </span>
          </div>

          {/* Cuerpo */}
          <div className="space-y-4 sm:space-y-5 text-on-surface-variant leading-relaxed">
            <p className="font-headline-md text-[20px] sm:text-headline-md text-primary italic">
              Mi Noviecita:
            </p>

            <p className="font-body-md text-[15px] sm:text-body-lg leading-relaxed">
              No me enamoré de ti por casualidad ni por un impulso pasajero. Me enamoré de la mujer
              que sabe competir riéndose en una cancha de básquet, de la que me reta en cualquier
              cosa, de la niña consentida que llena mi vida de ternura, y de esa mujer que al
              principio veía tan seria pero que terminó convirtiéndose en mi hogar.
            </p>

            <p className="font-body-md text-[15px] sm:text-body-lg leading-relaxed">
              Me enamoré de ti por tu risa, por tus ojos y porque todo de ti me enamora más cada
              día. Al hacer esto no puedo evitar pensar que yo no suelo hacer esta clase de cosas;
              de hecho, es la primera vez que me pongo a desarrollar una página web como esta, pero
              por ti nació el deseo de crear algo tan especial como lo que sentimos.
            </p>

            <p className="font-body-md text-[15px] sm:text-body-lg leading-relaxed">
              Prometo seguir acumulando cada uno de ese millón de besos, cuidarte en cada momento,
              seguir siendo tu cómplice incondicional y elegirte todos los días del mundo.
            </p>
          </div>

          {/* Pie: firma + botón */}
          <div className="mt-8 sm:mt-10 pt-5 sm:pt-6 border-t border-surface-variant flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="font-headline-sm text-[20px] sm:text-headline-sm text-primary italic block">
                Siempre tuyo ♥️
              </span>
              <span className="font-label-sm text-label-sm text-on-surface-variant text-[11px] sm:text-[11px]">
                Para Majo, el amor más lindo de mi vida.
              </span>
            </div>

            <button
              onClick={onEnviarAbrazo}
              className="w-full sm:w-auto px-5 sm:px-6 py-3 bg-primary text-on-primary rounded-full font-label-lg text-label-lg shadow-[0_0_20px_rgba(212,139,151,0.35)] hover:bg-primary-container hover:text-on-primary-container transition-all flex items-center justify-center gap-2 active:scale-95 touch-manipulation"
            >
              <span className="material-symbols-outlined text-[18px] sm:text-[20px]"></span>
              <span>Enviar abrazo virtual a Majo ✨</span>
            </button>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="w-full bg-surface-container-low py-8 sm:py-12">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-12 flex flex-col items-center text-center gap-4 sm:gap-6">
          <div className="flex items-center gap-3">
            <span className="h-px w-12 sm:w-16 bg-surface-variant block" />
            <span className="material-symbols-outlined text-primary text-[18px] sm:text-[20px]"></span>
            <span className="h-px w-12 sm:w-16 bg-surface-variant block" />
          </div>

          <p className="font-headline-sm text-[16px] sm:text-headline-sm italic text-primary max-w-xs sm:max-w-xl leading-snug">
            "Encontré en tu mirada el refugio eterno donde siempre quiero quedarme."
          </p>

          <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
            {['Inicio', 'Línea de Tiempo', 'Nuestra Química', 'Carta de Amor'].map((link) => (
              <a
                key={link}
                href="#"
                className="font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors text-[11px] sm:text-[12px]"
              >
                {link}
              </a>
            ))}
          </div>

          <p className="font-body-sm text-body-sm text-on-surface-variant text-[12px] sm:text-[14px]">
            • Dedicado con amor •
          </p>
        </div>
      </footer>

      {/* ── Toast flotante ── */}
      <div
        role="status"
        aria-live="polite"
        className={[
          /* Base: ocupa casi todo el ancho en móvil, auto en desktop */
          'fixed bottom-5 sm:bottom-8 left-1/2 -translate-x-1/2',
          'w-[calc(100%-2rem)] sm:w-auto max-w-sm sm:max-w-none',
          'bg-inverse-surface text-inverse-on-surface',
          'px-5 py-3.5 rounded-2xl sm:rounded-full shadow-2xl z-50',
          'flex items-center gap-3',
          'transition-all duration-300',
          toastVisible
            ? 'opacity-100 translate-y-0 pointer-events-auto'
            : 'opacity-0 translate-y-4 pointer-events-none',
        ].join(' ')}
      >
        <span
          className="material-symbols-outlined text-secondary-container text-[20px] sm:text-[22px] shrink-0"
          style={{ fontVariationSettings: "'FILL' 1" }}
        >
        </span>
        <span className="font-label-md text-label-md text-[11px] sm:text-[12px] leading-snug">
          {toastMensaje}
        </span>
      </div>
    </>
  );
}
