/* BMS app Defined */
var mainApp = angular.module("BMS", ['ngRoute','firebase']);
/* connection to firebase link */
mainApp.constant('FIREBASE_URI','http://localhost:9090/api');

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


