/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                roboto: ["Roboto", "sans-serif"],
            },
            keyframes: {
                slowSpin: {
                    "0%": { transform: "rotate(0deg)" },
                    "50%": { transform: "rotate(180deg)" },
                    "100%": { transform: "rotate(360deg)" },
                },
                bell: {
                    "0%": { transform: "rotate(0deg)" },
                    "10%": { transform: "rotate(14deg)" },
                    "20%": { transform: "rotate(-8deg)" },
                    "30%": { transform: "rotate(14deg)" },
                    "40%": { transform: "rotate(-4deg)" },
                    "50%": { transform: "rotate(10deg)" },
                    "60%": { transform: "rotate(0deg)" },
                    "100%": { transform: "rotate(0deg)" },
                },
                stripes: {
                    "0%": { backgroundPosition: "0 0" },
                    "100%": { backgroundPosition: "40px 0" },
                },
            },
            animation: {
                stripes: "stripes 3s linear infinite",
                bell: "bell 1.5s ease-in-out infinite",
                slowSpin: "slowSpin 6s linear infinite",
            },
        },
        screens: {
            xs: "360px",
            xm: "480px",
            sm: "640px",
            md: "768px",
            lg: "1024px",
            xl: "1280px",
            "2xl": "1536px",
        },
    },
    plugins: [],
};
