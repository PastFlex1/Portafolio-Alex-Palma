import { Button } from '@/components/ui/button';
import { ArrowDown, Download } from 'lucide-react';
import Link from 'next/link';

const HeroSection = () => {
  return (
    <section id="home" className="relative flex min-h-screen w-full flex-col items-center justify-center text-center">
        <div className="absolute inset-0 -z-10 h-full w-full bg-background bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] dark:bg-[radial-gradient(#27272a_1px,transparent_1px)]"></div>
        <div className="absolute inset-0 -z-10 h-full w-full bg-gradient-to-b from-background via-background/80 to-background"></div>

      <div className="container px-4 md:px-6">
        <div className="grid gap-8">
          <div className="flex flex-col items-center justify-center space-y-6">
            <div className="space-y-4">
              <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm font-medium text-secondary-foreground">Desarrollador Frontend</div>
              <h1 className="font-headline text-4xl font-extrabold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
                Alex Palma
              </h1>
              <p className="mx-auto max-w-[700px] text-lg text-muted-foreground md:text-xl">
                Transformando ideas en experiencias digitales elegantes y funcionales. Apasionado por el código limpio y el diseño intuitivo.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="#contact">
                <Button size="lg">Hablemos</Button>
              </Link>
              <Link href="/resume.pdf" download="CV-AlexPalma.pdf">
                <Button size="lg" variant="secondary">
                    <Download className="mr-2 h-5 w-5" />
                    Descargar CV
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Link href="#about" className="absolute bottom-10 animate-bounce" aria-label="Ir a la sección 'Sobre mí'">
        <ArrowDown className="h-6 w-6 text-muted-foreground" />
      </Link>
    </section>
  );
};

export default HeroSection;
