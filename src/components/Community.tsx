import { Youtube, MessageCircle, Users, PlayCircle, Megaphone } from 'lucide-react';
import { Reveal } from '@/components/Reveal';
import { LINKS } from '@/lib/links';

export function Community() {
  return (
    <section
      id="community"
      className="relative py-24 border-t border-ink-700/60"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-accent-500/10 blur-[140px] rounded-full" />
      </div>

      <div className="relative max-w-6xl mx-auto px-6">
        <Reveal>
          <div className="text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-ink-600/70 bg-ink-800/60 px-4 py-1.5 text-xs font-medium text-slate-400">
              <Users className="w-3.5 h-3.5" />
              Community
            </span>
            <h2 className="mt-4 font-display text-3xl sm:text-4xl font-bold text-white">
              Join the{' '}
              <span className="bg-gradient-to-r from-accent-300 to-blueish-400 bg-clip-text text-transparent">
                community
              </span>
            </h2>
            <p className="mt-3 text-slate-400 max-w-xl mx-auto">
              Get help with setups, hear about updates first, and see the macro
              in action.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid md:grid-cols-2 gap-5">
          <Reveal>
            <a
              href={LINKS.discord}
              target="_blank"
              rel="noopener noreferrer"
              className="group block h-full rounded-2xl bg-ink-900 border border-ink-700/60 p-8 transition-all duration-300 hover:border-blueish-400/50 hover:-translate-y-1 hover:shadow-xl hover:shadow-blueish-400/10"
            >
              <div className="flex items-start justify-between">
                <div className="w-12 h-12 rounded-xl bg-blueish-400/10 border border-blueish-400/30 flex items-center justify-center transition-colors duration-300 group-hover:bg-blueish-400/20">
                  <MessageCircle className="w-6 h-6 text-blueish-300" />
                </div>
                <span className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-500 group-hover:text-blueish-300 transition-colors duration-200">
                  Join server
                  <span className="transition-transform duration-200 group-hover:translate-x-0.5">→</span>
                </span>
              </div>
              <h3 className="mt-6 font-display text-xl font-semibold text-white">
                Discord Server
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-400">
                The fastest way to get support. Ask questions, share your
                configs, and stay up to date with the latest releases and
                announcements.
              </p>
              <div className="mt-5 flex items-center gap-4 text-xs text-slate-500">
                <span className="inline-flex items-center gap-1.5">
                  <Users className="w-3.5 h-3.5" />
                  Support &amp; community
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Megaphone className="w-3.5 h-3.5" />
                  Update announcements
                </span>
              </div>
            </a>
          </Reveal>

          <Reveal delay={120}>
            <a
              href={LINKS.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="group block h-full rounded-2xl bg-ink-900 border border-ink-700/60 p-8 transition-all duration-300 hover:border-red-500/50 hover:-translate-y-1 hover:shadow-xl hover:shadow-red-500/10"
            >
              <div className="flex items-start justify-between">
                <div className="w-12 h-12 rounded-xl bg-red-500/10 border border-red-500/30 flex items-center justify-center transition-colors duration-300 group-hover:bg-red-500/20">
                  <Youtube className="w-6 h-6 text-red-400" />
                </div>
                <span className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-500 group-hover:text-red-400 transition-colors duration-200">
                  Watch videos
                  <span className="transition-transform duration-200 group-hover:translate-x-0.5">→</span>
                </span>
              </div>
              <h3 className="mt-6 font-display text-xl font-semibold text-white">
                YouTube Channel
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-400">
                Watch tutorials, setup guides, and the macro running live.
                Perfect if you prefer following along with video over written
                instructions.
              </p>
              <div className="mt-5 flex items-center gap-4 text-xs text-slate-500">
                <span className="inline-flex items-center gap-1.5">
                  <PlayCircle className="w-3.5 h-3.5" />
                  Tutorials &amp; gameplay
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Megaphone className="w-3.5 h-3.5" />
                  Showcase videos
                </span>
              </div>
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
