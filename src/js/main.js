
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
      // controller: function ($location, activity) {
      //   var add = this;
      //
      //    add.user = { };
      //
      //   add.addActivity = function() {
      //     activity.push(this.user);
      //
      //     this.user = { };
      //
      //     $location.path('/activity');
      //
      //     $http.post('https://aqueous-sea-6980.herokuapp.com/api/activities.json', $scope.activity)
      //     .then(function() {
      //       $scope.activity = response.data;
      //
      //     }); //END HTTP
      //   };
      //
      // },
      //
      // controllerAs: 'editor'
    })

    .when('/stats', {
      templateUrl: 'stats.html',
    })

    .when('/stats/:id', {
      templateUrl: 'stats.html',
    })

    .when('/panel-login', {
      templateUrl: 'login.html',
    })

    .when('/panel-signup', {
      templateUrl: 'signup.html',
    });

<<<<<<< HEAD
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
=======


}) //END .MODULE


.run(function($http, $rootScope){
  $http.get('https://aqueous-sea-6980.herokuapp.com/api/activities.json')
  // $http.get('../activities.json')
    .then(function (response){
      console.log(arguments);
      $rootScope.activities = response.data;
      });
    })

    .controller('mainController', function($scope, $route, $routeParams, $location) {
        $scope.$route = $route;
        $scope.$location = $location;
        $scope.$routeParams = $routeParams;
      })


    .controller("SignupController", function($scope, $http){
         $scope.signup = {
           username: "",
           email: "",
           password: ""
         };


           $scope.submit = function(){
             $http.post('https://aqueous-sea-6980.herokuapp.com/api/users/', $scope.signup)
               .then(function(){


})


>>>>>>> e87f57b4e541d39a0403c776cc766c7b4c35ca63


      // ACTIVITIES LIST
      .controller('listController', function($http, $scope) {
        $http.get('https://aqueous-sea-6980.herokuapp.com/api/activities.json')
          .then(function (response){
            $scope.activities = response.data;
            // $scope.activity = response.data[id].activity;
          });
      })

      // ADD ACTIVITY CONTROLLER
      .controller('activityController', function($scope, $http){
            $scope.activity = {
              title: '',
              timestamp: ''
            };

      $scope.addActivity = function(){
        $http.post('https://aqueous-sea-6980.herokuapp.com/api/activities.json', $scope.activity);
      };
          $scope.activity = {
            title: '',
            timestamp: ''

      };

  }) // END ACTIVITY CONTROLLER

      .config(function($routeProvider, $locationProvider){
        $routeProvider
          .when('/stats/:id',{
            templateUrl: 'stats.html',
            // controller: 'statsController'
          });


      });



      //  });
     };
   }); // END LoginController


  //  ; //END .MODULE

})(); //END IIFE




  // When you click on the add button, menu drops down
    $('button.add-button').on('click', function(){
      $('.add-drop-down').toggleClass('show');
    });


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
