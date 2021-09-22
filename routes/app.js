const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();

// app.use(express.static(path.resolve('../../css/main.css')));
app.use('/static', express.static(__dirname + '/public'));

router.get('/',function(req,res){
  res.sendFile(path.resolve('../../index.html'));
  console.log("index")
});

app.use('/', router);
app.listen(process.env.port || 3000);

console.log('Running at Port 3000');

// node js\routing\app.js