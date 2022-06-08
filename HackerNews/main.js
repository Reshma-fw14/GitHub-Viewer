var app = angular.module('myApp', ["ngRoute"]);


app.config(function($routeProvider){
    $routeProvider
    .when("/topStories", {
        templateUrl : "topStories.html",
        controller: 'topStoriesCtrl'
    })
    .when('/newStories', {
        templateUrl : 'newStories.html',
        controller: 'newStoriesCtrl'
    })
    .when('/bestStories', {
        templateUrl : 'bestStories.html',
        controller : 'bestStoriesCtrl'
    })
    .otherwise({ redirectTo : '/'})
})
