
import Image from 'next/image';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Github, ExternalLink } from 'lucide-react';
import { useLanguage } from '@/context/language-context';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import TiltedCard from './tilted-card';
import SplitText from './split-text';
import Autoplay from "embla-carousel-autoplay"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import React from 'react';

const ProjectsSection = () => {
  const { t } = useLanguage();
  
  const webDesignProjects = [
    {
      title: t('projects.webDesign.project1.title'),
      description: t('projects.webDesign.project1.description'),
      image: '/diseño web/diseñoweb1.png',
      imageHint: 'weather app',
      liveUrl: 'https://www.figma.com/design/fZHPwLn0MkTtC1utLR7Dbp/Untitled?node-id=0-1&m=dev&t=FHT6u2os3TJ34fCw-1',
    },
    {
      title: t('projects.webDesign.project2.title'),
      description: t('projects.webDesign.project2.description'),
      image: '/diseño web/diseñoweb2.png',
      imageHint: 'ecommerce fashion prototype',
      liveUrl: 'https://www.figma.com/design/rtoJHNqrA5WYu7lrneLMsB/Untitled?node-id=0-1&m=dev&t=jg9hnA1pF8g7P1P6-1',
    },
    {
      title: t('projects.webDesign.project3.title'),
      description: t('projects.webDesign.project3.description'),
      image: '/diseño web/diseñoweb3.png',
      imageHint: 'mobile game ui',
      liveUrl: 'https://www.figma.com/design/CSvq2DECxJejrwsgp1BKrg/Untitled?node-id=0-1&m=dev&t=tsqCeielyoh8IRew-1',
    },
    {
      title: t('projects.webDesign.project4.title'),
      description: t('projects.webDesign.project4.description'),
      image: '/Bellefit.png',
      imageHint: 'fitness app ui',
      liveUrl: 'https://www.figma.com/design/YaW8bBRxNIo9yVZh0AxZBR/Untitled?node-id=0-1&m=dev&t=Oo9gBjRkao3SMTgw-1',
    },
  ];

  const webDevelopmentProjects = [
    {
      title: t('projects.webDevelopment.project1.title'),
      description: t('projects.webDevelopment.project1.description'),
      image: '/clima genius.png',
      imageHint: 'weather app interface',
      githubUrl: 'https://github.com/PastFlex1/clima-genius',
      liveUrl: 'https://climagen.netlify.app/',
    },
    {
      title: t('projects.webDevelopment.project2.title'),
      description: t('projects.webDevelopment.project2.description'),
      image: '/Medic Schedule.png',
      imageHint: 'dashboard analytics',
      githubUrl: 'https://github.com/PastFlex1/MedicSchedule.git',
      liveUrl: 'https://medicschedul.netlify.app/',
    },
    {
      title: t('projects.webDevelopment.project3.title'),
      description: t('projects.webDevelopment.project3.description'),
      image: '/Zenith.png',
      imageHint: 'meditation app interface',
      githubUrl: 'https://github.com/PastFlex1/Programa-bienestar-y-salud.git',
      liveUrl: 'https://studio--zenith-ue6jq.us-central1.hosted.app/auth/login',
    },
    {
      title: t('projects.webDevelopment.project4.title'),
      description: t('projects.webDevelopment.project4.description'),
      image: '/JWC.png',
      imageHint: 'billing system dashboard',
      githubUrl: '#',
      liveUrl: 'https://jwc-flowers.vercel.app',
    },
    {
      title: t('projects.webDevelopment.project5.title'),
      description: t('projects.webDevelopment.project5.description'),
      image: '/DevBlog.png',
      imageHint: 'developer blog interface',
      githubUrl: '#',
      liveUrl: 'https://devtalles-blog-qwerty-team-frontend.vercel.app/',
    },
  ];
  
  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true })
  )

  const renderProjectSlider = (projects: any[], isDesign: boolean) => (
    <Carousel
      plugins={[plugin.current]}
      opts={{
        align: "start",
        loop: true,
      }}
      className="w-full mx-auto pt-12"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
        {projects.map((project, index) => (
          <CarouselItem key={index} className="pl-4 basis-full md:basis-1/2 lg:basis-1/3">
            <div className="h-full p-1">
              <TiltedCard>
                <div className="relative p-0.5 group rounded-xl h-full">
                  <div className="absolute transition-all duration-1000 opacity-0 -inset-px bg-gradient-to-r from-primary via-primary to-primary rounded-xl blur-lg group-hover:opacity-70 group-hover:duration-200 animate-tilt"></div>
                  <Card className="relative overflow-hidden rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full bg-card">
                      <div className="relative h-[250px] w-full overflow-hidden rounded-t-xl">
                          <Image
                              src={project.image}
                              alt={`Captura de pantalla de ${project.title}`}
                              fill
                              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                              className="object-cover transition-transform duration-300 group-hover:scale-105"
                              {...(project.imageHint ? { 'data-ai-hint': project.imageHint } : {})}
                          />
                      </div>
                      <div className="p-6 flex-grow flex flex-col">
                          <h3 className="font-headline text-xl font-bold mb-2">{project.title}</h3>
                          <p className="text-muted-foreground text-sm mb-4 min-h-[40px] flex-grow">{project.description}</p>
                          <div className="flex justify-start gap-4 mt-auto">
                              {!isDesign && project.githubUrl && (
                                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                                    <Button variant="outline" size="sm">
                                    <Github className="mr-2 h-4 w-4" />
                                    {t('projects.github')}
                                    </Button>
                                </a>
                              )}
                              {project.liveUrl && project.liveUrl !== '#' && (
                                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                                    <Button size="sm">
                                    <ExternalLink className="mr-2 h-4 w-4" />
                                    {t('projects.demo')}
                                    </Button>
                                </a>
                              )}
                          </div>
                      </div>
                  </Card>
                </div>
              </TiltedCard>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="hidden md:flex absolute left-0 md:left-[-50px] top-1/2 -translate-y-1/2" />
      <CarouselNext className="hidden md:flex absolute right-0 md:right-[-50px] top-1/2 -translate-y-1/2" />
    </Carousel>
  );

  return (
    <section id="projects" className="w-full py-24 md:py-32 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-3">
            <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm font-medium text-secondary-foreground">{t('projects.badge')}</div>
            <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                <SplitText
                    text={t('projects.title')}
                    from={{ y: 120, scaleY: 2.3, scaleX: 0.7, opacity: 0, visibility: 'hidden' }}
                    to={{ y: 0, scaleY: 1, scaleX: 1, opacity: 1, visibility: 'visible' }}
                    duration={1}
                    ease="back.inOut(2)"
                    stagger={0.03}
                />
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              {t('projects.subtitle')}
            </p>
          </div>
        </div>

        <Tabs defaultValue="development" className="w-full max-w-7xl mx-auto pt-10">
          <TabsList className="grid w-full grid-cols-2 max-w-md mx-auto">
            <TabsTrigger value="development">{t('projects.tabs.development')}</TabsTrigger>
            <TabsTrigger value="design">{t('projects.tabs.design')}</TabsTrigger>
          </TabsList>
          <TabsContent value="development">
            {renderProjectSlider(webDevelopmentProjects, false)}
          </TabsContent>
          <TabsContent value="design">
            {renderProjectSlider(webDesignProjects, true)}
          </TabsContent>
        </Tabs>

      </div>
    </section>
  );
};

export default ProjectsSection;
