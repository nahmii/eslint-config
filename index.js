module.exports = {
  env: {
    browser: true,
    es2021: true,
    mocha: true,
    node: true
  },
  extends: [
    'eslint:recommended'
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  rules: {
    indent: [
      'error',
      2
    ],
    'linebreak-style': [
      'error',
      'unix'
    ],
    quotes: [
      'error',
      'single'
    ],
    semi: [
      'error',
      'always'
    ],
    'comma-dangle': [
      'error',
      'never'
    ],
    'no-console': 0,
    'no-multi-spaces': [
      'error'
    ],
    eqeqeq: [
      'error'
    ],
    'prefer-const': [
      'error'
    ]
  }
}
