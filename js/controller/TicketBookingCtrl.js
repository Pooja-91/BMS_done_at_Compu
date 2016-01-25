    mainApp.controller('TicketBookingCtrl', function($scope,$firebaseArray,$location) {

        /*collecting event_id from eventcontroller page*/
        var event_id=sessionStorage.getItem("eventId");
        
        /*Firebase URL to fetch data */
      var catref = new Firebase("https://sportsdataevent.firebaseio.com/seat_category");
      var catdata = $firebaseArray(catref);
        
       var result=[];
        /*Loads all data in array */
      catdata.$loaded().then(function() {
          $scope.messages = catdata;
          for (var i = 0; i < catdata.length; i++) {
            /* Compared last page selected event_id and selected stand with firebase Event_id and stand */
            if (event_id === catdata[i].event_id) {
                              
               result.push(catdata.$getRecord(catdata[i].$id));
               
                }
              
          }
         
        })
        /* display error on console */
        .catch(function(error) {
          console.log("Error:", error);
        });
        
        /* store all records in item1 and used in ticket booking view*/
        $scope.item1=result;
        
        /* select multiple seats */
        var total=10;
         var range = [];
            for(var i=1;i<=total;i++) {
              range.push(i);
            }
            $scope.range = range;
        
        /* multiple seat selection Ends*/
        
        /* storing seatCount and price in session and used on ticket summary view */
        $scope.TicketSummary=function(obj){
            
            if(typeof obj.seatCount === "undefined") {
                    document.getElementById(obj.seat_cat).innerHTML="Select seats";
                }       
            else{
            sessionStorage.setItem("seat_count",obj.seatCount);
            sessionStorage.setItem("price",obj.price);
            $location.path('/ticketSummary');
            }
        }
        
        /* ticketSummary function ends */
        
        
               
       
    });