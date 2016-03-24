
 var app = angular.module("adminApp", ['firebase','ngRoute','ngCookies']);

  
app.config(function($routeProvider){
	$routeProvider
	.when('/viewIndividual', {
          templateUrl: 'view/viewIndividual.html',
          controller: 'viewIndividualController'
        })
        .when('/viewTeam', {
          templateUrl: 'view/viewTeam.html',
          controller: 'viewTeamController'
        })
        .when('/viewCorporate', {
          templateUrl: 'view/viewCorporate.html',
          controller: 'viewCorporateController'
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
	