import { Monitor, Palette, Rocket, CheckCircle2 } from "lucide-react";
import { useReveal } from "../hooks/useReveal";

const services = [
  {
    title: "Desarrollo Web Profesional",
    description: "Sitios modernos, rápidos y adaptados a celulares. Ideal para comercios y profesionales que quieren destacar en internet.",
    icon: Monitor,
    color: "bg-blue-50 text-blue-600",
    features: ["Landing Pages", "E-commerce", "Mantenimiento mensual"],
  },
  {
    title: "Identidad Visual & Branding",
    description: "Diseño de logotipos, paleta de colores y tipografías que transmiten la esencia de tu negocio de forma profesional.",
    icon: Palette,
    color: "bg-purple-50 text-purple-600",
    features: ["Diseño de Logos", "Flyers para redes", "Tarjetas personales"],
  },
  {
    title: "Digitalización de Negocios",
    description: "Llevo tu negocio al mundo digital. Desde Google Maps hasta sistemas de gestión a medida para tu operación.",
    icon: Rocket,
    color: "bg-orange-50 text-orange-500",
    features: ["Google My Business", "Sistemas a medida", "Consultoría técnica"],
  },
];

export const Services = () => {
  const { ref: refHeader, visible: visHeader } = useReveal();
  const { ref: refGrid, visible: visGrid } = useReveal();

  return (
    <section id="servicios" className="py-24 px-6 bg-slate-50">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div ref={refHeader} className={`mb-16 reveal ${visHeader ? "visible" : ""}`}>
          <p className="text-sm font-bold text-blue-600 uppercase tracking-widest mb-3">Servicios</p>
          <h2 className="text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
            ¿En qué puedo ayudarte?
          </h2>
          <p className="text-slate-500 max-w-xl leading-relaxed">
            Soluciones integrales que combinan programación de vanguardia con diseño de alto impacto.
          </p>
        </div>

        {/* Cards */}
        <div
          ref={refGrid}
          className={`grid grid-cols-1 md:grid-cols-3 gap-6 stagger ${visGrid ? "visible" : ""}`}
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group bg-white border border-slate-100 rounded-2xl p-8 hover:shadow-xl hover:shadow-slate-100 hover:-translate-y-1 transition-all duration-300"
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 ${service.color}`}>
                  <Icon size={22} />
                </div>

                <h3 className="text-lg font-bold text-slate-800 mb-3 group-hover:text-blue-600 transition-colors duration-200">
                  {service.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-6">
                  {service.description}
                </p>

                <ul className="space-y-2.5">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-slate-600">
                      <CheckCircle2 size={15} className="text-green-500 shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
