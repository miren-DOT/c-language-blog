import { defineConfig } from 'vitepress'

export default defineConfig({
  base: '/c-language-blog/',
  title: "Miren's Blog",
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '文章列表', link: '/posts/index' },
      { text: '归档', link: '/archive' },
      { text: '标签', link: '/tags' },
      { text: '关于我', link: '/about' }
    ],
    // 侧边栏配置，只在posts文章页面显示
    sidebar: {
      '/posts/': [
        {
          text: 'C语言笔记',
          items: [
            { text: 'C语言循环基础', link: '/posts/loop' },
            { text: '水仙花数 C语言实现', link: '/posts/narcissistic' },
            { text: 'C语言九九乘法表', link: '/posts/nine-nine' }
          ]
        }
      ]
    },
    docFooter: {
      prev: false,
      next: false
    },
    search: {
      provider: 'local'
    }
  }
})
