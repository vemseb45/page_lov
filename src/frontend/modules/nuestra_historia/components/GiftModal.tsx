'use client';

import { useState, useEffect, useRef } from 'react';

/* ─── Contraseña quemada en código ─── */
const PASSWORD_CORRECTA = '17-12-2025';

/* ─── Estados del modal ─── */
type EstadoModal = 'gift' | 'password' | 'opening' | 'flash' | 'done';

interface GiftModalProps {
  onUnlock: () => void;
}

export function GiftModal({ onUnlock }: GiftModalProps) {
  const [estado, setEstado] = useState<EstadoModal>('gift');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const [shake, setShake] = useState(false);
  const [mounted, setMounted] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  /* Evita hydration mismatch */
  useEffect(() => {
    setMounted(true);
  }, []);

  /* Enfocar input al mostrar el panel de contraseña */
  useEffect(() => {
    if (estado === 'password') {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [estado]);

  function handleGiftClick() {
    setEstado('password');
  }

  /**
   * Formatea la entrada del usuario al patrón DD-MM-AAAA:
   * - Solo acepta dígitos (ignora cualquier otra tecla)
   * - Inserta guiones automáticamente después del día y del mes
   * - Avanza al siguiente segmento automáticamente al completar cada parte
   */
  function handlePasswordChange(e: React.ChangeEvent<HTMLInputElement>) {
    // Extraer solo los dígitos del valor actual
    const soloDigitos = e.target.value.replace(/\D/g, '');

    // Construir el string formateado con guiones
    let formateado = '';
    if (soloDigitos.length <= 2) {
      formateado = soloDigitos;
    } else if (soloDigitos.length <= 4) {
      formateado = soloDigitos.slice(0, 2) + '-' + soloDigitos.slice(2);
    } else {
      formateado = soloDigitos.slice(0, 2) + '-' + soloDigitos.slice(2, 4) + '-' + soloDigitos.slice(4, 8);
    }

    setPassword(formateado);
    setError(false);
  }

  /** Bloquea cualquier tecla que no sea dígito, backspace, delete, tab o flechas */
  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    const allowed = [
      'Backspace', 'Delete', 'Tab', 'ArrowLeft', 'ArrowRight',
      'Home', 'End', 'Enter',
    ];
    const isDigit = /^\d$/.test(e.key);
    if (!isDigit && !allowed.includes(e.key)) {
      e.preventDefault();
    }
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (password === PASSWORD_CORRECTA) {
      setError(false);
      setEstado('opening');
      /* Después de la animación de apertura → flash */
      setTimeout(() => setEstado('flash'), 1800);
      /* Después del flash → ocultar modal y mostrar contenido */
      setTimeout(() => {
        setEstado('done');
        onUnlock();
      }, 2600);
    } else {
      setError(true);
      setShake(true);
      setPassword('');
      setTimeout(() => setShake(false), 600);
    }
  }

  if (!mounted || estado === 'done') return null;

  return (
    <>
      {/* ── Overlay con fondo difuminado ── */}
      <div
        className={[
          'fixed inset-0 z-[9999] flex items-center justify-center',
          'bg-black/60 backdrop-blur-md',
          estado === 'flash' ? 'gift-flash-bg' : '',
          estado === 'opening' || estado === 'flash' ? '' : 'animate-fade-in',
        ].join(' ')}
        style={{ touchAction: 'none' }}
      >
        {/* ── Flash explosion overlay ── */}
        {estado === 'flash' && (
          <div className="absolute inset-0 gift-flash-explosion pointer-events-none" />
        )}

        {/* ── Panel de contraseña ── */}
        {estado === 'password' && (
          <div
            className={[
              'relative z-10 flex flex-col items-center gap-5 px-6 py-8 sm:px-10 sm:py-10',
              'bg-surface rounded-3xl shadow-2xl w-[90vw] max-w-sm animate-slide-up',
              shake ? 'gift-shake' : '',
            ].join(' ')}
          >
            {/* Icono lazo */}
            <div className="w-16 h-16 rounded-full bg-primary-container flex items-center justify-center shadow-lg">
              <span
                className="material-symbols-outlined text-on-primary text-[32px]"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                
              </span>
            </div>

            <div className="text-center">
              <h2
                className="font-headline-sm text-headline-sm text-primary"
                style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}
              >
                ¿Cuál es nuestra fecha especial?
              </h2>
              <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                Ingresa la contraseña para abrir tu regalo 🎁
              </p>
            </div>

            <form onSubmit={handleSubmit} className="w-full flex flex-col gap-3">
              <div className="relative">
                <input
                  ref={inputRef}
                  type="text"
                  inputMode="numeric"
                  value={password}
                  onChange={handlePasswordChange}
                  onKeyDown={handleKeyDown}
                  placeholder="DD-MM-AAAA"
                  maxLength={10}
                  className={[
                    'w-full px-4 py-3 rounded-xl border-2 bg-surface-container-low',
                    'font-body-md text-body-md text-on-surface text-center tracking-[0.2em]',
                    'outline-none transition-all placeholder:text-on-surface-variant/50',
                    error
                      ? 'border-error focus:border-error'
                      : 'border-outline-variant focus:border-primary',
                  ].join(' ')}
                  autoComplete="off"
                />
                {error && (
                  <p className="text-error font-label-sm text-label-sm text-center mt-1.5 animate-fade-in">
                    Fecha incorrecta. ¡Piénsalo bien! 💭
                  </p>
                )}
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-xl bg-primary text-on-primary font-label-lg text-label-lg
                           shadow-[0_4px_20px_rgba(108,12,40,0.35)] hover:bg-primary-container
                           active:scale-95 transition-all"
              >
                Abrir regalo 🎁
              </button>
            </form>

            {/* Botón volver */}
            <button
              onClick={() => { setEstado('gift'); setPassword(''); setError(false); }}
              className="text-on-surface-variant font-label-sm text-label-sm hover:text-primary transition-colors"
            >
              ← Volver al regalo
            </button>
          </div>
        )}

        {/* ── Regalo animado (estado gift u opening) ── */}
        {(estado === 'gift' || estado === 'opening') && (
          <div className="relative z-10 flex flex-col items-center gap-6 select-none">

            {/* Texto encima */}
            {estado === 'gift' && (
              <div className="text-center animate-slide-up px-4">
                <p
                  className="font-headline-sm text-headline-sm text-white drop-shadow-lg"
                  style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}
                >
                  Hay algo especial para ti ✨
                </p>
                <p className="font-body-sm text-body-sm text-white/80 mt-1 drop-shadow">
                  Toca el regalo para abrirlo
                </p>
              </div>
            )}

            {/* Caja del regalo */}
            <button
              onClick={estado === 'gift' ? handleGiftClick : undefined}
              disabled={estado === 'opening'}
              className={[
                'relative focus:outline-none',
                estado === 'gift' ? 'cursor-pointer' : 'cursor-default',
              ].join(' ')}
              aria-label="Abrir regalo"
            >
              {/* Contenedor con animación de sacudida cuando está en espera */}
              <div
                className={[
                  'relative',
                  estado === 'gift' ? 'gift-wiggle' : '',
                  estado === 'opening' ? 'gift-open-anim' : '',
                ].join(' ')}
              >
                <GiftSVG opening={estado === 'opening'} />
              </div>

              {/* Partículas que salen cuando se abre */}
              {estado === 'opening' && <GiftParticles />}
            </button>

            {/* Indicador de clic */}
            {estado === 'gift' && (
              <div className="flex items-center gap-2 animate-bounce">
                <span className="w-2 h-2 rounded-full bg-white/70" />
                <span className="w-2 h-2 rounded-full bg-white/50" />
                <span className="w-2 h-2 rounded-full bg-white/70" />
              </div>
            )}
          </div>
        )}
      </div>
    </>
  );
}

