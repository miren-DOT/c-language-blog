const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({extended:true}));

// 登录鉴权接口
app.post('/login',(req,res)=>{
  const {username,password} = req.body;
  if(username === "admin" && password === "123456"){
    res.send("登录成功，获得文章发布权限");
  }else{
    res.send("账号密码错误，禁止发布");
  }
})

// 上传md文章接口
app.post('/uploadMd',(req,res)=>{
  const content = req.body.content;
  const fileName = req.body.filename;
  const savePath = path.join(__dirname,"../docs",fileName);
  fs.writeFileSync(savePath,content,"utf8");
  res.send("Markdown文件保存成功，手动git提交即可触发部署");
})

app.listen(port,()=>{
  console.log(`本地管理后台运行在 http://127.0.0.1:${port}`);
})
