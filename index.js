const express = require('express');
const mongoose =  require('mongoose');
const db = 'mongodb://localhost/trivia';
mongoose.connect (db, {useNewUrlParser:true})
 .then(()=> {
console.log('conectado');
})
.catch (err =>console.log(err));
const port = process.env.PORT || 3000;
const app = express();

app.use(express.urlencoded({ extended: true }));

const QuestionSchema = new mongoose.Schema({
  question: {type: String, required: true}
});

const Question = mongoose.model('Question', QuestionSchema);
app.set('view engine','pug');
app.set('views','./views');

app.post("/question",(req,res)=>{
  let pregunta = new Question({
    question: req.body.question
  });
  pregunta.save(err => {
    res.redirect('/');
  });
});

app.get ('/',(req,res)=>{
  res.render('index',{
    home:'true'
  });
});
app.listen(port);
