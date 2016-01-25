    mainApp.factory('SharedService', function(FIREBASE_URI,$http) {
        alert(FIREBASE_URI);
//        // var bmsSports=[];
//      var obj = {};
//
//    $http.get(FIREBASE_URI+"/sport").success(function(response) {
//        // you can do some processing here
//        
//        console.log(JSON.stringify(response.data));
//    });    
//        
//    return obj;  
        
//    var myList = [];
//
//   
//        
   $http.get(FIREBASE_URI+"/sport")
    .then(function(response) {
         
         console.log(JSON.stringify(response.data));
   });
        
   //  });
//        var getList = function(){
//        return myList;
//    }
//        
// return {
//        
//        getList: getList
//    };        
        //console.log(JSON.stringify(sport));
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

});