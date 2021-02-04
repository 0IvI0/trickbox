"use strict";

/* This function takes three params:
    1. routeName: the of the route which has to be checked for active status
    2. htmlPath: the name of the html file that has to be loaded
    3. isDefaultRoute: boolean param - true if the route is the default route of the application  */

function Route(routeName, htmlPath, isDefaultRoute) {
    try {
        if(!routeName || !htmlPath) {
            throw 'Error: the parameters name and htmlPath are mandatory to add.';
        }
        this.constructor(routeName, htmlPath, isDefaultRoute);
    } catch (e) {
        console.error(e);
    }
}

/* Roles of the two functions:
    1. constructor function: to provide the constructor for the routes
    2. isActiveRoute function: It is provided by each route to check if it is the active route. As param this function takes the current window location. */

Route.prototype = {
    routeName: undefined,
    htmlPath: undefined,
    isDefaultRoute: undefined,
    constructor: function (routeName, htmlPath, isDefaultRoute) {
        this.routeName = routeName;
        this.htmlPath = htmlPath;
        this.isDefaultRoute = isDefaultRoute;
    },
    isActiveRoute: function (hashedPath) {
        return hashedPath.replace('#', '') === this.routeName;
    }
}