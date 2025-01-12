import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress/cli'
import { viteBundler } from '@vuepress/bundler-vite'

export default defineUserConfig({
  base: '/',
  lang: 'en-ZH',

  title: 'ZeroAI',
  description: 'My first VuePress Site',
  
  theme: defaultTheme({
    logo: '/images/logo1.svg',
    // lastUpdated: false, // 禁用最后更新时间
    contributors: false, // 禁用贡献者
    hostname: 'https://faq.zeroai.top',
    // navbar: ['/', '/get-started'],
    // 自定义navbar项
    
  }),
  
  bundler: viteBundler(),
})
