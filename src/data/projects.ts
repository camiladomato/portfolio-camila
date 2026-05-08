export interface Project {
  title: string;
  description: string;
  tags: string[];
  link: string;
}

export const projects: Project[] = [
  {
    title: "WhatsApp Clone",
    description: "Réplica funcional de la interfaz de mensajería construida con React. Chat en tiempo real con diseño responsive fiel al original, desarrollada para UTN.",
    tags: ["React", "JavaScript", "Vite", "CSS"],
    link: "https://github.com/camiladomato/clone-whatsapp-camila-domato-react"
  },
  {
    title: "Estudio Jurídico",
    description: "Sitio web profesional para un estudio jurídico. Diseño institucional limpio con TypeScript y React, optimizado para SEO y accesibilidad.",
    tags: ["TypeScript", "React", "Tailwind CSS"],
    link: "https://github.com/camiladomato/estudio-juridico"
  },
  {
    title: "CLI Gestión de Usuarios",
    description: "Sistema de administración de usuarios por línea de comandos en Node.js. Altas, bajas y modificaciones con persistencia en archivos, proyecto UTN.",
    tags: ["Node.js", "JavaScript", "CLI"],
    link: "https://github.com/camiladomato/cli-gestion-usuarios"
  },
  {
    title: "API REST Backend UTN",
    description: "API REST con autenticación JWT y CRUD completo, desarrollada en TypeScript con Express como proyecto final para UTN.",
    tags: ["TypeScript", "Express", "Node.js", "API REST"],
    link: "https://github.com/camiladomato/camila-domato-backend-utn"
  },
  {
    title: "MyTinerary",
    description: "Aplicación full-stack de turismo con itinerarios y actividades por ciudad. Autenticación de usuarios, stack MERN completo con React Native.",
    tags: ["React", "Node.js", "MongoDB", "Express"],
    link: "https://github.com/camiladomato/MyTinerary-Domato"
  },
  {
    title: "Home Banking",
    description: "Sistema bancario digital con Spring Boot. Gestión de cuentas, transferencias y operaciones con base de datos relacional MySQL.",
    tags: ["Java", "Spring Boot", "MySQL"],
    link: "https://github.com/camiladomato/homebanking-domato"
  }
];
