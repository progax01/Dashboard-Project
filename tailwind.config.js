/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    important: "#root",
    theme: {
        extend: {
            colors: {
                first: "#3D3D3D",
                second: "#c3def7",
                third: "#a6c7f9",
                fourth: "#3d3d3d",
                fifth: "#F2F2F2",
                sixt: "#0E83D9",
                gren:"#0BA649",
                fldcr:"#E6E6E6",
                eye:"#959596",
                bt:"#C4C4C4",
                bglyt:"rgba(149, 149, 150, 0.20)",
                bglogin:"rgba(28, 69, 132, 0.90)",
            },
        },
    },
    plugins: [],
};
