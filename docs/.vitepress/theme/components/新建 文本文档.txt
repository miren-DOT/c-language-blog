<template>
  <div class="login-box">
    <h2>后台登录</h2>
    <div>
      <p>账号</p>
      <input v-model="username" type="text" placeholder="输入账号">
    </div>
    <div>
      <p>密码</p>
      <input v-model="password" type="password" placeholder="输入密码">
    </div>
    <button @click="handleLogin">登录</button>
    <p v-if="errMsg" style="color:red">{{ errMsg }}</p>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const username = ref('')
const password = ref('')
const errMsg = ref('')

// 模拟后端登录接口 loginApi
const loginApi = (user, pwd) => {
  // 预设管理员账号，你可以自己修改
  if(user === "admin" && pwd === "123456"){
    // 把token存入localStorage，当作登录凭证
    localStorage.setItem("blog_token", "admin_2026_token")
    return {code:200, msg:"登录成功"}
  }else{
    return {code:401, msg:"账号或密码错误"}
  }
}

const handleLogin = () => {
  const res = loginApi(username.value, password.value)
  if(res.code === 200){
    // 跳转到发布后台
    location.href = "/admin"
  }else{
    errMsg.value = res.msg
  }
}
</script>

<style scoped>
.login-box{
  max-width:400px;
  margin:50px auto;
}
input{
  width:100%;
  padding:8px;
  margin:8px 0;
}
button{
  padding:10px 20px;
  cursor:pointer;
}
</style>
