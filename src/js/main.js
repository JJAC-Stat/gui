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


}); //END .MODULE






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
