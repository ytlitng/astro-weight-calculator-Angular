// define an angular module (1st step! very important! always do this!)
angular.module('planets', []);

// define an angular controller (2nd step! not required, but almost always do this)
angular
    .module('planets')
    .controller('HomeController', HomeController);

// define a function to pass to the ^^ HomeController.controller ^^ function
function HomeController() {
    // in the function, you always need the following line of code.
    var vm = this;

    // we are storing a 2D array of planets with their gravity multipliers.
    vm.planets = [
        ['Pluto', 0.06],
        ['Neptune', 1.148],
        ['Uranus', 0.917],
        ['Saturn', 1.139],
        ['Jupiter', 2.640],
        ['Mars', 0.3895],
        ['Moon', 0.1655],
        ['Earth', 1],
        ['Venus', 0.9032],
        ['Mercury', 0.377],
        ['Sun', 27.9]
    ];
}
