module.exports = {
  root: true,
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    parser: 'babel-eslint',
  },
  env: {
    browser: true,
    es6: true,
    jest: true,
  },
  plugins: [
    'babel',
    'vue',
  ],
  extends: [
    'airbnb-base',
    'plugin:vue/recommended',
  ],
  settings: {
    'import/resolver': {
      node: {
        extensions: [
          '.js',
          '.json',
          '.vue',
        ],
      },
    },
  },
  rules: {
    'generator-star-spacing': 'off',
    'import/no-extraneous-dependencies': ['error', { 'devDependencies':  true }],
    'semi-style': 'off',
    'import/extensions': ['error', 'always', {
      js: 'never',
      vue: 'never',
    }],
    'no-param-reassign': ['error', {
      props: true,
      ignorePropertyModificationsFor: [
        'state', // for vuex state
        'acc', // for reduce accumulators
        'e' // for e.returnvalue
      ]
    }],
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-plusplus': 'off',
    'prefer-const': 'off',
  },
};
