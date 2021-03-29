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
    'prettier/vue',
    'plugin:prettier/recommended',
    'plugin:vue/recommended',
    'eslint:recommended',
  ],
  plugins: [
    'prettier',
  ],
  globals: {
    $nuxt: true
  },
  // add your custom rules here
  rules: {
    'nuxt/no-cjs-in-config': 'off',
    "global-require": "warn",
    'max-len': ['error', { code: 120 }],
    'vue/max-len': ['error', {
      code: 120,
      template: 120,
    }],
    "no-unused-expressions": "warn",
    "no-nested-ternary": "off",
    "no-restricted-imports": [0, { "patterns": ["../*"] }]
  },
  settings: {
    'import/resolver': {
      nuxt: {
        extensions: ['.js', '.vue'],
      },
    },
  },
}
