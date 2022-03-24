module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      height: {
        '128': '32rem',
        '136': '34rem',
        '144': '36rem',
        '148': '37rem',
        '149': '37.25rem',
        '150': '37.5rem',
        '151': '37.75rem',
        '152': '38rem',
        '153': '38.25rem',
        '154': '38.5rem',
        '156': '39rem',
        '158': '39.5rem',
        '160': '40rem',
        '164': '41rem',
        '168': '42rem',
        '176': '44rem',
        '256': '64rem',
      },
      width: {
        '84': '21rem',
        '88': '22rem',
      }
    },

    fontFamily: {
      'sans': ['ui-sans-serif', 'system-ui', 'apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'Noto Sans', 'sans-serif', 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'],
      'mono' : ['ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'Liberation Mono', 'Courier New', 'monospace'],
      'body': [],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
