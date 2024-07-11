module.exports = {
  env: {
    browser: true,
    jest: true,
    es2021: true, 
  },
  extends: [
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:@typescript-eslint/recommended',
    "plugin:prettier/recommended", 
    "eslint:recommended", 
  ],
  parser: "@typescript-eslint/parser", 
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest', 
    sourceType: 'module',
  },
  plugins: [
    'react',
    'jsx-a11y',
    "@typescript-eslint", 
  ],
  rules: {
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 'off',
    'jsx-a11y/alt-text': [
      'warn',
      {
        elements: ['img'],
        img: ['Image'],
      },
    ],
    'jsx-a11y/aria-props': 'warn',
    'react-hooks/exhaustive-deps': 'off',
    'jsx-a11y/aria-proptypes': 'warn',
    'jsx-a11y/aria-unsupported-elements': 'warn',
    'jsx-a11y/role-has-required-aria-props': 'warn',
    'jsx-a11y/role-supports-aria-props': 'warn',
    '@typescript-eslint/no-explicit-any': "off",
    "prettier/prettier": [
      "error",
      {
        printWidth: 80,
        tabWidth: 2,
        singleQuote: false,
        trailingComma: "all",
        arrowParens: "always",
        semi: false, 
        endOfLine: "auto",
      },
    ],
    "no-unused-vars": "error",
    "space-before-blocks": [
      "warn",
      "always"
    ],
    semi: [
      "warn",
      "never" 
    ],
  },
  settings: {
    react: {
      version: 'detect', 
    },
    'import/parsers': {
      [require.resolve('@typescript-eslint/parser')]: ['.ts', '.tsx', '.d.ts'], 
    },
  },
  ignorePatterns: [
    'node_modules', 
  ],
};
