module.exports = {
  env: {
    es2021: true,
    node: true,
  },
  settings: {
    "import/resolver": {
      typescript: {},
    },
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:import/recommended",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 13,
    sourceType: "module",
  },
  plugins: ["@typescript-eslint"],
  rules: {
    camelcase: "off",
    "class-methods-use-this": "off",
    "@typescript-eslint/no-namespace": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/no-non-null-assertion": "off",
  },
};
