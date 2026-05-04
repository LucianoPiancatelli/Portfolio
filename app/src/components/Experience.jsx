import { Briefcase, Landmark } from 'lucide-react';

export default function Experience() {
  const experiences = [
    {
      title: 'Empleado de Logística',
      company: 'DFV S.R.L',
      date: 'May 2023 - Oct 2024',
      description: 'Coordinación y armado de hojas de ruta, control de stock, expedición y preparación de pedidos en entornos logísticos de alta rotación.',
      icon: <Briefcase className="h-3 w-3" />,
      tone: 'cyan',
    },
    {
      title: 'Atención al Cliente',
      company: 'Burger King',
      date: 'Dic 2017 - May 2018',
      description: 'Gestión directa de atención al cliente en un entorno de comida rápida, resolución de conflictos y trabajo bajo presión constante.',
      icon: <Briefcase className="h-3 w-3" />,
      tone: 'magenta',
    },
    {
      title: 'Cadete Administrativo',
      company: 'Ancamar S.A',
      date: 'Jun 2017 - Dic 2017',
      description: 'Trámites administrativos generales, control de depósito y organización física de expedientes y pedidos.',
      icon: <Landmark className="h-3 w-3" />,
      tone: 'cyan',
    },
  ];

  return (
    <section id="experience" className="relative z-10 w-full px-4 py-24 md:px-8">
      <div className="anime-reveal mb-20 text-center">
        <h2 className="inline-block pb-4 text-4xl font-bold text-text-main md:text-6xl">
          <span className="typewriter">Trayectoria </span>
          <span className="typewriter text-glow-cyan bg-gradient-to-r from-cyan to-blue-400 bg-clip-text text-transparent">Laboral</span>
        </h2>
        <div className="gothic-divider mt-5 w-40" />
      </div>

      <div className="relative">
        <div className="timeline-line timeline-wavy anime-reveal absolute bottom-0 left-2 top-0 md:left-4" />

        <div className="space-y-12">
          {experiences.map((experience, index) => {
            const tilt = index % 2 === 0 ? 'tilt-l' : 'tilt-r';
            const isAlt = index % 2 === 0 ? '' : 'alt';
            const toneText = experience.tone === 'magenta' ? 'text-magenta' : 'text-cyan';
            const toneBg = experience.tone === 'magenta' ? 'bg-magenta' : 'bg-cyan';
            return (
              <div
                key={experience.title}
                className="anime-reveal group relative pl-16 transform-gpu md:pl-24"
                style={{ '--reveal-delay': `${index * 120}ms` }}
              >
                <div className={`absolute left-2 top-6 z-10 flex h-8 w-8 -translate-x-1/2 items-center justify-center rounded-full border-2 border-text-main bg-obsidian text-text-main shadow-[2px_2px_0_rgba(44,44,44,0.2)] md:left-4`}>
                  <span className={`draw-on-view ${toneText}`}>{experience.icon}</span>
                </div>

                <div className="absolute left-2 top-[1.85rem] h-0.5 w-10 bg-text-main/40 md:left-4 md:w-16" />

                <div className={`glass-panel glass-panel-hover ${tilt} ${isAlt} group relative p-6 md:p-8`}>
                  <div className="mb-4 flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                    <div>
                      <h3 className="mb-1 text-2xl font-bold text-text-main md:text-3xl">{experience.title}</h3>
                      <h4 className={`text-lg font-semibold ${toneText}`}>{experience.company}</h4>
                    </div>

                    <span className={`inline-block whitespace-nowrap border-2 border-text-main ${toneBg} px-3 py-1 font-syne text-base text-obsidian`}
                      style={{ borderRadius: '20px 6px 22px 6px / 6px 22px 6px 20px' }}
                    >
                      {experience.date}
                    </span>
                  </div>

                  <p className="text-lg leading-relaxed text-text-main md:text-xl">{experience.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
