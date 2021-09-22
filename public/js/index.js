loadScript('./public/js/getLinkCss.js');
loadScript('./public/js/getMembers.js');
loadScript('./public/js/getProjects.js');
loadScript('./public/js/suitWindow.js');

function loadScript(url){    
    var head = document.getElementsByTagName('HEAD')[0];
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.type = 'module';
    script.src = url;
    head.appendChild(script);
}