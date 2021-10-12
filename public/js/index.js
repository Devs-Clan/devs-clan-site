if (window.location.pathname.split("/").pop() == "index.html") {
  loadScript("./public/js/getLinkCss.js");
  loadScript("./public/js/getMembers.js");
  loadScript("./public/js/getProjects.js");
  loadScript("./public/js/suitWindow.js");
}

// if((window.location.pathname).split("/").pop() == 'requests.html'){
// }

function loadScript(url) {
  var script = document.createElement("script");
  script.src = url;
  document.head.appendChild(script);
}
