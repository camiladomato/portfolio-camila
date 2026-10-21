export interface Project {
  title: string;
  description: string;
  tags: string[];
  link?: string;
  live?: string;
}

export interface Decision {
  title: string;
  text: string;
}

export interface FeaturedProject extends Project {
  label: string;
  problem: string;
  features: string[];
  stack: string;
  decisions: Decision[];
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
  stack:
    "React + Vite · Node.js, Express y TypeScript · Prisma y PostgreSQL (Neon) · JWT con control de acceso por rol · Cloudflare R2 y GitHub Actions para respaldos · despliegue en Vercel y Render.",
  decisions: [
    {
      title: "Caja confiable",
      text: "En un cobro no puede haber números que cambien sin dejar rastro. Modelé los movimientos como registro append-only: no se editan ni se borran, un error se corrige con una anulación que queda registrada (quién, cuándo y por qué). Así la caja de cada secretaria se puede auditar.",
    },
    {
      title: "Concurrencia",
      text: "Con varias personas en recepción, dos pedidos simultáneos pueden duplicar una acción (por ejemplo, llamar dos veces al mismo paciente). El backend rechaza el segundo con un 409, y la interfaz bloquea el botón mientras procesa. Para los solapamientos de agenda uso transacciones con aislamiento serializable.",
    },
    {
      title: "Cambios seguros en producción",
      text: "Toda migración de base de datos se prueba primero en una base separada y, en producción, se hace con copia de seguridad previa.",
    },
    {
      title: "Recuperación ante desastres",
      text: "Backup diario automático de la base en almacenamiento externo (R2), ejecutado con GitHub Actions y verificado en cada corrida.",
    },
    {
      title: "Resiliencia de la base",
      text: "Configuré el pool de conexiones para tolerar los cortes de conexiones ociosas de Neon sin tirar el servidor (tiempo de espera, keepAlive y manejo de errores).",
    },
    {
      title: "Seguridad y permisos",
      text: "Autenticación con JWT, rutas protegidas por rol y registro de auditoría de las acciones del sistema.",
    },
  ],
  role: "Diseño, frontend, backend, base de datos, infraestructura, testing y puesta en producción, más el relevamiento de requisitos directo con el cliente.",
  tags: ["React", "Node.js", "TypeScript", "PostgreSQL"],
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
