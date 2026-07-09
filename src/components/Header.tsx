import { useTranslations } from 'next-intl';
import { ThemeToggle } from './ThemeToggle';
import { LanguageToggle } from './LanguageToggle';

export function Header() {
  const t = useTranslations('Navigation');

  return (
    <header className="fixed top-0 left-0 right-0 z-50 p-4 mix-blend-difference dark:mix-blend-normal">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="font-display font-bold text-xl tracking-tighter">
          MY<span className="text-accent">.</span>DEV
        </div>
        
        <nav className="hidden md:flex items-center gap-8 backdrop-blur-lg bg-white/5 dark:bg-black/20 px-6 py-2 rounded-full border border-black/5 dark:border-white/10">
          {['about', 'services', 'portfolio', 'contact'].map((item) => (
            <a
              key={item}
              href={`#${item}`}
              className="text-sm font-medium text-foreground/70 hover:text-accent transition-colors capitalize relative group"
            >
              {t(item)}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <LanguageToggle />
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
