import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';

const AboutSection = () => {
  return (
    <section id="about" className="w-full py-16 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="flex justify-center">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent rounded-full blur-lg opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
              <Card className="relative overflow-hidden rounded-full shadow-lg w-64 h-64 md:w-80 md:h-80 border-4 border-background">
                <CardContent className="p-0">
                  <Image
                    src="https://placehold.co/400x400.png"
                    alt="Retrato profesional de Alex Palma"
                    width={400}
                    height={400}
                    className="object-cover"
                    data-ai-hint="professional portrait ecuadorian"
                  />
                </CardContent>
              </Card>
            </div>
          </div>
          <div className="space-y-6 text-center lg:text-left">
            <div className="space-y-3">
              <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm font-medium text-secondary-foreground">Sobre Mí</div>
              <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Un Vistazo a Mi Mundo</h2>
              <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mx-auto lg:mx-0">
                ¡Hola! Soy Alex Palma, un desarrollador y diseñador web ecuatoriano de 19 años. Me apasiona crear interfaces de usuario intuitivas y experiencias digitales memorables. He trabajado como freelancer y para empresas, lo que me ha dado una base sólida en el desarrollo práctico.
              </p>
            </div>
            <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mx-auto lg:mx-0">
              Actualmente, estoy en el tercer semestre de Ingeniería de Software en la Universidad Politécnica Salesiana, donde sigo perfeccionando mis habilidades para convertir ideas complejas en código elegante y funcional.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
