'use client';

import React, { useActionState } from 'react';
import { submitFeedbackAction } from '@/app/actions/feedback';
import { FeedbackFormState } from '@/lib/validations/feedback';

const initialState: FeedbackFormState = {
  errors: {},
  message: '',
  success: false,
};

export default function FeedbackForm() {
  const [state, formAction, isPending] = useActionState(submitFeedbackAction, initialState);

  return (
    <div className="w-full max-w-lg mx-auto bg-white rounded-xl shadow-md border border-gray-100 p-6 my-6">
      <h2 className="text-xl font-bold text-gray-800 mb-4 text-center">Góp ý khách hàng</h2>

      {state.success && (
        <div className="mb-4 p-3 bg-green-50 border border-green-200 text-green-700 text-sm rounded-lg">
          {state.message}
        </div>
      )}

      <form action={formAction} className="flex flex-col gap-4">
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
            Số điện thoại
          </label>
          <input
            id="phone"
            name="phone"
            type="text"
            placeholder="0912345678"
            className={`w-full px-3 py-2 border rounded-lg outline-none text-sm transition ${
              state.errors?.phone ? 'border-red-500 bg-red-50' : 'border-gray-300 focus:border-blue-500'
            }`}
          />
          {state.errors?.phone && (
            <p className="mt-1 text-xs text-red-600 font-medium">
              {state.errors.phone[0]}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="content" className="block text-sm font-medium text-gray-700 mb-1">
            Nội dung
          </label>
          <textarea
            id="content"
            name="content"
            rows={4}
            placeholder="Nhập nội dung góp ý của bạn..."
            className={`w-full px-3 py-2 border rounded-lg outline-none text-sm transition ${
              state.errors?.content ? 'border-red-500 bg-red-50' : 'border-gray-300 focus:border-blue-500'
            }`}
          />
          {state.errors?.content && (
            <p className="mt-1 text-xs text-red-600 font-medium">
              {state.errors.content[0]}
            </p>
          )}
        </div>

        <button
          type="submit"
          disabled={isPending}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 rounded-lg text-sm transition disabled:bg-gray-400"
        >
          {isPending ? 'Đang gửi...' : 'Gửi góp ý'}
        </button>
      </form>
    </div>
  );
}