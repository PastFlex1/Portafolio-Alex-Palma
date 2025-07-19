import { useLanguage } from '@/context/language-context';
import {
  SiReact, SiTypescript, SiJavascript, SiNextdotjs, SiFigma, SiGithub,
  SiFlutter, SiCss3, SiTailwindcss, SiVite, SiNpm, SiSass, SiHtml5
} from '@icons-pack/react-simple-icons';

const skills = [
  { name: 'React', icon: <SiReact size={40} /> },
  { name: 'TypeScript', icon: <SiTypescript size={40} /> },
  { name: 'JavaScript', icon: <SiJavascript size={40} /> },
  { name: 'Next.js', icon: <SiNextdotjs size={40} /> },
  { name: 'Figma', icon: <SiFigma size={40} /> },
  { name: 'GitHub', icon: <SiGithub size={40} /> },
  { name: 'Flutter', icon: <SiFlutter size={40} /> },
  { name: 'CSS3', icon: <SiCss3 size={40} /> },
  { name: 'Tailwind CSS', icon: <SiTailwindcss size={40} /> },
  { name: 'Vite', icon: <SiVite size={40} /> },
  { name: 'npm', icon: <SiNpm size={40} /> },
  { name: 'Sass', icon: <SiSass size={40} /> },
  { name: 'HTML5', icon: <SiHtml5 size={40} /> },
];

const SkillsSection = () => {
  const { t } = useLanguage();

  return (
    <section id="skills" className="w-full py-16 md:py-24 lg:py-32 bg-secondary/50 dark:bg-secondary/20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-3">
            <div className="inline-block rounded-lg bg-background px-3 py-1 text-sm font-medium text-foreground">{t('skills.badge')}</div>
            <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">{t('skills.title')}</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              {t('skills.subtitle')}
            </p>
          </div>
        </div>
        <div className="mx-auto max-w-5xl py-12">
          <div className="flex flex-wrap justify-center gap-8 md:gap-12">
            {skills.map((skill) => (
              <div key={skill.name} className="group flex flex-col items-center gap-2 text-center">
                <div className="text-muted-foreground group-hover:text-primary transition-colors duration-300 transform group-hover:-translate-y-1 motion-safe:group-hover:animate-spin-slow">
                  {skill.icon}
                </div>
                <p className="text-sm font-medium text-muted-foreground group-hover:text-primary transition-colors duration-300">{skill.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
