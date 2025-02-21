import eslint from "@eslint/js";
import tseslint from "@typescript-eslint/eslint-plugin";

export default [
  eslint.configs.recommended,
  {
    files: ["**/*.ts", "**/*.tsx", "**/*.js", "**/*.jsx"],
    plugins: { "@typescript-eslint": tseslint },
    rules: {
      "@typescript-eslint/no-unused-vars": "error",
      "react/prop-types": "off",
    },
  },
];
