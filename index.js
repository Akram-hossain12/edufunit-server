const express = require('express')
const app = express()
const cors = require("cors");
const port = process.env.PORT || 5000;

app.use(cors());
const data = require('./data/data.json');
const courses = require('./data/courses.json');
const blog = require('./data/Blog/blog.json');
app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/courses',(req,res)=>{
  res.send(courses)
})
app.get('/courses/:_id',(req,res)=>{
  const id =req.params._id;
  if(id ==='11'){
      res.send(courses)
  }
  else{
      const catagoryCourses = courses.filter(c=>c._id === id);
      res.send(catagoryCourses)
  }
})

app.get('/courses/:id',(req,res)=>{
  const id = req.params.id;
  const allCourses = courses.find( a=>a.id === id)
  res.send(allCourses)
})

app.get('/data',(req,res)=>{
    res.send(data)
})
app.get('/blog',(req,res)=>{
  res.send(blog)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})