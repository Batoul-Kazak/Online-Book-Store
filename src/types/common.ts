import { Language } from './book';

export type Edition = 'first' | 'second' | 'third' | 'fourth'; 

export interface CartItem {
  bookId: string;
  copies: number;
  chosenLanguage: Language;
  isTranslatedCopy: boolean;
  chosenEdition: Edition;
  isPDF: boolean;
}

export interface OrderSummary {
  items: CartItem[];
  total: number;
}