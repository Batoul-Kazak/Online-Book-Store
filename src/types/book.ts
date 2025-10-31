import { StaticImageData } from "next/image";

export type Language = 'en' | 'de' | 'ar' | 'ru';

export interface LocalizedText {
  en: string;
  de: string;
  ar: string;
  ru: string;
}

export interface Book {
  id: string;
  img: string | StaticImageData; 
  title: LocalizedText;
  type: string; 
  age: string;
  edition: LocalizedText;
  author: string;
  language: string; 
  rating: number;
  price: number;
  downloadURL: string;
  description: LocalizedText;
  depthDescription: LocalizedText;
}