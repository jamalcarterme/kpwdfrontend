'use client';

export default function NewsletterForm() {
  return (
    <form className="flex gap-4 max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
      <input type="email" placeholder="your@email.com" required className="flex-1" />
      <button type="submit" className="btn btn-primary">
        Subscribe
      </button>
    </form>
  );
}
