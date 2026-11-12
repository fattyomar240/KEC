import type { CompanyInfo } from '@/types';

/*
 * Central company details. Replace each placeholder with the real value.
 * - whatsappNumber: digits only, including country code (e.g. "15551234567").
 * - social: leave url empty to hide that link.
 */
export const company: CompanyInfo = {
  name: 'KAMBAI ELECTRICAL CONSULTANCY',
  tagline: 'Powering Infrastructure. Connecting Communities.',
  description:
    'KAMBAI ELECTRICAL CONSULTANCY delivers electrical installation, pole works, overhead cable work, street lighting and transformer-related services for public and private infrastructure.',
  phone: '+220 877013162',
  whatsappNumber: '220877013162',
  whatsappMessage: 'Hello KAMBAI ELECTRICAL CONSULTANCY, I would like to discuss an electrical project.',
  email: 'ansukambai663@gmail.com',
  address: 'Barajally',
  location: 'Gambia',
  social: [
    { label: 'LinkedIn', url: '' },
    { label: 'Facebook', url: '' },
    { label: 'Instagram', url: '' },
  ],
};
