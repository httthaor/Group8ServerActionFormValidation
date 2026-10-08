import { z } from 'zod';

const vietnamPhoneRegex = /^(?:\+84|0)(3|5|7|8|9)[0-9]{8}$/;

export const feedbackSchema = z.object({
  phone: z
    .string()
    .trim()
    .regex(vietnamPhoneRegex, {
      message: 'Số điện thoại không đúng định dạng Việt Nam',
    }),
  content: z
    .string()
    .trim()
    .min(21, {
      message: 'Nội dung phải trên 20 ký tự',
    }),
});

export type FeedbackFormState = {
  errors?: {
    phone?: string[];
    content?: string[];
  };
  message?: string;
  success?: boolean;
};