module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: 'standard',
  overrides: [
    {
      env: {
        node: true
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script'
      }
    }
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  rules: {
    'no-console': 'off', // Запрет использования console.log и подобных методов
    'no-debugger': 'error', // Запрет использования debugger
    'no-unused-vars': 'warn', // Предупреждение о неиспользуемых переменных
    semi: ['error', 'always'], // Требование точек с запятой
    quotes: ['error', 'single'], // Использование одинарных кавычек
    indent: ['error', 2], // Отступы: 2 пробела
    'no-trailing-spaces': 'error', // Запрет конечных пробелов в строках
    'eol-last': ['error', 'always'], // Запрет пустой строки в конце файла
    'comma-dangle': ['error', 'never'], // Запрет trailing запятых в массивах и объектах
    'no-var': 'error', // Запрет использования var
    eqeqeq: 'error', // Использование === и !==
    'no-undef': 'error' // Запрет использования необъявленных переменных
  }
};