/* ─── SVG del regalo ─────────────────────────────────────────────── */
function GiftSVG({ opening }: { opening: boolean }) {
  return (
    <svg
      viewBox="0 0 200 220"
      xmlns="http://www.w3.org/2000/svg"
      className="w-48 h-52 sm:w-64 sm:h-72 md:w-72 md:h-80 drop-shadow-2xl"
      aria-hidden
    >
      {/* ── Sombra del regalo ── */}
      <ellipse cx="100" cy="215" rx="70" ry="8" fill="rgba(0,0,0,0.25)" />

      {/* ── Cuerpo de la caja ── */}
      <rect x="20" y="90" width="160" height="120" rx="8" ry="8" fill="#8b263e" />
      {/* Franja vertical del lazo */}
      <rect x="88" y="90" width="24" height="120" fill="#a83050" />
      {/* Franja horizontal del lazo */}
      <rect x="20" y="140" width="160" height="24" fill="#a83050" />
      {/* Brillo lateral */}
      <rect x="20" y="90" width="160" height="14" rx="4" fill="#c4405a" />

      {/* ── Tapa de la caja ── */}
      <rect
        x="12"
        y="70"
        width="176"
        height="30"
        rx="6"
        fill="#6c0c28"
        className={opening ? 'gift-lid-open' : ''}
        style={{ transformOrigin: '100px 70px' }}
      />
      {/* Franja de la tapa */}
      <rect
        x="88"
        y="70"
        width="24"
        height="30"
        fill="#8b263e"
        className={opening ? 'gift-lid-open' : ''}
        style={{ transformOrigin: '100px 70px' }}
      />

      {/* ── Lazo: arco izquierdo ── */}
      <path
        d="M100 70 C70 20, 20 10, 30 45 C38 68, 85 68, 100 70"
        fill="#e8405e"
        className={opening ? 'gift-bow-left' : ''}
        style={{ transformOrigin: '100px 70px' }}
      />
      {/* ── Lazo: arco derecho ── */}
      <path
        d="M100 70 C130 20, 180 10, 170 45 C162 68, 115 68, 100 70"
        fill="#e8405e"
        className={opening ? 'gift-bow-right' : ''}
        style={{ transformOrigin: '100px 70px' }}
      />
      {/* Nudo central del lazo */}
      <ellipse cx="100" cy="70" rx="12" ry="9" fill="#ff6b87" />
      <ellipse cx="100" cy="70" rx="6" ry="5" fill="#ffa3b0" />

      {/* ── Destellos / brillos ── */}
      <circle cx="45" cy="110" r="3" fill="rgba(255,255,255,0.3)" />
      <circle cx="155" cy="145" r="2" fill="rgba(255,255,255,0.25)" />
      <circle cx="60" cy="185" r="2.5" fill="rgba(255,255,255,0.2)" />
    </svg>
  );
}

