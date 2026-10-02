---
layout: page
title: 文章发布
---

<script setup>
import { ref, onMounted } from 'vue'

const artTitle = ref("")
const artContent = ref("")

onMounted(() => {
  const isLogin = localStorage.getItem("isLogin")
  if(!isLogin){
    alert("请先登录后台！")
    // 修改：跳转至login登录页面
    window.location.href = `${import.meta.env.BASE_URL}login`
  }
})

function saveArticle(){
  if(!artTitle.value || !artContent.value){
    alert("标题和内容不能为空")
    return
  }
  localStorage.setItem("article_" + artTitle.value, artContent.value)
  alert("文章保存成功！已存入浏览器本地存储（模拟后端保存）")
}

// 新增：退出登录函数
function logout(){
  localStorage.removeItem("isLogin")
  alert("已成功退出登录")
  window.location.href = `${import.meta.env.BASE_URL}`
}
</script>

# 发布新Markdown笔记
<p>在此填写文章标题与内容，模拟后台发布功能，未登录用户无法进入本页面</p>

<div>
标题: <input v-model="artTitle" type="text"><br><br>
内容: <textarea v-model="artContent" rows="10" cols="50"></textarea><br><br>
<button @click="saveArticle">保存文章</button>
<!-- 新增退出登录按钮 -->
<button @click="logout" style="margin-left:10px;">退出登录</button>
</div>