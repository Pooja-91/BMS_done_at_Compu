app.controller("addCorporateController",[ '$scope', '$timeout','$location','$firebaseArray','$cookieStore',function($scope, $timeout,$location,$firebaseArray,$cookieStore){
    
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
    
    
    var ref = new Firebase("https://get2mygames.firebaseio.com/Corporate");
    
    
      var regid="DEC_"+("0000" + (Math.random()*Math.pow(36,4) << 0)).slice(-4); 

         $scope.Registration_Id = regid;
    
    var Servertime=Firebase.ServerValue.TIMESTAMP;
    
    $scope.DateTime=Servertime;
      // create a synchronized array
      $scope.corporate = $firebaseArray(ref);
    
}]);