/* ─── Partículas decorativas al abrir ────────────────────────────── */
function GiftParticles() {
  const particles = [
    { emoji: '✨', style: { top: '-20px', left: '10%',  animationDelay: '0ms',   animationDuration: '900ms'  } },
    { emoji: '💖', style: { top: '-30px', left: '30%',  animationDelay: '100ms', animationDuration: '1000ms' } },
    { emoji: '🌸', style: { top: '-10px', left: '55%',  animationDelay: '200ms', animationDuration: '950ms'  } },
    { emoji: '✨', style: { top: '-25px', left: '75%',  animationDelay: '50ms',  animationDuration: '1050ms' } },
    { emoji: '💕', style: { top: '-15px', left: '90%',  animationDelay: '150ms', animationDuration: '880ms'  } },
    { emoji: '⭐', style: { top: '20px',  left: '-5%',  animationDelay: '80ms',  animationDuration: '920ms'  } },
    { emoji: '💫', style: { top: '10px',  left: '105%', animationDelay: '180ms', animationDuration: '1000ms' } },
  ];

  return (
    <>
      {particles.map((p, i) => (
        <span
          key={i}
          className="absolute text-xl pointer-events-none gift-particle"
          style={p.style as React.CSSProperties}
        >
          {p.emoji}
        </span>
      ))}
    </>
  );
}
