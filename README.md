## Webpack with Tailwind 2.0

Interesting things to notice:

- src/css/ has app-base, app-components and app-utilities split up.
- src/css/mine.css contains "my" styles.
- webpack `mode: 'development',` is an important piece for performance.
- I enabled all the colors in `tailwind.config.js` and also enabled `darkMode`, which results in a `16 MB` file.

***

2 scripts:

- `yarn webpack-hmr` runs `webpack serve` with webpack dev server
- `yarn webpack-watch` runs `webpack --watch`

When one of those scripts are running, you can change the code inside `mine.css` and it should rebuild pretty fast.

