import globals from "globals";
import pluginJs from "@eslint/js";
import eslintConfigPrettier from "./node_modules/eslint-config-prettier";

/** @type {import('eslint').Linter.Config[]} */
export default [
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  {
    rules: {
      "no-unused-vars": "warn",
      "no-undef": "warn",
    },
  },
  eslintConfigPrettier,
];
