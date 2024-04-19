module.exports = {
  parser: '@typescript-eslint/parser', // Especifica el parser de ESLint para TypeScript
  parserOptions: {
    ecmaVersion: 2020, // Permite la sintaxis de ECMAScript moderna
    sourceType: 'module', // Permite el uso de módulos de ES6
    ecmaFeatures: {
      jsx: true // Permite la sintaxis de JSX
    }
  },
  settings: {
    react: {
      version: 'detect' // Dile a eslint-plugin-react que detecte automáticamente la versión de React
    }
  },
  extends: [
    'standard', // Usa las reglas de eslint-config-standard
    'plugin:@typescript-eslint/recommended', // Usa las recomendaciones de @typescript-eslint/eslint-plugin
    'plugin:react/recommended' // Usa las recomendaciones de eslint-plugin-react
  ],
  rules: {
    'react/react-in-jsx-scope': 'off'
  },
  env: {
    es6: true,
    browser: true,
    node: true
  }
}
