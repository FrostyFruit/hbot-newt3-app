export interface ArticleItemProps {
  id: number;
  category?: string;
  heading?: string;
  condition?: string;
  conditionTag?: string;
  pressureUsed?: string;
  numberOfTreatments?: string;
  outcome?: string;
  studyLink?: string;
  publishedDate?: string;
  authors?: string;
  introduction?: string;
  results?: string;
  conclusion?: string;
  faqs?: string;
  conflictsOfInterest?: string;
  funding?: string;
  keywords: string;
}

export const conditions = ["All", "Neurological"];
