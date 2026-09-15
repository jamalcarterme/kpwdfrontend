/**
 * Contact Form Component
 * Client Component ("use client")
 * Submits directly to Web3Forms using the real access key found in the
 * approved HTML source (kpwd-new-frontend/contact.html), matching the same
 * submission flow as assets/js/contact.js.
 */

'use client';

import { FormEvent, useState } from 'react';
import { useFormSubmit } from '@/hooks';

interface FormData {
  name: string;
  email: string;
  business: string;
  country: string;
  service: string;
  message: string;
}

const WEB3FORMS_ACCESS_KEY = 'a0229950-d9cf-46de-9e78-ef5964ef9cbb';

async function submitContactForm(data: FormData) {
  const response = await fetch('https://api.web3forms.com/submit', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    body: JSON.stringify({ ...data, access_key: WEB3FORMS_ACCESS_KEY }),
  });

  const result = await response.json();
  if (!result.success) {
    throw new Error(result.message || 'Failed to send message. Please try again.');
  }
  return result;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    business: '',
    country: '',
    service: '',
    message: '',
  });

  const { submit, isLoading, error, success, clearError, clearSuccess } =
    useFormSubmit(submitContactForm);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (error) clearError();
    if (success) clearSuccess();
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formData.name.trim()) {
      alert('Please enter your name');
      return;
    }
    if (!formData.email.trim()) {
      alert('Please enter your email');
      return;
    }
    if (!formData.message.trim()) {
      alert('Please enter a message');
      return;
    }

    const ok = await submit(formData);
    if (ok) {
      setFormData({ name: '', email: '', business: '', country: '', service: '', message: '' });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Name */}
      <div>
        <label htmlFor="name" className="block text-sm font-medium mb-2">
          Your Name *
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="John Doe"
          required
          className="w-full"
        />
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className="block text-sm font-medium mb-2">
          Email Address *
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="john@example.com"
          required
          className="w-full"
        />
      </div>

      {/* Business / Phone (Optional) */}
      <div>
        <label htmlFor="business" className="block text-sm font-medium mb-2">
          Business Name / Phone (Optional)
        </label>
        <input
          type="text"
          id="business"
          name="business"
          value={formData.business}
          onChange={handleChange}
          placeholder="Acme Inc. or +234 903 023 2048"
          className="w-full"
        />
      </div>

      {/* Country (Optional) */}
      <div>
        <label htmlFor="country" className="block text-sm font-medium mb-2">
          Country (Optional)
        </label>
        <input
          type="text"
          id="country"
          name="country"
          value={formData.country}
          onChange={handleChange}
          placeholder="Nigeria"
          className="w-full"
        />
      </div>

      {/* Service / Subject */}
      <div>
        <label htmlFor="service" className="block text-sm font-medium mb-2">
          Subject *
        </label>
        <select
          id="service"
          name="service"
          value={formData.service}
          onChange={handleChange}
          required
          className="w-full"
        >
          <option value="">Select a subject...</option>
          <option value="Website Inquiry">Website Inquiry</option>
          <option value="E-Commerce Project">E-Commerce Project</option>
          <option value="SEO Services">SEO Services</option>
          <option value="Website Redesign">Website Redesign</option>
          <option value="Custom Development">Custom Development</option>
          <option value="Other">Other</option>
        </select>
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="block text-sm font-medium mb-2">
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Tell us about your project..."
          rows={6}
          required
          className="w-full resize-none"
        />
      </div>

      {/* Error Message */}
      {error && (
        <div className="p-4 bg-red-500/10 border border-red-500/50 rounded-xl text-red-400 text-sm">
          {error}
        </div>
      )}

      {/* Success Message */}
      {success && (
        <div className="p-4 bg-green-500/10 border border-green-500/50 rounded-xl text-green-400 text-sm">
          ✓ Message sent! We&apos;ll reply within 24 hours.
        </div>
      )}

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isLoading}
        className="btn btn-primary w-full"
      >
        {isLoading ? 'Sending...' : 'Send Message'}
      </button>

      {/* Privacy Notice */}
      <p className="text-xs text-slate-500 text-center">
        We respect your privacy. Your information will only be used to respond to your inquiry.
      </p>
    </form>
  );
}
