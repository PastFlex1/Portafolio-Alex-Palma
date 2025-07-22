
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';
import { useLanguage } from '@/context/language-context';
import SplitText from './split-text';

const ResumeSection = () => {
  const { t } = useLanguage();
  return (
    <section id="resume" className="w-full py-24 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-3">
             <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm font-medium text-secondary-foreground">{t('resume.badge')}</div>
            <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                <SplitText
                    text={t('resume.title')}
                    from={{ y: 120, scaleY: 2.3, scaleX: 0.7, opacity: 0 }}
                    to={{ y: 0, scaleY: 1, scaleX: 1, opacity: 1 }}
                    duration={1}
                    ease="back.inOut(2)"
                    delay={30}
                />
            </h2>
            <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              {t('resume.subtitle')}
            </p>
          </div>
          <a href="/resume.pdf" download="CV-AlexPalma.pdf">
            <Button size="lg" className="mt-6">
              <Download className="mr-2 h-5 w-5" />
              {t('resume.download')}
            </Button>
          </a>
          <p className="text-xs text-muted-foreground mt-2">
            {t('resume.note')}
          </p>
        </div>
      </div>
    </section>
  );
};

export default ResumeSection;
