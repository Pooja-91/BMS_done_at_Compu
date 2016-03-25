app.controller("trackingcontroller",[ '$scope', '$timeout','$location','$firebaseArray','$cookieStore',function($scope, $timeout,$location,$firebaseArray,$cookieStore){
     
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
    
    
     var ref = new Firebase("https://swachevent2016.firebaseio.com/Customer");

      // create a synchronized array
      $scope.customer = $firebaseArray(ref);
    
    
     var ref = new Firebase("https://swachevent2016.firebaseio.com/Customer_transaction");

      // create a synchronized array
      $scope.Customer_transaction = $firebaseArray(ref);
    
    
    
//    
//    var fb = new Firebase("https://get2mygames.firebaseio.com/Customer");
//    $scope.custData=$firebaseArray(fb);
//    alert($scope.custData);
//    
//    var fb2 = new Firebase("https://get2mygames.firebaseio.com/Customer_transaction");
//     $scope.custDataTrans=$firebaseArray(fb2);
//     alert($scope.custDataTrans);
//    
//    var fb = new Firebase("https://get2mygames.firebaseio.com/Customer");
//   
//    $scope.custbill= $firebaseArray(fb);
//    
//    var fb2 = new Firebase("https://get2mygames.firebaseio.com/Customer_transaction");
//        $scope.custbillTrans= $firebaseArray(fb2);
//    
//    
//    
//    var fb = new Firebase("https://get2mygames.firebaseio.com/");
//    fb.child('Customer').once('value', function(userSnap) {
//    fb.child('Customer_transaction').once('value', function(mediaSnap) {
//       
//       console.log(userSnap.val(), mediaSnap.val() );
//       
//       
//        var data=mediaSnap.val();
//        var datajson=JSON.stringify(data);
//        alert(datajson);
//        
//         var objArr = JSON.parse(datajson);
//           angular.forEach(objArr,function( item){
//           
//            console.log(item.RegistrationID);
//              
//        })
//                
//       var rescust=[];
//       rescust.push(userSnap.val());
//       console.log(JSON.stringify(rescust));
//       
//       var rescusttrans=[];
//       rescusttrans.push(mediaSnap.val());
//       console.log(JSON.stringify(rescusttrans));
//       
//     });
//   });
}]);