import { ExternalLink } from "lucide-react";
import { projects, type Project } from "../data/projects";
import { useReveal } from "../hooks/useReveal";

export const Projects = () => {
  const { ref: refHeader, visible: visHeader } = useReveal();
  const { ref: refGrid, visible: visGrid } = useReveal();

  return (
    <section id="proyectos" className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div ref={refHeader} className={`mb-16 reveal ${visHeader ? "visible" : ""}`}>
          <p className="text-sm font-bold text-blue-600 uppercase tracking-widest mb-3">Proyectos</p>
          <h2 className="text-4xl font-extrabold text-slate-900 tracking-tight">
            Lo que he construido
          </h2>
        </div>

        {/* Grid */}
        <div
          ref={refGrid}
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 stagger ${visGrid ? "visible" : ""}`}
        >
          {projects.map((project: Project, index: number) => (
            <div
              key={index}
              className="group relative bg-white border border-slate-100 rounded-2xl p-6 hover:shadow-xl hover:shadow-slate-100 hover:-translate-y-1 transition-all duration-300 overflow-hidden"
            >
              {/* Línea accent que aparece en hover */}
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-600 to-indigo-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

              {/* Número */}
              <p className="text-3xl font-extrabold text-slate-100 mb-4 select-none">
                {String(index + 1).padStart(2, "0")}
              </p>

              <h3 className="text-lg font-bold text-slate-800 mb-2 group-hover:text-blue-600 transition-colors duration-200">
                {project.title}
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-5">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-1.5 mb-6">
                {project.tags.map((tag: string, i: number) => (
                  <span
                    key={i}
                    className="bg-slate-50 text-slate-500 border border-slate-100 px-2.5 py-1 rounded-md text-xs font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600 hover:gap-3 transition-all duration-200"
              >
                Ver en GitHub <ExternalLink size={14} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
