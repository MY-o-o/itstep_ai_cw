"use client";

import { useLocale } from 'next-intl';
import { usePathname, useRouter } from '@/i18n/routing';
import { Languages } from 'lucide-react';
import { useTransition } from 'react';

export function LanguageToggle() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  const toggleLocale = () => {
    const nextLocale = locale === 'en' ? 'uk' : 'en';
    startTransition(() => {
      router.replace(pathname, { locale: nextLocale });
    });
  };

  return (
    <button
      onClick={toggleLocale}
      disabled={isPending}
      className="flex items-center gap-2 p-2 px-3 rounded-full bg-white/5 hover:bg-white/10 dark:bg-black/20 dark:hover:bg-black/40 border border-black/5 dark:border-white/10 backdrop-blur-md transition-all duration-300 font-mono text-sm font-medium disabled:opacity-50"
      aria-label="Toggle language"
    >
      <Languages className="w-4 h-4 text-accent" />
      <span className="uppercase">{locale}</span>
    </button>
  );
}
