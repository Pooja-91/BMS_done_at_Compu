//  mainApp.factory('SharedService', function($scope,MYSQL_URL) {
//        alert("MYSQL_URL");
//      var ref = new Firebase(FIREBASE_URI);  //get firebase reference
//      var sportRef = ref.child("sport");  //get sport reference
//      var eventRef = ref.child("event");  //get event reference
//      var countryRef = ref.child("country"); //get country reference
//        
//     /* get Event list */
//      var elist = $firebaseArray(eventRef); 
//      elist.$loaded(function() {
//          sessionStorage.setItem("eventArr", JSON.stringify(elist));
//        },
//        function(error) {
//          console.error("Error:", error);
//        });
//      /*code ended here*/
//       
//      /* get country list*/
//      var clist = $firebaseArray(countryRef);
//      clist.$loaded(function() {
//          sessionStorage.setItem("countryArr", JSON.stringify(clist));
//        },
//        function(error) {
//          console.error("Error:", error);
//        });
//        /*code ended here */
//        
//      return {
//        getEvent: function() {
//          return $firebaseArray(eventRef);
//        }
//      };
//    $http.get(MYSQL_URL+"/sport")
//    .then(function(response) {
//         $scope.names = response.data[0];
//         return $scope.names;
//         //alert($scope.names);
//         console.log(JSON.stringify($scope.names));
//     });
      
  //  });