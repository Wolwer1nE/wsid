module.exports = {
  purge:  {content: ['./components/**/*.svelte'],
    options: {
      whitelistPatterns: [/^bg-/],
    }},
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [],
}
