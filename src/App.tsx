import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { NotExploit } from '@/components/NotExploit';
import { HowItWorks } from '@/components/HowItWorks';
import { Modes } from '@/components/Modes';
import { Community } from '@/components/Community';
import { Faq } from '@/components/Faq';
import { Footer } from '@/components/Footer';
import type { Theme } from '@/components/ThemeSwitcher';
import { useEffect, useState } from 'react';

const THEME_STORAGE_KEY = 'ymir-theme';

function getSavedTheme(): Theme {
  return window.localStorage.getItem(THEME_STORAGE_KEY) === 'original'
    ? 'original'
    : 'divine';
}

function App() {
  const [theme, setTheme] = useState<Theme>(getSavedTheme);

  useEffect(() => {
    window.localStorage.setItem(THEME_STORAGE_KEY, theme);
  }, [theme]);

  return (
    <div
      data-theme={theme}
      className="relative min-h-screen bg-ink-950 font-sans"
    >
      <Navbar theme={theme} onThemeChange={setTheme} />
      <main>
        <Hero />
        <NotExploit />
        <HowItWorks />
        <Modes />
        <Community />
        <Faq />
      </main>
      <Footer theme={theme} />
    </div>
  );
}

export default App;
