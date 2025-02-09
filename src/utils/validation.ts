import { PaymentDetails } from '../types';

export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const validatePhone = (phone: string): boolean => {
  const phoneRegex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
  return phoneRegex.test(phone);
};

export const validateZipCode = (zipCode: string): boolean => {
  const zipRegex = /^\d{5}(-\d{4})?$/;
  return zipRegex.test(zipCode);
};

export const validatePaymentDetails = (details: PaymentDetails): { isValid: boolean; errors: Record<string, string> } => {
  const errors: Record<string, string> = {};

  if (!validateEmail(details.email)) {
    errors.email = 'Please enter a valid email address';
  }

  if (!validatePhone(details.phone)) {
    errors.phone = 'Please enter a valid phone number';
  }

  if (!validateZipCode(details.zipCode)) {
    errors.zipCode = 'Please enter a valid ZIP code';
  }

  if (details.zelleEmail && !validateEmail(details.zelleEmail)) {
    errors.zelleEmail = 'Please enter a valid Zelle email';
  }

  if (details.zellePhone && !validatePhone(details.zellePhone)) {
    errors.zellePhone = 'Please enter a valid Zelle phone number';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
};