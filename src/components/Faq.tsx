import { useState } from 'react';
import { ChevronDown, Route, Wrench, ListChecks } from 'lucide-react';
import { Reveal } from '@/components/Reveal';
import { FAQS, type FaqItem } from '@/components/faqData';

function Answer({ item }: { item: FaqItem }) {
  return (
    <div>
      {item.a.map((p, i) => (
        <p key={i} className="text-sm leading-relaxed text-slate-400 mb-3 last:mb-0">
          {p}
        </p>
      ))}
      {item.paths && (
        <div className="mt-4 space-y-2">
          {item.paths.map((p) => (
            <div
              key={p}
              className="flex items-center gap-2 rounded-lg bg-ink-950/80 border border-ink-700/70 px-4 py-2.5"
            >
              <Route className="w-4 h-4 shrink-0 text-blueish-400" />
              <span className="font-mono text-xs sm:text-sm text-blueish-300">
                {p}
              </span>
            </div>
          ))}
        </div>
      )}
      {item.bullets && (
        <ul className="mt-4 space-y-2">
          {item.bullets.map((b, i) => (
            <li key={i} className="flex items-start gap-2 text-sm leading-relaxed text-slate-400">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-400" />
              <span>{b}</span>
            </li>
          ))}
        </ul>
      )}
      {item.steps && (
        <div className="mt-4 rounded-xl bg-ink-950/60 border border-ink-700/60 p-4">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-500 mb-3">
            <ListChecks className="w-4 h-4" />
            Change these images
          </div>
          <ul className="grid grid-cols-2 gap-2">
            {item.steps.map((s) => (
              <li
                key={s}
                className="rounded-lg bg-ink-800 border border-ink-700/50 px-3 py-2 text-xs font-medium text-slate-300"
              >
                {s}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

function AccordionItem({
  item,
  index,
  isOpen,
  onToggle,
}: {
  item: FaqItem;
  index: number;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div
      className={`rounded-2xl border transition-colors duration-300 overflow-hidden ${
        isOpen
          ? 'bg-ink-900 border-accent-400/40'
          : 'bg-ink-900/60 border-ink-700/60 hover:border-ink-600'
      }`}
    >
      <button
        onClick={onToggle}
        aria-expanded={isOpen}
        className="w-full flex items-center justify-between gap-4 px-5 sm:px-6 py-4 sm:py-5 text-left"
      >
        <span className="flex items-start gap-3.5">
          <span className="hidden sm:flex mt-0.5 w-7 h-7 shrink-0 items-center justify-center rounded-lg bg-ink-800 border border-ink-600/60 font-mono text-xs text-slate-500">
            {String(index + 1).padStart(2, '0')}
          </span>
          <span className="font-display text-sm sm:text-base font-semibold text-slate-100">
            {item.q}
          </span>
        </span>
        <ChevronDown
          className={`w-5 h-5 shrink-0 text-slate-500 transition-transform duration-300 ${
            isOpen ? 'rotate-180 text-accent-300' : ''
          }`}
        />
      </button>
      <div
        className={`grid transition-all duration-300 ease-in-out ${
          isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
        }`}
      >
        <div className="overflow-hidden">
          <div className="px-5 sm:px-6 pb-5 sm:pb-6 pt-0">
            <Answer item={item} />
          </div>
        </div>
      </div>
    </div>
  );
}

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="relative py-24 border-t border-ink-700/60">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div className="absolute bottom-0 left-0 w-[500px] h-[400px] bg-blueish-400/8 blur-[130px] rounded-full" />
      </div>

      <div className="relative max-w-3xl mx-auto px-6">
        <Reveal>
          <div className="text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-ink-600/70 bg-ink-800/60 px-4 py-1.5 text-xs font-medium text-slate-400">
              <Wrench className="w-3.5 h-3.5" />
              Help &amp; Troubleshooting
            </span>
            <h2 className="mt-4 font-display text-3xl sm:text-4xl font-bold text-white">
              Frequently asked questions
            </h2>
            <p className="mt-3 text-slate-400">
              Setup guides, troubleshooting steps, and answers to common
              concerns.
            </p>
          </div>
        </Reveal>

        <div className="mt-10 space-y-3">
          {FAQS.map((item, i) => (
            <Reveal key={i} delay={Math.min(i * 50, 200)}>
              <AccordionItem
                item={item}
                index={i}
                isOpen={open === i}
                onToggle={() => setOpen(open === i ? null : i)}
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
