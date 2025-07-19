import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';

const AboutSection = () => {
  return (
    <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-card">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-24">
          <div className="flex justify-center">
            <Card className="overflow-hidden rounded-full shadow-2xl w-64 h-64 md:w-80 md:h-80">
              <CardContent className="p-0">
                <Image
                  src="https://placehold.co/400x400.png"
                  alt="Retrato profesional"
                  width={400}
                  height={400}
                  className="object-cover"
                  data-ai-hint="professional portrait"
                />
              </CardContent>
            </Card>
          </div>
          <div className="space-y-4 text-center lg:text-left">
            <div className="space-y-2">
              <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl">Sobre Mí</h2>
              <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mx-auto lg:mx-0">
                Soy un desarrollador de software con una gran pasión por crear interfaces de usuario intuitivas y experiencias digitales memorables. Aunque estoy al principio de mi carrera, estoy ansioso por aprender, crecer y contribuir a proyectos desafiantes. Me encanta resolver problemas y transformar ideas complejas en código elegante y funcional.
              </p>
            </div>
            <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mx-auto lg:mx-0">
              Cuando no estoy programando, disfruto explorando nuevas tecnologías, colaborando en proyectos de código abierto y tomando una buena taza de café.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
