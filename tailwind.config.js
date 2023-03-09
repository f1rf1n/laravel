const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}
  
function rgbToHex(r, g, b) {
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

module.exports = {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
    ],

    theme: {
        extend: {
            fontFamily: {
                // sans: 'Rubik, Arial, Helvetica, sans-serif', // from yourls share plugin
                sans: ['Rubik', ...defaultTheme.fontFamily.sans],
            },
            colors: {
                'scheerdarkest': '#0c0011',
                'scheerdarker': '#15001d',
                'scheerdark': '#333333',
                'scheerlink': '#DE0070',
                leaf: rgbToHex(0,180,0),
                forest: rgbToHex(0,130,0),
                grass: rgbToHex(50,240,0),
                field: rgbToHex(160,255,150),
                sunrise: rgbToHex(255,190,40),
                sunset:  rgbToHex(255,105,50),
                bgwa: '#25D366',
                scpwa: '#25D366',
                bgtw: '#1DA1F2',
                bgfb: '#4267B2',
                bgig: '#C13584',
            },
        },
    },

    plugins: [require('@tailwindcss/forms')],
};