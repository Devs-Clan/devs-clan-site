const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();

// const firebase = require('firebase')

// var firebaseConfig = firebase.initializeApp({
//   apiKey: "AIzaSyBtUcu3gpNGV0ReN7fklRDOY7QwOtTGEAg",
//   authDomain: "devs-clan.firebaseapp.com",
//   databaseURL: "https://devs-clan-default-rtdb.firebaseio.com",
//   projectId: "devs-clan",
//   storageBucket: "devs-clan.appspot.com",
//   messagingSenderId: "606508655428",
//   appId: "1:606508655428:web:e49aaaa6b2875964deed11",
//   measurementId: "G-VB7X60HH19"
// });
// const analytics = getAnalytics(app);

// var firebaseDB = firebase.database()

// firebaseDB.ref('text').set('more-text')

var admin = require("firebase-admin");

var serviceAccount = require("./devs-clan-firebase-adminsdk-qro16-0cada4fc0c.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://devs-clan-default-rtdb.firebaseio.com"
});

// var firebaseDB = require('firebase').database()

// firebaseDB.ref('text').set('more-text')

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
