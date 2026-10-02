export default {
  base: '/c-language-blog/',
  title: "C语言学习笔记",
  themeConfig: {
    nav: [
      { text: '首页', link: '/' }
    ],
sidebar: [
{
text: 'C语言循环笔记',
items: [
  { text: '循环基础', link: '/loop' },
  { text: '水仙花数', link: '/narcissistic' },
  { text: '九九乘法表', link: '/nine-nine' },
  { text: '文章发布', link: '/publish' }
]
},
{
text: '后台登录',
link: '/login'
}
]

},
search: {
  provider: 'local'
}
}