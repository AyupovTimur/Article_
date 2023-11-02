export default {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "plugin:react/recommended",
        "standard-with-typescript"
    ],
    "overrides": [
        {
            files: ['*.ts', '*.tsx'],
        }
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        "react/jsx-indent": [2, 4],
        indent: [2, 4],
        "@typescript-eslint/strict-boolean-expressions": "warn",
        "no-unused-vars": "warn",
        'import/no-unresolved': 'off',
        'import/prefer-default-export': 'off',
        'react/jsx-props-no-spreading': 'warn',
        'react/function-component-definition': 'off',
        'no-shadow': 'off',
        'import/extensions': 'off',
        'import/no-extraneous-dependencies': 'off',
        'no-underscore-dangle': 'off',
        "react/require-default-props": "off",
        "react/react-in-jsx-scope": "off",
    }
}
