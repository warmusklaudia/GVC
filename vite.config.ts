import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Unocss from 'unocss/vite'
import {VitePluginFonts} from 'vite-plugin-fonts'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(),
    Unocss({
      theme: {
        colors: {
          alpha: '#36454E',
          beta: '#D24A43'
        },
      },
      rules: [
        ['font-alpha', { 'font-family': 'Copperplate, serif' }],
        ['font-beta', { 'font-family': 'Open Sans, sans-serif' }],
        [
          /^text-(.*)$/,
          ([, c], { theme }) => {
            if (theme.colors[c]) return { color: theme.colors[c] }
          },
        ],
      ],
    }),
    VitePluginFonts({
      typekit: {
        id: 'sft7fyb',
        defer: true,
        injectTo: 'head',
      },
    }),
  ],
})
