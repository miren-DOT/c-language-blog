---
layout: home
hero:
  name: C语言学习笔记
  text: 个人技术学习博客
  tagline: 循环结构练习 | 水仙花数 | 九九乘法表
  actions:
    - theme: brand
      text: 开始阅读笔记
      link: /loop
features:
  - icon: 💻
    title: C语言循环代码
    details: for循环、while循环、do while循环入门精讲
  - icon: ✨
    title: 经典实战案例
    details: 水仙花数、九九乘法表完整源码+思路解析
  - icon: ⚙️
    title: VitePress静态博客
    details: 支持搜索、侧边导航、代码高亮、轻量化部署
---

# 博客介绍
这里存放我的C语言课程预习笔记，专注整理**循环结构**核心知识点与实战习题。
本项目基于 VitePress 搭建静态网页，界面简洁、查阅方便，适合长期学习复盘。

## 项目亮点
1. 自带全局搜索功能，快速检索知识点与代码案例
2. 侧边栏分类导航，页面跳转清晰规范
3. 所有C语言代码支持语法高亮，阅读体验极佳
4. 区分知识点、重点提示、易错坑点，学习结构完整

## 笔记目录
- [循环基础](/loop)
- [水仙花数](/narcissistic)
- [九九乘法表](/nine-nine)

## 示例：水仙花数
```c
#include <stdio.h>
int main()
{
    int i;
    for(i=100;i<=999;i++)
    {
        int a=i/100;
        int b=i/10%10;
        int c=i%10;
        if(a*a*a + b*b*b + c*c*c == i)
        {
            printf("%d 是水仙花数\n",i);
        }
    }
    return 0;
}
