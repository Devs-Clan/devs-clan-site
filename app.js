const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();

const PORT = process.env.port || 3000;

app.use(express.static('./public'));

router.get('/',function(req,res) {
  res.sendFile(path.resolve('./public/html/index.html'));
});

router.get('/:page',function(req,res){
  res.sendFile(path.resolve('./public/html/' + req.params.page));
  console.log(req.params.page)
});

app.use('/', router);
app.listen(PORT);

console.log(`Running at Port ${PORT}`);