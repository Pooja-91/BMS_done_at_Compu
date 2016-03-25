app.controller("viewGHACController",[ '$scope', '$timeout','$location','$firebaseArray','$cookieStore',function($scope, $timeout,$location,$firebaseArray,$cookieStore){
    
    //Code to check valid session
    $scope.userLog= $cookieStore.get("userLog");
    
    if($scope.userLog === null)
        {
            $location.path("/");
        }
    else if($scope.userLog === undefined)
        {
            $location.path("/");
        }
     //end Code to check valid session
     
    var ref = new Firebase("https://swachevent2016.firebaseio.com/Individual");

      // create a synchronized array
      $scope.individual = $firebaseArray(ref);
    
    
}]);