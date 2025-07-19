import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Github, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'Proyecto Uno',
    description: 'Una breve descripción del proyecto, las tecnologías utilizadas y el propósito del mismo. Mantenlo conciso e informativo.',
    image: 'https://placehold.co/600x400.png',
    imageHint: 'web application screenshot',
    githubUrl: '#',
    liveUrl: '#',
  },
  {
    title: 'Proyecto Dos',
    description: 'Otra descripción de un proyecto increíble. Destaca los desafíos que superaste y lo que aprendiste.',
    image: 'https://placehold.co/600x400.png',
    imageHint: 'dashboard analytics',
    githubUrl: '#',
    liveUrl: '#',
  },
  {
    title: 'Proyecto Tres',
    description: 'Este proyecto muestra la habilidad X. Fue construido con Y y desplegado en Z. Muy impresionante.',
    image: 'https://placehold.co/600x400.png',
    imageHint: 'mobile app interface',
    githubUrl: '#',
    liveUrl: '#',
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="w-full py-16 md:py-24 lg:py-32 bg-secondary">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-3">
            <div className="inline-block rounded-lg bg-background px-3 py-1 text-sm font-medium text-foreground">Proyectos</div>
            <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Mi Trabajo Reciente</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Aquí hay algunos de los proyectos en los que he trabajado.
            </p>
          </div>
        </div>
        <div className="mx-auto grid gap-8 py-12 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
             <Card key={project.title} className="group overflow-hidden rounded-xl shadow-sm hover:shadow-xl transition-all duration-300">
                <CardContent className="p-0">
                    <div className="overflow-hidden">
                        <Image
                        src={project.image}
                        alt={`Captura de pantalla de ${project.title}`}
                        width={600}
                        height={400}
                        className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-500"
                        data-ai-hint={project.imageHint}
                        />
                    </div>
                </CardContent>
                <div className="p-6 bg-card">
                    <h3 className="font-headline text-xl font-bold mb-2">{project.title}</h3>
                    <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                    <div className="flex justify-start gap-4">
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                            <Button variant="outline" size="sm">
                            <Github className="mr-2 h-4 w-4" />
                            GitHub
                            </Button>
                        </a>
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                            <Button size="sm">
                            <ExternalLink className="mr-2 h-4 w-4" />
                            Ver Demo
                            </Button>
                        </a>
                    </div>
                </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
