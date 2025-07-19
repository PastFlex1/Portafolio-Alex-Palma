import { Briefcase } from 'lucide-react';

const timelineData = [
  {
    year: '2023 - 2024',
    title: 'Desarrollador Frontend Jr. en Innovatech Solutions',
    description: 'Comencé mi carrera profesional en Innovatech, donde me sumergí en el desarrollo de aplicaciones web dinámicas con React y Next.js. Colaboré en el rediseño del portal de clientes, mejorando la experiencia de usuario y optimizando el rendimiento en un 20%.',
  },
  {
    year: '2024 - 2025',
    title: 'Desarrollador de Software en Digital Ascent',
    description: 'En Digital Ascent, asumí mayores responsabilidades, liderando el desarrollo de componentes clave para una plataforma SaaS. Implementé TypeScript para fortalecer la base del código y comencé a integrar soluciones de backend ligeras con Node.js, ampliando mis habilidades full-stack.',
  },
  {
    year: 'Principios de 2025',
    title: 'Explorando la IA Generativa',
    description: 'Actualmente, estoy profundizando en el campo de la inteligencia artificial. He comenzado a desarrollar proyectos personales utilizando Genkit para crear aplicaciones inteligentes e interactivas, buscando aplicar estas tecnologías de vanguardia en futuros desafíos profesionales.',
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
        <div className="relative mt-12">
          <div className="absolute left-1/2 -ml-px w-0.5 h-full bg-border" aria-hidden="true"></div>
          {timelineData.map((item, index) => (
            <div key={index} className="relative mb-12">
              <div className="flex items-center justify-center mb-4">
                <div className="z-10 flex items-center justify-center w-12 h-12 bg-primary rounded-full ring-8 ring-card">
                  <Briefcase className="w-6 h-6 text-primary-foreground" />
                </div>
              </div>
              <div className="relative">
                <div className={`w-full text-center ${index % 2 === 0 ? 'lg:text-right lg:pr-16' : 'lg:text-left lg:pl-16'}`}>
                    <p className="text-sm font-semibold text-primary mb-1">{item.year}</p>
                    <h3 className="font-headline text-xl font-bold">{item.title}</h3>
                    <p className="mt-2 text-muted-foreground max-w-md mx-auto">{item.description}</p>
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
