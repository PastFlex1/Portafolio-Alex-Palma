import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';

const HeroSection = () => {
  return (
    <section id="home" className="relative flex min-h-[calc(100vh-5rem)] w-full flex-col items-center justify-center text-center">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6">
          <div className="flex flex-col items-center justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
                Alex Palma
              </h1>
              <p className="mx-auto max-w-[700px] text-lg text-muted-foreground md:text-xl">
                Desarrollador y Diseñador Web | Estudiante de Ingeniería de Software.
              </p>
            </div>
            <div className="space-x-4">
              <a href="#projects">
                <Button>Ver mis proyectos</Button>
              </a>
              <a href="#contact">
                <Button variant="secondary">Hablemos</Button>
              </a>
            </div>
          </div>
        </div>
      </div>
      <a href="#about" className="absolute bottom-10 animate-bounce" aria-label="Ir a la sección 'Sobre mí'">
        <ArrowDown className="h-6 w-6" />
      </a>
    </section>
  );
};

export default HeroSection;
