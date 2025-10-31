
export interface UserPreferences {
  theme: 'light' | 'dark';
  notifications: boolean;
  favoriteCategories: string[];
}

export interface Note {
  id: string;
  title: string; 
  content: string;
  creationDate: string; // "2024-08-12"
  aboutBooks: string[];
  tags: string[];
}

export interface User {
  id: string;
  email: string;
  name: string;
  profileImage: string;
  role: 'user' | 'admin';
  createdAt: string; 
  preferences: UserPreferences;
  currentReadings: string[]; 
  readingHistory: string[];
  savedBooks: string[];
  notes: Note[];
}