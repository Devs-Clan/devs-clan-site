if((window.location.pathname).split("/").pop() == 'index.html'){ 
loadScript('/js/getLinkCss.js');
loadScript('/js/getMembers.js');
loadScript('/js/getProjects.js');
loadScript('/js/suitWindow.js');
}

if((window.location.pathname).split("/").pop() == 'requests.html'){ 
loadScript('/js/requests.js')
}

function loadScript(url){    
    var head = document.getElementsByTagName('HEAD')[0];
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.type = 'module';
    script.src = url;
    head.appendChild(script);
}