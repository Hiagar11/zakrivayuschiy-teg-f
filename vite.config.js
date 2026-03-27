import { defineConfig } from 'vite';
import autoprefixer from 'autoprefixer';
import postcssPresetEnv from 'postcss-preset-env';
import cssnano from 'cssnano';

export default defineConfig({
  css: {
    postcss: {
      plugins: [
        postcssPresetEnv({
          stage: 2,
          features: {
            'nesting-rules': true,
            'custom-media-queries': true,
          },
        }),
        autoprefixer(),
        ...(process.env.NODE_ENV === 'production' ? [cssnano({ preset: 'default' })] : []),
      ],
    },
  },
});
