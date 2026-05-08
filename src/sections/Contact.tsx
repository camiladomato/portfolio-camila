import { MessageCircle, MapPin, Send, ExternalLink } from "lucide-react";
import React, { useState } from "react";

export const Contact = () => {
  const [formData, setFormData] = useState({ nombre: "", servicio: "" });

  // SUSTITUYE ESTE NÚMERO POR EL TUYO (Formato: Código país + número sin el 15 ni el 0)
  const WHATSAPP_NUMBER = "54911XXXXXXXX"; 

  const handleWhatsApp = (e: React.SyntheticEvent) => {
    e.preventDefault();
    const mensaje = `Hola Camila! Mi nombre es ${formData.nombre} y me gustaría consultar por el servicio de: ${formData.servicio}`;
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(mensaje)}`;
    window.open(url, "_blank");
  };

  return (
    <section id="contacto" className="py-20 px-6 bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          
          {/* Información de contacto */}
          <div>
            <h2 className="text-3xl font-bold mb-6">¿Tenés una idea en mente?</h2>
            <p className="text-gray-400 mb-8">
              Estoy lista para ayudarte a digitalizar tu negocio. Consultame sin compromiso por presupuestos o dudas técnicas.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-600/20 rounded-full flex items-center justify-center text-blue-500">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="font-semibold">Ubicación</p>
                  <p className="text-gray-400 text-sm">Isidro Casanova, Zona Oeste</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-green-600/20 rounded-full flex items-center justify-center text-green-500">
                  <MessageCircle size={24} />
                </div>
                <div>
                  <p className="font-semibold">WhatsApp</p>
                  <p className="text-gray-400 text-sm">Disponible de Lunes a Viernes</p>
                </div>
              </div>

              <div className="flex gap-4 pt-2">
                <a
                  href="https://www.linkedin.com/in/camila-domato/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-600/20 text-blue-400 hover:bg-blue-600/30 transition-all text-sm font-medium"
                >
                  <ExternalLink size={18} /> LinkedIn
                </a>
                <a
                  href="https://github.com/camiladomato"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/10 text-gray-300 hover:bg-white/20 transition-all text-sm font-medium"
                >
                  <ExternalLink size={18} /> GitHub
                </a>
              </div>
            </div>
          </div>

          {/* Formulario rápido */}
          <div className="bg-white/5 p-8 rounded-2xl border border-white/10 backdrop-blur-sm">
            <form onSubmit={handleWhatsApp} className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Tu nombre</label>
                <input 
                  required
                  type="text" 
                  placeholder="Ej: Juan Pérez"
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 focus:border-blue-500 focus:outline-none transition-all"
                  onChange={(e) => setFormData({...formData, nombre: e.target.value})}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">¿En qué puedo ayudarte?</label>
                <select 
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 focus:border-blue-500 focus:outline-none transition-all"
                  onChange={(e) => setFormData({...formData, servicio: e.target.value})}
                >
                  <option className="bg-gray-900" value="Página Web">Página Web</option>
                  <option className="bg-gray-900" value="Diseño de Logo">Diseño de Logo / Branding</option>
                  <option className="bg-gray-900" value="Mantenimiento">Mantenimiento Técnico</option>
                  <option className="bg-gray-900" value="Otro">Otro servicio</option>
                </select>
              </div>
              <button 
                type="submit"
                className="w-full py-4 bg-green-600 hover:bg-green-700 text-white font-bold rounded-lg flex items-center justify-center gap-2 transition-all"
              >
                Enviar a WhatsApp <Send size={18} />
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};