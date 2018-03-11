import { css } from 'styled-components'

const sizes = {
  'extra-small': 767,
  'small': 768,
  'medium': 992,
  'large': 1200,
}

// iterate through the sizes and create a media template
export const media = Object.keys(sizes).reduce((accumulator, label) => {
  const emSize = sizes[label] / 16
  if (label === 'bp-nis-extra-small') {
    accumulator[label] = (...args) => css`
      @media (max-width: ${emSize}em) {
        ${css(...args)};
      }
    `
  } else {
    accumulator[label] = (...args) => css`
      @media (min-width: ${emSize}em) {
        ${css(...args)};
      }
    `
  }

  return accumulator
}, {})
