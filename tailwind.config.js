module.exports = {
  darkMode: false, // or 'media' or 'class'
  // theme: {
  //   extend: {
      // vuefront: {
      //   colors: {
      //     primary: 'red',
      //   }
      // }
  //   },
  // },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/custom-forms'),
    require('vuefront/tailwind/plugin.js')
  ],
}
