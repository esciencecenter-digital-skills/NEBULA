/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],

  plugins: [require('@tailwindcss/typography')],


  theme: {
    fontFamily: {
      display: ['Nunito'],
      body: ['Assistant']
    },
    textColor: {
      eSciencePurple: '#380339',
      eScienceBlue: '#009DDD',
      eScienceYellow: '#FFB213',
      eScienceWhite: '#FFFFFF'
    },
    backgroundColor: theme => ({
      eSciencePurple: '#380339',
      eScienceBlue: '#009DDD',
      eScienceYellow: '#FFB213',
      eScienceWhite: '#FFFFFF',
      gentleBlue: '#e5f5fb'
    }),
    borderColor: theme => ({
      eSciencePurple: '#380339',
      eScienceBlue: '#009DDD',
      eScienceYellow: '#FFB213',
      eScienceWhite: '#FFFFFF',
      gentleBlue: '#e5f5fb'
    })
  }
}

