module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'standard-with-typescript',
    'plugin:i18next/recommended',
    'prettier',
  ],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', 'i18next'],
  rules: {
    'react/jsx-indent': [1, 2],
    indent: [1, 2],
    '@typescript-eslint/indent': [1, 2],
    '@typescript-eslint/strict-boolean-expressions': 'warn',
    'no-unused-vars': 'warn',
    'import/no-unresolved': 'off',
    'import/prefer-default-export': 'off',
    'react/jsx-props-no-spreading': 'warn',
    'react/function-component-definition': 'off',
    'no-shadow': 'off',
    'import/extensions': 'off',
    'import/no-extraneous-dependencies': 'off',
    'no-underscore-dangle': 'off',
    'react/require-default-props': 'off',
    'react/react-in-jsx-scope': 'off',
    'i18next/no-literal-string': ['warn', { markupOnly: true }],
  },
}
