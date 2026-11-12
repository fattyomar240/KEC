import { company } from '@/data/company';
import type { ContactFormValues } from '@/types';

export const buildWhatsAppUrl = (message: string = company.whatsappMessage): string => {
  const text = `text=${encodeURIComponent(message)}`;
  const digits = company.whatsappNumber.replace(/\D/g, '');
  return digits ? `https://wa.me/${digits}?${text}` : `https://wa.me/?${text}`;
};

export const buildContactWhatsAppMessage = (values: ContactFormValues): string =>
  [
    `New enquiry from the ${company.name} website`,
    '',
    `Name: ${values.fullName.trim()}`,
    `Phone: ${values.phone.trim()}`,
    `Email: ${values.email.trim()}`,
    `Service: ${values.service || 'Not specified'}`,
    '',
    values.message.trim(),
  ].join('\n');
