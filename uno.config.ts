import { defineConfig, presetAttributify, presetIcons, presetUno, transformerAttributifyJsx } from 'unocss';

export default defineConfig({
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      extraProperties: {
        display: 'inline-block',
        'vertical-align': 'middle',
      },
    }),
  ],
  transformers: [transformerAttributifyJsx()],
});
