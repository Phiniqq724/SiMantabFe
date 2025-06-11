import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        biru: "#B3E7FF",
        "abu-900": "#3E3E3E",
        merah: "#FF1053",
        "biru-tua": "#373DD2",
        "biru-muda": "#66C7F4",
        "abu-400": "#DEDEDE",
      },
    },
  },
  plugins: [],
} satisfies Config;
