import { MessageCircle, Youtube, Download, HelpCircle, ShieldCheck } from 'lucide-react';
import { LINKS } from '@/lib/links';
import type { Theme } from '@/components/ThemeSwitcher';

type FooterProps = {
  theme: Theme;
};

export function Footer({ theme }: FooterProps) {
  return (
    <footer className="relative border-t border-ink-700/60 bg-ink-900/50">
      <div className="max-w-6xl mx-auto px-6 py-14">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <a href="#top" className="flex items-center gap-2.5">
              <img
                src={theme === 'original' ? '/ymir_icon_1024.png' : '/ymir-mark.svg'}
                alt="Ymir Hub logo"
                className="w-7 h-7 object-contain"
              />
              <span className="font-display text-lg font-bold text-white tracking-tight">
                Ymir Hub
              </span>
            </a>
            <p className="mt-3 text-sm leading-relaxed text-slate-500 max-w-xs">
              An external automation tool for Attack on Titan Revolution.
            </p>
            <div className="mt-4 inline-flex items-center gap-2 text-xs text-slate-600">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-500/70" />
              Not affiliated with the game or its developers.
            </div>
          </div>

          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-slate-400">
              Links
            </h3>
            <ul className="mt-4 space-y-2.5">
              {[
                { icon: MessageCircle, label: 'Discord', href: LINKS.discord, external: true },
                { icon: Youtube, label: 'YouTube', href: LINKS.youtube, external: true },
                { icon: Download, label: 'Download', href: LINKS.downloadLatest, external: false },
              ].map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-white transition-colors duration-200"
                  >
                    <l.icon className="w-4 h-4" />
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-slate-400">
              Support
            </h3>
            <ul className="mt-4 space-y-2.5">
              <li>
                <a
                  href="#faq"
                  className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-white transition-colors duration-200"
                >
                  <HelpCircle className="w-4 h-4" />
                  FAQ &amp; Troubleshooting
                </a>
              </li>
              <li>
                <a
                  href="#not-exploit"
                  className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-white transition-colors duration-200"
                >
                  <ShieldCheck className="w-4 h-4" />
                  External Tool, Not an Exploit
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-ink-700/50 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-slate-600">
            © {new Date().getFullYear()} Ymir Hub. All rights reserved.
          </p>
          <p className="text-xs text-slate-600">
            Made for the AOTR community.
          </p>
        </div>
      </div>
    </footer>
  );
}
