module.exports = {
  darkMode: "class",
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: { extend: {} },
  plugins: [],
};// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      fontFamily: {
        heading: ["var(--font-zen-tokyo-zoo)"],
        sans: ["var(--font-inter)"],
      },
    },
  },
}
/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;
