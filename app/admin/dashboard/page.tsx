'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { api, endpoints } from '@/lib/api';
import { FieldConfig } from '@/components/admin/AdminModal';
import EntityPanel from '@/components/admin/EntityPanel';
import OverviewPanel from '@/components/admin/OverviewPanel';
import BookingsPanel from '@/components/admin/BookingsPanel';
import MessagesPanel from '@/components/admin/MessagesPanel';
import ClientProjectsPanel from '@/components/admin/ClientProjectsPanel';

const TABS = [
  'Overview',
  'Projects',
  'Blog',
  'Team',
  'Testimonials',
  'Announcements',
  'Bookings',
  'Messages',
  'Client Projects',
] as const;
type Tab = (typeof TABS)[number];

const projectFields: FieldConfig[] = [
  { name: 'title', label: 'Title', required: true },
  { name: 'client', label: 'Client Name', placeholder: 'e.g. Martins Realties' },
  { name: 'category', label: 'Category', type: 'select', options: ['Website', 'E-Commerce', 'Mobile App', 'Custom Software', 'Branding'].map((c) => ({ value: c, label: c })) },
  { name: 'description', label: 'Description', type: 'textarea', required: true },
  { name: 'liveUrl', label: 'Live URL' },
  { name: 'country', label: 'Country' },
  { name: 'isFeatured', label: 'Featured', type: 'checkbox' },
  { name: 'order', label: 'Sort Order', type: 'number' },
  { name: 'image', label: 'Cover Image', type: 'file' },
];

const blogFields: FieldConfig[] = [
  { name: 'title', label: 'Title', required: true },
  { name: 'excerpt', label: 'Excerpt (max 240 chars)', type: 'textarea', required: true },
  { name: 'content', label: 'Content (HTML)', type: 'textarea', required: true },
  { name: 'category', label: 'Category' },
  { name: 'status', label: 'Status', type: 'select', options: [{ value: 'draft', label: 'Draft' }, { value: 'published', label: 'Published' }] },
  { name: 'coverImage', label: 'Cover Image', type: 'file' },
];

const teamFields: FieldConfig[] = [
  { name: 'name', label: 'Name', required: true },
  { name: 'role', label: 'Role', required: true },
  { name: 'bio', label: 'Bio (max 400 chars)', type: 'textarea' },
  { name: 'order', label: 'Sort Order', type: 'number' },
  { name: 'isActive', label: 'Active', type: 'checkbox' },
  { name: 'photo', label: 'Photo', type: 'file' },
];

const testimonialFields: FieldConfig[] = [
  { name: 'name', label: 'Name', required: true },
  { name: 'role', label: 'Role / Company' },
  { name: 'country', label: 'Country' },
  { name: 'rating', label: 'Rating (1-5)', type: 'number' },
  { name: 'quote', label: 'Quote', type: 'textarea', required: true },
  { name: 'isActive', label: 'Active', type: 'checkbox' },
  { name: 'order', label: 'Sort Order', type: 'number' },
  { name: 'photo', label: 'Photo', type: 'file' },
];

const announcementFields: FieldConfig[] = [
  { name: 'title', label: 'Title', required: true },
  { name: 'message', label: 'Message', type: 'textarea', required: true },
  { name: 'type', label: 'Type', type: 'select', options: ['info', 'success', 'warning', 'urgent'].map((t) => ({ value: t, label: t })) },
  { name: 'audience', label: 'Audience', type: 'select', options: ['all', 'clients', 'public'].map((a) => ({ value: a, label: a })) },
  { name: 'isPinned', label: 'Pinned', type: 'checkbox' },
  { name: 'isActive', label: 'Active', type: 'checkbox' },
];

