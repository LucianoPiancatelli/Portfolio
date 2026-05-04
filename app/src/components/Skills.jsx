import { BarChart3, Code2, Database, Image, Layout, Palette, PenTool, Search, Server, Smartphone, Sparkles } from 'lucide-react';
import { BsBootstrap } from 'react-icons/bs';
import { FaHtml5, FaJs, FaWordpress } from 'react-icons/fa';
import { SiTailwindcss, SiFigma } from 'react-icons/si';
import { DiPhotoshop, DiIllustrator } from 'react-icons/di';

export default function Skills() {
  const skills = [
    { name: 'HTML5', category: 'Estructura', icon: <FaHtml5 className="h-8 w-8 fill-current stroke-none" />, color: 'text-magenta', noDrawFill: true },
    { name: 'CSS / Tailwind', category: 'Estilos', icon: <SiTailwindcss className="h-8 w-8 fill-current stroke-none" />, color: 'text-cyan', noDrawFill: true },
    { name: 'Bootstrap', category: 'Estilos', icon: <BsBootstrap className="h-8 w-8" />, color: 'text-magenta', noDrawFill: true },
    { name: 'JavaScript', category: 'Interacción', icon: <FaJs className="h-8 w-8 fill-current stroke-none" />, color: 'text-cyan', noDrawFill: true },
    { name: 'React / Vue', category: 'Frontend moderno', icon: <Code2 className="h-8 w-8" />, color: 'text-magenta' },
    { name: 'PHP / Laravel', category: 'Backend', icon: <Server className="h-8 w-8" />, color: 'text-cyan' },
    { name: 'MySQL', category: 'Bases de datos', icon: <Database className="h-8 w-8" />, color: 'text-magenta' },
    { name: 'WordPress', category: 'CMS', icon: <FaWordpress className="h-8 w-8 fill-current stroke-none" />, color: 'text-cyan', noDrawFill: true },
    { name: 'UI / UX', category: 'Diseño', icon: <Smartphone className="h-8 w-8" />, color: 'text-magenta' },
    { name: 'Figma', category: 'Diseño de interfaz', icon: <SiFigma className="h-8 w-8 fill-current stroke-none" />, color: 'text-cyan', noDrawFill: true },
    { name: 'Photoshop', category: 'Edición visual', icon: <DiPhotoshop className="h-8 w-8 fill-current stroke-none" />, color: 'text-magenta', noDrawFill: true },
    { name: 'Illustrator', category: 'Identidad gráfica', icon: <DiIllustrator className="h-8 w-8 fill-current stroke-none" />, color: 'text-cyan', noDrawFill: true },
    { name: 'Google Analytics', category: 'Medición', icon: <BarChart3 className="h-8 w-8" />, color: 'text-magenta' },
    { name: 'SEO', category: 'Posicionamiento', icon: <Search className="h-8 w-8" />, color: 'text-cyan' },
  ];

  return (
    <section id="skills" className="relative z-10 w-full px-4 py-24 md:px-8">
      <div className="anime-reveal mb-20 text-center">
        <h2 className="typewriter text-glow-magenta inline-block pb-4 text-5xl font-bold md:text-6xl">Tecnologías</h2>
        <div className="gothic-divider mt-3" />
        <p className="mx-auto mt-6 max-w-2xl text-xl text-text-main">
          Las herramientas con las que convierto ideas, identidades visuales, flujos de negocio y objetivos de crecimiento en productos digitales listos para salir a producción.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-4 lg:gap-10">
        {skills.map((skill, index) => {
          const tilt = index % 3 === 0 ? 'tilt-l' : index % 3 === 1 ? 'tilt-r' : 'tilt-md';
          const isAlt = index % 2 === 0 ? 'alt' : '';
          return (
            <div
              key={skill.name}
              className={`skill-card glass-panel glass-panel-hover anime-reveal ${tilt} ${isAlt} group relative flex flex-col items-center p-6 text-center transform-gpu`}
              style={{ '--float-delay': `${index * 180}ms`, '--reveal-delay': `${index * 90}ms` }}
            >
              <div className={`draw-on-view${skill.noDrawFill ? ' no-draw-fill' : ''} relative z-10 mb-4 rounded-2xl border-2 border-text-main p-4 ${skill.color} transition-transform duration-500 group-hover:rotate-3 group-hover:scale-105`}>
                {skill.icon}
              </div>

              <h3 className="relative z-10 mb-1 text-2xl font-bold text-text-main">{skill.name}</h3>
              <p className="relative z-10 text-base text-text-main/70">{skill.category}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
