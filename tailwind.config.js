/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.tsx'],
  theme: {
    extend: {
      colors: {
        'finance-purple-900': '#3D244F',
        'finance-purple-600': '#78489C',
        'finance-purple-200': '#BA6FF2',
        'finance-blue-900': '#15485C',
        'finance-blue-400': '#37ADC9',
        'finance-blue-100': '#89D5E6',
        'finance-red-600': '#F15257',
        'finance-gray-100': '#ECECEC',
        'finance-gray-50': '#F3F3F3',
      },
      fontFamily: {
        sans: ['Raleway', 'sans-serif']
      },
    }
  },
  plugins: [],
}

