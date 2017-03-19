angular.module('Ushakov', ['ngMaterial','ngRoute']);
const app = angular.module('Ushakov');

app.config(function($routeProvider, $locationProvider, $mdThemingProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "../Components/Home/home.html",
            controller: "Home"
        });

        $locationProvider.html5Mode(true);

        $mdThemingProvider.theme('default')
          .primaryPalette('light-blue')
          .accentPalette('red')
          //.dark();
});
