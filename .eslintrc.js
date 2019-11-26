module.exports = {
  root: true,
  env: {
    node: true,
  },
  globals: {
    require: true,
    uni: true,
    wx: true,
    App: true,
    getApp: true,
    Page: true,
    getCurrentPages: true,
    Component: true,
    Behavior: true
  },
  extends: [
    'plugin:vue/essential',
    '@vue/airbnb',
    '@vue/typescript',
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-extraneous-dependencies': 'off',
    'no-tabs': 'off',
    'indent': [2, 2, {
      'SwitchCase': 1
    }],
    "arrow-body-style": ["error", "always"]
  },
  overrides: [
    {
      files: ['*.vue', '*.ts', '*.tsx'],
      rules: {
        '@typescript-eslint/no-unused-vars': [2, { args: 'none' }]
      }
    }
  ],
  parserOptions: {
    parser: '@typescript-eslint/parser',
  },
};
