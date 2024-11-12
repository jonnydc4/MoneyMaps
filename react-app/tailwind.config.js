// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Adjust this path based on your project structure
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#D1FAE5', // Light green background for header
          DEFAULT: '#10B981', // Button background green
          dark: '#059669', // Darker shade for hover effects
        },
        gray: {
          light: '#F3F4F6', // Background color for the main page
          DEFAULT: '#6B7280', // Gray for text and borders
          dark: '#374151', // Darker gray for text
        },
      },
      spacing: {
        '4': '1rem',
        '8': '2rem',
        '10': '2.5rem',
        '64': '16rem',
        'screen-90': '90vh', // Almost full screen for vertical centering
      },
      boxShadow: {
        'card': '0 4px 8px rgba(0, 0, 0, 0.1)', // Soft shadow for card effect
        'focus': '0 0 0 3px rgba(16, 185, 129, 0.5)', // Ring effect for focus
      },
      fontSize: {
        '2xl': '1.5rem',
        '3xl': '1.875rem',
      },
      fontWeight: {
        'semibold': '600',
        'bold': '700',
      },
      borderWidth: {
        '2': '2px',
      },
      borderRadius: {
        'md': '0.375rem', // Default rounded size
      },
    },
  },
  plugins: [],
}
