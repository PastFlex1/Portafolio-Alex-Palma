import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useLanguage } from '@/context/language-context';

const skillsData = {
  'languages': ['JavaScript (ES6+)', 'TypeScript', 'HTML5', 'CSS3/Sass', 'SQL'],
  'frameworks': ['React', 'Next.js', 'Node.js', 'Express', 'Tailwind CSS', 'ShadCN UI'],
  'tools': ['Git y GitHub', 'Docker', 'Firebase', 'Vercel', 'Figma', 'Postman'],
  'db': ['MongoDB', 'PostgreSQL', 'REST APIs', 'Scrum', 'Diseño UI/UX'],
};

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
        <div className="mx-auto grid max-w-6xl gap-6 py-12 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
          {Object.entries(skillsData).map(([category, skills]) => (
            <Card key={category} className="shadow-sm hover:shadow-md transition-shadow">
              <CardHeader>
                <CardTitle className="font-headline text-xl">{t(`skills.categories.${category}`)}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap justify-start gap-2">
                  {skills.map((skill) => (
                    <Badge key={skill} variant="outline" className="text-sm px-3 py-1 font-normal">{skill}</Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
