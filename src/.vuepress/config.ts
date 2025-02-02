import { defineUserConfig } from 'vuepress'
import { getDirname, path } from '@vuepress/utils'
import { AuthorName, Base, Description } from './constant'
import { configPlugins } from './configs/plugins'
import { viteBundler } from '@vuepress/bundler-vite'
import viteOptions from './configs/vite.config'
import theme from './configs/theme'
const __dirname = getDirname(import.meta.url)

const InfoPanel = path.resolve(__dirname, './components/InfoPanel/index.vue')
const PageFooter = path.resolve(__dirname, './components/PageFooter/index.vue')

export default defineUserConfig({
  base: Base,
  lang: 'zh-CN',
  title: AuthorName,
  description: Description,
  shouldPrefetch: false,
  theme,
  markdown: {
    headers: {
      level: [2, 3, 4]
    }
  },
  alias: {
    '@components': path.resolve(__dirname, './components'),
    '@websites': path.resolve(__dirname, './public/assets/websites'),
    '@friends': path.resolve(__dirname, '../friends'),
    '@theme-hope/components/PageFooter': PageFooter,
    '@theme-hope/modules/blog/components/InfoPanel': InfoPanel
  },
  plugins: configPlugins,
  bundler: viteBundler({
    viteOptions
  })
})
