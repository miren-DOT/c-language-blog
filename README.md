# ```

# \# Miren's Blog

# 基于 VitePress 搭建的静态博客，用于记录C语言编程学习笔记。

# 

# \## ✨ 项目介绍

# 本项目是静态博客网站，使用 Vue3 + VitePress 框架开发，Node.js仅用于本地启动与打包。

# 无需后端数据库，文章使用 Markdown 编写，自带代码高亮，适合展示C语言代码案例。

# 搭配 GitHub Actions CI/CD，提交代码自动打包，部署到 GitHub Pages，实现公网访问。

# 

# \## 📁 项目目录结构

# ```

# 

# c-language-blog/

# ├─ docs/                  # 网站源码目录

# │  ├─ posts/              # 文章存放目录

# │  │  ├─ loop.md          # C 语言循环基础

# │  │  ├─ narcissistic.md  # 水仙花数

# │  │  └─ nine-nine.md     # 九九乘法表

# │  ├─ index.md            # 网站首页

# │  ├─ posts/index.md      # 文章列表页

# │  ├─ archive.md          # 文章归档

# │  ├─ tags.md             # 标签页

# │  └─ about.md            # 关于我

# ├─ .github/workflows/     # GitHub Actions 自动部署配置

# ├─ package.json           # 项目依赖配置

# └─ README.md              # 项目说明文档

# 

# ```

# 

# \## 🛠️ 技术栈

# Vue3 + VitePress + Node.js

# \- VitePress：将Markdown转为静态网页，自带代码高亮、搜索功能

# \- Node.js：本地运行开发服务、执行打包

# \- CI/CD：GitHub Actions，代码推送后自动构建并部署至GitHub Pages

# 

# \## 🖥️ 本地运行

# ```bash

# \# 安装依赖

# npm install

# \# 启动本地预览

# npm run docs:dev

# \# 打包静态网页

# npm run docs:build

# ```

# 

# \## 🔗 访问地址

# 

# \- 博客公网地址：https:// miren-DOT.github.io/c-language-blog/

# \- GitHub 仓库地址：

# \## 📌 功能说明

# 

# 1\. 首页展示博客简介与项目亮点

# 2\. 文章列表、归档、标签分类浏览笔记

# 3\. Markdown 文章渲染，C 语言代码语法高亮

# 4\. 站内全文搜索

# 5\. 一键部署到 GitHub Pages，公网可访问

# 

# \## 📝 项目总结

# 

# 本项目为纯静态网页方案，没有后端服务器与数据库。

# 适合记录编程学习笔记，提交代码自动更新线上博客。

