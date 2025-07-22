import Image from 'next/image';
import {
  SiReact, SiTypescript, SiJavascript, SiNextdotjs, SiFigma, SiGithub, SiTailwindcss, SiHtml5
} from '@icons-pack/react-simple-icons';
import { useLanguage } from '@/context/language-context';
import { cn } from '@/lib/utils';

const skills = [
  { name: 'React', icon: <SiReact size={24} />, className: 'bg-blue-500/10 text-blue-400' },
  { name: 'TypeScript', icon: <SiTypescript size={24} />, className: 'bg-sky-500/10 text-sky-400' },
  { name: 'JavaScript', icon: <SiJavascript size={24} />, className: 'bg-yellow-500/10 text-yellow-400' },
  { name: 'Next.js', icon: <SiNextdotjs size={24} />, className: 'bg-neutral-500/10 text-neutral-400' },
  { name: 'Figma', icon: <SiFigma size={24} />, className: 'bg-pink-500/10 text-pink-400' },
  { name: 'GitHub', icon: <SiGithub size={24} />, className: 'bg-green-500/10 text-green-400' },
  { name: 'Tailwind CSS', icon: <SiTailwindcss size={24} />, className: 'bg-cyan-500/10 text-cyan-400' },
  { name: 'HTML5', icon: <SiHtml5 size={24} />, className: 'bg-orange-500/10 text-orange-400' },
];

const AboutSection = () => {
  const { t } = useLanguage();
  return (
    <section id="about" className="w-full py-16 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-20">
          <div className="flex items-center justify-center min-h-[350px] lg:min-h-[450px]">
            <div className="relative w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96">
                <div className="absolute inset-0 flex items-center justify-center">
                    <Image
                      src="https://placehold.co/400x400.png"
                      alt="Retrato profesional de Alex Palma"
                      width={400}
                      height={400}
                      className="object-cover rounded-full w-40 h-40 md:w-48 md:h-48 border-4 border-background shadow-lg"
                      data-ai-hint="professional portrait ecuadorian"
                    />
                </div>

                {/* Orbits and Icons Wrapper */}
                <div className="absolute inset-0 animate-spin-slow-1">
                    <div className="absolute top-1/2 left-1/2 w-[100%] h-[100%] border-2 border-dashed border-primary/20 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
                    {skills.slice(0, 3).map((skill, index) => {
                        const angle = (index / 3) * 2 * Math.PI;
                        const top = `calc(50% - 20px + ${-Math.cos(angle) * 50}%)`;
                        const left = `calc(50% - 20px + ${Math.sin(angle) * 50}%)`;
                        return (
                          <div key={skill.name} className={cn("absolute w-10 h-10 flex items-center justify-center rounded-full shadow-lg backdrop-blur-sm border border-primary/10 animate-spin-reverse-1", skill.className)} style={{ top, left }}>
                            {skill.icon}
                          </div>
                        );
                    })}
                </div>
                <div className="absolute inset-0 animate-spin-slow-2">
                     <div className="absolute top-1/2 left-1/2 w-[75%] h-[75%] border-2 border-dashed border-accent/30 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
                     {skills.slice(3, 6).map((skill, index) => {
                        const angle = (index / 3) * 2 * Math.PI;
                        const top = `calc(50% - 20px + ${-Math.cos(angle) * 37.5}%)`;
                        const left = `calc(50% - 20px + ${Math.sin(angle) * 37.5}%)`;
                        return (
                          <div key={skill.name} className={cn("absolute w-10 h-10 flex items-center justify-center rounded-full shadow-lg backdrop-blur-sm border border-primary/10 animate-spin-reverse-2", skill.className)} style={{ top, left }}>
                            {skill.icon}
                          </div>
                        );
                    })}
                </div>
                 <div className="absolute inset-0 animate-spin-slow-3">
                     <div className="absolute top-1/2 left-1/2 w-[50%] h-[50%] border-2 border-dashed border-secondary-foreground/20 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
                      {skills.slice(6, 8).map((skill, index) => {
                        const angle = (index / 2) * 2 * Math.PI;
                        const top = `calc(50% - 20px + ${-Math.cos(angle) * 25}%)`;
                        const left = `calc(50% - 20px + ${Math.sin(angle) * 25}%)`;
                        return (
                          <div key={skill.name} className={cn("absolute w-10 h-10 flex items-center justify-center rounded-full shadow-lg backdrop-blur-sm border border-primary/10 animate-spin-reverse-3", skill.className)} style={{ top, left }}>
                            {skill.icon}
                          </div>
                        );
                    })}
                </div>
            </div>
          </div>
          <div className="space-y-6 text-center lg:text-left">
            <div className="space-y-3">
              <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm font-medium text-secondary-foreground">{t('about.badge')}</div>
              <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">{t('about.title')}</h2>
              <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mx-auto lg:mx-0">
                {t('about.paragraph1')}
              </p>
            </div>
            <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mx-auto lg:mx-0">
              {t('about.paragraph2')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
