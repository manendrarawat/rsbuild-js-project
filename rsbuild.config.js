import { defineConfig } from '@rsbuild/core';
import { purgeCSSPlugin } from '@fullhuman/postcss-purgecss';

export default defineConfig({
  html: {
    template: './public/index.html',
  },

  source: {
    entry: {
      index: './src/index.js',
    },
  },

  output: {
    distPath: {
      root: 'dist',
      assetPrefix: '/my-app/',
    },
  },

  tools: {
    postcss: (opts) => {
      if (process.env.NODE_ENV === 'production') {
        opts.postcssOptions.plugins.push(
          purgeCSSPlugin({
            content: ['./src/**/*.{js,html}', './public/index.html'],
            defaultExtractor: (content) =>
              content.match(/[\w-/:]+(?<!:)/g) || [],
          })
        );
      }
    },
  }
});
