/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      spacing: {
        14: "3.5rem",
        "125px": "125px",
      },
      colors: {
        hoverspt: "#18d760",
        "purple-main": "#2d46b9",
        "green-main": "#1ed760",
      },
      backgroundImage: (theme) => ({
        "spotify-theme": "url('../src/img/bursts.svg')",
        "spotify-theme-mobile": "url('../src/img/bursts-mobile.svg')",
      }),
      backgroundSize: {
        "2200px": "2550px",
        "175%": "185%",
        "210%": "210%",
        "195%": "195%",
      },
      backgroundPosition: {
        banner: "46% 13%",
        "banner-2": "45% 15%",
        "banner-mobile": "top 25% center",
      },
      fontSize: {
        "9xl": "9rem",
      },
    },
  },
  plugins: [],
};
