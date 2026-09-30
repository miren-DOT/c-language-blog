const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({extended:true}));

// 首页
app.get('/', (req,res)=>{
  res.send(`
  <h2>博客后台管理接口服务</h2>
  <p>前往 <a href="/login">登录页面</a></p>
  `)
})

// 登录页面（GET，浏览器打开看到表单）
app.get('/login', (req,res)=>{
  res.send(`
  <form method="post">
    用户名：<input name="username" placeholder="用户名"><br>
    密码：<input name="password" placeholder="密码"><br>
    <button type="submit">登录</button>
  </form>
  `)
})

// 登录鉴权接口（POST，表单提交触发）
app.post('/login',(req,res)=>{
  const {username, password} = req.body;
  if(username === "admin" && password === "123456"){
    res.send(`登录成功！<br><a href="/publish">点击进入文章发布页</a>`);
  }else{
    res.send("账号密码错误，禁止发布");
  }
})

// 文章发布页面
app.get('/publish',(req,res)=>{
  res.send(`
  <form method="post" action="/uploadmd">
    文章文件名（例如 test.md）：<input name="filename"><br>
    <textarea name="content" rows="10" cols="40" placeholder="在这里写markdown文章内容"></textarea><br>
    <button type="submit">提交保存文章</button>
  </form>
  `)
})

// 上传md文章接口
app.post('/uploadmd',(req,res)=>{
  const content = req.body.content;
  const fileName = req.body.filename;
  const savePath = path.join(__dirname,"../docs",fileName);
  fs.writeFileSync(savePath,content,"utf8");
  res.send("markdown文件保存成功，手动git提交即可部署");
})

app.listen(port,()=>{
  console.log(`本地管理后台运行在 http://127.0.0.1:${port}`);
})
