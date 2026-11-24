/**
 * Camel Bot should fill the first available empty slot.
 * Keep exactly 10 slots. Each slot only has a name and review.
 */
export type SiteReview = {
  id: string;
  name: string;
  review: string;
};

export const TOP_REVIEWS: SiteReview[] = [
  { id: '1', name: 'Манго Бонапарт', review: 'This macro is peak. It have a good re-join system if u have a bad Internet connection. It can farm automaticly best content in game. The dev fixing bugs fast and adding more features what helps you to have best experience. The fail-safe system is good. When you download it, you have an already 4 built-in builds + you have guide for them. The peak macro.' },
  { id: '2', name: '𝖜𝖚𝖘𝖍𝖛𝖞𝖉𝖘', review: 'W macro' },
  { id: '3', name: '𝖜𝖚𝖘𝖍𝖛𝖞𝖉𝖘', review: 'Best Macro' },
  { id: '4', name: 'Манго Бонапарт', review: 'Peak macro' },
  { id: '5', name: 'Freaky Juice', review: 'Amazing Macro sadly soul won’t take my bobux' },
  { id: '6', name: '𝖜𝖚𝖘𝖍𝖛𝖞𝖉𝖘', review: 'Good macro' },
  { id: '7', name: 'AshZaNoob', review: 'Before using macro, I was a lonely beta chud loser with no cosm, scrolls, frags, or vessels. Now I am the most sigma rich cool amazingly awesome person ever, even EK was begging me to give him stuff.' },
  { id: '8', name: 'Freaky Juice', review: 'Macro so good I might name my first child Soul ✌🏼' },
  { id: '9', name: '😎Cool Oreo😎', review: 'Boi macro so tuff' },
  { id: '10', name: '', review: '' }
];
