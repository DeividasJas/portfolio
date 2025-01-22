import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import pluginReact from 'eslint-plugin-react';

/** @type {import('eslint').Linter.Config[]} */
export default [
  { files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'] },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  {
    rules: {
      '@typescript-eslint/no-explicit-any': 'off',
      'react/react-in-jsx-scope': 'off',
      'no-inline-comments': 'warn',
      'line-comment-position': ['warn', { position: 'above' }],
      'multiline-comment-style': ['warn', 'starred-block'],
      'spaced-comment': ['error', 'always', { exceptions: ['-', '+'] }],
      'no-warning-comments': [
        'error',
        { terms: ['todo', 'fixme'], location: 'anywhere' },
      ],
    },
  },
];
