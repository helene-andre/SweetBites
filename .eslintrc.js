module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    '@nuxtjs',
    'plugin:nuxt/recommended'
  ],
  // add your custom rules here
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? 2 : 1,
    "no-debugger": process.env.NODE_ENV === "production" ? 2 : 1,
    "no-unused-vars": process.env.NODE_ENV === "production" ? 2 : 1,
    "comma-dangle": process.env.NODE_ENV === "production" ? 2 : 1,
    "indent": process.env.NODE_ENV === "production" ? 2 : 1,
    "curly": 0,
    "brace-style": 0,
    "no-undef": process.env.NODE_ENV === "production" ? 2 : 1,
  }
}
