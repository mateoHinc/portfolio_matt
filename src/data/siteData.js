export const PROFILE_TEXT = {
  es: {
    role: "Desarrollador Web Frontend",
    summary:
      "Apasionado por crear interfaces modernas, accesibles y de alto rendimiento. Me gustan las animaciones sutiles, el diseño limpio y las buenas prácticas.",
  },
  en: {
    role: "Frontend Web Developer",
    summary:
      "Passionate about building modern, accessible, and high-performance UIs. I enjoy subtle animations, clean design, and strong engineering practices.",
  },
};

export const PROFILE = {
  name: "Mateo Hincapié Giraldo",
  photo: "/public/skull.jpg",
  location: { es: "Medellín, Colombia", en: "Medellin, Colombia" },
};

export const CONTACT = {
  facebook: "https://www.facebook.com/?locale=es_LA",
  instagram: "https://www.instagram.com/matt_hinc/",
  whatsapp: "wa.me/573245409415",
};

export const CV = {
  url: "/public/cv/CV de Mateo Hincapie Giraldo v2.pdf",
  filename: "Mateo_Hincapie_CV",
  sizeMB: 0.279,
  lastUpdated: { es: "Oct 2025", en: "Oct 2025" },
};

// Estudies / Experience / Skills / Projects
export const STUDIES = [
  {
    title: { es: "Ingeniería de Sistemas", en: "Systems Engineering" },
    org: {
      es: "Instituto Tecnologico Metropolitano (ITM)",
      en: "Metropolitan Technological Institute (MTI)",
    },
    year: "2020 - 2024",
    details: {
      es: "Fundamentos de programación, estructuras de datos, bases de datos, desarrollo web, patrones de arquitectura.",
      en: "Fundamentals of programming, data structures, databases, web development, architectural patterns.",
    },
  },
  {
    title: {
      es: "Tecnologías en Sistemas de Información",
      en: "Information Systems Technologies",
    },
    org: {
      es: "Instituto Tecnologico Metropolitano (ITM)",
      en: "Metropolitan Technological Institute (MTI)",
    },
    year: "2015 - 2019",
    details: {
      es: "Fundamentos de programación, estructuras de datos, bases de datos, desarrollo web, patrones de arquitectura.",
      en: "Fundamentals of programming, data structures, databases, web development, architectural patterns.",
    },
  },
];

export const EXPERIENCE = [
  {
    role: { es: "Desarrollador Web", en: "Web Developer" },
    company: { es: "Gobernación de Antioquia", en: "Government of Antioquia" },
    period: { es: "Jul 2023 - Dic 2023", en: "Jul 2023 - Dec 2023" },
    location: { es: "Medellín (Híbrido)", en: "Medellín (Hybrid)" },
    achievements: {
      es: [
        "Desarrollo y mantenimiento de funcionalidades en PHP y Laravel.",
        "Desarrollador encargado de implementar, mantener y mejorar módulos del sistema SISEDUCA, utilizando PHP, Laravel y PostgreSQL.",
        "Garantizando el correcto funcionamiento de la plataforma, optimizando procesos académicos y administrativos mediante soluciones eficientes y seguras.",
        "Documentación técnica y ejecución de pruebas.",
      ],
      en: [
        "Development and maintenance of functionalities in PHP and Laravel.",
        "Developer responsible for implementing, maintaining, and improving SISEDUCA system modules using PHP, Laravel, and PostgreSQL.",
        "Ensuring the proper functioning of the platform, optimising academic and administrative processes through efficient and secure solutions.",
        "Technical documentation and testing.",
      ],
    },
    tech: ["PHP", "Laravel", "Javascript", "Bootstrap", "PostgreSQL", "Github"],
  },
  {
    role: {
      es: "Desarrollador Web - Fullstack",
      en: "Web Developer - Fullstack",
    },
    company: { es: "Interactuando con la 9", en: "Interacting with the 9" },
    period: { es: "Feb 2019 - Jul 2019", en: "Feb 2019 - Jul 2019" },
    location: { es: "Medellín (Remoto)", en: "Medellín (Remoto)" },
    achievements: {
      es: [
        "Desarrollé una aplicación web para gestionar y compartir contenido audiovisual en una comunidad sin ánimo de lucro en Medellín, usando PHP y MySQL.",
        "Implementé control de usuarios, sistema de descargas y colaboré con lideres comunitarios para el levantamiento de requisitos y validación funcional.",
      ],
      en: [
        "I developed a web application to manage and share audiovisual content in a non-profit community in Medellín, using PHP and MySQL.",
        "I implemented user control, a download system, and collaborated with community leaders to gather requirements and perform functional validation.",
      ],
    },
    tech: ["PHP", "Javascript", "Bootstrap", "MySQL", "Github"],
  },
];

