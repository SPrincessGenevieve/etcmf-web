import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.config({
    extends: ["next"],
    rules: {
      // Disable Next.js and React strict rules
      "react/no-unescaped-entities": "off",
      "@next/next/no-page-custom-font": "off",
      
      // Turn off strict mode rules
      "strict": "off", // disables 'use strict'
      "@typescript-eslint/strict-boolean-expressions": "off", // if using TypeScript
      "no-console": "off", // allow console.log
      "no-debugger": "off", // allow debugger
    },
  }),
];


export default eslintConfig;
