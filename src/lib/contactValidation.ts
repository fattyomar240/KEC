import type { ContactFormErrors, ContactFormValues } from '@/types';

export const emptyContactForm: ContactFormValues = {
  fullName: '',
  phone: '',
  email: '',
  service: '',
  message: '',
};

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const PHONE_PATTERN = /^\+?[0-9\s()-]+$/;

export const validateContactForm = (values: ContactFormValues): ContactFormErrors => {
  const errors: ContactFormErrors = {};
  const fullName = values.fullName.trim();
  const phoneDigits = values.phone.replace(/\D/g, '');
  const email = values.email.trim();
  const message = values.message.trim();

  if (fullName.length < 2) {
    errors.fullName = 'Please enter your full name.';
  } else if (fullName.length > 120) {
    errors.fullName = 'Name must be 120 characters or fewer.';
  }

  if (!values.phone.trim()) {
    errors.phone = 'Please enter a phone number.';
  } else if (!PHONE_PATTERN.test(values.phone.trim()) || phoneDigits.length < 7 || phoneDigits.length > 15) {
    errors.phone = 'Enter a valid phone number with 7 to 15 digits.';
  }

  if (!email) {
    errors.email = 'Please enter your email address.';
  } else if (!EMAIL_PATTERN.test(email) || email.length > 254) {
    errors.email = 'Enter a valid email address, such as name@example.com.';
  }

  if (message.length < 10) {
    errors.message = 'Please describe your project in at least 10 characters.';
  } else if (message.length > 3000) {
    errors.message = 'Message must be 3000 characters or fewer.';
  }

  return errors;
};
