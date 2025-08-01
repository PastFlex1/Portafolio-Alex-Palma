const translations = {
  es: {
    theme: {
      light: 'Claro',
      dark: 'Oscuro',
      system: 'Sistema',
    },
    header: {
      about: 'Sobre mí',
      skills: 'Habilidades',
      experience: 'Trayectoria',
      projects: 'Proyectos',
      contact: 'Contáctame',
      backToHome: 'Volver al inicio',
    },
    hero: {
      role: 'Desarrollador Frontend',
      title: 'Alex Palma',
      subtitle: 'Transformando ideas en experiencias digitales elegantes y funcionales. Apasionado por el código limpio y el diseño intuitivo.',
      cta: 'Hablemos',
      resume: 'Descargar CV',
    },
    about: {
      badge: 'Sobre Mí',
      title: 'Un Vistazo a Mi Mundo',
      paragraph1: '¡Hola! Soy Alex Palma, un desarrollador y diseñador web ecuatoriano de 19 años. Me apasiona crear interfaces de usuario intuitivas y experiencias digitales memorables. He trabajado como freelancer y para empresas, lo que me ha dado una base sólida en el desarrollo práctico.',
      paragraph2: 'Actualmente, estoy en el tercer semestre de Ingeniería de Software en la Universidad Politécnica Salesiana, donde sigo perfeccionando mis habilidades para convertir ideas complejas en código elegante y funcional.',
    },
    skills: {
      badge: 'Habilidades',
      title: 'Mi Caja de Herramientas',
      subtitle: 'Estas son algunas de las tecnologías y metodologías con las que construyo soluciones digitales.',
      categories: {
        languages: 'Lenguajes',
        frameworks: 'Frameworks y Librerías',
        tools: 'Herramientas y Plataformas',
        db: 'Bases de Datos y Otros',
      },
    },
    experience: {
      badge: 'Experiencia',
      title: 'Mi Trayectoria Profesional',
      subtitle: 'Un vistazo a mi recorrido profesional, desde mis inicios hasta mis más recientes logros y aprendizajes.',
      timeline: [
        {
          year: 'Principios de 2023',
          title: 'Prácticas de Desarrollo Frontend',
          company: 'WebStart Inc.',
          description: 'Mi primera inmersión en el mundo profesional. Aprendí los fundamentos de HTML, CSS y JavaScript moderno, colaborando en el mantenimiento de sitios web estáticos y aplicando mis conocimientos teóricos en proyectos reales.',
        },
        {
          year: 'Mediados 2023 - Finales 2023',
          title: 'Desarrollador Frontend Jr.',
          company: 'PixelPerfect Studios',
          description: 'Di el salto a React, donde contribuí al desarrollo de interfaces de usuario interactivas para clientes. Trabajé de cerca con diseñadores para implementar componentes de UI pixel-perfect y consumí APIs REST para integrar datos dinámicos.',
        },
        {
          year: 'Principios 2024 - Mediados 2024',
          title: 'Desarrollador de UI',
          company: 'CreativeCode Labs',
          description: 'Me especialicé en la creación de sistemas de diseño utilizando Tailwind CSS y ShadCN UI. Mi enfoque fue construir una librería de componentes reutilizables y accesibles, mejorando la consistencia y acelerando el desarrollo en toda la empresa.',
        },
        {
          year: 'Finales de 2024',
          title: 'Ingeniero Frontend',
          company: 'NextGen Solutions',
          description: 'Aquí trabajé con Next.js para construir aplicaciones web de alto rendimiento. Fui responsable de optimizar el renderizado del lado del servidor (SSR) y de mejorar las métricas de Core Web Vitals, resultando en una carga de página un 30% más rápida.',
        },
      ]
    },
    projects: {
      badge: 'Proyectos',
      title: 'Mi Trabajo Reciente',
      subtitle: 'Aquí hay algunos de los proyectos en los que he trabajado, separados por mi rol principal.',
      tabs: {
        development: 'Desarrollo Web',
        design: 'Diseño Web',
      },
      webDevelopment: {
        project1: {
          title: 'Clima Genius',
          description: 'Una aplicación para consultar el clima y la zona horaria de cualquier ciudad en tiempo real, construida con React y APIs externas.',
        },
        project2: {
          title: 'Sistema de Citas Médicas (MedicSchedule)',
          description: 'Una aplicación web para agendar y gestionar citas médicas, pensada para optimizar el tiempo de doctores y pacientes.',
        },
        project3: {
          title: 'Plataforma de Blogging',
          description: 'Un blog con todas las funciones, panel de administrador y generación de sitios estáticos (SSG) para un rendimiento óptimo.',
        },
        project4: {
          title: 'SaaS para Gestión de Proyectos',
          description: 'Interfaz para una aplicación SaaS, centrándome en componentes reutilizables y un estado global eficiente con Zustand.',
        },
      },
      webDesign: {
        project1: {
          title: 'Breezy - App del Clima',
          description: 'Prototipo de alta fidelidad en Figma para una aplicación de pronóstico del tiempo, enfocado en una interfaz limpia y una experiencia de usuario clara.',
        },
        project2: {
          title: 'Concepto Shopify - Tienda de Moda',
          description: 'Prototipo de alta fidelidad para una tienda online de moda, inspirado en plataformas como Shein y Temu, con un enfoque en la experiencia de compra visual.',
        },
        project3: {
          title: 'Prototipo de Juego de Comida',
          description: 'Un prototipo de interfaz de usuario vibrante y atractivo para un juego de cocina móvil, diseñado en Figma con un enfoque en interacciones divertidas y una estética lúdica.',
        },
        project4: {
          title: 'UI Kit para Aplicación Móvil',
          description: 'Creación de un sistema de diseño completo en Figma, incluyendo componentes, tipografía y paleta de colores.',
        },
      },
      github: 'GitHub',
      demo: 'Ver Demo'
    },
    resume: {
      badge: 'Currículum',
      title: '¿Quieres Saber Más?',
      subtitle: 'Descarga mi currículum para obtener una visión completa de mi experiencia, habilidades y formación académica.',
      download: 'Descargar CV',
      note: '(Nota: El archivo es un PDF de ejemplo.)',
    },
    contact: {
      badge: 'Contacto',
      title: 'Hablemos',
      subtitle: '¿Tienes alguna pregunta o propuesta, o simplemente quieres saludar? ¡Adelante!',
      form: {
        name: 'Nombre',
        name_placeholder: 'Tu Nombre',
        email: 'Correo Electrónico',
        email_placeholder: 'tu@email.com',
        message: 'Mensaje',
        message_placeholder: 'Tu Mensaje...',
        submit: 'Enviar Mensaje',
        success_title: '¡Mensaje Enviado!',
        success_description: 'Gracias por contactarme. Te responderé lo antes posible.',
        error_name: 'El nombre debe tener al menos 2 caracteres.',
        error_email: 'Por favor, introduce una dirección de correo válida.',
        error_message: 'El mensaje debe tener al menos 10 caracteres.',
      }
    },
    footer: {
      copy: '© {year} Alex Palma. Diseñado y construido con ❤️.'
    }
  },
  en: {
    theme: {
      light: 'Light',
      dark: 'Dark',
      system: 'System',
    },
    header: {
      about: 'About Me',
      skills: 'Skills',
      experience: 'Experience',
      projects: 'Projects',
      contact: 'Contact Me',
      backToHome: 'Back to home',
    },
    hero: {
      role: 'Frontend Developer',
      title: 'Alex Palma',
      subtitle: 'Transforming ideas into elegant and functional digital experiences. Passionate about clean code and intuitive design.',
      cta: "Let's Talk",
      resume: 'Download CV',
    },
    about: {
      badge: 'About Me',
      title: 'A Glimpse Into My World',
      paragraph1: "Hello! I'm Alex Palma, a 19-year-old Ecuadorian web developer and designer. I'm passionate about creating intuitive user interfaces and memorable digital experiences. I have worked as a freelancer and for companies, which has given me a solid foundation in practical development.",
      paragraph2: "Currently, I'm in the third semester of Software Engineering at Universidad Politécnica Salesiana, where I continue to hone my skills to turn complex ideas into elegant and functional code.",
    },
    skills: {
      badge: 'Skills',
      title: 'My Toolbox',
      subtitle: 'These are some of the technologies and methodologies I use to build digital solutions.',
      categories: {
        languages: 'Languages',
        frameworks: 'Frameworks & Libraries',
        tools: 'Tools & Platforms',
        db: 'Databases & Others',
      },
    },
    experience: {
      badge: 'Experience',
      title: 'My Professional Journey',
      subtitle: 'A look at my professional journey, from my beginnings to my most recent achievements and learnings.',
      timeline: [
        {
          year: 'Early 2023',
          title: 'Frontend Development Internship',
          company: 'WebStart Inc.',
          description: 'My first dive into the professional world. I learned the fundamentals of modern HTML, CSS, and JavaScript, collaborating on the maintenance of static websites and applying my theoretical knowledge to real projects.',
        },
        {
          year: 'Mid 2023 - Late 2023',
          title: 'Jr. Frontend Developer',
          company: 'PixelPerfect Studios',
          description: 'I made the leap to React, where I contributed to developing interactive user interfaces for clients. I worked closely with designers to implement pixel-perfect UI components and consumed REST APIs to integrate dynamic data.',
        },
        {
          year: 'Early 2024 - Mid 2024',
          title: 'UI Developer',
          company: 'CreativeCode Labs',
          description: 'I specialized in creating design systems using Tailwind CSS and ShadCN UI. My focus was on building a library of reusable and accessible components, improving consistency and speeding up development across the company.',
        },
        {
          year: 'Late 2024',
          title: 'Frontend Engineer',
          company: 'NextGen Solutions',
          description: 'Here I worked with Next.js to build high-performance web applications. I was responsible for optimizing server-side rendering (SSR) and improving Core Web Vitals metrics, resulting in a 30% faster page load.',
        },
      ]
    },
    projects: {
      badge: 'Projects',
      title: 'My Recent Work',
      subtitle: 'Here are some of the projects I have worked on, separated by my main role.',
      tabs: {
        development: 'Web Development',
        design: 'Web Design',
      },
      webDevelopment: {
        project1: {
          title: 'Clima Genius',
          description: 'An application to check the weather and time zone of any city in real time, built with React and external APIs.',
        },
        project2: {
          title: 'Medical Appointment System (MedicSchedule)',
          description: 'A web application to schedule and manage medical appointments, designed to optimize time for doctors and patients.',
        },
        project3: {
          title: 'Blogging Platform',
          description: 'A full-featured blog with an admin panel and static site generation (SSG) for optimal performance.',
        },
        project4: {
          title: 'SaaS for Project Management',
          description: 'Interface for a SaaS application, focusing on reusable components and efficient global state with Zustand.',
        },
      },
      webDesign: {
        project1: {
          title: 'Breezy - Weather App',
          description: 'High-fidelity prototype in Figma for a weather forecast application, focused on a clean interface and a clear user experience.',
        },
        project2: {
          title: 'Shopify Concept - Fashion Store',
          description: 'High-fidelity prototype for a fashion e-commerce store, inspired by platforms like Shein and Temu, focusing on a visual shopping experience.',
        },
        project3: {
          title: 'Food Game Prototype',
          description: 'A vibrant and engaging UI prototype for a mobile cooking game, designed in Figma with a focus on fun interactions and a playful aesthetic.',
        },
        project4: {
          title: 'UI Kit for Mobile Application',
          description: 'Creation of a complete design system in Figma, including components, typography, and color palette.',
        },
      },
      github: 'GitHub',
      demo: 'View Demo'
    },
    resume: {
      badge: 'Resume',
      title: 'Want to Know More?',
      subtitle: 'Download my resume to get a complete overview of my experience, skills, and academic background.',
      download: 'Download CV',
      note: '(Note: The file is a sample PDF.)',
    },
    contact: {
      badge: 'Contact',
      title: "Let's Talk",
      subtitle: 'Have a question or a proposal, or just want to say hello? Go ahead!',
      form: {
        name: 'Name',
        name_placeholder: 'Your Name',
        email: 'Email',
        email_placeholder: 'you@email.com',
        message: 'Message',
        message_placeholder: 'Your Message...',
        submit: 'Send Message',
        success_title: 'Message Sent!',
        success_description: "Thanks for contacting me. I'll get back to you as soon as possible.",
        error_name: 'Name must be at least 2 characters.',
        error_email: 'Please enter a valid email address.',
        error_message: 'Message must be at least 10 characters.',
      }
    },
    footer: {
      copy: '© {year} Alex Palma. Designed and built with ❤️.'
    }
  },
};

export default translations;
