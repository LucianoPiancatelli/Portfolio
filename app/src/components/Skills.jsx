import { Code2, Database, Server, Smartphone } from 'lucide-react';
import { BsBootstrap } from 'react-icons/bs';
import { FaHtml5, FaJs, FaReact, FaNodeJs } from 'react-icons/fa';
import { SiTailwindcss, SiFigma } from 'react-icons/si';
import { DiPhotoshop, DiIllustrator } from 'react-icons/di';

const icon = 'h-7 w-7 fill-current stroke-none';

const groups = [
  {
    title: 'Frontend',
    note: 'Lo que uso en mis proyectos y quiero profundizar.',
    tone: 'text-magenta',
    items: [
      { name: 'React', icon: <FaReact className={icon} /> },
      { name: 'JavaScript', icon: <FaJs className={icon} /> },
      { name: 'HTML5', icon: <FaHtml5 className={icon} /> },
      { name: 'CSS y Tailwind', icon: <SiTailwindcss className={icon} /> },
      { name: 'Bootstrap', icon: <BsBootstrap className="h-7 w-7" /> },
    ],
  },
  {
    title: 'Diseño',
    note: 'Parte de mi formación: pienso la interfaz antes de programarla.',
    tone: 'text-cyan',
    items: [
      { name: 'Figma', icon: <SiFigma className={icon} /> },
      { name: 'UI / UX', icon: <Smartphone className="h-7 w-7" /> },
      { name: 'Photoshop', icon: <DiPhotoshop className={icon} /> },
      { name: 'Illustrator', icon: <DiIllustrator className={icon} /> },
    ],
  },
  {
    title: 'Backend y datos',
    note: 'Lo usé para completar mis proyectos de punta a punta.',
    tone: 'text-magenta',
    items: [
      { name: 'Node.js y Express', icon: <FaNodeJs className={icon} /> },
      { name: 'PHP y Laravel', icon: <Server className="h-7 w-7" /> },
      { name: 'MongoDB', icon: <Database className="h-7 w-7" /> },
      { name: 'MySQL', icon: <Code2 className="h-7 w-7" /> },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="relative z-10 w-full px-4 py-24 md:px-8">
      <div className="anime-reveal mb-16 text-center">
        <h2 className="typewriter text-glow-magenta inline-block pb-4 text-5xl font-bold md:text-6xl">Skills</h2>
        <div className="gothic-divider mt-3" />
        <p className="mx-auto mt-6 max-w-2xl text-base text-text-main md:text-lg">
          Estas son las herramientas que usé en mis proyectos, ordenadas por dónde está mi foco.
        </p>
      </div>

      <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-3">
        {groups.map((group, index) => (
          <div
            key={group.title}
            className={`glass-panel glass-panel-hover anime-reveal ${index % 2 ? 'alt tilt-r' : 'tilt-l'} p-6`}
            style={{ '--reveal-delay': `${index * 120}ms` }}
          >
            <h3 className={`mb-1 text-3xl font-bold ${group.tone}`}>{group.title}</h3>
            <p className="mb-5 text-sm text-text-main/70">{group.note}</p>
            <ul className="space-y-3">
              {group.items.map((item) => (
                <li key={item.name} className="flex items-center gap-3 text-base font-medium text-text-main">
                  <span className={group.tone}>{item.icon}</span>
                  {item.name}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <p className="mx-auto mt-10 max-w-3xl text-center text-sm text-text-main/70">
        También tengo nociones de WordPress, SEO y Google Analytics.
      </p>
    </section>
  );
}
