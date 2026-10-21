import { GraduationCap, Briefcase, Zap } from "lucide-react";
import { useReveal } from "../hooks/useReveal";

const skills = [
  { category: "Frontend", items: ["React", "TypeScript", "Vue.js", "Angular", "HTML5", "CSS3", "Tailwind", "Bootstrap", "Astro"] },
  { category: "Backend", items: ["Node.js", "Express", "Python", "Java", "Spring Boot", ".NET"] },
  { category: "Base de Datos", items: ["MongoDB", "MySQL", "PostgreSQL", "Prisma", "Firebase"] },
  { category: "Diseño UI", items: ["Figma", "UX/UI", "Diseño Responsivo", "Prototipado"] },
  { category: "Herramientas", items: ["Git", "GitHub", "Vite", "React Native"] },
];

const education = [
  {
    title: "Diplomatura en Programación Web Full Stack",
    place: "Universidad Tecnológica Nacional (UTN)",
    year: "2025 – 2026 · Nota: Sobresaliente",
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
    desc: "Desarrollo de proyectos web full stack para distintos clientes. Destacado: sistema de gestión de turnos para un centro médico, hecho de punta a punta (arquitectura, frontend, backend, base de datos y despliegue). También: sitio para estudio jurídico, blog con Astro + TinaCMS y este portfolio.",
    year: "2022 - Actualidad",
  },
   {
    title: "Desarrolladora Full Stack",
    place: "ITR ",
    desc: "Ingresé por un bootcamp interno de .NET y me especialicé también en Java y Angular. Desarrollé desde cero la aplicación central de la empresa: una herramienta de RRHH que centraliza sub-aplicaciones, datos de empleados, evaluaciones mensuales y roles, participando en todo el proceso hasta el deploy a producción. Trabajo ágil con Scrum y JIRA.",
    year: "2024 - 2025",
  },
  {
    title: "Mentora y Coordinadora de Mentores",
    place: "MindHub LA · Accenture Argentina ",
    desc: "Mentoría en el programa Iniciatec: acompañé a nuevos desarrolladores en HTML, CSS, Bootstrap y Vue.js, dictando workshops y dando feedback técnico. En 2023 coordiné al equipo de mentores: capacitación de mentores junior, seguimiento de dailies y retros.",
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
          <p className="text-sm font-bold text-violet-600 uppercase tracking-widest mb-3">Sobre mí</p>
          <h2 className="text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
            De la idea a producción.<br />De punta a punta.
          </h2>
          <p className="text-slate-500 max-w-xl leading-relaxed">
            Desarrolladora Full Stack. Me involucro en todo el ciclo de un producto:
            desde entender lo que necesita el cliente hasta la base de datos, la interfaz y el despliegue a producción.
          </p>
        </div>

        <div ref={refContent} className={`grid grid-cols-1 lg:grid-cols-2 gap-16 reveal ${visContent ? "visible" : ""}`}>

          {/* Skills */}
          <div>
            <div className="flex items-center gap-2 mb-8">
              <Zap size={16} className="text-violet-600" />
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
                        className="px-3 py-1.5 bg-white border border-slate-200 text-slate-600 text-sm font-medium rounded-lg hover:border-violet-400 hover:text-violet-600 hover:bg-violet-50 transition-all duration-200 cursor-default"
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
                <GraduationCap size={16} className="text-violet-600" />
                <h3 className="font-bold text-slate-800 text-sm uppercase tracking-widest">Formación</h3>
              </div>
              <div className="space-y-6 border-l-2 border-slate-200 pl-6">
                {education.map((ed) => (
                  <div key={ed.title} className="relative">
                    <div className="absolute -left-[29px] top-1 w-3 h-3 rounded-full bg-violet-600 border-2 border-white ring-2 ring-violet-100" />
                    <p className="font-semibold text-slate-800">{ed.title}</p>
                    <p className="text-sm text-violet-600 mt-0.5">{ed.place}</p>
                    <p className="text-xs text-slate-400 mt-1.5">{ed.year}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Experiencia */}
            <div>
              <div className="flex items-center gap-2 mb-6">
                <Briefcase size={16} className="text-violet-600" />
                <h3 className="font-bold text-slate-800 text-sm uppercase tracking-widest">Experiencia</h3>
              </div>
              <div className="space-y-6 border-l-2 border-slate-200 pl-6">
                {experience.map((exp) => (
                  <div key={exp.title} className="relative">
                    <div className="absolute -left-[29px] top-1 w-3 h-3 rounded-full bg-purple-500 border-2 border-white ring-2 ring-purple-100" />
                    <p className="font-semibold text-slate-800">{exp.title}</p>
                    <p className="text-sm text-violet-600 mt-0.5">{exp.place}</p>
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
