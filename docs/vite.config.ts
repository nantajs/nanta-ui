import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import vueJsx from '@vitejs/plugin-vue-jsx'
import Icons from 'unplugin-icons/vite'
import filterReplace from './build/filterReplace';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vueJsx(), Icons({ /* options */ }), filterReplace(
    [
      {
        filter: /\.vue$/,
        replace: {
          from: /\/~\/main/g,
          to: '@nanta/ui'
        },        
      },
      {
        filter: /\.ts$/,
        replace: {
          from: /\/~\/main/g,
          to: '@nanta/ui'
        },        
      }
    ],
    {
      enforce: 'pre',
      apply: 'build'
    }
  )],
  base: '/nanta-ui/',
  resolve: {
    alias: {
      "/@": path.resolve(__dirname, "./src"),
      "/~": path.resolve(__dirname, "../src"),
    }
  },
})