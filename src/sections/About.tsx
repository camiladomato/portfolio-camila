import { GraduationCap, Briefcase, Zap } from "lucide-react";
import { useReveal } from "../hooks/useReveal";

const skills = [
  { category: "Frontend", items: ["React", "TypeScript", "Vue.js", "Angular", "HTML5", "CSS3", "Tailwind", "Bootstrap"] },
  { category: "Backend", items: ["Node.js", "Express", "Python", "Java", "Spring Boot"] },
  { category: "Base de Datos", items: ["MongoDB", "MySQL", "PostgreSQL"] },
  { category: "Diseño & UX", items: ["Figma", "Branding", "Diseño Gráfico", "Identidad Visual"] },
  { category: "Herramientas", items: ["Git", "GitHub", "Vite", "React Native"] },
];

const education = [
  {
    title: "Diplomatura en Programación Web Full Stack",
    place: "Universidad Tecnológica Nacional (UTN)",
    year: "En curso · 2025 – 2026",
  },
   {
    title: " Certificación Desarrolladora Web .NET",
    place: "MindHub LA Bootcamp",
    year: "2024",
  },
   {
    title: " Certificación Desarrolladora Full Stack Python",
    place: "Codo a Codo 4.0 - Agencia de habilidades para el futuro",
    year: "2023",
  },
  {
    title: " Certificación Full Stack MERN Developer",
    place: "MindHub LA Bootcamp",
    year: "2021 – 2022",
  },
];

const experience = [
     {
    title: "Desarrolladora Full Stack",
    place: "Freelance ",
    desc: "Formación y desarrollo en tecnologías, Angular, React, HTML Y CSS. Participación en proyectos colaborativos bajo metodologías ágiles. Aplicación de buenas prácticas en desarrollo Full Stack",
    year: "2022 - Actualidad",
  },
   {
    title: "Desarrolladora Full Stack",
    place: "ITR ",
    desc: "Desarrollo de aplicación como herramienta empresarial para RRHH utilizando Angular y JAVA. Manejo avanzado del sistema de seguimiento laboral JIRA . Análisis de datos para la mejora continua y elaboración de procedimientos. Liderazgo y gestión de recursos humanos en proyectos específicos.",
    year: "2023 - 2025",
  },
  {
    title: "Mentora de Programación Frontend",
    place: "MindHub LA · Accenture Argentina ",
    desc: "Mentoría en el programa Iniciatec: acompañé a nuevos desarrolladores en HTML, CSS, Bootstrap y Vue.js junto a un equipo de docentes especializados.",
    year: "2021 - 2023",
  },
];

export const About = () => {
  const { ref: refHeader, visible: visHeader } = useReveal();
  const { ref: refContent, visible: visContent } = useReveal();

  return (
    <section id="sobre-mi" className="py-24 px-6 bg-slate-50">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div ref={refHeader} className={`mb-16 reveal ${visHeader ? "visible" : ""}`}>
          <p className="text-sm font-bold text-blue-600 uppercase tracking-widest mb-3">Sobre mí</p>
          <h2 className="text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
            Código + Diseño.<br />Una sola persona.
          </h2>
          <p className="text-slate-500 max-w-xl leading-relaxed">
            Desarrolladora Full Stack y Diseñadora Gráfica. Combino las dos disciplinas
            para entregar productos completos, desde la base de datos hasta la identidad visual.
          </p>
        </div>

        <div ref={refContent} className={`grid grid-cols-1 lg:grid-cols-2 gap-16 reveal ${visContent ? "visible" : ""}`}>

          {/* Skills */}
          <div>
            <div className="flex items-center gap-2 mb-8">
              <Zap size={16} className="text-blue-600" />
              <h3 className="font-bold text-slate-800 text-sm uppercase tracking-widest">Stack Tecnológico</h3>
            </div>
            <div className="space-y-6">
              {skills.map((group) => (
                <div key={group.category}>
                  <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-2.5">
                    {group.category}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1.5 bg-white border border-slate-200 text-slate-600 text-sm font-medium rounded-lg hover:border-blue-400 hover:text-blue-600 hover:bg-blue-50 transition-all duration-200 cursor-default"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Formación + Experiencia */}
          <div className="space-y-12">

            {/* Formación */}
            <div>
              <div className="flex items-center gap-2 mb-6">
                <GraduationCap size={16} className="text-blue-600" />
                <h3 className="font-bold text-slate-800 text-sm uppercase tracking-widest">Formación</h3>
              </div>
              <div className="space-y-6 border-l-2 border-slate-200 pl-6">
                {education.map((ed) => (
                  <div key={ed.title} className="relative">
                    <div className="absolute -left-[29px] top-1 w-3 h-3 rounded-full bg-blue-600 border-2 border-white ring-2 ring-blue-100" />
                    <p className="font-semibold text-slate-800">{ed.title}</p>
                    <p className="text-sm text-blue-600 mt-0.5">{ed.place}</p>
                    <p className="text-xs text-slate-400 mt-1.5">{ed.year}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Experiencia */}
            <div>
              <div className="flex items-center gap-2 mb-6">
                <Briefcase size={16} className="text-blue-600" />
                <h3 className="font-bold text-slate-800 text-sm uppercase tracking-widest">Experiencia</h3>
              </div>
              <div className="space-y-6 border-l-2 border-slate-200 pl-6">
                {experience.map((exp) => (
                  <div key={exp.title} className="relative">
                    <div className="absolute -left-[29px] top-1 w-3 h-3 rounded-full bg-indigo-500 border-2 border-white ring-2 ring-indigo-100" />
                    <p className="font-semibold text-slate-800">{exp.title}</p>
                    <p className="text-sm text-blue-600 mt-0.5">{exp.place}</p>
                    <p className="text-sm text-slate-500 mt-2 leading-relaxed">{exp.desc}</p>
                    <p className="text-xs text-slate-400 mt-2">{exp.year}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
