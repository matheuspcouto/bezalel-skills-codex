import js from '@eslint/js';
import globals from 'globals';
import security from 'eslint-plugin-security';

export default [
  { ignores: ['node_modules/**', '.husky/_/**'] },
  {
    ...js.configs.recommended,
    files: ['**/*.mjs'],
    languageOptions: { globals: globals.node },
    plugins: { security },
    rules: {
      ...js.configs.recommended.rules,
      eqeqeq: ['error', 'always'],
      'no-eval': 'error',
      'no-new-func': 'error',
      'no-implied-eval': 'error',
      // Regras de segurança aplicáveis aos scripts JavaScript deste pacote.
      'security/detect-eval-with-expression': 'error',
      'security/detect-non-literal-regexp': 'error',
      'security/detect-possible-timing-attacks': 'error'
    }
  }
];
