# 💌 Nuestra Historia — Carta de Amor para Majo

Carta de amor interactiva dedicada a **María José (Majo)**, construida con Next.js 15, React 19, TypeScript y Tailwind CSS. Documenta nuestra historia desde junio 2025 con una línea de tiempo romántica, métricas de amor y una carta final interactiva.

---

## ✨ Características

- **Mobile-first** — diseñado para verse perfecto en teléfonos desde 320px
- **Línea de tiempo zig-zag** con 14 momentos especiales (junio 2025 → 2026)
- **Filtros por categoría**: Risas & Juegos · Confianza & Intimidad · Música & Anécdotas
- **Contador de besos interactivo** — inicia en 1,000,000 y suma de a 1
- **Abrazo virtual** con toast flotante animado
- **Navbar con menú hamburguesa** en móvil
- Paleta de colores vinotinto/crema con tipografías Playfair Display + Plus Jakarta Sans
- Íconos Material Symbols Outlined

---

## 🚀 Instalación y uso

### Requisitos

- [Node.js](https://nodejs.org/) v18 o superior
- npm v9+ (viene con Node.js)

### Pasos

```bash
# 1. Entra a la carpeta del proyecto
cd personal

# 2. Instala las dependencias
npm install

# 3. Inicia el servidor de desarrollo
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.
Serás redirigido automáticamente a `/nuestra-historia`.

### Compilar para producción

```bash
npm run build
npm run start
```

---

## 📁 Estructura del proyecto

```
personal/
├── package.json
├── tsconfig.json
├── next.config.ts
├── tailwind.config.ts
├── postcss.config.js
└── src/
    ├── app/
    │   ├── layout.tsx                          ← Root layout con fuentes
    │   ├── globals.css                         ← Estilos base + Material Symbols
    │   ├── page.tsx                            ← Redirect → /nuestra-historia
    │   └── (dashboard)/
    │       └── nuestra-historia/
    │           └── page.tsx                    ← Página principal ('use client')
    │
    └── frontend/
        ├── types/
        │   └── majoTypes.ts                    ← Interfaces TypeScript
        ├── components/conts/
        │   └── majoStoryData.ts                ← 14 momentos + métricas + filtros
        ├── hooks/
        │   └── useNuestraHistoria.ts           ← Estado: filtros, besos, toast
        └── modules/nuestra_historia/
            ├── index.ts                        ← Barrel export
            └── components/
                ├── HeroRomantico.tsx           ← Header con polaroid y métricas
                ├── FiltrosHistoria.tsx         ← Botones de filtrado
                ├── LineaDeTiempo.tsx           ← Timeline zig-zag (5 tipos de card)
                └── CartaAmorFinal.tsx          ← Carta + footer + toast
```

---

## 📱 Compatibilidad móvil

| Dispositivo       | Ancho   | Estado |
|-------------------|---------|--------|
| iPhone SE         | 375px   | ✅     |
| iPhone 14         | 390px   | ✅     |
| Samsung Galaxy S  | 360px   | ✅     |
| iPad mini         | 768px   | ✅     |
| Desktop           | 1200px+ | ✅     |

---

## 🎨 Paleta de colores

| Token            | Hex       | Uso                     |
|------------------|-----------|-------------------------|
| `primary`        | `#6c0c28` | Vinotinto principal     |
| `secondary`      | `#8a4c57` | Rosado secundario       |
| `tertiary`       | `#735c00` | Dorado/ámbar            |
| `surface`        | `#fdf9f3` | Fondo crema             |
| `primary-container` | `#8b263e` | Fondo tarjetas featured |

---

*Dedicado con amor infinito para Majo • Hecho a mano para siempre* 💌
