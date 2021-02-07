"use strict";

(function () {
    function init() {
        var router = new Router([
            new Route('home', 'home/home.html', true),
            new Route('about', 'about/about.html')
        ]);
    }
    init();
}());