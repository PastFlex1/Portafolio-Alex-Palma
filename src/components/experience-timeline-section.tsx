import { Briefcase } from 'lucide-react';

const timelineData = [
  {
    year: 'Principios de 2023',
    title: 'Prácticas de Desarrollo Frontend en WebStart Inc.',
    description: 'Mi primera inmersión en el mundo profesional. Aprendí los fundamentos de HTML, CSS y JavaScript moderno, colaborando en el mantenimiento de sitios web estáticos y aplicando mis conocimientos teóricos en proyectos reales.',
  },
  {
    year: 'Mediados 2023 - Finales 2023',
    title: 'Desarrollador Frontend Jr. en PixelPerfect Studios',
    description: 'Di el salto a React, donde contribuí al desarrollo de interfaces de usuario interactivas para clientes. Trabajé de cerca con diseñadores para implementar componentes de UI pixel-perfect y consumí APIs REST para integrar datos dinámicos.',
  },
  {
    year: 'Principios 2024 - Mediados 2024',
    title: 'Desarrollador de UI en CreativeCode Labs',
    description: 'Me especialicé en la creación de sistemas de diseño utilizando Tailwind CSS y ShadCN UI. Mi enfoque fue construir una librería de componentes reutilizables y accesibles, mejorando la consistencia y acelerando el desarrollo en toda la empresa.',
  },
  {
    year: 'Finales de 2024',
    title: 'Ingeniero Frontend en NextGen Solutions',
    description: 'Aquí trabajé con Next.js para construir aplicaciones web de alto rendimiento. Fui responsable de optimizar el renderizado del lado del servidor (SSR) y de mejorar las métricas de Core Web Vitals, resultando en una carga de página un 30% más rápida.',
  },
];

const ExperienceTimelineSection = () => {
  return (
    <section id="experience" className="w-full py-12 md:py-24 lg:py-32 bg-card">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl">Mi Trayectoria Profesional</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Un vistazo a mi recorrido profesional, desde mis inicios hasta mis más recientes logros y aprendizajes.
            </p>
          </div>
        </div>
        <div className="relative mt-12 max-w-3xl mx-auto">
          <div className="absolute left-1/2 -ml-px w-0.5 h-full bg-border" aria-hidden="true"></div>
          {timelineData.map((item, index) => (
            <div key={index} className="relative mb-12">
               <div className={`flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="z-10 absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 flex items-center justify-center w-12 h-12 bg-primary rounded-full ring-8 ring-card">
                        <Briefcase className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <p className="text-sm font-semibold text-primary mb-1">{item.year}</p>
                    <h3 className="font-headline text-xl font-bold">{item.title}</h3>
                    <p className="mt-2 text-muted-foreground">{item.description}</p>
                  </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceTimelineSection;
