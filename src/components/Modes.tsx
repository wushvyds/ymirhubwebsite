import { Sparkles, Users, Droplets, Infinity as InfinityIcon, FlaskConical } from 'lucide-react';
import { Reveal } from '@/components/Reveal';

const MODES = [
  {
    icon: Sparkles,
    name: 'Shiki',
    desc: 'Automates the Shiki mission loop from start to finish, handling retries and rewards on its own.',
  },
  {
    icon: Users,
    name: 'Female Raid',
    desc: 'Runs the Female Type raid flow for you — joining, fighting, and collecting chests automatically.',
  },
  {
    icon: Droplets,
    name: 'Blood Awakening',
    desc: 'Chains the Blood Awakening routine with tuned timings so your awakening bar fills reliably.',
  },
  {
    icon: InfinityIcon,
    name: 'Universal',
    desc: 'A flexible all-purpose mode for general farming across missions, adaptable to your setup.',
  },
];

export function Modes() {
  return (
    <section id="modes" className="relative py-24 border-t border-ink-700/60">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 overflow-hidden"
        >
          <div className="absolute top-40 right-0 w-[500px] h-[400px] bg-accent-500/10 blur-[130px] rounded-full" />
        </div>

        <div className="relative max-w-6xl mx-auto px-6">
          <Reveal>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white text-center">
              Four Modes.{' '}
              <span className="bg-gradient-to-r from-accent-300 to-blueish-400 bg-clip-text text-transparent">
                One Hub.
              </span>
            </h2>
            <p className="mt-3 text-center text-slate-400 max-w-xl mx-auto">
              Pick the mode that matches what you want to farm. Everything is
              configurable from inside the macro.
            </p>
          </Reveal>

          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {MODES.map((m, i) => (
              <Reveal key={m.name} delay={i * 100}>
                <div className="group h-full rounded-2xl bg-ink-900 border border-ink-700/60 p-6 transition-all duration-300 hover:border-accent-400/50 hover:bg-ink-850 hover:-translate-y-1 hover:shadow-xl hover:shadow-accent-500/10">
                  <div className="w-11 h-11 rounded-xl bg-ink-800 border border-ink-600/60 flex items-center justify-center transition-colors duration-300 group-hover:border-accent-400/50 group-hover:bg-ink-700">
                    <m.icon className="w-5 h-5 text-accent-300" />
                  </div>
                  <h3 className="mt-5 font-display text-lg font-semibold text-white">
                    {m.name}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-400">
                    {m.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={200}>
            <div className="mt-12 relative rounded-2xl border border-accent-400/30 bg-gradient-to-r from-accent-500/10 via-ink-900 to-blueish-400/10 p-6 sm:p-8 overflow-hidden">
              <div
                aria-hidden
                className="absolute -top-20 -right-20 w-64 h-64 bg-accent-500/20 blur-[80px] rounded-full"
              />
              <div className="relative flex flex-col sm:flex-row items-start sm:items-center gap-5">
                <div className="w-12 h-12 shrink-0 rounded-xl bg-accent-500/20 border border-accent-400/40 flex items-center justify-center">
                  <FlaskConical className="w-6 h-6 text-accent-300" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-bold text-white">
                    Required Item:{' '}
                    <span className="text-accent-300">Colossal Titan Serum</span>
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-slate-300">
                    Ymir Hub requires the Colossal Titan Serum to function
                    properly. Make sure it is in your inventory before starting
                    any mode.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
  );
}
