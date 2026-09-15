'use client';

import Script from 'next/script';
import Reveal from '@/components/Reveal';

export default function ScheduleWidget() {
  return (
    <Reveal>
      {/* Calendly inline widget */}
      <div
        className="calendly-inline-widget"
        data-url="https://calendly.com/kingpraisewebdesign/30min?hide_gdpr_banner=1"
        style={{ minWidth: 320, height: 700 }}
      />
      <Script src="https://assets.calendly.com/assets/external/widget.js" strategy="lazyOnload" />
    </Reveal>
  );
}
