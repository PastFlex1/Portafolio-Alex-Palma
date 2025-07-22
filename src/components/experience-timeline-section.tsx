
import { Briefcase, Building, Rocket, Code } from 'lucide-react';
import { useLanguage } from '@/context/language-context';
import SplitText from './split-text';

const icons = {
  Code: <Code />,
  Briefcase: <Briefcase />,
  Building: <Building />,
  Rocket: <Rocket />,
};

const ExperienceTimelineSection = () => {
  const { t } = useLanguage();
  const timelineData = t('experience.timeline') as any[];

  return (
    <section id="experience" className="w-full h-screen flex flex-col items-center justify-center">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-3">
             <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm font-medium text-secondary-foreground">{t('experience.badge')}</div>
            <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                <SplitText
                    text={t('experience.title')}
                    from={{ y: 120, scaleY: 2.3, scaleX: 0.7, opacity: 0 }}
                    to={{ y: 0, scaleY: 1, scaleX: 1, opacity: 1 }}
                    duration={1}
                    ease="back.inOut(2)"
                    delay={30}
                />
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              {t('experience.subtitle')}
            </p>
          </div>
        </div>
        <div className="relative mt-16 max-w-5xl mx-auto">
          <div className="absolute left-1/2 -ml-px w-0.5 h-full bg-border" aria-hidden="true"></div>
          {timelineData.map((item, index) => (
            <div key={index} className="relative mb-16">
               <div className={`flex items-center ${index % 2 === 0 ? 'justify-start text-left' : 'justify-end text-right'}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                    <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 transform">
                        <div className="z-10 flex items-center justify-center w-12 h-12 bg-primary rounded-full ring-8 ring-background text-primary-foreground">
                            {
                                index === 0 ? icons.Code :
                                index === 1 ? icons.Briefcase :
                                index === 2 ? icons.Building :
                                icons.Rocket
                            }
                        </div>
                    </div>
                    <div className="bg-card p-6 rounded-lg shadow-md border">
                        <p className="text-sm font-semibold text-primary mb-1">{item.year}</p>
                        <h3 className="font-headline text-xl font-bold">{item.title}</h3>
                        <p className="text-sm text-muted-foreground mb-3">{item.company}</p>
                        <p className="text-muted-foreground">{item.description}</p>
                    </div>
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
