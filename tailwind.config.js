/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: 'var(--primary)',
        'primary-light': 'var(--primary-light)',
        success: 'var(--success)',
        warning: 'var(--warning)',
        danger: 'var(--danger)',
        background: 'var(--background)',
        'background-secondary': 'var(--background-secondary)',
        card: 'var(--card-bg)',
        text: 'var(--text)',
        'text-secondary': 'var(--text-secondary)',
        glass: 'var(--glass-bg)',
        'glass-border': 'var(--glass-border)',
      },
      backdropBlur: {
        xs: '2px',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'wave': 'wave 2s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'spin-slow': 'spin 20s linear infinite',
        'theme-toggle': 'themeToggle 0.5s ease-in-out',
      },
      keyframes: {
        wave: {
          '0%, 100%': { transform: 'scaleY(1)' },
          '50%': { transform: 'scaleY(0.5)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 20px rgba(0, 122, 255, 0.3)' },
          '100%': { boxShadow: '0 0 40px rgba(0, 122, 255, 0.6)' },
        },
        themeToggle: {
          '0%': { transform: 'rotate(0deg) scale(1)' },
          '50%': { transform: 'rotate(180deg) scale(0.8)' },
          '100%': { transform: 'rotate(360deg) scale(1)' },
        }
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.15)',
        'glass-dark': '0 8px 32px 0 rgba(0, 0, 0, 0.3)',
        'neon': '0 0 20px rgba(0, 122, 255, 0.4)',
      }
    },
  },
  plugins: [],
}
