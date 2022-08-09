module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-essential',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended'
  ],
  parser: 'vue-eslint-parser',
  parserOptions: {
    ecmaVersion: 'latest',
    parser: '@typescript-eslint/parser',
    sourceType: 'module'
  },
  plugins: ['vue', '@typescript-eslint'],
  rules: {
    'no-debugger': 'error',
    'no-multi-spaces': 2,
    'no-unused-vars': ['error', { varsIgnorePattern: '.*', args: 'none' }],
    'no-console': 'off',
    'no-restricted-syntax': [
      'error',
      'ObjectPattern > RestElement',
      'AwaitExpression'
    ]
  },
  overrides: [
    // tests, no restrictions (runs in Node / jest with jsdom)
    {
      files: ['**/tests/**'],
      rules: {
        'no-restricted-globals': 'off',
        'no-restricted-syntax': 'off',
        'jest/no-disabled-tests': 'error',
        'jest/no-focused-tests': 'error'
      }
    }
  ]
}
