function loadScript(url)
{    
    var head = document.getElementsByTagName('head')[0];
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = url;
    head.appendChild(script);
}
loadScript("javascript/jquery-3.6.0.min.js");
loadScript("javascript/moment.js");
loadScript("javascript/typed.js")
loadScript("javascript/clock.js");
loadScript("javascript/search.js");
loadScript("javascript/welcome.js");
