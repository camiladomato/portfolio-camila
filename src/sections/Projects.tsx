import {
  ExternalLink,
  CheckCircle2,
  ShieldCheck,
  Receipt,
  Users,
  GitBranch,
  DatabaseBackup,
  ServerCog,
  RefreshCw,
} from "lucide-react";
import { projects, featuredProject, type Project } from "../data/projects";
import { useReveal } from "../hooks/useReveal";

// Íconos en el mismo orden que las decisiones técnicas
const decisionIcons = [Receipt, Users, GitBranch, DatabaseBackup, ServerCog, RefreshCw, ShieldCheck];

const Tag = ({ label }: { label: string }) => (
  <span className="bg-slate-50 text-slate-500 border border-slate-100 px-2.5 py-1 rounded-md text-xs font-medium">
    {label}
  </span>
);

const ProjectLinks = ({ project }: { project: Project }) => (
  <div className="flex flex-wrap items-center gap-5">
    {project.live && (
      <a
        href={project.live}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1.5 text-sm font-semibold text-violet-600 hover:gap-3 transition-all duration-200"
      >
        Ver sitio <ExternalLink size={14} />
      </a>
    )}
    {project.link && (
      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1.5 text-sm font-semibold text-violet-600 hover:gap-3 transition-all duration-200"
      >
        Ver en GitHub <ExternalLink size={14} />
      </a>
    )}
  </div>
);

export const Projects = () => {
  const { ref: refHeader, visible: visHeader } = useReveal();
  const { ref: refFeatured, visible: visFeatured } = useReveal();
  const { ref: refGrid, visible: visGrid } = useReveal();

  const f = featuredProject;

  return (
    <section id="proyectos" className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div ref={refHeader} className={`mb-16 reveal ${visHeader ? "visible" : ""}`}>
          <p className="text-sm font-bold text-violet-600 uppercase tracking-widest mb-3">Proyectos</p>
          <h2 className="text-4xl font-extrabold text-slate-900 tracking-tight">
            Lo que he construido
          </h2>
        </div>

        {/* Proyecto destacado */}
        <article
          ref={refFeatured}
          className={`reveal ${visFeatured ? "visible" : ""} group relative mb-6 bg-white border border-slate-100 rounded-2xl p-6 md:p-10 shadow-xl shadow-slate-100 overflow-hidden`}
        >
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-violet-600 to-purple-500" />

          <div className="flex flex-wrap items-center gap-3 mb-4">
            <p className="text-3xl font-extrabold text-slate-100 select-none">01</p>
            <span className="inline-flex items-center gap-1.5 bg-violet-50 text-violet-700 border border-violet-100 px-3 py-1 rounded-full text-xs font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-violet-600" />
              {f.label}
            </span>
          </div>

          <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
            {/* Columna izquierda */}
            <div className="lg:col-span-2">
              <h3 className="text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight mb-3">
                {f.title}
              </h3>
              <p className="text-slate-600 leading-relaxed mb-5">{f.description}</p>

              <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">El problema</p>
              <p className="text-slate-500 text-sm leading-relaxed mb-5">{f.problem}</p>

              <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Mi rol</p>
              <p className="text-slate-500 text-sm leading-relaxed mb-6">{f.role}</p>

              <ProjectLinks project={f} />
            </div>

            {/* Columna derecha */}
            <div className="lg:col-span-3 space-y-6">
              <div>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">La solución</p>
                <ul className="space-y-2.5">
                  {f.features.map((item) => (
                    <li key={item} className="flex gap-2.5 text-sm text-slate-600 leading-relaxed">
                      <CheckCircle2 size={16} className="text-violet-600 shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Stack</p>
                <p className="text-sm text-slate-600 leading-relaxed">{f.stack}</p>
              </div>
            </div>
          </div>

          {/* Decisiones técnicas */}
          <div className="mt-10 pt-8 border-t border-slate-100">
            <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-5">Decisiones técnicas</p>
            <div className="grid md:grid-cols-2 gap-4">
              {f.decisions.map((d, i) => {
                const Icon = decisionIcons[i % decisionIcons.length];
                return (
                  <div
                    key={d.title}
                    className={`flex gap-4 bg-slate-50 border border-slate-100 rounded-xl p-5 ${
                      // Si quedan impares, la última ocupa todo el ancho
                      i === f.decisions.length - 1 && f.decisions.length % 2 === 1 ? "md:col-span-2" : ""
                    }`}
                  >
                    <div className="w-9 h-9 shrink-0 rounded-lg bg-violet-50 border border-violet-100 flex items-center justify-center">
                      <Icon size={18} className="text-violet-600" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-slate-800 mb-1">{d.title}</h4>
                      <p className="text-sm text-slate-500 leading-relaxed">{d.text}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </article>

        {/* Grid */}
        <div
          ref={refGrid}
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 stagger ${visGrid ? "visible" : ""}`}
        >
          {projects.map((project: Project, index: number) => (
            <div
              key={project.title}
              className="group relative bg-white border border-slate-100 rounded-2xl p-6 hover:shadow-xl hover:shadow-slate-100 hover:-translate-y-1 transition-all duration-300 overflow-hidden"
            >
              {/* Línea accent que aparece en hover */}
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-violet-600 to-purple-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

              {/* Número (el 01 es el proyecto destacado) */}
              <p className="text-3xl font-extrabold text-slate-100 mb-4 select-none">
                {String(index + 2).padStart(2, "0")}
              </p>

              <h3 className="text-lg font-bold text-slate-800 mb-2 group-hover:text-violet-600 transition-colors duration-200">
                {project.title}
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-5">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-1.5 mb-6">
                {project.tags.map((tag: string) => (
                  <Tag key={tag} label={tag} />
                ))}
              </div>

              <ProjectLinks project={project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
