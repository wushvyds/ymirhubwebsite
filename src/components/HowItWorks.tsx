import { Heart, Shield, Zap, Eye } from 'lucide-react';
import { Reveal } from '@/components/Reveal';
import { useInView } from '@/lib/useInView';

const STATS = [
  { icon: Zap, label: 'Setup time', value: 'Under 2 min' },
  { icon: Eye, label: 'Detection', value: 'Visual recognition' },
  { icon: Shield, label: 'Game files', value: 'Never touched' },
  { icon: Heart, label: 'Support', value: 'Patreon + Discord' },
];

export function HowItWorks() {
  const { ref, inView } = useInView<HTMLDivElement>(0.3);

  const steps = [
    {
      n: '01',
      title: 'Reads the screen',
      body: 'Ymir Hub watches the contents of your monitor to detect specific UI elements and buttons in the game.',
    },
    {
      n: '02',
      title: 'Knows the stage',
      body: 'Based on what it sees, it determines exactly which stage of the process it is currently at.',
    },
    {
      n: '03',
      title: 'Acts like you would',
      body: 'It then uses ordinary keyboard and mouse inputs — the same ones you would press yourself.',
    },
  ];

  return (
    <section id="how" className="relative py-24 border-t border-ink-700/60">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white">
            How it works
          </h2>
          <p className="mt-3 text-slate-400 max-w-2xl leading-relaxed">
            No injection, no scripts, no memory editing. Ymir Hub simply looks
            and presses — nothing more.
          </p>
        </Reveal>

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {steps.map((s, i) => (
            <Reveal key={s.n} delay={i * 120}>
              <div className="relative h-full rounded-2xl bg-ink-900 border border-ink-700/60 p-7 hover:border-accent-400/40 transition-colors duration-300">
                <span className="font-display text-sm font-semibold text-accent-400">
                  {s.n}
                </span>
                <h3 className="mt-3 font-display text-lg font-semibold text-white">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">
                  {s.body}
                </p>
                {i < steps.length - 1 && (
                  <span className="hidden md:block absolute top-1/2 -right-3 w-6 h-px bg-ink-600" />
                )}
              </div>
            </Reveal>
          ))}
        </div>

        <div ref={ref}>
          <div
            className={`mt-16 grid grid-cols-2 lg:grid-cols-4 gap-4 transition-all duration-700 ${
              inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            {STATS.map((s) => (
              <div
                key={s.label}
                className="rounded-2xl bg-ink-900/70 border border-ink-700/60 p-5"
              >
                <s.icon className="w-5 h-5 text-blueish-400" />
                <div className="mt-3 text-xs font-medium uppercase tracking-wider text-slate-500">
                  {s.label}
                </div>
                <div className="mt-1 font-display font-semibold text-white">
                  {s.value}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
