firebase.initializeApp({
    apiKey: "AIzaSyBtUcu3gpNGV0ReN7fklRDOY7QwOtTGEAg",
    authDomain: "devs-clan.web.app",
    databaseURL: "https://devs-clan-default-rtdb.firebaseio.com",
    projectId: "devs-clan",
    storageBucket: "devs-clan.appspot.com",
    messagingSenderId: "606508655428",
    appId: "1:606508655428:web:e49aaaa6b2875964deed11",
    measurementId: "G-VB7X60HH19"
});

let githubProvider = new firebase.auth.GithubAuthProvider()

document.getElementById('login-github').addEventListener('click', ()=>signIn(githubProvider))
document.getElementById('logout').addEventListener('click', logout)

function signIn(provider) {
    firebase.auth().signInWithPopup(provider).then(result => {
        const user = provider.user
        setCookie("uesr", user.displayName, 30)
        console.log(user.displayName)
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

function setCookie(cname,cvalue,exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    let expires = "expires=" + d.toGMTString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }