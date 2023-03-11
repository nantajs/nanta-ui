import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import vueJsx from '@vitejs/plugin-vue-jsx'
import Icons from 'unplugin-icons/vite'
import filterReplace from './build/filterReplace'
import { viteMockServe } from "vite-plugin-mock";

// https://vitejs.dev/config/
export default defineConfig(({ command, mode, ssrBuild }) => {
  const env = loadEnv(mode, process.cwd());
  return {
    plugins: [vue(), vueJsx(), Icons({ /* options */ }), filterReplace([
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
      },],
      {
        enforce: 'pre',
        apply: 'build'
      }
    ), viteMockServe({
      mockPath: "./src/mock",
      // localEnabled: env.VITE_MOCK ==='true',
      localEnabled: true,
      logger: true
    }),],
    base: command === 'build' ? '/nanta-ui/' : '',
    resolve: {
      alias: {
        "/@": path.resolve(__dirname, "./src"),
        "/~": path.resolve(__dirname, "../src"),
      }
    },
  }
})