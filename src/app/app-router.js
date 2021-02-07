"use strict";

/* This functions takes one parameter:
    1. routes: an array containing the route paths of the application */

function Router(routes) {
    try {
        if (!routes) {
            throw 'Error: the param routes is mandatory to add.';
        }
        this.constructor(routes);
        this.init();
    } catch (e) {
        console.error(e);
    }
}

/* renderingRoot: The element of the application which contains the rendered html pages (app element) */

Router.prototype = {
    routes: undefined,
    renderingRoot: undefined,
    constructor: function (routes) {
        this.routes = routes;
        this.renderingRoot = document.getElementById('app');
    },
    init: function() {
        var routeArray = this.routes;
        (function(scope, routeArray) {
            window.addEventListener('hashchange', function (e) {
                scope.hasChanged(scope, routeArray);
            });
        })(this, routeArray);
        this.hasChanged(this, routeArray);
    },
    hasChanged: function (scope, routeArray) {
        if (window.location.hash.length > 0) {
            for (var i = 0, length = routeArray.length; i < length; i++) {
                var route = routeArray[i];
                if (route.isActiveRoute(window.location.hash.substr(1))) {
                    scope.goToRoute(route.htmlPath);
                }
            }
        } else {
            for (var i = 0, length = routeArray.length; i < length; i++) {
                var route = routeArray[i];
                if (route.isDefaultRoute) {
                    scope.goToRoute(route.htmlPath);
                }
            }
        }
    },
    goToRoute: function (htmlPath) {
        (function(scope) {
            var url = 'src/app/modules/' + htmlPath,
            xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function () {
                if (this.readyState === 4 && this.status === 200) {
                    scope.renderingRoot.innerHTML = this.responseText;
                }
            };
            xhttp.open('GET', url, true);
            xhttp.send();
        })(this);
    }
};