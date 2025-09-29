
'use client';
import { useLanguage } from '@/context/language-context';
import {
  SiReact, SiTypescript, SiJavascript, SiNextdotjs, SiFigma, SiGithub,
  SiFlutter, SiCss3, SiTailwindcss, SiVite, SiNpm, SiSass, SiHtml5,
  SiGit, SiOpenjdk
} from '@icons-pack/react-simple-icons';
import SplitText from './split-text';
import { LogoLoop } from './logo-loop';

const skills = [
  { name: 'React', icon: <SiReact size={50} className="text-muted-foreground transition-colors group-hover/item:text-primary" /> },
  { name: 'TypeScript', icon: <SiTypescript size={50} className="text-muted-foreground transition-colors group-hover/item:text-primary" /> },
  { name: 'JavaScript', icon: <SiJavascript size={50} className="text-muted-foreground transition-colors group-hover/item:text-primary" /> },
  { name: 'Next.js', icon: <SiNextdotjs size={50} className="text-muted-foreground transition-colors group-hover/item:text-primary" /> },
  { name: 'Figma', icon: <SiFigma size={50} className="text-muted-foreground transition-colors group-hover/item:text-primary" /> },
  { name: 'GitHub', icon: <SiGithub size={50} className="text-muted-foreground transition-colors group-hover/item:text-primary" /> },
  { name: 'Flutter', icon: <SiFlutter size={50} className="text-muted-foreground transition-colors group-hover/item:text-primary" /> },
  { name: 'CSS3', icon: <SiCss3 size={50} className="text-muted-foreground transition-colors group-hover/item:text-primary" /> },
  { name: 'Tailwind CSS', icon: <SiTailwindcss size={50} className="text-muted-foreground transition-colors group-hover/item:text-primary" /> },
  { name: 'Vite', icon: <SiVite size={50} className="text-muted-foreground transition-colors group-hover/item:text-primary" /> },
  { name: 'npm', icon: <SiNpm size={50} className="text-muted-foreground transition-colors group-hover/item:text-primary" /> },
  { name: 'Sass', icon: <SiSass size={50} className="text-muted-foreground transition-colors group-hover/item:text-primary" /> },
  { name: 'HTML5', icon: <SiHtml5 size={50} className="text-muted-foreground transition-colors group-hover/item:text-primary" /> },
  { name: 'Git', icon: <SiGit size={50} className="text-muted-foreground transition-colors group-hover/item:text-primary" /> },
  { name: 'OpenJDK', icon: <SiOpenjdk size={50} className="text-muted-foreground transition-colors group-hover/item:text-primary" /> },
];

const mappedLogos = skills.map(skill => ({ node: skill.icon, title: skill.name }));

const SkillsSection = () => {
  const { t } = useLanguage();

  return (
    <section id="skills" className="w-full py-24 md:py-32 bg-secondary/50 dark:bg-secondary/20 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-3">
            <div className="inline-block rounded-lg bg-background px-3 py-1 text-sm font-medium text-foreground">{t('skills.badge')}</div>
            <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                <SplitText
                    text={t('skills.title')}
                    from={{ y: 120, scaleY: 2.3, scaleX: 0.7, opacity: 0 }}
                    to={{ y: 0, scaleY: 1, scaleX: 1, opacity: 1 }}
                    duration={1}
                    ease="back.inOut(2)"
                    delay={30}
                 />
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              {t('skills.subtitle')}
            </p>
          </div>
        </div>
        <div className="mx-auto max-w-7xl py-16 space-y-8">
            <LogoLoop 
                logos={mappedLogos}
                speed={80}
                direction="left"
                logoHeight={50}
                gap={80}
                pauseOnHover={true}
                scaleOnHover={true}
            />
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
