
app.controller("viewCustomertransController",[ '$scope', '$timeout','$location','$firebaseArray','$cookieStore',function($scope, $timeout,$location,$firebaseArray,$cookieStore){
    
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
     
    var ref = new Firebase("https://get2mygames.firebaseio.com/Customer_transaction");

      // create a synchronized array
      $scope.Customer_transaction = $firebaseArray(ref);
    
}]);



