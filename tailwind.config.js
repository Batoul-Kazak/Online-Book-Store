// // tailwind.config.js
// module.exports = {
//   darkMode: "class", // still safe to keep
//   theme: {
//     extend: {
//       colors: {
//         // Primary
//         "primary-very-dark": "var(--color-primary-very-dark)",
//         "primary-dark": "var(--color-primary-dark)",
//         primary: "var(--color-primary)",
//         "primary-light": "var(--color-primary-light)",
//         "primary-very-light": "var(--color-primary-very-light)",

//         // Secondary
//         "secondary-very-dark": "var(--color-secondary-very-dark)",
//         "secondary-dark": "var(--color-secondary-dark)",
//         secondary: "var(--color-secondary)",
//         "secondary-light": "var(--color-secondary-light)",
//         "secondary-very-light": "var(--color-secondary-very-light)",

//         // Silver (grayscale)
//         "silver-very-dark": "var(--color-silver-very-dark)",
//         "silver-dark": "var(--color-silver-dark)",
//         silver: "var(--color-silver)",
//         "silver-light": "var(--color-silver-light)",
//         "silver-very-light": "var(--color-silver-very-light)",

//         // Blacks
//         "light-black": "var(--color-light-black)",
//         "dark-black": "var(--color-dark-black)",
//       },
//     },
//   },
//   plugins: [],
// };


module.exports = {
  darkMode: 'class', // enables .dark class toggle
  content: [
      "./app/**/*.{js,ts,jsx,tsx}",  
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary
        'primary-very-dark': 'var(--color-primary-very-dark)',
        'primary-dark': 'var(--color-primary-dark)',
        'primary': 'var(--color-primary)',
        'primary-light': 'var(--color-primary-light)',
        'primary-very-light': 'var(--color-primary-very-light)',

        // Secondary
        'secondary-very-dark': 'var(--color-secondary-very-dark)',
        'secondary-dark': 'var(--color-secondary-dark)',
        'secondary': 'var(--color-secondary)',
        'secondary-light': 'var(--color-secondary-light)',
        'secondary-very-light': 'var(--color-secondary-very-light)',

        // Silver
        'silver-very-dark': 'var(--color-silver-very-dark)',
        'silver-dark': 'var(--color-silver-dark)',
        'silver': 'var(--color-silver)',
        'silver-light': 'var(--color-silver-light)',
        'silver-very-light': 'var(--color-silver-very-light)',

        // Blacks
        'light-black': 'var(--color-light-black)',
        'dark-black': 'var(--color-dark-black)',
      },
    },
  },
  plugins: [],
};