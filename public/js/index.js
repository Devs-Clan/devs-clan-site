if (window.location.pathname.split("/").pop() == "homepage.html") {
  loadScript("../js/getLinkCss.js");
  loadScript("../js/getMembers.js");
  loadScript("../js/getProjects.js");
  loadScript("../js/suitWindow.js");
}

// if((window.location.pathname).split("/").pop() == 'requests.html'){
// }

function loadScript(url) {
  var script = document.createElement("script");
  script.src = url;
  document.head.appendChild(script);
}
