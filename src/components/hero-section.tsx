'use client';
import { Button } from '@/components/ui/button';
import { ArrowDown, Download } from 'lucide-react';
import Link from 'next/link';
import { useLanguage } from '@/context/language-context';
import SplitText from './split-text';

const HeroSection = () => {
  const { t, language } = useLanguage();

  const cvPath = language === 'es' 
    ? '/Hoja de vida alex palma ing software.pdf' 
    : '/Alex Palma - CV - ENGLISH- version.pdf';
  
  const cvDownloadName = language === 'es'
    ? 'CV-Alex-Palma-ES.pdf'
    : 'CV-Alex-Palma-EN.pdf';

  return (
    <section id="home" className="relative flex h-screen w-full flex-col items-center justify-center text-center">
      <div className="container px-4 md:px-6 z-10">
        <div className="grid gap-8">
          <div className="flex flex-col items-center justify-center space-y-6">
            <div className="space-y-4">
              <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm font-medium text-secondary-foreground">{t('hero.role')}</div>
              <h1 className="font-headline text-4xl font-extrabold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
                <SplitText text={t('hero.title')} />
              </h1>
              <p className="mx-auto max-w-[700px] text-lg text-muted-foreground md:text-xl">
                {t('hero.subtitle')}
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="#contact">
                <Button size="lg">{t('hero.cta')}</Button>
              </Link>
              <a href={cvPath} download={cvDownloadName}>
                <Button size="lg" variant="secondary">
                    <Download className="mr-2 h-5 w-5" />
                    {t('hero.resume')}
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
      <Link href="#about" className="absolute bottom-10 animate-bounce z-10" aria-label="Ir a la sección 'Sobre mí'">
        <ArrowDown className="h-6 w-6 text-muted-foreground" />
      </Link>
    </section>
  );
};

export default HeroSection;