export default function AdminDashboardPage() {
  const router = useRouter();
  const [tab, setTab] = useState<Tab>('Overview');
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const user = api.getUser() as { role?: string } | null;
    if (!user || user.role !== 'admin') {
      router.push('/admin/login');
      return;
    }
    setReady(true);
  }, [router]);

  function handleLogout() {
    api.setToken(null);
    api.setUser(null);
    router.push('/admin/login');
  }

  if (!ready) {
    return (
      <main className="pt-28 pb-24 max-w-7xl mx-auto px-5 lg:px-8">
        <div className="skeleton rounded-2xl" style={{ height: 300 }} />
      </main>
    );
  }

  return (
    <main className="pt-28 pb-24 max-w-7xl mx-auto px-5 lg:px-8">
      <div className="flex items-center justify-between flex-wrap gap-4 mb-8">
        <div>
          <span className="text-[var(--brand-2)] text-xs font-semibold uppercase tracking-widest">Admin</span>
          <h1 className="font-display text-3xl sm:text-4xl font-bold text-white mt-2">Dashboard</h1>
        </div>
        <button onClick={handleLogout} className="btn-ghost px-4 py-2 rounded-lg text-sm">Log out</button>
      </div>

      <div className="flex gap-2 flex-wrap mb-8 border-b border-white/10 pb-4">
        {TABS.map((t) => (
          <button
            key={t}
            onClick={() => setTab(t)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition ${tab === t ? 'btn-primary' : 'text-slate-400 hover:text-white'}`}
          >
            {t}
          </button>
        ))}
      </div>

      {tab === 'Overview' && <OverviewPanel />}

      {tab === 'Projects' && (
        <EntityPanel
          title="Projects"
          addLabel="Add Project"
          fields={projectFields}
          columns={[
            { key: 'title', label: 'Title' },
            { key: 'category', label: 'Category' },
            { key: 'client', label: 'Client' },
            { key: 'isFeatured', label: 'Featured', render: (i: any) => (i.isFeatured ? '★' : '') },
          ]}
          list={() => endpoints.projects.list()}
          create={(payload, hasFile) => endpoints.projects.create(payload, hasFile)}
          update={(id, payload, hasFile) => endpoints.projects.update(id, payload, hasFile)}
          remove={(id) => endpoints.projects.delete(id)}
          extractList={(res: any) => res?.projects || []}
        />
      )}

      {tab === 'Blog' && (
        <EntityPanel
          title="Blog Posts"
          addLabel="New Post"
          fields={blogFields}
          columns={[
            { key: 'title', label: 'Title' },
            { key: 'category', label: 'Category' },
            { key: 'status', label: 'Status' },
            { key: 'views', label: 'Views' },
          ]}
          list={() => endpoints.blog.list({ status: 'all', limit: 100 })}
          create={(payload, hasFile) => endpoints.blog.create(payload, hasFile)}
          update={(id, payload, hasFile) => endpoints.blog.update(id, payload, hasFile)}
          remove={(id) => endpoints.blog.delete(id)}
          extractList={(res: any) => res?.posts || []}
        />
      )}

      {tab === 'Team' && (
        <EntityPanel
          title="Team Members"
          addLabel="Add Member"
          fields={teamFields}
          columns={[
            { key: 'name', label: 'Name' },
            { key: 'role', label: 'Role' },
            { key: 'order', label: 'Order' },
            { key: 'isActive', label: 'Active', render: (i: any) => (i.isActive ? 'Yes' : 'No') },
          ]}
          list={() => endpoints.team.list()}
          create={(payload, hasFile) => endpoints.team.create(payload, hasFile)}
          update={(id, payload, hasFile) => endpoints.team.update(id, payload, hasFile)}
          remove={(id) => endpoints.team.delete(id)}
          extractList={(res: any) => res?.team || []}
        />
      )}

      {tab === 'Testimonials' && (
        <EntityPanel
          title="Testimonials"
          addLabel="Add Testimonial"
          fields={testimonialFields}
          columns={[
            { key: 'name', label: 'Name' },
            { key: 'role', label: 'Role' },
            { key: 'rating', label: 'Rating' },
            { key: 'isActive', label: 'Active', render: (i: any) => (i.isActive ? 'Yes' : 'No') },
          ]}
          list={() => endpoints.testimonials.list()}
          create={(payload, hasFile) => endpoints.testimonials.create(payload, hasFile)}
          update={(id, payload, hasFile) => endpoints.testimonials.update(id, payload, hasFile)}
          remove={(id) => endpoints.testimonials.delete(id)}
          extractList={(res: any) => res?.testimonials || []}
        />
      )}

      {tab === 'Announcements' && (
        <EntityPanel
          title="Announcements"
          addLabel="New Announcement"
          fields={announcementFields}
          columns={[
            { key: 'title', label: 'Title' },
            { key: 'type', label: 'Type' },
            { key: 'audience', label: 'Audience' },
            { key: 'isPinned', label: 'Pinned', render: (i: any) => (i.isPinned ? '📌' : '') },
          ]}
          list={() => endpoints.announcements.list()}
          create={(payload) => endpoints.announcements.create(payload)}
          update={(id, payload) => endpoints.announcements.update(id, payload)}
          remove={(id) => endpoints.announcements.delete(id)}
          extractList={(res: any) => res?.announcements || []}
        />
      )}

      {tab === 'Bookings' && <BookingsPanel />}
      {tab === 'Messages' && <MessagesPanel />}
      {tab === 'Client Projects' && <ClientProjectsPanel />}
    </main>
  );
}
