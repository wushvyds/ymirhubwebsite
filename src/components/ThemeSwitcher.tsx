import { Palette } from 'lucide-react';

export type Theme = 'divine' | 'original';

type ThemeSwitcherProps = {
  theme: Theme;
  onThemeChange: (theme: Theme) => void;
};

const themes: { value: Theme; label: string }[] = [
  { value: 'divine', label: 'Divine' },
  { value: 'original', label: 'Original' },
];

export function ThemeSwitcher({ theme, onThemeChange }: ThemeSwitcherProps) {
  return (
    <div
      data-theme-switcher
      className="flex items-center gap-2"
      aria-label="Choose a theme"
    >
      <Palette className="h-3.5 w-3.5 text-slate-500" aria-hidden="true" />
      <div className="flex items-center rounded-full border border-ink-600/70 bg-ink-900/80 p-0.5">
        {themes.map((option) => {
          const isActive = theme === option.value;

          return (
            <button
              key={option.value}
              type="button"
              aria-pressed={isActive}
              onClick={() => onThemeChange(option.value)}
              className={`rounded-full px-2.5 py-1 text-[11px] font-semibold transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-300/70 sm:px-3 ${
                isActive
                  ? 'bg-accent-400 text-ink-950'
                  : 'text-slate-400 hover:bg-ink-800 hover:text-white'
              }`}
            >
              {option.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}
