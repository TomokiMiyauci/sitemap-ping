// eslint-disable-next-line @typescript-eslint/no-var-requires
const { join } = require('path')
const BASE_DIR = join(__dirname, 'src')
const VUE_FILE = join('**', '*.vue')

/**
 * @type {import('tailwindcss').Config}
 */
const config = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: {
    // Learn more on https://tailwindcss.com/docs/controlling-file-size/#removing-unused-css
    enabled: process.env.NODE_ENV === 'production',
    content: [join(BASE_DIR, VUE_FILE), join(__dirname, '*.html')],
  },
  theme: {
    extend: {
      spacing: {
        72: '18rem',
        84: '21rem',
        96: '24rem',
        108: '27rem',
        120: '30rem',
        132: '33rem',
        144: '36rem',
        156: '39rem',
        168: '42rem',
        180: '45rem',
        192: '48rem',
      },
    },
  },
  variants: {
    textColor: ['responsive', 'hover', 'focus', 'disabled', 'focus-within'],
    backgroundColor: [
      'responsive',
      'hover',
      'focus',
      'disabled',
      'focus-within',
      'checked',
    ],
    gradientColorStops: ['responsive', 'hover', 'focus', 'focus-within'],
    cursor: ['disabled'],
  },
  plugins: [],
}

module.exports = config
