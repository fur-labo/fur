(function (window, document) {
    "use strict";

    var links = [
        {
            "title": "Font Themes",
            "href": "font-theme.html"
        },
        {
            "title": "Color Themes",
            "href": "color-theme.html"
        }
    ];

    function nav(links) {
        var nav = document.createElement('nav');
        links.forEach(function (link) {
            var item = document.createElement('a');
            item.href = link.href;
            item.innerText = link.title;
            item.className = 'nav-item';
            nav.appendChild(item);
        });
        return nav;
    }

    window.onload = function () {
        var header = document.querySelector('header');
        if (header) {
            header.appendChild(nav(links));
        }
    };
})(window, document);