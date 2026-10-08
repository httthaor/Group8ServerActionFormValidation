'use server';

import { feedbackSchema, FeedbackFormState } from '@/lib/validations/feedback';

export async function submitFeedbackAction(
  prevState: FeedbackFormState,
  formData: FormData
): Promise<FeedbackFormState> {
  const phone = formData.get('phone') as string;
  const content = formData.get('content') as string;

  const validatedFields = feedbackSchema.safeParse({
    phone,
    content,
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      success: false,
    };
  }

  return {
    success: true,
    message: 'Gửi góp ý thành công!',
  };
}