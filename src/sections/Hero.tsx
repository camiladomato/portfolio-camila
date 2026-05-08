import { ArrowRight, Code, MapPin } from "lucide-react";
import { useReveal } from "../hooks/useReveal";

export const Hero = () => {
  const { ref, visible } = useReveal(0.05);

  return (
    <section className="relative min-h-screen flex items-center px-6 pt-20 pb-12 overflow-hidden bg-white">

      {/* Blobs decorativos de fondo */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full bg-blue-50 blur-3xl opacity-70" />
        <div className="absolute -bottom-32 -left-32 w-[400px] h-[400px] rounded-full bg-indigo-50 blur-3xl opacity-50" />
      </div>

      <div
        ref={ref}
        className={`max-w-6xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-16 items-center reveal ${visible ? "visible" : ""}`}
      >
        {/* Texto */}
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-sm font-medium mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-blue-500" />
            </span>
            Disponible para nuevos proyectos
          </div>

          <h1 className="text-5xl md:text-6xl font-extrabold text-slate-900 leading-[1.08] tracking-tight mb-6">
            Desarrollo Web<br />
          </h1>

          <p className="text-lg text-slate-500 leading-relaxed mb-10 max-w-md">
            Soy Camila Domato. Ayudo a comercios y profesionales de Zona Oeste
            a destacar en internet con sitios rápidos y diseños que impactan.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 mb-10">
            <a
              href="#contacto"
              className="inline-flex items-center justify-center gap-2 bg-blue-600 text-white px-7 py-3.5 rounded-xl font-semibold hover:bg-blue-700 hover:-translate-y-0.5 transition-all shadow-lg shadow-blue-100"
            >
              Empezar mi proyecto <ArrowRight size={18} />
            </a>
            <a
              href="#proyectos"
              className="inline-flex items-center justify-center gap-2 bg-white text-slate-700 border border-slate-200 px-7 py-3.5 rounded-xl font-semibold hover:bg-slate-50 hover:-translate-y-0.5 transition-all"
            >
              Ver mi trabajo
            </a>
          </div>

          <div className="flex items-center gap-1.5 text-sm text-slate-400">
            <MapPin size={14} />
            Isidro Casanova, Zona Oeste · Buenos Aires
          </div>
        </div>

        {/* Tarjeta visual */}
        <div className="flex justify-center md:justify-end">
          <div className="relative">
            <div className="bg-white rounded-2xl border border-slate-100 shadow-2xl shadow-slate-100 p-8 w-80">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-11 h-11 bg-blue-600 rounded-xl flex items-center justify-center shadow-md shadow-blue-200">
                  <Code size={20} className="text-white" />
                </div>
                <div>
                  <p className="font-bold text-slate-800 text-sm">Full Stack Developer</p>
                  <p className="text-xs text-slate-400 mt-0.5">React · Node.js · TypeScript</p>
                </div>
              </div>

             

              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <p className="text-2xl font-extrabold text-blue-600">30+</p>
                  <p className="text-xs text-slate-400 mt-1">Repositorios</p>
                </div>
                <div>
                  <p className="text-2xl font-extrabold text-blue-600">3+</p>
                  <p className="text-xs text-slate-400 mt-1">Stacks</p>
                </div>
                <div>
                  <p className="text-2xl font-extrabold text-blue-600">UTN</p>
                  <p className="text-xs text-slate-400 mt-1">Diplomatura</p>
                </div>
                
              </div>
            </div>

            {/* Badge flotante arriba */}
            <div className="absolute -top-3 -right-3 bg-indigo-600 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">
              MindHub · Accenture · ITR 
            </div>

            {/* Badge flotante abajo */}
            <div className="absolute -bottom-3 -left-3 bg-white border border-slate-100 text-slate-700 text-xs font-semibold px-3 py-1.5 rounded-full shadow-md">
              🎓 Estudiante UTN
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
