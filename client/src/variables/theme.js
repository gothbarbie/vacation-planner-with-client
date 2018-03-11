const useColors = require('./useColors')
const sizes = require('./sizes')
const typography = require('./typography')

function snakeToCamel (s) {
  return s.replace(/(\-\w)/g, function (m) {
    return m[1].toUpperCase()
  })
}

function convertForTheme (values, removeProp) {
  return Object.keys(values).reduce(
    (acc, curr) => ({
      ...acc,
      [snakeToCamel(curr.replace(removeProp, ''))]: values[curr],
    }),
    {}
  )
}

export const theme = {
  colors: convertForTheme(useColors, 'color-'),
  sizes: convertForTheme(sizes, 'spacing-'),
  typography: convertForTheme(typography, ''),
}
