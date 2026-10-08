import Lanyard from './components/Lanyard/Lanyard.jsx';

export default function App() {
  return (
    <main className="page">
      <header className="header"><span className="eyebrow">REACT BITS / INTERACTIVE STUDY 001</span><span className="status"><span aria-hidden="true" className="dot" /> LIVE DEMO</span></header>
      <section className="content" aria-labelledby="title">
        <div className="intro"><p className="section-label">MOTION EXPERIMENT</p><h1 id="title">A little<br /><em>identity.</em></h1><p>Grab the card and move it around. Click or tap to flip it over. A tiny tactile interaction, made with React Bits.</p><a href="https://reactbits.dev/components/lanyard" target="_blank" rel="noreferrer">Explore original component ↗</a></div>
        <div className="stage"><div className="stage-hint">DRAG TO PLAY / TAP TO FLIP</div><div style={{ width: '100%', height: '600px' }}><Lanyard frontImage="/card-front.svg" backImage="/card-back.svg" strapImage="/band.svg" /></div></div>
      </section>
      <footer className="footer"><span>JS + CSS / THREE.JS</span><span>React Bits Lanyard • Demo assets are replaceable</span></footer>
    </main>
  );
}
