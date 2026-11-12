import type { LucideIcon } from 'lucide-react';

export type ProjectCategoryId =
  | 'pole-installation'
  | 'pole-maintenance'
  | 'overhead-cables'
  | 'house-wiring'
  | 'street-lighting'
  | 'transformers'
  | 'infrastructure';

export interface ProjectCategory {
  id: ProjectCategoryId;
  label: string;
}

export interface Service {
  id: string;
  title: string;
  summary: string;
  description: string;
  icon: LucideIcon;
  image: string;
  imageAlt: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  category: ProjectCategoryId;
  image: string;
  imageAlt: string;
  isDemonstration: boolean;
}

export interface SocialLink {
  label: string;
  url: string;
}

export interface CompanyInfo {
  name: string;
  tagline: string;
  description: string;
  phone: string;
  whatsappNumber: string;
  whatsappMessage: string;
  email: string;
  address: string;
  location: string;
  social: SocialLink[];
}

export interface ContactFormValues {
  fullName: string;
  phone: string;
  email: string;
  service: string;
  message: string;
}

export type ContactFormErrors = Partial<Record<keyof ContactFormValues, string>>;

export type ContactFormStatus = 'idle' | 'submitting' | 'submitted' | 'error';
