var elements = document.getElementsByTagName('script')
var twitterLink = document.getElementById('twitterLink');
var githubIcon = document.getElementById('githubIcon');
var linkedinIcon = document.getElementById('linkedinIcon');
var twitterIcon = document.getElementById('twitterIcon');

if (twitterLink) {
    addListener(twitterLink, 'click', function () {
        ga('send', 'event', 'button', 'click', 'twitter');
    });
}

addListener(githubIcon, 'click', function () {
    ga('send', 'event', 'button', 'click', 'githubIcon');
});

addListener(linkedinIcon, 'click', function () {
    ga('send', 'event', 'button', 'click', 'linkedinIcon');
});

addListener(twitterIcon, 'click', function () {
    ga('send', 'event', 'button', 'click', 'twitterIcon');
});

Array.prototype.forEach.call(elements, function (element) {
    if (element.type.indexOf('math/tex') != -1) {
        // Extract math markdown
        var textToRender = element.innerText || element.textContent;

        // Create span for KaTeX
        var katexElement = document.createElement('span');

        // Support inline and display math
        if (element.type.indexOf('mode=display') != -1) {
            katexElement.className += "math-display";
            textToRender = '\\displaystyle {' + textToRender + '}';
        } else {
            katexElement.className += "math-inline";
        }

        katex.render(textToRender, katexElement);
        element.parentNode.insertBefore(katexElement, element);
    }
});


function addListener(element, type, callback) {
    if (element.addEventListener) element.addEventListener(type, callback);
    else if (element.attachEvent) element.attachEvent('on' + type, callback);
}
