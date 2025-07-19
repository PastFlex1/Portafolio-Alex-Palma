import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';

const ResumeSection = () => {
  return (
    <section id="resume" className="w-full py-16 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-3">
             <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm font-medium text-secondary-foreground">Currículum</div>
            <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">¿Quieres Saber Más?</h2>
            <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Descarga mi currículum para obtener una visión completa de mi experiencia, habilidades y formación académica.
            </p>
          </div>
          <a href="/resume.pdf" download="CV-AlexPalma.pdf">
            <Button size="lg" className="mt-6">
              <Download className="mr-2 h-5 w-5" />
              Descargar CV
            </Button>
          </a>
          <p className="text-xs text-muted-foreground mt-2">
            (Nota: El archivo es un PDF de ejemplo.)
          </p>
        </div>
      </div>
    </section>
  );
};

export default ResumeSection;
