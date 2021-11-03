if (window.location.pathname.split("/").pop() == "homepage.html") {
  loadScript("../js/getLinkCss.js")
  loadScript("../js/getMembers.js")
  loadScript("../js/getProjects.js")
  loadScript("../js/menu.js")
}

if((window.location.pathname).split("/").pop() == 'sign-in.html'){
  loadScript("../js/getLinkCss.js")
  loadScript("../js/sign-in.js")
}

if((window.location.pathname).split("/").pop() == 'requests.html'){
  loadScript("../js/getLinkCss.js")
  loadScript("../js/requests.js")
}

function loadScript(url) {
  var script = document.createElement("script")
  script.src = url;
  document.head.appendChild(script);
}

function goBack(){
  window.history.go(-1)
}


//cookies

// function checkCookie() {
//   let user = getCookie("user");
//   if (user != "") {
//     alert("Welcome " + user);
//   } else {
//      alert("Please log in")
//   }
// }

// function setCookie(cname,cvalue,exdays) {
//   const d = new Date();
//   d.setTime(d.getTime() + (exdays*24*60*60*1000));
//   let expires = "expires=" + d.toGMTString();
//   document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
// }

// function getCookie(cname) {
//   let name = cname + "=";
//   let decodedCookie = decodeURIComponent(document.cookie);
//   let ca = decodedCookie.split(';');
//   for(let i = 0; i < ca.length; i++) {
//     let c = ca[i];
//     while (c.charAt(0) == ' ') {
//       c = c.substring(1);
//     }
//     if (c.indexOf(name) == 0) {
//       return c.substring(name.length, c.length);
//     }
//   }
//   return "";
// }