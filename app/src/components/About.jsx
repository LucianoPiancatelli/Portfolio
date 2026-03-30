import { GraduationCap, Rocket } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="relative z-10 w-full px-4 py-24 md:px-8">
      <div className="anime-reveal mb-20 text-center">
        <h2 className="text-glow-cyan inline-block pb-4 text-5xl font-bold">Sobre mí</h2>
        <div className="mx-auto mt-2 h-1 w-24 rounded-full bg-gradient-to-r from-cyan to-magenta" />
      </div>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
        <div className="glass-panel anime-reveal p-8 transition-all duration-500 hover:-translate-y-2 hover:border-magenta/40 hover:shadow-[0_15px_40px_rgba(255,0,85,0.18)] lg:col-span-2">
          <div className="mb-6 flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-full border border-magenta/50 bg-magenta/20">
              <Rocket className="h-5 w-5 text-magenta" />
            </div>
            <h3 className="text-2xl font-semibold text-white">Perfil Profesional</h3>
          </div>

          <p className="text-lg leading-relaxed text-text-muted">
            Soy un desarrollador full stack enfocado en construir productos digitales sólidos, claros y visualmente cuidados. Trabajo desde la experiencia de usuario y la identidad visual hasta la lógica de negocio, integraciones y datos para transformar ideas en soluciones listas para crecer.
          </p>
        </div>

        <div className="glass-panel anime-reveal relative overflow-hidden p-8 transition-all duration-500 hover:-translate-y-2 hover:border-cyan/40 hover:shadow-[0_15px_40px_rgba(0,244,255,0.15)]">
          <div className="absolute -bottom-10 -right-10 h-32 w-32 rounded-full bg-cyan/20 blur-3xl" />

          <h3 className="mb-6 border-b border-border-glass pb-4 text-2xl font-semibold text-white">Idiomas</h3>
          <div className="relative z-10 space-y-6">
            <div>
              <div className="mb-2 flex items-end justify-between">
                <span className="font-semibold text-white">Español</span>
                <span className="font-syne text-sm tracking-wider text-cyan">Nativo</span>
              </div>
              <div className="h-2 w-full overflow-hidden rounded-full border border-border-glass bg-obsidian-light">
                <div className="h-full w-full bg-gradient-to-r from-cyan to-blue-500" />
              </div>
            </div>

            <div>
              <div className="mb-2 flex items-end justify-between">
                <span className="font-semibold text-white">Inglés</span>
                <span className="font-syne text-sm tracking-wider text-magenta">B2 / Avanzado</span>
              </div>
              <div className="h-2 w-full overflow-hidden rounded-full border border-border-glass bg-obsidian-light">
                <div className="relative h-full w-[75%] overflow-hidden bg-gradient-to-r from-magenta to-pink-500">
                  <div className="about-shimmer absolute inset-0 bg-white/20" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="glass-panel anime-reveal p-8 transition-all duration-500 hover:-translate-y-2 hover:border-white/20 lg:col-span-3">
          <h3 className="mb-8 flex items-center gap-3 text-2xl font-semibold text-white">
            <span className="flex h-8 w-8 items-center justify-center rounded-full border border-cyan/50 bg-cyan/20 text-cyan">
              <GraduationCap className="h-4 w-4" />
            </span>
            Educación
          </h3>

          <div className="relative grid gap-8 md:grid-cols-2">
            <div className="absolute bottom-4 left-1/2 top-4 hidden w-px -translate-x-1/2 bg-border-glass md:block" />

            <div className="group relative">
              <div className="absolute -left-4 top-2 h-2 w-2 rounded-full bg-magenta shadow-[0_0_10px_rgba(255,0,85,1)] transition-transform group-hover:scale-150" />
              <h4 className="mb-1 text-xl font-bold text-white">Diseño y Desarrollo Web</h4>
              <p className="mb-3 font-syne text-sm tracking-wider text-magenta">Escuela Da Vinci · Mar 2024 - Dic 2025</p>
              <p className="font-light text-text-muted">Formación orientada a interfaces, arquitectura web escalable, identidad visual y experiencia de usuario aplicada a productos reales.</p>
            </div>

            <div className="group relative">
              <div className="absolute -left-4 top-2 h-2 w-2 rounded-full bg-cyan shadow-[0_0_10px_rgba(0,244,255,1)] transition-transform group-hover:scale-150 md:ml-[-1.5rem]" />
              <h4 className="mb-1 text-xl font-bold text-white">Bachiller en Computación</h4>
              <p className="mb-3 font-syne text-sm tracking-wider text-cyan">Instituto Mater Dolorosa · Graduado</p>
              <p className="font-light text-text-muted">Base sólida en hardware, software, algoritmos y pensamiento lógico aplicado a entornos técnicos.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
