# Rsbuild JavaScript Sample Project

A minimal JavaScript project built using **Rsbuild** demonstrating:

- ⚡ Fast development & production builds (Rspack-powered)
- 🎨 CSS support (with optional PurgeCSS for unused CSS removal)
- 🖼️ Image & icon handling (PNG, JPG, SVG)
- 📦 Production-ready build output

This project is intentionally simple and close to real-world setups, making it a good starting point or reference when migrating from Webpack.

---

## 📁 Project Structure

```
rsbuild-sample/
├── dist/                 # Production build output
│   ├── index.html
│   └── static/
├── public/
│   └── index.html        # HTML template
├── src/
│   ├── index.js          # Application entry
│   ├── styles.css        # Global styles
│   └── assets/
│       ├── logo.png
│       └── icon.svg
├── rsbuild.config.js     # Rsbuild configuration
├── package.json
└── README.md
```

---

## 🚀 Getting Started

### 1️⃣ Install dependencies

```bash
npm install
```

(or `pnpm install` if you prefer)

---

### 2️⃣ Start development server

```bash
npm run dev
```

- Starts a fast dev server
- Supports hot reload
- Suitable for local development

---

### 3️⃣ Create a production build

```bash
npm run build
```

This will:
- Minify JS and CSS
- Optimize assets
- Generate hashed filenames
- Output everything to the `dist/` folder

---

### 4️⃣ Preview the production build (recommended)

```bash
npm run preview
```

> ⚠️ Do **not** open `dist/index.html` directly or via Live Server from the project root.  
> Always use `rsbuild preview` or serve the `dist/` folder explicitly.

---

## 🎨 CSS Handling

### Global CSS

```js
import './styles.css';
```

Rsbuild automatically extracts and optimizes CSS during production builds.

---

### Removing unused CSS (PurgeCSS)

This project demonstrates how to remove unused CSS using **PostCSS + PurgeCSS** (Webpack-style behavior).

#### Installed dependency

```bash
npm install -D @fullhuman/postcss-purgecss postcss
```

#### Production-only configuration

```js
import { purgeCSSPlugin } from '@fullhuman/postcss-purgecss';

export default defineConfig({
  tools: {
    postcss: (opts) => {
      if (process.env.NODE_ENV === 'production') {
        opts.postcssOptions.plugins.push(
          purgeCSSPlugin({
            content: ['./src/**/*.{js,html}', './public/index.html'],
          })
        );
      }
    },
  },
});
```

> ℹ️ For new projects, **CSS Modules** are recommended over PurgeCSS.

---

## 🖼️ Image & Icon Support

Rsbuild supports asset imports out of the box:

```js
import logo from './assets/logo.png';
import icon from './assets/icon.svg';
```

Assets are automatically:
- Optimized
- Hashed
- Moved to `dist/static/media`

---

## 🧪 Common Pitfalls

### 404 for JS/CSS when opening `index.html`

This happens when:
- Using VS Code Live Server from the project root
- Opening `index.html` directly

✅ Correct approaches:
- Use `npm run preview`
- Or serve the `dist/` folder explicitly

---

## 🆚 Why Rsbuild over Webpack?

| Feature | Webpack | Rsbuild |
|------|--------|---------|
| Dev speed | Slow | ⚡ Very fast |
| Config size | Large | Minimal |
| CSS handling | Manual loaders | Built-in |
| Tree-shaking | Partial | Better defaults |

---

## 📦 Scripts

```json
"scripts": {
  "dev": "rsbuild dev",
  "build": "rsbuild build",
  "preview": "rsbuild preview"
}
```

---

## 📌 Notes

- No additional loaders are required for CSS or assets
- Suitable for SPA or MPA setups
- Easy to extend for React, Vue, or monorepos

---

## 📄 License

MIT
