import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        // "heroimage": "url('/home/heroimage.svg')",
      },
      width: {
        
      },
      borderColor: {
        'gray-50': 'rgba(115, 115, 115, 0.25)', 
      },
      boxShadow: {
        'br': '0 0 7px rgba(0, 0, 0, 0.3)',
      }
    },
  },
  plugins: [],
};

export default config;