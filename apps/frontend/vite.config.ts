import i18n from '@intlify/vite-plugin-vue-i18n'
import { join } from 'path'
import analyze from 'rollup-plugin-analyzer'
import visualizer from 'rollup-plugin-visualizer'
import type { UserConfig } from 'vite'
import vitePluginYaml from 'vite-plugin-yaml'

const config: UserConfig = {
  alias: {
    '/@/': join(__dirname, 'src'),
  },

  vueCustomBlockTransforms: {
    i18n,
  },

  plugins: [vitePluginYaml],

  rollupInputOptions: {
    plugins: [analyze({ summaryOnly: true }), visualizer()],
  },
}

export default config
