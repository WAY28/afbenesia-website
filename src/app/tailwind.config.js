/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./app/**/*.{js,jsx,ts,tsx}",
        "./components/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: "#1B4FD8",
                    dark: "#1340B0",
                    light: "#3B6EF0",
                },
                accent: "#F59E0B",
                dark: "#0F172A",
                cream: "#F5F0E8",
                "gray-mid": "#64748B",
            },
            fontFamily: {
                sans: ["Sora", "sans-serif"],
                display: ["Sora", "sans-serif"],
            },
            borderRadius: {
                "2xl": "1rem",
                "3xl": "1.5rem",
            },
            boxShadow: {
                "card": "0 2px 16px 0 rgba(15,23,42,0.08)",
                "card-hover": "0 8px 32px 0 rgba(27,79,216,0.12)",
            },
        },
    },
    plugins: [],
};