import { Code2, Github, Linkedin } from 'lucide-react';
import Link from 'next/link';
import { useLanguage } from '@/context/language-context';

const Footer = () => {
  const { t } = useLanguage();
  
  return (
    <footer className="w-full h-screen flex items-center justify-center border-t bg-background">
      <div className="container mx-auto flex flex-col items-center justify-between gap-6 px-4 md:flex-row md:px-6">
        <Link href="/" className="flex items-center gap-2" aria-label="Volver al inicio">
            <Code2 className="h-7 w-7 text-primary" />
            <span className="font-bold text-lg font-headline">DevFolio</span>
        </Link>
        <p className="text-sm text-muted-foreground">
          {t('footer.copy').replace('{year}', new Date().getFullYear().toString())}
        </p>
        <div className="flex items-center gap-5">
          <a href="#" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-muted-foreground hover:text-primary transition-colors">
            <Github className="h-5 w-5" />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-muted-foreground hover:text-primary transition-colors">
            <Linkedin className="h-5 w-5" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
