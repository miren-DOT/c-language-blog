<template>
  <div class="admin">
    <h2>文章发布后台</h2>
    <div>
      <p>文章标题</p>
      <input v-model="article.title" type="text" placeholder="输入标题">
    </div>
    <div>
      <p>标签（多个用空格隔开）</p>
      <input v-model="article.tags" type="text" placeholder="例如 C语言 学习">
    </div>
    <div>
      <p>正文内容（Markdown）</p>
      <textarea v-model="article.content" rows="8"></textarea>
    </div>
    <button @click="handlePublish">提交发布</button>
    <button @click="handleLogout" style="margin-left:10px">退出登录</button>

    <div v-if="mdText" class="md-preview">
      <h3>生成的Markdown源码：</h3>
      <pre>{{ mdText }}</pre>
      <button @click="copyMd">复制文本</button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
const article = ref({
  title:'',
  tags:'',
  content:''
})
const mdText = ref('')

// 模拟接口：读取本地存储文章
const getArticleListApi = () => {
  const data = localStorage.getItem("blog_articles")
  if(data){
    return JSON.parse(data)
  }else{
    return []
  }
}
// 模拟接口：保存文章到localStorage
const saveArticleApi = (art) => {
  let list = getArticleListApi()
  list.push(art)
  localStorage.setItem("blog_articles", JSON.stringify(list))
  return {code:200, msg:"发布成功"}
}

// 发布文章
const handlePublish = () => {
  const newArt = {
    title: article.value.title,
    tags: article.value.tags.split(" "),
    content: article.value.content,
    time: new Date().toLocaleString()
  }
  const res = saveArticleApi(newArt)
  if(res.code === 200){
    alert("发布成功！回到首页即可查看")
    // 拼接完整md文本，用于复制，放到项目里永久生效
    mdText.value = `# ${newArt.title}\n标签：${newArt.tags.join(",")}\n\n${newArt.content}`
  }
}

// 复制md文本
const copyMd = async () => {
  await navigator.clipboard.writeText(mdText.value)
  alert("复制成功！可以粘贴到md文件")
}

// 退出登录接口
const handleLogout = () => {
  localStorage.removeItem("blog_token")
  location.href="/login"
}

// 页面加载时，校验登录状态，未登录自动跳登录页
onMounted(()=>{
  const token = localStorage.getItem("blog_token")
  if(!token){
    location.href="/login"
  }
})
</script>

<style scoped>
.admin{
  max-width:600px;
  margin:40px auto;
}
input,textarea{
  width:100%;
  padding:8px;
  margin:8px 0;
}
pre{
  background:#f5f5f5;
  padding:10px;
  white-space:pre-wrap;
}
</style>
