import { useEffect, useState } from 'react';
import { ArrowLeft, MessageSquareQuote } from 'lucide-react';
import { ThemeSwitcher, type Theme } from '@/components/ThemeSwitcher';
import { TOP_REVIEWS } from '@/data/reviews';

const THEME_STORAGE_KEY = 'ymir-theme';

function getSavedTheme(): Theme {
  return window.localStorage.getItem(THEME_STORAGE_KEY) === 'original'
    ? 'original'
    : 'divine';
}

export default function Reviews() {
  const [theme, setTheme] = useState<Theme>(getSavedTheme);
  const reviews = TOP_REVIEWS
    .filter((review) => review.name.trim() && review.review.trim())
    .slice(0, 10);

  useEffect(() => {
    window.localStorage.setItem(THEME_STORAGE_KEY, theme);
  }, [theme]);

  return (
    <div data-theme={theme} className="min-h-screen bg-ink-950 font-sans text-slate-300">
      <header className="sticky top-0 z-40 border-b border-ink-700/60 bg-ink-950/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-4 py-4 sm:px-6">
          <a href="/" className="inline-flex items-center gap-2 text-sm font-medium text-slate-400 transition hover:text-white">
            <ArrowLeft className="h-4 w-4" /> Back to Ymir Hub
          </a>
          <ThemeSwitcher theme={theme} onThemeChange={setTheme} />
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-4 py-14 sm:px-6 sm:py-20">
        <section className="mx-auto max-w-2xl text-center">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl border border-accent-400/20 bg-accent-500/10 text-accent-300">
            <MessageSquareQuote className="h-6 w-6" />
          </div>
          <p className="mt-5 text-xs font-semibold uppercase tracking-[0.25em] text-accent-300">
            Community feedback
          </p>
          <h1 className="mt-3 font-display text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Ymir Hub Reviews
          </h1>
          <p className="mt-4 text-sm leading-7 text-slate-400 sm:text-base">
            The top 10 reviews from the Ymir Hub community.
          </p>
        </section>

        {reviews.length === 0 ? (
          <section className="mx-auto mt-12 max-w-2xl rounded-2xl border border-ink-700/70 bg-ink-900/50 p-8 text-center">
            <MessageSquareQuote className="mx-auto h-8 w-8 text-accent-300" />
            <h2 className="mt-4 font-display text-lg font-semibold text-white">Reviews coming soon</h2>
            <p className="mt-2 text-sm leading-6 text-slate-400">
              Community reviews will appear here.
            </p>
          </section>
        ) : (
          <section aria-label="Top reviews" className="mx-auto mt-12 grid max-w-3xl gap-4">
            {reviews.map((review, index) => (
              <article key={review.id} className="rounded-2xl border border-ink-700/70 bg-ink-900/60 p-5 shadow-lg shadow-black/10 transition-colors hover:border-accent-400/40 sm:p-6">
                <div className="flex items-start gap-3">
                  <div className="min-w-0 flex-1">
                    <h2 className="break-words font-semibold text-white">{review.name}</h2>
                    <p className="mt-3 whitespace-pre-wrap break-words text-sm leading-7 text-slate-300">{review.review}</p>
                  </div>
                  <span className="shrink-0 rounded-full border border-accent-400/20 bg-accent-500/10 px-2.5 py-1 text-xs font-semibold text-accent-300">
                    #{index + 1}
                  </span>
                </div>
              </article>
            ))}
          </section>
        )}
      </main>

      <footer className="border-t border-ink-700/60 py-6 text-center text-xs text-slate-600">
        © {new Date().getFullYear()} Ymir Hub. All rights reserved.
      </footer>
    </div>
  );
}
