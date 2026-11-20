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
  { id: '1', name: '𝖜𝖚𝖘𝖍𝖛𝖞𝖉𝖘', review: 'tes10' },
  { id: '2', name: '𝖜𝖚𝖘𝖍𝖛𝖞𝖉𝖘', review: 'tes9' },
  { id: '3', name: '𝖜𝖚𝖘𝖍𝖛𝖞𝖉𝖘', review: 'tes8' },
  { id: '4', name: '𝖜𝖚𝖘𝖍𝖛𝖞𝖉𝖘', review: 'tes7' },
  { id: '5', name: '𝖜𝖚𝖘𝖍𝖛𝖞𝖉𝖘', review: 'tes6' },
  { id: '6', name: '𝖜𝖚𝖘𝖍𝖛𝖞𝖉𝖘', review: 'tes5' },
  { id: '7', name: '𝖜𝖚𝖘𝖍𝖛𝖞𝖉𝖘', review: 'tes4' },
  { id: '8', name: '𝖜𝖚𝖘𝖍𝖛𝖞𝖉𝖘', review: 'tes3' },
  { id: '9', name: '𝖜𝖚𝖘𝖍𝖛𝖞𝖉𝖘', review: 'tes2' },
  { id: '10', name: '𝖜𝖚𝖘𝖍𝖛𝖞𝖉𝖘', review: 'test' }
];
