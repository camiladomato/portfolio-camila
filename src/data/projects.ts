export interface Project {
  title: string;
  description: string;
  tags: string[];
  link?: string;
  live?: string;
}

export interface FeaturedProject extends Project {
  label: string;
  problem: string;
  features: string[];
  decisions: string[];
  role: string;
}

export const featuredProject: FeaturedProject = {
  label: "Proyecto real · Cliente",
  title: "VIM Consultorios",
  description:
    "Sistema de gestión de turnos y recepción para un centro médico. Aplicación web full stack diseñada, desarrollada y testeada de punta a punta como única desarrolladora.",
  problem:
    "Un centro médico con varios consultorios necesitaba ordenar la agenda de turnos, la recepción de pacientes y el cobro diario, llevando la caja por persona.",
  features: [
    "Roles diferenciados: administración, secretaría, médicos y ecografistas",
    "Agenda por médico y consultorio, con excepciones y validación de solapamientos",
    "Recepción y caja con pago combinado, ausencias y resumen por usuario",
    "Pantalla de llamados para sala de espera (TV) con aviso sonoro",
    "Auditoría de acciones y comprobante de turno para el paciente",
  ],
  decisions: [
    "Caja append-only: los movimientos no se borran, se anulan con trazabilidad",
    "Protección contra doble clic: el backend responde 409 ante pedidos simultáneos",
    "Migraciones con backup previo y pruebas en una base separada",
    "Backup diario automático y verificado en almacenamiento externo",
  ],
  role: "Diseño, frontend, backend, base de datos, infraestructura, testing y puesta en producción, más el relevamiento de requisitos directo con el cliente.",
  tags: [
    "React",
    "Vite",
    "Node.js",
    "Express",
    "TypeScript",
    "Prisma",
    "PostgreSQL",
    "JWT",
    "GitHub Actions",
    "Cloudflare R2",
  ],
  live: "https://www.vimconsultorios.com/",
};

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
