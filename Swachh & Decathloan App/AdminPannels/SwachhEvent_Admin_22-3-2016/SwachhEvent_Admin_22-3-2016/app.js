var app = angular.module("adminApp", ['firebase','ngRoute','ngCookies']);  
app.config(function($routeProvider){
	$routeProvider
	    .when('/viewOther', {
          templateUrl: 'view/viewOther.html',
          controller: 'viewOtherController'
        })
        
        .when('/viewEmaillog', {
          templateUrl: 'view/viewEmaillog.html',
          controller: 'viewEmaillogController'
        })
        .when('/viewCustomerTransaction', {
          templateUrl: 'view/viewCustomerTransaction.html',
          controller: 'viewCustomertransController'
        })
        .when('/viewCustomer', {
          templateUrl: 'view/viewCustomer.html',
          controller: 'viewCustomerController'
        })
        .when('/viewGHAC', {
          templateUrl: 'view/viewGHAC.html',
          controller: 'viewGHACController'
        })
        .when('/editGHAC', {
          templateUrl: 'view/editGHAC.html',
          controller: 'editGHACController'
        })
         .when('/addGHAC', {
          templateUrl: 'view/addGHAC.html',
          controller: 'addGHACController'
        })
     .when('/editOther', {
          templateUrl: 'view/editOther.html',
          controller: 'editOtherController'
        })
        .when('/addOther', {
          templateUrl: 'view/addOther.html',
          controller: 'addOtherController'
        })
        .when('/tracking', {
         templateUrl: 'view/tracking.html',
          controller: 'trackingcontroller'
        })
        .when('/adminPage', {
          templateUrl: 'view/mainAdminPage.html'          
        }) 
        .when('/logout', {
          templateUrl: 'view/logout.html',
          controller:'logoutController'    
        }) 
        .when('/', {
          templateUrl: 'view/adminLogin.html',
          controller: 'adminLoginController'
        })
        .otherwise({
          redirectTo: '/'
        });
    
});
	