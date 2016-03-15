var refTeam = new Firebase("https://get2mygames.firebaseio.com/Team");

$(function(){
    $("#datepicker1,#datepicker2,#datepicker3").datepicker({
        format: 'dd/mm/yyyy',
        endDate: '+0d',
        autoclose: true
    });
});

/*Validation Logic for Individual and  Team Registeration*/
$(document).ready(function () {
      $.validator.addMethod("minAge", function(value, element, min) {
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
            email: "Please Enter Your Valid Email Address",
            shirt: "Please Select T-Shirt-Size",
            contactNo: "Please Enter Your Valid Contact Number"
                //agree: "Please accept our policy"*/
        }
    });
    $("#form2").validate({
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
            email: "Please Enter Your Valid Email Address",
            shirt: "Please Select T-Shirt-Size",
            contactNo: "Please Enter Your Valid Contact Number"
                //agree: "Please accept our policy"*/
        }
    });
    $("#form3").validate({
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
            email: "Please Enter Your Valid Email Address",
            shirt: "Please Select T-Shirt-Size",
            contactNo: "Please Enter Your Valid Contact Number"
                //agree: "Please accept our policy"*/
        }
    });
    
    $("#radioform").validate({
        rules:{
            distance:{
                required:true
            }
        }
    });




    $('#btn').click(function () {
        $("#form1").valid();
        $("#form2").valid();
        $("#form3").valid();
        $("#radioform").valid();

        if ($("#form1").valid() === true && $("#form2").valid() || $("#form3").valid()) {
  
            SavePlayer();

        }else
            {
                document.getElementById("memberLabel").style.display = 'block';
               
                
            }


    });
    
    /* Team forms data push into firebase */
    function SavePlayer() {

    for (i = 1; i < 4; i++) {
        var form = document.getElementById('form' + i);
        if (!(form.captain.value !== "" && form.Fname.value !== "" && form.Lname.value !== "" && form.dob.value !== "" && form.email.value !== "" && form.contactNo.value !== "" && form.shirt.value !== "" )) {
            form.captain.value = "";
            form.Fname.value = "";
            form.Lname.value = "";
            form.dob.value = "";
            form.email.value = "";
            form.contactNo.value = "";
            form.shirt.value = "";
            form.blood.value = "";
        }

    }
    var Distance = document.querySelector('input[name = "distance"]:checked').value;
    
    var form1 = document.getElementById('form1');

    var Role = form1.captain.value;
    var FirstName = form1.Fname.value;
    var LastName = form1.Lname.value;
    var Date_of_birth = form1.dob.value;
    var Email_Id = form1.email.value;
    var Contact_No = form1.contactNo.value;
    var T_shirt_size = form1.shirt.value;
    var Blood_group = form1.blood.value;

    var form2 = document.getElementById('form2');

    var Role1 = form2.captain.value;
    var FirstName1 = form2.Fname.value;
    var LastName1 = form2.Lname.value;
    var Date_of_birth1 = form2.dob.value;
    var Email_Id1 = form2.email.value;
    var Contact_No1 = form2.contactNo.value;
    var T_shirt_size1 = form2.shirt.value;
    var Blood_group1 = form2.blood.value;

    var form3 = document.getElementById('form3');

    var Role2 = form3.captain.value;
    var FirstName2 = form3.Fname.value;
    var LastName2 = form3.Lname.value;
    var Date_of_birth2 = form3.dob.value;
    var Email_Id2 = form3.email.value;
    var Contact_No2 = form3.contactNo.value;
    var T_shirt_size2 = form3.shirt.value;
    var Blood_group2 = form3.blood.value;


/* Random Registration ID Generats */
    
        var c = 1;
        var d = new Date(),
        m = d.getMilliseconds() + "",
        u = ++d + m + (++c === 10000 ? (c = 1) : c);
      var regid='DEC_' + u;   
   
/* registration ID Ends here*/

    var Participant = {
        "Participant": {
            "Registration_Id": regid,
            "Participant1": {
                "Role": Role,
                "Distance": Distance,
                "FName": FirstName,
                "LName": LastName,
                "Date_of_birth": Date_of_birth,
                "Email_id": Email_Id,
                "Contact_no": Contact_No,
                "T_shirt_size": T_shirt_size,
                "Blood_group": Blood_group
            },
            "Participant2": {
                "Role": Role1,
                "Distance": Distance,
                "FName": FirstName1,
                "LName": LastName1,
                "Date_of_birth": Date_of_birth1,
                "Email_id": Email_Id1,
                "Contact_no": Contact_No1,
                "T_shirt_size": T_shirt_size1,
                "Blood_group": Blood_group1
            },
            "Participant3": {
                "Role": Role2,
                "Distance": Distance,
                "FName": FirstName2,
                "LName": LastName2,
                "Date_of_birth": Date_of_birth2,
                "Email_id": Email_Id2,
                "Contact_no": Contact_No2,
                "T_shirt_size": T_shirt_size2,
                "Blood_group": Blood_group2

            }

        }
    }
    console.log(Participant);

    //adding data to firebase
    refTeam.push(Participant);

    $("#form1")[0].reset();
    $("#form2")[0].reset();
    $("#form3")[0].reset();

         //price in 7.5% more
         var teamPrice=1000+Math.round(((2.5/100) *1000));
        

    //Redirecting to payment page
                        sessionStorage.setItem('type',"Team");
                         sessionStorage.setItem('amt',teamPrice);
        
    
    document.cookie="indRgi1="+regid;
    document.location.href = 'payment.php';


}
});