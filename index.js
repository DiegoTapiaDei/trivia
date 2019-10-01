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
app.set('view engine','pug');
app.set('views','./views');
app.get ('/',(req,res)=>{
  res.render('index',{
    home:'true'
  });
});
app.listen(port);
