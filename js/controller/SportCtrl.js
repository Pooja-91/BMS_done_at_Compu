    mainApp.controller('SportCtrl', function($scope, $location, $firebaseArray,SharedService) {
      var result = [];  
      //get sport Name & sport id from previous page and events and country//
      //$scope.sport = sessionStorage.getItem("sport");
      $scope.s_id = "S101";//Still remain the functionality of sliding so that we have hard coded it;
      $scope.event = JSON.parse(sessionStorage.getItem("eventArr"));
      $scope.country = JSON.parse(sessionStorage.getItem("countryArr"));
      //////////////////////////////////////////////////////////////////////////

      /*get Event which are valid*/
      for (item = 0; item < $scope.event.length; item++) {
        if ($scope.s_id === $scope.event[item].sport_id) {
                      var i=0;
             while($scope.event[item].country_id != $scope.country[i].country_id)
                  {
                      i++;
                  }
             
           var data =  angular.extend({},$scope.event[item],$scope.country[i]);
            result.push(data);
        }
        
      }
        $scope.data = result;
        
        $scope.BookNow = function(eventId){
            sessionStorage.setItem("eventId",eventId);
            $location.path('/TicketBooking');
            
        }
        });