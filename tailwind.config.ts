import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      // ===== Color System (from existing design) =====
      colors: {
        // Brand colors (matches existing CSS variables)
        brand: 'var(--brand, #6366F1)', // Indigo primary
        'brand-2': 'var(--brand-2, #8B93EE)', // Soft periwinkle secondary
        // Dark theme background
        dark: '#0B0E1F',
        ink: '#242B54',
        // Light theme background
        light: '#fff',
      },
      backgroundColor: {
        // Dark mode (default)
        DEFAULT: 'var(--bg-primary, #07070A)',
        primary: 'var(--bg-primary, #07070A)',
        secondary: 'var(--bg-secondary, #0F0F14)',
        tertiary: 'var(--bg-tertiary, #1A1A1F)',
        // Glass effect
        glass: 'rgba(255, 255, 255, 0.05)',
      },
      textColor: {
        DEFAULT: 'var(--text-primary, #E5E7EB)',
        primary: 'var(--text-primary, #E5E7EB)',
        secondary: 'var(--text-secondary, #9CA3AF)',
      },
      // ===== Typography =====
      fontFamily: {
        sans: ['Poppins', 'system-ui', 'sans-serif'],
        display: ['Poppins', 'system-ui', 'sans-serif'],
        serif: ['Poppins', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        // Headings (display)
        'display-2xl': ['3rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }], // h1
        'display-xl': ['2.5rem', { lineHeight: '1.15', letterSpacing: '-0.01em' }], // h2
        'display-lg': ['2rem', { lineHeight: '1.2' }], // h3
        'display-md': ['1.5rem', { lineHeight: '1.25' }], // h4
      },
      fontWeight: {
        thin: '100',
        extralight: '200',
        light: '300',
        normal: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
        extrabold: '800',
        black: '900',
      },
      // ===== Spacing =====
      spacing: {
        xs: '0.25rem',
        sm: '0.5rem',
        md: '1rem',
        lg: '1.5rem',
        xl: '2rem',
        '2xl': '2.5rem',
        '3xl': '3rem',
      },
      // ===== Border Radius =====
      borderRadius: {
        'xs': '0.25rem',
        'sm': '0.5rem',
        DEFAULT: '0.75rem',
        'lg': '1rem',
        'xl': '1.25rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
        'full': '9999px',
      },
      // ===== Shadows =====
      boxShadow: {
        'xs': '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        'sm': '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
        'md': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'lg': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        'xl': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
        'glow': '0 0 30px rgba(99, 102, 241, 0.35)',
        'glow-cyan': '0 0 30px rgba(139, 147, 238, 0.35)',
        'inner': 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.05)',
        'none': 'none',
      },
      // ===== Gradients =====
      backgroundImage: {
        'gradient-brand': 'linear-gradient(135deg, var(--brand, #6366F1), var(--brand-2, #8B93EE))',
        'gradient-dark': 'linear-gradient(135deg, #0B0E1F, #242B54)',
      },
      // ===== Transitions =====
      transitionDuration: {
        DEFAULT: '200ms',
        fast: '100ms',
        normal: '200ms',
        slow: '300ms',
        slower: '500ms',
      },
      transitionTimingFunction: {
        DEFAULT: 'cubic-bezier(0.4, 0, 0.2, 1)',
        smooth: 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
    },
  },
  plugins: [
    // Custom plugins for animations & utilities
    require('tailwindcss/plugin')(({ addUtilities, e }) => {
      const animations = {
        'reveal-in': 'reveal 0.6s ease-out forwards',
        'fade-in': 'fade-in 0.4s ease-out forwards',
        'slide-up': 'slide-up 0.5s ease-out forwards',
        'pulse-soft': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      };

      addUtilities({
        '@keyframes reveal': {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        '@keyframes fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        '@keyframes slide-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      });

      Object.entries(animations).forEach(([key, value]) => {
        addUtilities({
          [`.${e(key)}`]: {
            animation: value,
          },
        });
      });

      // Glass effect utility
      addUtilities({
        '.glass': {
          '@apply bg-white/5 border border-white/10 backdrop-blur-xl': {},
        },
        '.glass-lg': {
          '@apply bg-white/[0.03] border border-white/[0.08] backdrop-blur-2xl': {},
        },
        '.glow-orb': {
          '@apply absolute opacity-30 rounded-full blur-3xl pointer-events-none': {},
        },
      });
    }),
  ],
  corePlugins: {
    // Disable utilities we don't need to reduce bundle size
  },
  darkMode: ['class', '[data-theme="dark"]'],
  future: {
    hoverOnlyWhenSupported: true,
  },
};

export default config;
