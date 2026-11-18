import { useEffect, useState } from 'react';
import { MessageCircle, Youtube } from 'lucide-react';
import { LINKS } from '@/lib/links';
import { ThemeSwitcher, type Theme } from '@/components/ThemeSwitcher';

type NavbarProps = {
  theme: Theme;
  onThemeChange: (theme: Theme) => void;
};

export function Navbar({ theme, onThemeChange }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-ink-950/85 backdrop-blur-xl border-b border-ink-700/60'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 py-3 min-h-16 flex items-center justify-between gap-4">
        <a href="#top" className="flex items-center gap-2.5 group shrink-0">
          <img
            src={theme === 'original' ? '/ymir_icon_1024.png' : '/ymir-mark.svg'}
            alt="Ymir Hub logo"
            className="w-7 h-7 object-contain transition-transform duration-300 group-hover:scale-110"
          />
          <span className="font-display text-lg font-bold text-white tracking-tight">
            Ymir Hub
          </span>
        </a>

        <div className="flex flex-col items-end gap-2 shrink-0">
          <ThemeSwitcher theme={theme} onThemeChange={onThemeChange} />
          <div className="flex items-center gap-2 sm:gap-3">
          <a
            href={LINKS.discord}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium text-slate-300 bg-ink-800/80 border border-ink-600/60 hover:bg-ink-700 hover:border-accent-400/50 hover:text-white transition-all duration-200"
          >
            <MessageCircle className="w-4 h-4 text-blueish-400" />
            <span className="hidden sm:inline">Discord</span>
          </a>
          <a
            href={LINKS.youtube}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium text-ink-950 bg-accent-400 hover:bg-accent-300 font-semibold transition-all duration-200 hover:shadow-lg hover:shadow-accent-500/30"
          >
            <Youtube className="w-4 h-4" />
            <span className="hidden sm:inline">YouTube</span>
          </a>
          </div>
        </div>
      </nav>
    </header>
  );
}
