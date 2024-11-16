# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```



1. For this project I will be using mostly tailwinds ZINC color pallet from tailwind
2.


PROJECT LIST:
  1. basketball registration
      summary: A basketball registration page where anyone can create an account and register for basketball games. The platform is designed to track whether enough players have signed up to play basketball on Tuesday evenings or another selected day.
      
      OR
      
      A basketball registration page built with Next.js and Tailwind CSS, featuring user authentication powered by Kinde. Users can create accounts and register for basketball games. The platform helps track whether enough players have signed up to play on Tuesday evenings or other selected days.

  2. Mums website
  3. Product landing page
  4. Wander Vilnius

  One section should include the following:
    1. screenshot
    2. title
    3. summary, a 2-3 sentence description of the project, covering:
      What the project is.
      The technologies you used.
      A notable feature or challenge you overcame.
    4. Link to deployed website