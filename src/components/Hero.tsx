import { Download, ShieldCheck, AlertTriangle, HandHeart } from 'lucide-react';
import { MessageCircle } from 'lucide-react';
import { Reveal } from '@/components/Reveal';
import { LINKS } from '@/lib/links';

export function Hero() {
  return (
    <section id="top" className="relative pt-32 pb-20 sm:pt-40 sm:pb-28">
      {/* Background glows */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-accent-500/15 blur-[140px] rounded-full" />
        <div className="absolute top-32 -left-40 w-[400px] h-[400px] bg-blueish-400/10 blur-[120px] rounded-full" />
      </div>

      <div className="relative max-w-6xl mx-auto px-6 text-center">
        <Reveal>
          <span className="inline-flex items-center gap-2 rounded-full border border-ink-600/70 bg-ink-800/60 px-4 py-1.5 text-xs font-medium text-slate-400">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
            </span>
            External macro for Attack on Titan Revolution
          </span>
        </Reveal>

        <Reveal delay={100}>
          <h1 className="mt-8 font-display text-5xl sm:text-6xl lg:text-7xl font-bold text-white tracking-tight">
            Ymir{' '}
            <span className="bg-gradient-to-r from-accent-300 via-accent-400 to-blueish-400 bg-clip-text text-transparent">
              Hub
            </span>
          </h1>
          <p className="mt-4 font-display text-xl sm:text-2xl font-medium text-slate-300">
            Automate your AOTR experience.
          </p>
        </Reveal>

        <Reveal delay={200}>
          <p className="mt-6 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed text-slate-400">
            A powerful external macro designed for Attack on Titan Revolution.
            Ymir Hub automates repetitive tasks using visual recognition and
            standard keyboard and mouse inputs.
          </p>
        </Reveal>

        <Reveal delay={300}>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={LINKS.downloadLatest}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full bg-accent-400 px-8 py-3.5 font-display font-semibold text-ink-950 transition-all duration-200 hover:bg-accent-300 hover:shadow-xl hover:shadow-accent-500/25"
            >
              <Download className="w-5 h-5 transition-transform duration-200 group-hover:translate-y-0.5" />
              Download Latest Version
            </a>
            <a
              href={LINKS.discord}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full bg-ink-800/80 px-8 py-3.5 font-display font-semibold text-white border border-ink-600/70 transition-all duration-200 hover:bg-ink-700 hover:border-accent-400/50"
            >
              <MessageCircle className="w-5 h-5" />
              Join the Discord
            </a>
          </div>
        </Reveal>

        <Reveal delay={400}>
          <div className="mt-8 mx-auto max-w-2xl flex items-start gap-3 rounded-xl border border-blueish-400/30 bg-blueish-400/5 px-5 py-4 text-left">
            <HandHeart className="w-5 h-5 mt-0.5 shrink-0 text-blueish-300" />
            <p className="text-sm leading-relaxed text-blueish-300/90">
              Ymir Hub is completely <span className="font-semibold text-white">non-profit</span> — the download is free.
              Click the download button to get the latest version directly.
            </p>
          </div>
        </Reveal>

        <Reveal delay={450}>
          <div className="mt-4 mx-auto max-w-2xl rounded-xl border border-amber-500/25 bg-amber-500/5 px-5 py-4 text-left">
            <div className="flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 mt-0.5 shrink-0 text-amber-400" />
              <p className="text-sm leading-relaxed text-amber-200/90">
                Windows Defender and some antivirus programs may flag the macro as
                a potential threat. These detections can be false positives
                associated with Python-based automation software. Please review
                the{' '}
                <a href="#faq" className="underline underline-offset-2 font-medium hover:text-amber-100 transition-colors">
                  FAQ
                </a>{' '}
                before downloading.
              </p>
            </div>
            <p className="mt-3 px-0 sm:pl-8 text-xs font-semibold uppercase tracking-wider text-amber-300/80">
              Before you download — follow these steps
            </p>
            <ol className="mt-3 space-y-2.5 px-0 sm:pl-8 text-sm leading-relaxed text-amber-200/90 list-none">
              <li className="flex gap-3">
                <span className="shrink-0 font-display font-semibold text-amber-400">1.</span>
                <span>
                  Open <span className="font-semibold text-white">Windows Defender</span> (Windows Security) on your PC.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="shrink-0 font-display font-semibold text-amber-400">2.</span>
                <span>
                  Go to <span className="font-semibold text-white">Virus &amp; threat protection</span> and add an{' '}
                  <span className="font-semibold text-white">exclusion</span> for a folder on your computer (this keeps
                  the macro from being removed).
                </span>
              </li>
              <li className="flex gap-3">
                <span className="shrink-0 font-display font-semibold text-amber-400">3.</span>
                <span>
                  Click the download button above to get the{' '}
                  <span className="font-semibold text-white">latest version</span>.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="shrink-0 font-display font-semibold text-amber-400">4.</span>
                <span>
                  Make sure to save the download <span className="font-semibold text-white">in that same folder</span> you
                  excluded.
                </span>
              </li>
            </ol>
          </div>
        </Reveal>

        <Reveal delay={500}>
          <div className="mt-12 inline-flex items-center gap-2 text-sm text-slate-500">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            Not an exploit, hack, or script — nothing is injected into the game.
          </div>
        </Reveal>
      </div>
    </section>
  );
}
