

/*Validation Logic for Individual and  Team Registeration*/
var refIndividual = new Firebase("https://get2mygames.firebaseio.com/Individual");

$(function(){
    $('#datepicker').datepicker({
        format: 'dd/mm/yyyy',
        endDate: '+0d',
        autoclose: true
    });
});

$(document).ready(function () {
    
   $(function(){
    $(".datepicker").datepicker({
        format: 'dd/mm/yyyy',
        endDate: '+0d',
        autoclose: true
    });
}); 
    
  // Get created date from Firebase servers
var createdDate = new Firebase('https://get2mygames.firebaseio.com');

    
    /* calculate date of birth from user entered date */
    
 jQuery.validator.addMethod("minAge", function(value, element, min) {
    var today = new Date();
         var from = value.split("/");
    
        var birthDate = new Date(from[1]+ '/' + from[0] + '/' +from[2]);
       
        
    var age = today.getFullYear() - birthDate.getFullYear();
 //alert(max);
       
    if (age >= min) {
        return true;
    }
 
    var m = today.getMonth() - birthDate.getMonth();
 
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }

}, "You are not old enough!");
    
    
    $("#form1").validate({
        rules: {
            distance: {
                required: true
            },
            Fname: {
                required: true,
                lettersonly: true
            },

            Lname: {
                required: true,
                lettersonly: true
            },
             dob: {
                required: true,
            minAge: 15
            },
            shirt: {
                required: true
            },

            email: {
                required: true,
                email: true
            },
            contactNo: {
                required: true,
                phoneUS: true
                    //max:10,
            },
            // agree: "required"
        },
        messages: {
                      
            Fname: "Please Enter Your First Name",
            Lname: "Please Enter Your Last Name",
            dob: {
            required: "Please Select Your Date of Birth.",
            minAge: "You Must be at Least 15 Years Old!"
            },
            /*dob:"Please Select Your Date of Birth.",*/
            email: "Please Enter Your Valid Email Address",
            shirt: "Please Select T-Shirt-Size",
            contactNo: "Please Enter Your Valid Contact Number"
                //agree: "Please accept our policy"*/
        }
    });


    $('#btn').click(function () {
        $("#form1").valid();
        if ($("#form1").valid() === true) {

           savePlayer();
    
        }


    });
    
    
     function savePlayer(){
               var form = document.getElementById("form1");
    var Distance = document.querySelector('input[name = "distance"]:checked').value;
    var Role = form.captain.value;
    var FirstName = form.Fname.value;
    var LastName = form.Lname.value;
    var Date_of_birth = form.dob.value;
    var Email_Id = form.email.value;
    var Contact_No = form.contactNo.value;
    var T_shirt_size = form.shirt.value;
    var Blood_group = form.blood.value;
    /* Registration ID */
    /*var a = Math.floor(100000 + Math.random() * 900000)
    a = a.toString().substring(0, 4);
    var regiid = 'DEC_' + a;*/
    
    var c = 1;
    var d = new Date(),
        m = d.getMilliseconds() + "",
        u = ++d + m + (++c === 10000 ? (c = 1) : c);
      var regiid='DEC_' + u;   
   
    
    refIndividual.push({
        Participant: {
            "Registration_Id": regiid,
            "Distance": Distance,
            "Role": Role,
            "FName": FirstName,
            "LName": LastName,
            "Date_of_birth": Date_of_birth,
            "Email_id": Email_Id,
            "Contact_no": Contact_No,
            "T_shirt_size": T_shirt_size,
            "Blood_group": Blood_group
        }


    });
/* reset form when user cames back from next page */
    $("#form1")[0].reset();
         
        //  price in 7.5% more
         var indPrice=500+Math.round(((2.5/100) *500));
        
        
        
        
    //redirecting to payment page
     sessionStorage.setItem('type',"Individual");
     sessionStorage.setItem('amt',indPrice);
        
   
       //  document.cookie="indRgi1="+indPrice;
         document.cookie="indRgi1="+regiid;
        
   document.location.href = 'payment.php'; 
         

            }
});
