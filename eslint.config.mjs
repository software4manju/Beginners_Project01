import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import playwright from 'eslint-plugin-playwright';
import prettier from 'eslint-config-prettier';

export default [
  {
    ignores: [
      'node_modules/**',
      'playwright-report/**',
      'test-results/**',
      'trace/**',
      'playwright/.auth/**',
      'playwright/user.json',
    ],
  },

  js.configs.recommended,
  ...tseslint.configs.recommended,

  {
    ...playwright.configs['flat/recommended'],
    files: ['**/*.spec.ts', '**/*.test.ts'],
  },

  prettier,
];
