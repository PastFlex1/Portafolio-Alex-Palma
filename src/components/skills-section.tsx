import { Badge } from '@/components/ui/badge';

const skillsData = {
  'Lenguajes': ['JavaScript (ES6+)', 'TypeScript', 'HTML5', 'CSS3/Sass'],
  'Frameworks y Librerías': ['React', 'Next.js', 'Node.js', 'Express', 'Tailwind CSS'],
  'Herramientas y Plataformas': ['Git y GitHub', 'Docker', 'Firebase', 'Vercel', 'Figma'],
  'Bases de Datos': ['MongoDB', 'PostgreSQL', 'SQL'],
};

const SkillsSection = () => {
  return (
    <section id="skills" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl">Mis Habilidades</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Estas son algunas de las tecnologías con las que he trabajado recientemente.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl gap-8 py-12 sm:grid-cols-2 md:grid-cols-2">
          {Object.entries(skillsData).map(([category, skills]) => (
            <div key={category} className="flex flex-col items-center text-center">
              <h3 className="text-xl font-bold font-headline mb-4">{category}</h3>
              <div className="flex flex-wrap justify-center gap-2">
                {skills.map((skill) => (
                  <Badge key={skill} variant="secondary" className="text-sm px-4 py-2">{skill}</Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
