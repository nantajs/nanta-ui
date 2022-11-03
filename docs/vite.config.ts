import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import vueJsx from '@vitejs/plugin-vue-jsx'
import Icons from 'unplugin-icons/vite'
import filterReplace from './build/filterReplace';
import { version } from '../package.json'

// https://vitejs.dev/config/
export default defineConfig(({ command, mode, ssrBuild }) => {
  return {
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
        },
        {
          filter: /\.json$/,
          replace: {
            from: /#nanta-versoin/g,
            to: version
          },
        }
      ],
      {
        enforce: 'pre',
        apply: 'build'
      }
    )],
    base: command === 'build' ? '/nanta-ui/' : '',
    resolve: {
      alias: {
        "/@": path.resolve(__dirname, "./src"),
        "/~": path.resolve(__dirname, "../src"),
      }
    },
  }
})