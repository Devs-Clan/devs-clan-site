firebase.initializeApp({
    apiKey: "AIzaSyBtUcu3gpNGV0ReN7fklRDOY7QwOtTGEAg",
    authDomain: "devs-clan.firebaseapp.com",
    databaseURL: "https://devs-clan-default-rtdb.firebaseio.com",
    projectId: "devs-clan",
    storageBucket: "devs-clan.appspot.com",
    messagingSenderId: "606508655428",
    appId: "1:606508655428:web:e49aaaa6b2875964deed11",
    measurementId: "G-VB7X60HH19"
});

let githubProvider = new firebase.auth.GithubAuthProvider()
let googleProvider = new firebase.auth.GoogleAuthProvider()

document.getElementById('login-google').addEventListener('click', ()=>signIn(googleProvider))
document.getElementById('login-github').addEventListener('click', ()=>signIn(githubProvider))
document.getElementById('logout').addEventListener('click', logout)


function signIn(provider) {
    firebase.auth().signInWithPopup(provider).then(res => {
    }).catch(error => {
        console.log("Code : ", error.code)
        console.log("Message :", error.message)
    })
}   

function logout() {
    firebase.auth().signOut().catch(error => {
        console.log(error)
    })
}