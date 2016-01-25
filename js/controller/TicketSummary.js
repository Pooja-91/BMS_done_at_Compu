 mainApp.controller('TicketSummary', function($scope,$location) {
     /* gets the no of seats and price from ticket booking view*/
     $scope.seatCount=sessionStorage.getItem("seat_count");
     $scope.price=sessionStorage.getItem("price");
     
     $scope.SubTotal=$scope.seatCount*$scope.price;
     
     /* Bolling Detail Validation */
     $scope.custvalidation=function(customer){
       // 
	 /* First name field validation */
	 var firstname=document.getElementById("fullName").value;
	 var patt=/^[a-zA-Z ]/;
     if(firstname==""){
         
         document.getElementById("fname").innerHTML="Please Enter your name";
         return false;
     }
	else if(patt.test(firstname))
	 {
	   
     }	 
     else{
         document.getElementById("fname").innerHTML="Please Enter Character Only";
	  return false;
     }
    
         /* Email field validation */
     var email=document.getElementById("inputEmail").value;
	 var pattern=/^([a-zA-Z0-9_.-])+@([a-zA-Z0-9_.-])+\.([a-zA-Z])+([a-zA-Z])+/;
	 if(email==""){
          document.getElementById("mail").innerHTML="Please Enter Your Email ID";
         return false;
     }
     else if(pattern.test(email))
	 {   
		 
	    
		
     }
     else{
         document.getElementById("mail").innerHTML="Invalid Email Id";
         return false;
     }
        /* mobile number validation */
     var mob=document.getElementById("mobileNum").value;
	 var patt=/^\d{10}$/;
     if(mob==""){
         document.getElementById("mob").innerHTML="Please Enter Your Mobile No";
	    return false;
     }
	 else if(patt.test(mob))
	 {
	   
		 
    }
     else{
         document.getElementById("mob").innerHTML="Enter 10 Digit Mobile number Only";
	    return false;
     }
     
         /* address field validation */
     var address=document.getElementById("address").value;
	 var patt=/^[a-zA-Z]/;
     if(address==""){
         document.getElementById("add").innerHTML="Please Enter Your address";
         return false;
     }
	else if(patt.test(address))
	 {
		 
	     
	 }
    else{
        document.getElementById("add").innerHTML="Please Enter character only address";
        return false;
    }
         
        

        
  alert(JSON.stringify(customer));
         $location.path('/PaymentConfirnationScreen');
         
        
 }
     
 });