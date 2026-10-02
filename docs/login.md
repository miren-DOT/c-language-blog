---
layout: page
title: 后台登录
---

<script setup>
import { ref } from 'vue'
const username = ref("")
const pwd = ref("")

function login(){
if(username.value === "admin" && pwd.value === "123456"){
  localStorage.setItem("isLogin", "true")
  alert("登录成功！现在你可以访问文章发布后台")
  // 修改跳转地址，自动适配基础路径，跳转到文章发布页
  window.location.href = `${import.meta.env.BASE_URL}publish`
}else{
  alert("用户名或密码错误")
}
}
</script>

# 后台登录
<div>
<input v-model="username" type="text" placeholder="用户名">
<br><br>
<input v-model="pwd" type="password" placeholder="密码">
<br><br>
<button @click="login">登录</button>
</div>