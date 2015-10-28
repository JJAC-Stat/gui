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

})

    .controller("SignupController", function($scope, $http){
       $scope.signup = {
         username: "",
         email: "",
         password: ""
       };

       $scope.submit = function(){
         $http.post('https://aqueous-sea-6980.herokuapp.com/api/users.json', $scope.signup)
           .then(function(){

       });
     };
   }) // END LoginController


   ; //END .MODULE

  })(); //END IIFE
