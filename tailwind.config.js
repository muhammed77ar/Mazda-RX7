const {
    default: flattenColorPalette,
  } = require("tailwindcss/lib/util/flattenColorPalette");
  
  /** @type {import('tailwindcss').Config} */
  module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
     
        // Or if using `src` directory:
        "./src/**/*.{js,ts,jsx,tsx,mdx}",
      ],
    darkMode: "class",
    theme: {
      extend: {
        backgroundImage: {
          'gradient-to-r': 'linear-gradient(to right, var(--tw-gradient-stops))',
        },
        blur: {
          'md': '8px',
        },
        animation: {
            aurora: "aurora 60s linear infinite",
            spotlight: "spotlight 2s ease .75s 1 forwards",
        },
        keyframes: {
            aurora: {
              from: {
                backgroundPosition: "50% 50%, 50% 50%",
              },
              to: {
                backgroundPosition: "350% 50%, 350% 50%",
              },
            },
        },
      },
    },
    plugins: [addVariablesForColors],
  };
  
  // This plugin adds each Tailwind color as a global CSS variable, e.g. var(--gray-200).
  function addVariablesForColors({ addBase, theme }) {
    let allColors = flattenColorPalette(theme("colors"));
    let newVars = Object.fromEntries(
      Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
    );
   
    addBase({
      ":root": newVars,
    });
  }
  