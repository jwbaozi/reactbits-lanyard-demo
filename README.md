# React Bits Lanyard Demo

A standalone Vite + React (JavaScript / plain CSS) demonstration of the official [React Bits Lanyard](https://reactbits.dev/components/lanyard) 3D interaction.

## Run locally

```bash
npm install
npm run dev
```

Open the local URL printed by Vite. Production build: `npm run build`.

## Implementation

- **Original source:** official [Lanyard-JS-CSS registry](https://reactbits.dev/r/Lanyard-JS-CSS.json), mirrored in [React Bits GitHub](https://github.com/DavidHDev/react-bits/blob/main/public/r/Lanyard-JS-CSS.json).
- **Component:** `src/components/Lanyard/Lanyard.jsx` and `Lanyard.css` (unmodified registry source).
- **Dependencies:** React, React DOM, Three.js (`three@^0.180.0` per registry), Vite and React plugin.
- **Demo:** `src/App.jsx`. Route: `/` (a standalone repository).

## Customize the card

Replace `public/card-front.svg`, `public/card-back.svg`, and `public/band.svg` with your preferred image assets. They are supplied as SVG demo art so this repository renders immediately. For the exact PNG configuration, add `public/card-front.png`, `public/card-back.png`, and `public/band.png` and change the props in `src/App.jsx` to:

```jsx
<Lanyard frontImage="/card-front.png" backImage="/card-back.png" strapImage="/band.png" />
```

The component uses WebGL; run it in a browser with WebGL support. Do not open `index.html` directly from the filesystem.
