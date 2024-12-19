const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
    content: ["./src/**/*.{html,js,jsx}"],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                'tanoWhite': '#FFFDF6',
                'tano': {
                    100: '#FFF6F1',
                    200: '#FFE3D6',
                    300: '#FFD0BB',
                    400: '#FFBCA1',
                    500: '#FFA986',
                    600: '#FF966C',
                    700: '#FF8251',
                    800: '#FF6F37',
                    900: '#FF3D00',
                },
            },
            screens: {
                'xs': '475px',
            },
            animation: {
                'spin-slow': 'spin 5s linear infinite',
            },
        },
    },
    plugins: [],
};
