export default function Hero() {
  return (
    <section id="hero" className="hero-intro relative z-10 flex min-h-screen flex-col items-center justify-center p-6 text-center md:p-12">
      <div className="hero-card glass-panel glass-panel-hover tilt-md relative w-full overflow-hidden p-10 md:p-20">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-50"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='32' height='32'><path d='M0 0H32M0 32H32M0 0V32M32 0V32' fill='none' stroke='rgba(44,44,44,0.07)' stroke-width='1'/></svg>\")",
          }}
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-6 top-6 h-20 w-28 rotate-6"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 110 80'><path d='M5 40 C 25 10, 60 65, 105 30' fill='none' stroke='%23a8423a' stroke-width='2.4' stroke-linecap='round'/><path d='M95 22 L105 30 L95 38' fill='none' stroke='%23a8423a' stroke-width='2.4' stroke-linecap='round' stroke-linejoin='round'/></svg>\")",
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'contain',
          }}
        />

        <div className="relative z-10">
          <p className="hero-line mb-4 font-syne text-base font-semibold tracking-[0.18em] text-cyan md:text-lg">
            Full Stack Developer · Product Builder
          </p>

          <div className="hero-line gothic-divider mb-8 mt-2 w-48" />

          <h1 className="hero-line text-glow-magenta mb-6 text-6xl font-bold leading-tight md:text-8xl lg:text-9xl">
            <span className="typewriter block bg-gradient-to-r from-magenta via-magenta to-cyan bg-clip-text text-transparent">Luciano </span>
            <span className="typewriter block">Piancatelli</span>
          </h1>

          <h2 className="typewriter hero-line mb-8 text-2xl font-light text-text-main md:text-4xl">
            Desarrollo productos digitales end to end con foco en experiencia, negocio y conversión.
          </h2>

          <p className="typewriter hero-line mx-auto mb-12 max-w-2xl text-lg text-text-main md:text-xl">
            Portfolio orientado a mostrar trabajo real: soluciones full stack que integran diseño, frontend, backend y una implementación clara para llevar ideas a producción.
          </p>

          <div className="hero-line flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="#projects"
              className="sketch-btn sketch-btn-accent inline-block w-full px-8 py-3 text-xl sm:w-auto"
            >
              <span className="relative z-10">Ver Proyectos</span>
            </a>

            <a
              href="/cv-luciano-piancatelli.pdf"
              target="_blank"
              rel="noreferrer"
              className="sketch-btn inline-flex w-full items-center justify-center px-8 py-3 text-xl sm:w-auto"
            >
              <span className="relative z-10">Ver CV</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
