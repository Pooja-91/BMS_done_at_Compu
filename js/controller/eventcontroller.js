    mainApp.controller('eventcontroller', function($scope,SharedService,$location) {
   alert(SharedService);
//       $scope.datalists=[];
//    $scope.datalists = SharedService.getEvent(); //store all event 
        
        //show more functionality
			var pagesShown = 1;
		    var pageSize = 3;
		    
		    $scope.paginationLimit = function(data) {
		        return pageSize * pagesShown;
		    };
        
		    $scope.hasMoreItemsToShow = function() {
		        return pagesShown < ($scope.datalists.length / pageSize);
		    };
        
		    $scope.showMoreItems = function() {
		        pagesShown = pagesShown + 1;       
		    };

                       
        /*BookTicket Code Start here*/
	    $scope.BookTicket=function(eventId){
		    
		    sessionStorage.setItem("eventId",eventId);
            $location.path("/TicketBooking");
		    
	    }
      $scope.evevtSelection=function(){
          $location.path('/sport');
      }
        
    });