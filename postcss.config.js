'use strict'

module.exports = ({mode}) => {
  return {
    plugins: [
      require('postcss-import')({path: ['./src/css/']}),
      require('tailwindcss'),
      require('postcss-preset-env')({stage: 0}),
    ],
  }
}
