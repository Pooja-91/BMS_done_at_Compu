
app.controller("adminLoginController",[ '$scope', '$timeout','$location','$firebaseArray','$cookieStore',function($scope, $timeout,$location,$firebaseArray,$cookieStore){
    
  $scope.msg="Your in login session";
    
    //Admin Logged Data
    var admin=
        {
            emailId  :'Decathlonsport@123.com',
            password :'DecathlonAdmin@123'
        
        }
    
    
    
    $scope.validateLogin=function()
    {
        
        
        if($scope.email === admin.emailId && $scope.pwd === admin.password)
            {
                console.log("Login Success");
                
                $scope.userLog=admin.emailId;
                console.log("User at first"+$scope.userLog);
                
                $cookieStore.put("userLog",$scope.userLog);
                $location.path("/adminPage");
            }
        
        else{
            console.log("Login Failed");
           $scope.msgerr="*Please enter valid email-id and password";
            $location.path("/");
            
            }
        
        
    }
    
  
    
}]);



