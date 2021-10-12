const firebase = require('firebase')

const app = firebase.initializeApp({
    apiKey: "AIzaSyBtUcu3gpNGV0ReN7fklRDOY7QwOtTGEAg",
    authDomain: "devs-clan.firebaseapp.com",
    databaseURL: "https://devs-clan-default-rtdb.firebaseio.com",
    projectId: "devs-clan",
    storageBucket: "devs-clan.appspot.com",
    messagingSenderId: "606508655428",
    appId: "1:606508655428:web:e49aaaa6b2875964deed11",
    measurementId: "G-VB7X60HH19"
});

module.exports = app;