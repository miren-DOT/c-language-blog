import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "C语言学习笔记",
  lang: 'zh-CN',
  themeConfig: {
    // 本地搜索，打开顶部搜索框
    search: {
      provider: 'local'
    },
    // 侧边栏菜单
    sidebar: [
      {
        text: 'C语言学习笔记',
        items: [
          { text: '循环基础', link: '/loop' },
          { text: '水仙花数', link: '/narcissistic' },
          { text: '九九乘法表', link: '/nine-nine' },
          // ==========这里新增下面两行==========
          { text: '后台登录', link: '/admin' }
        ]
      }
    ]
  }
})
