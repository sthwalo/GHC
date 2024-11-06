/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      // Adding custom colors for the Global Hope Consortium theme
      colors: {
        primary: '#0A3459',    // Primary dark blue
        secondary: '#192E40',  // Secondary dark blue
        lightGray: '#F2F2F2',  // Background light gray
        mediumGray: '#8C8C8C', // Medium gray for accents
        darkGray: '#0D0D0D',   // Dark gray for text
      },
      // Additional custom styles can go here if needed
    },
  },
  plugins: [],
  
  // Documentation:
  // Custom color palette incorporated based on the brand colors of Global Hope Consortium.
  // Colors:
  // - Primary (#0A3459): Main dark blue used for highlights, headers, and primary actions.
  // - Secondary (#192E40): Secondary dark blue, suitable for backgrounds or secondary buttons.
  // - Light Gray (#F2F2F2): Light background color for contrast with dark text.
  // - Medium Gray (#8C8C8C): Accent gray, used for borders, secondary text, or muted elements.
  // - Dark Gray (#0D0D0D): Default dark color for text to maintain readability.
  //
  // Usage:
  // - Apply classes like `bg-primary`, `text-secondary`, or `border-mediumGray` across components.
  // - Ensures consistent branding and readability on all screens.
};