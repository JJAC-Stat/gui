;(function(){

  angular.module('Jjac-Stat', ['ngRoute'], function($routeProvider){
    $routeProvider.when('/', {
      templateUrl: 'login.html',

    })

    .when('/activity', {
      templateUrl: 'activity.html',
    })

    .when('/add', {
      templateUrl: 'new.html',

    })

    .when('/stats', {
      templateUrl: 'stats.html',
    })

    .when('/stats/:id', {
      templateUrl: 'stats.html',
    })

    .when('/panel-login', {
      templateUrl: 'login.html',
      // controller: function($http){
      //   var login = this;
      //
      //   login.user = { };
      //
      //   login.send = function(){
      //     console.log(login.user);

          //TODO: make a hash.. send the hash in the authorization header
          // $http.get('https://aqueous-sea-6980.herokuapp.com/api/users.json', {username: 'polson', password: 'pbkdf2_sha256$20000$BN2sv0j9HHF5$l7nLCV1HYgBfnZVoBco9mrfjDzwDzkyYRko9gNnfaR0='}, {
          //   headers: {
          //     Authorization: "Basic " + btoa(login.user.username + ':' + login.user.password)
          //   }

      //
      //     });
      //
      //   };
      // }

    }) // END .WHEN LOGIN

    .when('/panel-signup', {
      templateUrl: 'signup.html',
    });


}) //END .MODULE


.run(function($http, $rootScope){
  $http.get('https://aqueous-sea-6980.herokuapp.com/api/activities.json')
  // $http.get('../activities.json')
    .then(function (response){
      console.log(arguments);
      //
      // $rootScope.activity = response.data[1];
      $rootScope.activities = response.data;

      });
    })

.run(function($http, $rootScope){
  $http.get('https://aqueous-sea-6980.herokuapp.com/api/users.json')

    .then(function (response){
      console.log(arguments);

      $rootScope.signup = response.data;

      });
    })


    .controller('mainController', function($scope, $route, $routeParams, $location) {
        $scope.$route = $route;
        $scope.$location = $location;
        $scope.$routeParams = $routeParams;
      })


    .controller('SignupController', function($scope, $http){
         $scope.signup = { };

       $scope.submit = function(){
         $http.post('https://aqueous-sea-6980.herokuapp.com/api/users.json', $scope.signup)
           .then(function(){

      });
   };
}) // END SIGNUP CONTROLLER

      .controller("loginController", function(){
       this.user = {};
       this.send = function(user){
         console.log(this.user);
         this.user = { };
       };
      })


      // ACTIVITY CONTROLLER
      .controller('activityController', function($scope, $http, $routeParams){
            $scope.activityadd = { };
            $scope.name = "activityController";
            $scope.params = $routeParams;
            var id = $routeParams.id -5;

        $http.get('https://aqueous-sea-6980.herokuapp.com/api/activities.json')
          .then(function (response){
            $scope.activity = response.data[id];
          });

            $scope.addActivity = function(){
            $http.post('https://aqueous-sea-6980.herokuapp.com/api/activities.json', $scope.activityadd)
              .then(function(){
                console.log('success');
      });
   };
}) // END ACTIVITY CONTROLLER

      // NEED TO SHOW ONE ACTIVITY
      .config(function($routeProvider, $locationProvider){
        $routeProvider
          .when('/stats/:id',{
            templateUrl: 'stats.html',
            controller: 'activityController'
          });

  }); // END CONFIG.



})(); //END IIFE





// START tabs
$('.tabs').each(function(){ //iterates through each ahref
 $('.tab-content').each(function(){ //iterates through the corresponding content

 $('a').on('click', function(event){
   event.preventDefault(); //stop browser to take action for clicked

   var active = $(this).attr('href'); //targets active tab and grabs that href

   $(this).add(active) // if use `this`, remove both each functions
     .addClass('active')
   .siblings()
     .removeClass('active');

   }).filter('[href="#panel-signup"]')
     .trigger('click');

 });
});
