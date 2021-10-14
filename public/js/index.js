if (window.location.pathname.split("/").pop() == "homepage.html") {
  loadScript("../js/getLinkCss.js")
  loadScript("../js/getMembers.js")
  loadScript("../js/getProjects.js")
  loadScript("../js/menu.js")
}

if((window.location.pathname).split("/").pop() == 'sign-in.html'){
  loadScript("../js/sign-in.js")
}

if((window.location.pathname).split("/").pop() == 'requests.html'){
  loadScript("../js/menu.js")
}

function loadScript(url) {
  var script = document.createElement("script");
  script.src = url;
  document.head.appendChild(script);
}

function goBack(){
  window.history.go(-1)
}