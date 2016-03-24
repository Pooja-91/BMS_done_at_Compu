
app.controller("logoutController",[ '$scope', '$timeout','$location','$firebaseArray','$cookieStore',function($scope, $timeout,$location,$firebaseArray,$cookieStore){
    
     
    //$scope.userLog= $cookieStore.get("userLog");
    
    $cookieStore.remove("userLog");
    console.log("You log out"+ $cookieStore.remove("userLog"))
    
    
}]);



