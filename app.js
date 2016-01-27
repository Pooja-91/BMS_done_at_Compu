/* BMS app Defined */
var mainApp = angular.module("BMS", ['ngRoute']);
/* connection to MySQL database */
mainApp.constant('MYSQL_URL','https://greatnode.herokuapp.com/api');
/* connection to post data */
mainApp.config(function ($httpProvider) {
  $httpProvider.defaults.headers.common = {};
  $httpProvider.defaults.headers.post = {};
  $httpProvider.defaults.headers.put = {};
  $httpProvider.defaults.headers.patch = {};
});

/* Routing of all views and controller to make singal page applicatin */
    mainApp.config(function($routeProvider) {
      $routeProvider
      
        .when('/', {
          templateUrl: 'view/event.html',
          controller: 'eventcontroller'  
        })
        .when('/sport',{
          templateUrl: 'view/sport.html',
          controller: 'SportCtrl'
      })
        .when('/TicketBooking', {
          templateUrl: 'view/TicketBooking.html',
          controller: 'TicketBookingCtrl'  
        })
        .when('/ticketSummary', {
          templateUrl: 'view/ticketSummary.html',
          controller: 'TicketSummary'  
        })
      .when('/PaymentConfirnationScreen', {
          templateUrl: 'view/PaymentConfirnationScreen.html',
          controller: 'PaymentConfirnationScreenCtrl'  
        })
      .when('/PaymentConfirnationScreen', {
          templateUrl: 'view/PaymentConfirnationScreen.html',
          controller: 'PaymentConfirnationScreenCtrl'  
        })
      .when('/login', {
          templateUrl: 'view/login.html',
          controller: 'loginCtrl'  
        })
          .otherwise({
          redirectTo: '/'
        });
    });


