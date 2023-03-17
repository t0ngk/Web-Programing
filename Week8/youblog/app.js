const express = require("express");
const path = require('path')
const article = require("./json/article-db");

const app = express();

// Setup ejs
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// ดึงข้อมูล json มาเก็บไว้ในตัวแปร

// Setup static path
app.use(express.static(path.join(__dirname, 'public')))

// Config Router
const indexRouter = require('./routes/index')

app.use('/', indexRouter)

// กำหนดให้ path blogapi แสดงข้อมูลบทความทั้งหมดในรูปแบบ json

app.get("/blogapi", (req, res) => {
  res.json(article);
});

// กำหนดให้ path blogapi/id แสดงข้อมูลบทความตาม id ที่กำหนด

app.get("/blogapi/:id", (req, res) => {
  res.json(article.find((article) => article.id === req.params.id));
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
