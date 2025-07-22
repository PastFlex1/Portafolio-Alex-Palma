import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Github, ExternalLink } from 'lucide-react';
import { useLanguage } from '@/context/language-context';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import TiltedCard from './tilted-card';

const ProjectsSection = () => {
  const { t } = useLanguage();
  
  const webDesignProjects = [
    {
      title: t('projects.webDesign.project1.title'),
      description: t('projects.webDesign.project1.description'),
      image: 'https://placehold.co/600x400.png',
      imageHint: 'e-commerce website design',
      githubUrl: '#',
      liveUrl: '#',
    },
    {
      title: t('projects.webDesign.project2.title'),
      description: t('projects.webDesign.project2.description'),
      image: 'https://placehold.co/600x400.png',
      imageHint: 'portfolio design figma',
      githubUrl: '#',
      liveUrl: '#',
    },
    {
      title: t('projects.webDesign.project3.title'),
      description: t('projects.webDesign.project3.description'),
      image: 'https://placehold.co/600x400.png',
      imageHint: 'landing page mockup',
      githubUrl: '#',
      liveUrl: '#',
    },
    {
      title: t('projects.webDesign.project4.title'),
      description: t('projects.webDesign.project4.description'),
      image: 'https://placehold.co/600x400.png',
      imageHint: 'mobile app ui',
      githubUrl: '#',
      liveUrl: '#',
    },
  ];

  const webDevelopmentProjects = [
    {
      title: t('projects.webDevelopment.project1.title'),
      description: t('projects.webDevelopment.project1.description'),
      image: 'https://placehold.co/600x400.png',
      imageHint: 'web application screenshot',
      githubUrl: '#',
      liveUrl: '#',
    },
    {
      title: t('projects.webDevelopment.project2.title'),
      description: t('projects.webDevelopment.project2.description'),
      image: 'https://placehold.co/600x400.png',
      imageHint: 'dashboard analytics',
      githubUrl: '#',
      liveUrl: '#',
    },
    {
      title: t('projects.webDevelopment.project3.title'),
      description: t('projects.webDevelopment.project3.description'),
      image: 'https://placehold.co/600x400.png',
      imageHint: 'blog platform react',
      githubUrl: '#',
      liveUrl: '#',
    },
    {
        title: t('projects.webDevelopment.project4.title'),
        description: t('projects.webDevelopment.project4.description'),
        image: 'https://placehold.co/600x400.png',
        imageHint: 'saas application interface',
        githubUrl: '#',
        liveUrl: '#',
      },
  ];

  const renderProjectGrid = (projects: any[]) => (
    <div className="mx-auto grid gap-8 pt-12 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
      {projects.map((project) => (
        <TiltedCard key={project.title}>
            <Card className="group overflow-hidden rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full bg-card">
                <div className="relative h-[250px] w-full overflow-hidden rounded-t-xl">
                    <Image
                        src={project.image}
                        alt={`Captura de pantalla de ${project.title}`}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                        data-ai-hint={project.imageHint}
                    />
                </div>
                <div className="p-6 flex-grow flex flex-col">
                    <h3 className="font-headline text-xl font-bold mb-2">{project.title}</h3>
                    <p className="text-muted-foreground text-sm mb-4 min-h-[40px] flex-grow">{project.description}</p>
                    <div className="flex justify-start gap-4 mt-auto">
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                            <Button variant="outline" size="sm">
                            <Github className="mr-2 h-4 w-4" />
                            {t('projects.github')}
                            </Button>
                        </a>
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                            <Button size="sm">
                            <ExternalLink className="mr-2 h-4 w-4" />
                            {t('projects.demo')}
                            </Button>
                        </a>
                    </div>
                </div>
            </Card>
        </TiltedCard>
      ))}
    </div>
  );

  return (
    <section id="projects" className="w-full py-16 md:py-24 lg:py-32 bg-secondary/50 dark:bg-secondary/20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-3">
            <div className="inline-block rounded-lg bg-background px-3 py-1 text-sm font-medium text-foreground">{t('projects.badge')}</div>
            <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">{t('projects.title')}</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              {t('projects.subtitle')}
            </p>
          </div>
        </div>

        <Tabs defaultValue="development" className="w-full max-w-4xl mx-auto pt-10">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="development">{t('projects.tabs.development')}</TabsTrigger>
            <TabsTrigger value="design">{t('projects.tabs.design')}</TabsTrigger>
          </TabsList>
          <TabsContent value="development">
            {renderProjectGrid(webDevelopmentProjects)}
          </TabsContent>
          <TabsContent value="design">
            {renderProjectGrid(webDesignProjects)}
          </TabsContent>
        </Tabs>

      </div>
    </section>
  );
};

export default ProjectsSection;
