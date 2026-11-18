interface FaqItem {
  q: string;
  a: string[];
  paths?: string[];
  bullets?: string[];
  steps?: string[];
}

export const FAQS: FaqItem[] = [
  {
    q: 'The macro is getting flagged as a virus',
    a: [
      'This may be a false positive. Since the macro is made with a Python script, it may sometimes be incorrectly flagged as a virus.',
      'The macro simply looks for UI elements and buttons on your screen to determine which part of the process it is at, allowing it to use your keyboard and mouse inputs.',
      'This type of visual recognition and automation can sometimes appear suspicious to antivirus software, as similar techniques are also used by malicious programs.',
    ],
  },
  {
    q: 'Is the macro safe?',
    a: [
      'Ymir Hub is designed as an external automation tool, not a game exploit. Due to technical issues, I am currently unable to showcase the source code, but I plan to make a GitHub repository available as soon as possible.',
    ],
  },
  {
    q: 'Will I get banned for using it?',
    a: [
      "According to the developers, macros are not bannable unless they are used for leaderboard purposes. However, always follow the game's current rules and use the macro responsibly. Rules and enforcement policies may change.",
    ],
  },
  {
    q: 'Is this considered a hack/script?',
    a: [
      'No. Ymir Hub is an external tool that uses the same keyboard and mouse inputs you would normally use.',
      'It does not inject scripts into the game or modify the game to achieve anything.',
    ],
  },
  {
    q: 'Which build/skill layout should I use?',
    a: [
      'All recommended builds and skill layouts are provided inside the macro. Simply navigate to:',
    ],
    paths: ['Settings → Configs → Guides'],
    bullets: [
      'There, you will find the recommended or required build for your selected configuration.',
    ],
  },
  {
    q: "My mission isn't starting / Retry doesn't work / Raid chests are not being opened",
    a: [
      "Your images may not be getting detected correctly. Everyone's screen is different, so images can be detected differently too.",
    ],
    paths: ['Settings → Configs → Fix-Image-Detection'],
    bullets: [
      'Change the images for:',
    ],
    steps: [
      'Retry button',
      'Finish button',
      'Mission Start',
      'Raid Start',
    ],
  },
  {
    q: "I keep dying / Missions aren't working / I don't get enough awakening bar",
    a: [
      'You may be using the wrong build or may need better perks and memories.',
      'Another possible issue is that your movement speed differs from the one used when creating the macro.',
      'In this case, you may need to adjust the timings and settings of your configuration.',
    ],
    paths: ['Settings → Configs → Edit-Configs → Movements'],
    bullets: [
      'Change the dash time to one of the following: 8 seconds, 10 seconds, or 14 seconds. Experiment with these values to find what works best for your setup.',
      'You may also need to adjust other timings to better match your movement speed. After changing movement settings, you might need to tweak other configuration settings, such as Universal.',
    ],
  },
  {
    q: "My Ability 4 isn't being used / Abilities aren't being used",
    a: [
      'Abilities generally fail to activate when the timings are incorrect.',
      'Navigate to the Edit Config settings and adjust the spam time for the affected ability or the ability immediately before it.',
      'Try increasing or decreasing the spam time until the abilities are activated consistently.',
      'Ability 4 in Universal is commonly reported to have this issue. You may need to adjust the Lookdown settings in Universal as well.',
    ],
  },
  {
    q: "My failsafe doesn't work properly",
    a: [
      'The default aim location of the failsafe may not be optimal for your screen. It is recommended to manually select an appropriate location.',
    ],
    paths: ['Settings → Configs → Failsafe'],
    bullets: [
      'The recommended location is near the XP bar area.',
      'You can also try disabling the Look Down feature if it does not work correctly for you.',
    ],
  },
];

export type { FaqItem };
