import { GraduationCap, Rocket } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="relative z-10 w-full px-4 py-24 md:px-8">
      <div className="anime-reveal mb-20 text-center">
        <h2 className="typewriter text-glow-cyan inline-block pb-4 text-5xl font-bold md:text-6xl">Sobre mí</h2>
        <div className="gothic-divider mt-3" />
      </div>

      <div className="grid grid-cols-1 gap-10 lg:grid-cols-3">
        <div className="glass-panel glass-panel-hover anime-reveal tilt-l p-8 lg:col-span-2">
          <div className="mb-6 flex items-center gap-4">
            <div className="draw-on-view flex h-14 w-14 items-center justify-center rounded-full border-2 border-text-main text-magenta">
              <Rocket className="h-6 w-6" />
            </div>
            <h3 className="text-3xl font-semibold text-text-main">Perfil Profesional</h3>
          </div>

          <div className="space-y-4 text-base leading-relaxed text-text-main md:text-lg">
            <p>
              Soy desarrollador frontend junior. Me formé en diseño y desarrollo web y me gusta que una interfaz se vea cuidada, se entienda sin explicación y funcione bien en cualquier pantalla.
            </p>
            <p>
              Armé proyectos completos, desde la interfaz hasta la API y la base de datos, y eso me ayudó a entender cómo se conecta cada parte. Mi foco y lo que quiero seguir profundizando es React y el desarrollo frontend.
            </p>
          </div>
        </div>

        <div className="glass-panel glass-panel-hover anime-reveal alt tilt-r relative overflow-hidden p-8">
          <h3 className="mb-6 border-b-2 border-text-main/40 pb-4 text-2xl font-semibold text-text-main">Idiomas</h3>
          <ul className="relative z-10 space-y-4">
            <li className="flex items-baseline justify-between gap-3">
              <span className="text-lg font-semibold text-text-main">Español</span>
              <span className="font-syne text-xl tracking-wider text-cyan">Nativo</span>
            </li>
            <li className="flex items-baseline justify-between gap-3">
              <span className="text-lg font-semibold text-text-main">Inglés</span>
              <span className="font-syne text-xl tracking-wider text-magenta">B2 · Avanzado</span>
            </li>
          </ul>
        </div>

        <div className="glass-panel glass-panel-hover anime-reveal tilt-md p-8 lg:col-span-3">
          <h3 className="mb-8 flex items-center gap-3 text-3xl font-semibold text-text-main">
            <span className="draw-on-view flex h-10 w-10 items-center justify-center rounded-full border-2 border-text-main text-cyan">
              <GraduationCap className="h-5 w-5" />
            </span>
            Educación
          </h3>

          <div className="relative grid gap-8 md:grid-cols-2">
            <div className="absolute bottom-4 left-1/2 top-4 hidden w-px -translate-x-1/2 bg-text-main/30 md:block" />

            <div className="group relative pl-6">
              <div className="absolute -left-1 top-2 h-3 w-3 rounded-full border-2 border-text-main bg-magenta" />
              <h4 className="mb-1 text-2xl font-bold text-text-main">Diseño y Desarrollo Web</h4>
              <p className="mb-3 font-syne text-lg tracking-wide text-magenta">Escuela Da Vinci · Mar 2024 - Dic 2025</p>
              <p className="text-base text-text-main">Formación orientada a interfaces, arquitectura web escalable, identidad visual y experiencia de usuario aplicada a productos reales.</p>
            </div>

            <div className="group relative pl-6">
              <div className="absolute -left-1 top-2 h-3 w-3 rounded-full border-2 border-text-main bg-cyan md:ml-[-1.5rem]" />
              <h4 className="mb-1 text-2xl font-bold text-text-main">Bachiller en Computación</h4>
              <p className="mb-3 font-syne text-lg tracking-wide text-cyan">Instituto Mater Dolorosa · Graduado</p>
              <p className="text-base text-text-main">Base sólida en hardware, software, algoritmos y pensamiento lógico aplicado a entornos técnicos.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
