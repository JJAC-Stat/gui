
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

    .when('/panel-login', {
      templateUrl: 'login.html',
    })

    .when('/panel-signup', {
      templateUrl: 'signup.html',
    });




}) //END .MODULE

.run(function($http, $rootScope){
  $http.get('https://aqueous-sea-6980.herokuapp.com/api/activities/')
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


      .controller('statsController', function($http, $scope, $routeParams) {
        $scope.name = "statsController";
        $scope.params = $routeParams;
        var id = $routeParams.id -1;

        $http.get('https://aqueous-sea-6980.herokuapp.com/api/activities/')
          .then(function (response){
            $scope.activities = response.data[id];
            $scope.activity = response.data[id].activity;
          });

          // $http.get('https://blacajojo.herokuapp.com/answers')
          //   .then(function (response){
          //     $scope.answer = response.data[id].answer;
          //   });

      })

      .config(function($routeProvider, $locationProvider){
        $routeProvider
          .when('/stats/:id',{
            templateUrl: 'stats.html',
            controller: 'statsController'
          });


      });





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
