import { BarChart3, Code2, Database, Image, Layout, Palette, PenTool, Search, Server, Smartphone, Sparkles, Wrench } from 'lucide-react';

export default function Skills() {
  const skills = [
    { name: 'HTML5', category: 'Estructura', icon: <Layout className="h-8 w-8" />, color: 'text-orange-500', bg: 'bg-orange-500/10' },
    { name: 'CSS / Tailwind', category: 'Estilos', icon: <Sparkles className="h-8 w-8" />, color: 'text-cyan', bg: 'bg-cyan/10' },
    { name: 'JavaScript', category: 'Interacción', icon: <Code2 className="h-8 w-8" />, color: 'text-yellow-400', bg: 'bg-yellow-400/10' },
    { name: 'React / Vue', category: 'Frontend moderno', icon: <Code2 className="h-8 w-8" />, color: 'text-cyan', bg: 'bg-cyan/10' },
    { name: 'PHP / Laravel', category: 'Backend', icon: <Server className="h-8 w-8" />, color: 'text-magenta', bg: 'bg-magenta/10' },
    { name: 'MySQL', category: 'Bases de datos', icon: <Database className="h-8 w-8" />, color: 'text-blue-400', bg: 'bg-blue-400/10' },
    { name: 'WordPress', category: 'CMS', icon: <Wrench className="h-8 w-8" />, color: 'text-blue-500', bg: 'bg-blue-500/10' },
    { name: 'UI / UX', category: 'Diseño', icon: <Smartphone className="h-8 w-8" />, color: 'text-magenta', bg: 'bg-magenta/10' },
    { name: 'Figma', category: 'Diseño de interfaz', icon: <PenTool className="h-8 w-8" />, color: 'text-cyan', bg: 'bg-cyan/10' },
    { name: 'Photoshop', category: 'Edición visual', icon: <Image className="h-8 w-8" />, color: 'text-blue-400', bg: 'bg-blue-400/10' },
    { name: 'Illustrator', category: 'Identidad gráfica', icon: <Palette className="h-8 w-8" />, color: 'text-orange-400', bg: 'bg-orange-400/10' },
    { name: 'Google Analytics', category: 'Medición', icon: <BarChart3 className="h-8 w-8" />, color: 'text-yellow-400', bg: 'bg-yellow-400/10' },
    { name: 'SEO', category: 'Posicionamiento', icon: <Search className="h-8 w-8" />, color: 'text-magenta', bg: 'bg-magenta/10' },
  ];

  return (
    <section id="skills" className="relative z-10 w-full px-4 py-24 md:px-8">
      <div className="anime-reveal mb-20 text-center">
        <h2 className="text-glow-magenta inline-block pb-4 text-5xl font-bold">Tecnologías</h2>
        <div className="mx-auto mt-2 h-1 w-24 rounded-full bg-gradient-to-r from-magenta to-cyan" />
        <p className="mx-auto mt-6 max-w-2xl text-lg text-text-muted">
          Las herramientas con las que convierto ideas, identidades visuales, flujos de negocio y objetivos de crecimiento en productos digitales listos para salir a producción.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4 lg:gap-8">
        {skills.map((skill, index) => (
          <div
            key={skill.name}
            className="skill-card glass-panel glass-panel-hover anime-reveal group relative flex flex-col items-center overflow-hidden p-6 text-center transform-gpu"
            style={{ '--float-delay': `${index * 180}ms`, '--reveal-delay': `${index * 90}ms` }}
          >
            <div className={`absolute -inset-4 rounded-full opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-20 ${skill.bg}`} />

            <div className={`icon-container relative z-10 mb-4 rounded-2xl border border-border-glass p-4 transition duration-500 group-hover:rotate-6 group-hover:scale-110 group-hover:border-current ${skill.color} ${skill.bg}`}>
              {skill.icon}
            </div>

            <h3 className="relative z-10 mb-1 text-lg font-bold text-white transition-all group-hover:text-glow-cyan">{skill.name}</h3>
            <p className="relative z-10 text-sm text-text-muted">{skill.category}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
