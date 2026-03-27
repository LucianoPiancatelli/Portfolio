export default function Hero() {
  return (
    <section id="hero" className="hero-intro relative z-10 flex min-h-screen flex-col items-center justify-center p-6 text-center md:p-12">
      <div className="hero-card glass-panel glass-panel-hover relative w-full overflow-hidden p-10 md:p-20">
        <div className="absolute -left-32 -top-32 h-64 w-64 rounded-full bg-magenta opacity-20 blur-[100px] mix-blend-screen" />
        <div className="absolute -bottom-32 -right-32 h-80 w-80 rounded-full bg-cyan opacity-20 blur-[120px] mix-blend-screen" />

        <div className="relative z-10">
          <p className="hero-line mb-4 font-syne text-sm font-semibold uppercase tracking-[0.35em] text-cyan/80">
            Frontend Developer · UI Builder
          </p>

          <h1 className="hero-line text-glow-magenta mb-6 text-5xl font-bold leading-tight tracking-tight md:text-7xl lg:text-8xl">
            <span className="block bg-gradient-to-r from-magenta to-cyan bg-clip-text text-transparent">Luciano N</span>
            <span className="block">Piancatelli</span>
          </h1>

          <h2 className="hero-line mb-8 text-2xl font-light text-text-muted md:text-4xl">
            Desarrollo interfaces con presencia visual, criterio de producto y foco en conversión.
          </h2>

          <p className="hero-line mx-auto mb-12 max-w-2xl text-lg text-text-muted md:text-xl">
            Portfolio orientado a mostrar trabajo real: sitios veloces, experiencias memorables y soluciones que combinan diseño, frontend y claridad de implementación.
          </p>

          <div className="hero-line flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a href="#projects" className="group relative inline-block w-full cursor-pointer overflow-hidden rounded-full border border-border-glow bg-obsidian px-8 py-4 font-syne text-lg font-semibold shadow-[0_0_20px_rgba(255,0,85,0.2)] transition-all duration-500 hover:shadow-[0_0_30px_rgba(0,244,255,0.4)] sm:w-auto">
              <span className="relative z-10 transition-colors duration-300 group-hover:text-obsidian">Ver Proyectos</span>
              <div className="absolute inset-0 h-full w-full origin-left scale-x-0 bg-gradient-to-r from-magenta to-cyan transition-transform duration-500 group-hover:scale-x-100" />
            </a>

            <a
              href="/cv-luciano-piancatelli.pdf"
              target="_blank"
              rel="noreferrer"
              className="group relative inline-flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-full border border-border-glass bg-obsidian-light/40 px-8 py-4 font-syne text-lg font-semibold transition-all duration-500 hover:border-cyan/60 hover:shadow-[0_0_30px_rgba(0,244,255,0.18)] sm:w-auto"
            >
              <span className="relative z-10 text-white/90 transition-colors duration-300 group-hover:text-white">Ver CV</span>
              <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-cyan/10 to-magenta/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
