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
  { id: '1', name: '', review: '' },
  { id: '2', name: '', review: '' },
  { id: '3', name: '', review: '' },
  { id: '4', name: '', review: '' },
  { id: '5', name: '', review: '' },
  { id: '6', name: '', review: '' },
  { id: '7', name: '', review: '' },
  { id: '8', name: '', review: '' },
  { id: '9', name: '', review: '' },
  { id: '10', name: '', review: '' }
];
