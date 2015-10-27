// When you click on the add button, menu drops down
  $('.add-button').on('click', function(){
    $('.add-drop-down').toggleClass('show');
  });


;(function(){

  angular.module('Jjac-Stat', ['ngRoute'], function($routeProvider){
    $routeProvider.when('/', {
      templateUrl: 'login.html',

    })

    .when('/activity', {
      templateUrl: 'activity.html',
    })

    .when('/stats', {
      templateUrl: 'stats.html',
    })

    .when('/panel-login', {
      templateUrl: 'login.html',
    })

    .when('/panel-signup', {
      templateUrl: 'signup.html',
    });


}) //END .MODULE

.run(function($http, $rootScope){
  $http.get('../activities.json')
    .then(function (response){
      console.log(arguments);
      $rootScope.activities = response.data;
      });
    });





  })(); //END IIFE
