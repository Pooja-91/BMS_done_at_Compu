app.controller('addOtherController',[ '$scope', '$timeout','$location','$firebaseArray','$cookieStore',function($scope, $timeout,$location,$firebaseArray,$cookieStore){
   
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
    
   var regid="swachhEvent_"+("0000" + (Math.random()*Math.pow(36,4) << 0)).slice(-4); 

   $scope.Registration_Id = regid;
    
   var Servertime=Firebase.ServerValue.TIMESTAMP;
    
   $scope.dateTime=Servertime;
  
   $scope.individual = $firebaseArray(ref);   
   $scope.choices = [{id: 'choice1'},{id:'choice2'}];
    
   $scope.removeChoice = function() {
   var lastItem = $scope.choices.length-1;
   $scope.choices.splice(lastItem);
  };
    
     $scope.addNewChoice = function() {
    var newItemNo = $scope.choices.length+1;
    $scope.choices.push({'id':'choice'+newItemNo});
  };
        
  
                      
                      
                      
                     
}]);