---
layout: page
title: 后台登录
---
<script setup>
import {onMounted} from 'vue'
onMounted(()=>{
  // 鉴权：没有登录凭证，直接跳回登录页面
  if(!localStorage.getItem('blogUser')){
    window.location.href="/login"
  }
})

const handleLogout = ()=>{
  localStorage.removeItem('blogUser')
  alert("已成功退出登录")
  window.location.href="/login"
}
</script>

<div style="margin: 2rem 0;">
  <h3>欢迎来到管理后台</h3>
  <p><a href="/publish">前往文章发布页面</a></p>
  <button @click="handleLogout">退出登录</button>
</div>


