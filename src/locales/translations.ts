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
      subtitle: 'Aquí hay algunos de los proyectos en los que he trabajado.',
      project1: {
        title: 'Proyecto Uno',
        description: 'Una breve descripción del proyecto, las tecnologías utilizadas y el propósito del mismo. Mantenlo conciso e informativo.',
      },
      project2: {
        title: 'Proyecto Dos',
        description: 'Otra descripción de un proyecto increíble. Destaca los desafíos que superaste y lo que aprendiste.',
      },
      project3: {
        title: 'Proyecto Tres',
        description: 'Este proyecto muestra la habilidad X. Fue construido con Y y desplegado en Z. Muy impresionante.',
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
      subtitle: 'Here are some of the projects I have worked on.',
      project1: {
        title: 'Project One',
        description: 'A brief description of the project, the technologies used, and its purpose. Keep it concise and informative.',
      },
      project2: {
        title: 'Project Two',
        description: 'Another description of an amazing project. Highlight the challenges you overcame and what you learned.',
      },
      project3: {
        title: 'Project Three',
        description: 'This project showcases X skill. It was built with Y and deployed on Z. Very impressive.',
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