export const SKILLS = [
  { name: "HTML", level: 70, logo: "/logos/html.svg" },
  { name: "Javascript", level: 50, logo: "/logos/javascript.svg" },
  { name: "CSS3", level: 50, logo: "/logos/css3.svg" },
  { name: "PHP", level: 65, logo: "/logos/php.svg" },
  { name: "Python", level: 50, logo: "/logos/python.svg" },
  { name: "Java", level: 55, logo: "/logos/java.svg" },
  { name: "TypeScript", level: 45, logo: "/logos/typescript.svg" },
  { name: "Bootstrap", level: 55, logo: "/logos/bootstrap.svg" },
  { name: "Vue JS", level: 55, logo: "/logos/vue.svg" },
  { name: "React JS", level: 55, logo: "/logos/react.svg" },
  { name: "Angular", level: 40, logo: "/logos/angular.svg" },
  { name: "Tainwind CSS", level: 55, logo: "/logos/tailwind.svg" },
  { name: "Git", level: 45, logo: "/logos/git.svg" },
  { name: "Linux", level: 30, logo: "/logos/linux.svg" },
  { name: "MySQL", level: 50, logo: "/logos/mysql.svg" },
  { name: "SQL Server", level: 50, logo: "/logos/sql.svg" },
  { name: "Word", level: 75, logo: "/logos/word.svg" },
  { name: "Excel", level: 75, logo: "/logos/excel.svg" },
  { name: "Power Point", level: 75, logo: "/logos/powerpoint.svg" },
];

export const PROJECTS = [
  {
    title: { es: "Landing Dark Tune", en: "Dark Tune Landing" },
    desc: {
      es: "Landing page animada con Framer Motion y Tailwind. Efectos suaves, secciones responsivas y enfoque en perfomance.",
      en: "Animated landing page with Framer Motion and Tailwind. Smooth effects, responsive sections, and a focus on performance.",
    },
    cover: "/public/covers_projects/landing_darktune.png",
    tags: ["React JS", "Tailwind", "Framer Motion"],
    demo: "https://darktune-music.netlify.app/",
    repo: "https://github.com/mateoHinc/streamingDarkTune",
  },
  {
    title: {
      es: "Reproductor de Música Dark Tune",
      en: "Dark Tune Music Player",
    },
    desc: {
      es: "Interfaz de usuario clara y minimalista: los controles de reproducción, el listado de canciones (o géneros), la barra de progreso y otros elementos están organizados de forma sencilla y accesible.",
      en: "Clear and minimalist user interface: playback controls, song (or genre) list, progress bar, and other elements are organised in a simple and accessible way.",
    },
    cover: "/public/covers_projects/musicplayer_darktune.png",
    tags: ["React JS", "Vite", "Tailwind", "TypeScript"],
    demo: "https://musicplayer-darktune.netlify.app/",
    repo: "https://github.com/mateoHinc/musicPlayerDarkTune",
  },
];

// I18N (UI)
export const I18N = {
  es: {
    nav: {
      studies: "Estudios",
      experience: "Experiencia",
      skills: "Habilidades",
      projects: "Proyectos",
      cv: "CV",
      contact: "Contacto",
    },
    sections: {
      studies: "Estudios",
      experience: "Experiencia",
      skills: "Habilidades",
      projects: "Proyectos personales",
      cv: "Hoja de vida",
      contact: "Contacto",
    },
    labels: {
      name: "Nombre",
      location: "Ubicación",
      downloadCV: "Descargar CV",
      viewInBrowser: "Ver en el navegador",
      demo: "Demo",
      code: "Código",
      language: "Idioma",
      theme: "Tema",
      accent: "Acento",
    },
    footer: (name) => `© ${new Date().getFullYear()} ${name}. Hecho con
React, Tailwind y Framer Motion.`,
  },
  en: {
    nav: {
      studies: "Studies",
      experience: "Experience",
      skills: "Skills",
      projects: "Projects",
      cv: "CV",
      contact: "Contact",
    },
    sections: {
      studies: "Studies",
      experience: "Experience",
      skills: "Skills",
      projects: "Personal projects",
      cv: "Resume",
      contact: "Contact",
    },
    labels: {
      name: "Name",
      location: "Location",
      downloadCV: "Download CV",
      viewInBrowser: "View in browser",
      demo: "Demo",
      code: "Code",
      language: "Language",
      theme: "Theme",
      accent: "Accent",
    },
    footer: (name) => `© ${new Date().getFullYear()} ${name}. Built with
React, Tailwind and Framer Motion.`,
  },
};

export const ACCENTS = {
  morado: { from: "#6366f1", to: "#a855f7" },
  rojo: { from: "#ef4444", to: "#f97316" },
  amarillo: { from: "#eab308", to: "#f59e0b" },
  azul: { from: "#3b82f6", to: "#06b6d4" },
};
