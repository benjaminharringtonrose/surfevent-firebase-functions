module.exports = {
  root: true,
  env: {
    es6: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:import/typescript",
    "google",
    "plugin:@typescript-eslint/recommended",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: ["tsconfig.json", "tsconfig.dev.json"],
    tsconfigRootDir: __dirname, // needed this to make errors go away
    sourceType: "module",
  },
  ignorePatterns: [
    "/lib/**/*", // Ignore built files.
  ],
  plugins: ["@typescript-eslint", "import"],
  rules: {
    ["quotes"]: ["error", "double"],
    ["indent"]: ["error", 2],
    ["object-curly-spacing"]: [2, "always"],
    ["no-unused-vars"]: "off",
    ["no-non-null-assertion"]: 0,
    ["max-len"]: [
      "error",
      100,
      {
        ["ignoreComments"]: true,
        ["ignoreStrings"]: true,
        ["ignoreTrailingComments"]: true,
      },
    ],
  },
};
