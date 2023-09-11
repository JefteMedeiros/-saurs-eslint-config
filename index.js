module.exports = {
  env: {
    es2021: true
  },
  extends: [
    "plugin:prettier/recommended",
    "eslint:recommended"
  ],
  parser: "@typescript-eslint/parser",
  plugins: [
    "@typescript-eslint",
  ],
  rules: {
    "prettier/prettier": [
      "error",
      {
        printWidth: 80,
        tabWidth: 2,
        singleQuote: false,
        trailingComma: "all",
        arrowParens: "always",
        semi: false,
        endOfLine: "auto"
      }
    ],
    "no-unused-vars": "error",
    "space-before-blocks": [
      "warn",
      "always"
    ],
    semi: [
      "warn",
      "never"
    ]
  },
  settings: {
    'import/parsers': {
      [require.resolve('@typescript-eslint/parser')]: ['.ts', '.tsx', '.d.ts'],
    }
  },
  ignorePatterns: [
    'node_modules'
  ]
}