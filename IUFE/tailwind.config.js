/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'matte-navy': '#14264A',
        'deep-indigo': '#1F3B8A',
        'coral-red': '#E34234',
        'warm-gray': '#F6F7F9',
        'off-white': '#FEFEFF',
        'accent-gold': '#D4A84B',
      },
      fontFamily: {
        'sans': ['Sora', 'system-ui', 'sans-serif'],
        'heading': ['Sora', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        'container': '1400px',
        '8xl': '1440px',
        '9xl': '1600px',
      },
      borderRadius: {
        'card': '16px',
        'large': '24px',
      },
      boxShadow: {
        'card': '0 4px 20px rgba(20, 38, 74, 0.08)',
        'card-hover': '0 10px 30px rgba(20, 38, 74, 0.12)',
        'glow': '0 0 40px rgba(227, 66, 52, 0.15)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(227, 66, 52, 0.3)' },
          '50%': { boxShadow: '0 0 40px rgba(227, 66, 52, 0.5)' },
        },
      },
    },
  },
  plugins: [],
}
