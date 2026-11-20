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
  { id: '1', name: '𝖜𝖚𝖘𝖍𝖛𝖞𝖉𝖘', review: 'Best Macro' },
  { id: '2', name: 'Манго Бонапарт', review: 'Peak macro' },
  { id: '3', name: '𝖜𝖚𝖘𝖍𝖛𝖞𝖉𝖘', review: 'Good macro' },
  { id: '4', name: '𝖜𝖚𝖘𝖍𝖛𝖞𝖉𝖘', review: 'W macro' },
  { id: '5', name: '', review: '' },
  { id: '6', name: '', review: '' },
  { id: '7', name: '', review: '' },
  { id: '8', name: '', review: '' },
  { id: '9', name: '', review: '' },
  { id: '10', name: '', review: '' }
];
