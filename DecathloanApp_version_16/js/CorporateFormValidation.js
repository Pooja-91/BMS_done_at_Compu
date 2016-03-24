var refCorporate = new Firebase("https://get2mygames.firebaseio.com/Corporate");

var Servertime=Firebase.ServerValue.TIMESTAMP;

$(function(){
    $("#datepicker1,#datepicker2,#datepicker3,#datepicker4,#datepicker5,#datepicker6,#datepicker7,#datepicker8,#datepicker9,#datepicker10,#datepicker11,#datepicker12,#datepicker13,#datepicker14,#datepicker15,#datepicker16,#datepicker17,#datepicker18,#datepicker19,#datepicker20,#datepicker21,#datepicker22,#datepicker23,#datepicker24,#datepicker25,#datepicker26,#datepicker27,#datepicker28,#datepicker29,#datepicker30").datepicker({
        format: 'dd/mm/yyyy',
        endDate: '+0d',
        autoclose: true
    });
});


$(document).ready(function () {
     $("#companyID").validate({
         rules:{
             companyName:{
                 required: true
             }
         },
         messages:{
             companyName :"Please Enter Your Company Name"
         }
     })
    
    /* finding the age from user selected date*/
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
            },
            // agree: "required"
        },
        messages: {
           // companyName: "Please Enter Your Company Name",
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
           /* companyName: {
                required: true,
                lettersonly: true
            },*/
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
            },
            // agree: "required"
        },
        messages: {
          //  companyName: "Please Enter Your Company Name",
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
           /* companyName: {
                required: true,
                lettersonly: true
            },*/
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

            },
            // agree: "required"
        },
        messages: {
           // companyName: "Please Enter Your Company Name",
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
    $("#form4").validate({
        rules: {
            /*companyName: {
                required: true,
                lettersonly: true
            },*/
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
            },
            // agree: "required"
        },
        messages: {
           // companyName: "Please Enter Your Company Name",
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
    $("#form5").validate({
        rules: {
            /*companyName: {
                required: true,
                lettersonly: true
            },*/
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
            },
            // agree: "required"
        },
        messages: {
           // companyName: "Please Enter Your Company Name",
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
    $("#form6").validate({
        rules: {
           /* companyName: {
                required: true,
                lettersonly: true
            },*/
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
            },
            // agree: "required"
        },
        messages: {
            //companyName: "Please Enter Your Company Name",
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
    $("#form7").validate({
        rules: {
            /*companyName: {
                required: true,
                lettersonly: true
            },*/
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
            },
            // agree: "required"
        },
        messages: {
          //  companyName: "Please Enter Your Company Name",
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
    $("#form8").validate({
        rules: {
            /*companyName: {
                required: true,
                lettersonly: true
            },*/
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
            },
            // agree: "required"
        },
        messages: {
            //companyName: "Please Enter Your Company Name",
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
    $("#form9").validate({
        rules: {
            /*companyName: {
                required: true,
                lettersonly: true
            },*/
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
            },
            // agree: "required"
        },
        messages: {
          //  companyName: "Please Enter Your Company Name",
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
    $("#form10").validate({
        rules: {
            /*companyName: {
                required: true,
                lettersonly: true
            },
*/     
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
            },
            // agree: "required"
        },
        messages: {
          //  companyName: "Please Enter Your Company Name",
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
    $("#form11").validate({
        rules: {
          /*  companyName: {
                required: true,
                lettersonly: true
            },
*/           
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
            },
            // agree: "required"
        },
        messages: {
            //companyName: "Please Enter Your Company Name",
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
    $("#form12").validate({
        rules: {
            /*companyName: {
                required: true,
                lettersonly: true
            },*/
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
            },
            // agree: "required"
        },
        messages: {
            //companyName: "Please Enter Your Company Name",
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
    $("#form13").validate({
        rules: {
           /* companyName: {
                required: true,
                lettersonly: true
            },*/
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
            },
            // agree: "required"
        },
        messages: {
            //companyName: "Please Enter Your Company Name",
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
    $("#form14").validate({
        rules: {
            /*companyName: {
                required: true,
                lettersonly: true
            },*/
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
            },
            // agree: "required"
        },
        messages: {
           // companyName: "Please Enter Your Company Name",
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
    $("#form15").validate({
        rules: {
            /*companyName: {
                required: true,
                lettersonly: true
            },*/
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
            },
            // agree: "required"
        },
        messages: {
            //companyName: "Please Enter Your Company Name",
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
    $("#form16").validate({
        rules: {
            /*companyName: {
                required: true,
                lettersonly: true
            },*/
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
            },
            // agree: "required"
        },
        messages: {
            //companyName: "Please Enter Your Company Name",
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
    $("#form17").validate({
        rules: {
            /*companyName: {
                required: true,
                lettersonly: true
            },*/
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
            },
            // agree: "required"
        },
        messages: {
            //companyName: "Please Enter Your Company Name",
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
    $("#form18").validate({
        rules: {
            /*companyName: {
                required: true,
                lettersonly: true
            },*/
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
            },
            // agree: "required"
        },
        messages: {
            //companyName: "Please Enter Your Company Name",
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
    $("#form19").validate({
        rules: {
            /*companyName: {
                required: true,
                lettersonly: true
            },*/
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
            },
            // agree: "required"
        },
        messages: {
            //companyName: "Please Enter Your Company Name",
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
    $("#form20").validate({
        rules: {
            /*companyName: {
                required: true,
                lettersonly: true
            },*/
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
            },
            // agree: "required"
        },
        messages: {
            //companyName: "Please Enter Your Company Name",
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
    $("#form21").validate({
        rules: {
            /*companyName: {
                required: true,
                lettersonly: true
            },*/
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
            },
            // agree: "required"
        },
        messages: {
            //companyName: "Please Enter Your Company Name",
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
    $("#form22").validate({
        rules: {
            /*companyName: {
                required: true,
                lettersonly: true
            },*/
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
            },
            // agree: "required"
        },
        messages: {
            //companyName: "Please Enter Your Company Name",
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
    $("#form23").validate({
        rules: {
            /*companyName: {
                required: true,
                lettersonly: true
            },*/
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
            },
            // agree: "required"
        },
        messages: {
            //companyName: "Please Enter Your Company Name",
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
    $("#form24").validate({
        rules: {
            /*companyName: {
                required: true,
                lettersonly: true
            },*/
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
            },
            // agree: "required"
        },
        messages: {
            //companyName: "Please Enter Your Company Name",
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
    $("#form25").validate({
        rules: {
            /*companyName: {
                required: true,
                lettersonly: true
            },*/
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
            },
            // agree: "required"
        },
        messages: {
            //companyName: "Please Enter Your Company Name",
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
    $("#form26").validate({
        rules: {
            /*companyName: {
                required: true,
                lettersonly: true
            },*/
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
            },
            // agree: "required"
        },
        messages: {
            //companyName: "Please Enter Your Company Name",
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
    $("#form27").validate({
        rules: {
            /*companyName: {
                required: true,
                lettersonly: true
            },
*/         
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
            },
            // agree: "required"
        },
        messages: {
            //companyName: "Please Enter Your Company Name",
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
    $("#form28").validate({
        rules: {
            /*companyName: {
                required: true,
                lettersonly: true
            },*/
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
            },
            // agree: "required"
        },
        messages: {
            //companyName: "Please Enter Your Company Name",
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
    $("#form29").validate({
        rules: {
            /*companyName: {
                required: true,
                lettersonly: true
            },*/
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
            },
            // agree: "required"
        },
        messages: {
            //companyName: "Please Enter Your Company Name",
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
    $("#form30").validate({
        rules: {
            /*companyName: {
                required: true,
                lettersonly: true
            },*/
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
            },
            // agree: "required"
        },
        messages: {
            //companyName: "Please Enter Your Company Name",
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
    
    $("#radioform1").validate({
        rules:{
            distance1:{
                required:true
            }
        }
    });

$("#radioform2").validate({
        rules:{
            distance2:{
                required:true
            }
        }
    });
    
    $("#radioform3").validate({
        rules:{
            distance3:{
                required:true
            }
        }
    });
    
$("#radioform4").validate({
        rules:{
            distance4:{
                required:true
            }
        }
    });
    $("#radioform5").validate({
        rules:{
            distance5:{
                required:true
            }
        }
    });
    
    $("#radioform6").validate({
        rules:{
            distance6:{
                required:true
            }
        }
    });
    $("#radioform7").validate({
        rules:{
            distance7:{
                required:true
            }
        }
    });
    $("#radioform8").validate({
        rules:{
            distance8:{
                required:true
            }
        }
    });
    $("#radioform9").validate({
        rules:{
            distance9:{
                required:true
            }
        }
    });
    
    
    

    $('#btn').click(function () {
        $("#companyID").valid();
        $("#form1").valid();
        $("#form2").valid();
        $("#form3").valid();
        $("#form4").valid();
        $("#form5").valid();
        $("#form6").valid();
        $("#form7").valid();
        $("#form8").valid();
        $("#form9").valid();
        $("#form10").valid();
        $("#form11").valid();
        $("#form12").valid();
        $("#form13").valid();
        $("#form14").valid();
        $("#form15").valid();
        $("#form16").valid();
        $("#form17").valid();
        $("#form18").valid();
        $("#form19").valid();
        $("#form20").valid();
        $("#form21").valid();
        $("#form22").valid();
        $("#form23").valid();
        $("#form24").valid();
        $("#form25").valid();
        $("#form26").valid();
        $("#form27").valid();
        $("#form28").valid();
        $("#form29").valid();
        $("#form30").valid();
        
        $("#radioform").valid();
        $("#radioform1").valid();
        $("#radioform2").valid();
        $("#radioform3").valid();
        $("#radioform4").valid();
        $("#radioform5").valid();
        $("#radioform6").valid();
        $("#radioform7").valid();
        $("#radioform8").valid();
        $("#radioform9").valid();
        
        
        

if ( $("#companyID").valid() === true && $("#form1").valid() === true && $("#form2").valid() === true || $("#form3").valid() === true && $("#form4").valid() === true && $("#form5").valid() === true || $("#form6").valid() === true && $("#form7").valid() === true && $("#form8").valid() === true || $("#form9").valid() === true && $("#form10").valid() === true && $("#form11").valid() === true || $("#form12").valid() === true && $("#form13").valid() === true && $("#form14").valid() === true || $("#form15").valid() === true && $("#form16").valid() === true && $("#form17").valid() === true || $("#form18").valid() === true && $("#form19").valid() === true && $("#form20").valid() === true || $("#form21").valid() === true && $("#form22").valid() === true && $("#form23").valid() === true || $("#form24").valid() === true && $("#form25").valid() === true && $("#form26").valid() === true || $("#form27").valid() === true && $("#form28").valid() === true && $("#form29").valid() === true || $("#form30").valid() === true)
{
    
    /* After validation savePlayer function calls to save data in to firebase */
        SavePlayer()
        }else
            {
                document.getElementById("memberLabel").style.display = 'block';
               
                
            }


    });
    
    /* Registered user data gets store in firebase */
    
function SavePlayer() {
    for (i = 1; i < 31; i++) {
        var form = document.getElementById('form' + i);
        if (!(form.captain.value !== ""  && form.Fname.value !== "" && form.Lname.value !== "" && form.dob.value !== "" && form.email.value !== "" && form.contactNo.value !== "" && form.shirt.value !== "" )) 
        {
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
    
    
    var Distance1 = document.querySelector('input[name = "distance"]:checked').value;
    var Distance12 = document.querySelector('input[name = "distance1"]:checked').value;
    var Distance13 = document.querySelector('input[name = "distance2"]:checked').value;
    var Distance14 = document.querySelector('input[name = "distance3"]:checked').value;
    var Distance15 = document.querySelector('input[name = "distance4"]:checked').value;
    var Distance16 = document.querySelector('input[name = "distance5"]:checked').value;
    var Distance17 = document.querySelector('input[name = "distance6"]:checked').value;
    var Distance18 = document.querySelector('input[name = "distance7"]:checked').value;
    var Distance19 = document.querySelector('input[name = "distance8"]:checked').value;
    var Distance20= document.querySelector('input[name = "distance9"]:checked').value;

     var company=document.getElementById("companyName").value;
    var form1 = document.getElementById('form1');

   //var Corporate_name1 = form1.companyName.value;
    var Role1 = form1.captain.value;
    var FirstName1 = form1.Fname.value;
    var LastName1 = form1.Lname.value;
    var Date_of_birth1 = form1.dob.value;
    var Email_Id1 = form1.email.value;
    var Contact_No1 = form1.contactNo.value;
    var T_shirt_size1 = form1.shirt.value;
    var Blood_group1 = form1.blood.value;

    var form2 = document.getElementById('form2');

    //var Corporate_name2 = form2.companyName.value;
    var Role2 = form2.captain.value;
    var FirstName2 = form2.Fname.value;
    var LastName2 = form2.Lname.value;
    var Date_of_birth2 = form2.dob.value;
    var Email_Id2 = form2.email.value;
    var Contact_No2 = form2.contactNo.value;
    var T_shirt_size2 = form2.shirt.value;
    var Blood_group2 = form2.blood.value;

    var form3 = document.getElementById('form3');

    //var Corporate_name3 = form3.companyName.value;
    var Role3 = form3.captain.value;
    var FirstName3 = form3.Fname.value;
    var LastName3 = form3.Lname.value;
    var Date_of_birth3 = form3.dob.value;
    var Email_Id3 = form3.email.value;
    var Contact_No3 = form3.contactNo.value;
    var T_shirt_size3 = form3.shirt.value;
    var Blood_group3 = form3.blood.value;



    var form4 = document.getElementById('form4');

    //var Corporate_name4 = form4.companyName.value;
    var Role4 = form4.captain.value;
    var FirstName4 = form4.Fname.value;
    var LastName4 = form4.Lname.value;
    var Date_of_birth4 = form4.dob.value;
    var Email_Id4 = form4.email.value;
    var Contact_No4 = form4.contactNo.value;
    var T_shirt_size4 = form4.shirt.value;
    var Blood_group4 = form4.blood.value;

    var form5 = document.getElementById('form5');

    //var Corporate_name5 = form5.companyName.value;
    var Role5 = form5.captain.value;
    var FirstName5 = form5.Fname.value;
    var LastName5 = form5.Lname.value;
    var Date_of_birth5 = form5.dob.value;
    var Email_Id5 = form5.email.value;
    var Contact_No5 = form5.contactNo.value;
    var T_shirt_size5 = form5.shirt.value;
    var Blood_group5 = form5.blood.value;

    var form6 = document.getElementById('form6');

    //var Corporate_name6 = form6.companyName.value;
    var Role6 = form6.captain.value;
    var FirstName6 = form6.Fname.value;
    var LastName6 = form6.Lname.value;
    var Date_of_birth6 = form6.dob.value;
    var Email_Id6 = form6.email.value;
    var Contact_No6 = form6.contactNo.value;
    var T_shirt_size6 = form6.shirt.value;
    var Blood_group6 = form6.blood.value;

    var form7 = document.getElementById('form7');

   // var Corporate_name7 = form7.companyName.value;
    var Role7 = form7.captain.value;
    var FirstName7 = form7.Fname.value;
    var LastName7 = form7.Lname.value;
    var Date_of_birth7 = form7.dob.value;
    var Email_Id7 = form7.email.value;
    var Contact_No7 = form7.contactNo.value;
    var T_shirt_size7 = form7.shirt.value;
    var Blood_group7 = form7.blood.value;

    var form8 = document.getElementById('form8');

    //var Corporate_name8 = form8.companyName.value;
    var Role8 = form8.captain.value;
    var FirstName8 = form8.Fname.value;
    var LastName8 = form8.Lname.value;
    var Date_of_birth8 = form8.dob.value;
    var Email_Id8 = form8.email.value;
    var Contact_No8 = form8.contactNo.value;
    var T_shirt_size8 = form8.shirt.value;
    var Blood_group8 = form8.blood.value;

    var form9 = document.getElementById('form9');

    //var Corporate_name9 = form9.companyName.value;
    var Role9 = form9.captain.value;
    var FirstName9 = form9.Fname.value;
    var LastName9 = form9.Lname.value;
    var Date_of_birth9 = form9.dob.value;
    var Email_Id9 = form9.email.value;
    var Contact_No9 = form9.contactNo.value;
    var T_shirt_size9 = form9.shirt.value;
    var Blood_group9 = form9.blood.value;

    var form10 = document.getElementById('form10');

    //var Corporate_name10 = form10.companyName.value;
    var Role10 = form10.captain.value;
    var FirstName10 = form10.Fname.value;
    var LastName10 = form10.Lname.value;
    var Date_of_birth10 = form10.dob.value;
    var Email_Id10 = form10.email.value;
    var Contact_No10 = form10.contactNo.value;
    var T_shirt_size10 = form10.shirt.value;
    var Blood_group10 = form10.blood.value;

    var form11 = document.getElementById('form11');

    //var Corporate_name11 = form11.companyName.value;
    var Role11 = form11.captain.value;
    var FirstName11 = form11.Fname.value;
    var LastName11 = form11.Lname.value;
    var Date_of_birth11 = form11.dob.value;
    var Email_Id11 = form11.email.value;
    var Contact_No11 = form11.contactNo.value;
    var T_shirt_size11 = form11.shirt.value;
    var Blood_group11 = form11.blood.value;

    var form12 = document.getElementById('form12');

    //var Corporate_name12 = form12.companyName.value;
    var Role12 = form12.captain.value;
    var FirstName12 = form12.Fname.value;
    var LastName12 = form12.Lname.value;
    var Date_of_birth12 = form12.dob.value;
    var Email_Id12 = form12.email.value;
    var Contact_No12 = form12.contactNo.value;
    var T_shirt_size12 = form12.shirt.value;
    var Blood_group12 = form12.blood.value;


    var form13 = document.getElementById('form13');

   // var Corporate_name13 = form13.companyName.value;
    var Role13 = form13.captain.value;
    var FirstName13 = form13.Fname.value;
    var LastName13 = form13.Lname.value;
    var Date_of_birth13 = form13.dob.value;
    var Email_Id13 = form13.email.value;
    var Contact_No13 = form13.contactNo.value;
    var T_shirt_size13 = form13.shirt.value;
    var Blood_group13 = form13.blood.value;

    var form14 = document.getElementById('form14');

    //var Corporate_name14 = form14.companyName.value;
    var Role14 = form14.captain.value;
    var FirstName14 = form14.Fname.value;
    var LastName14 = form14.Lname.value;
    var Date_of_birth14 = form14.dob.value;
    var Email_Id14 = form14.email.value;
    var Contact_No14 = form14.contactNo.value;
    var T_shirt_size14 = form14.shirt.value;
    var Blood_group14 = form14.blood.value;

    var form15 = document.getElementById('form15');

    //var Corporate_name15 = form15.companyName.value;
    var Role15 = form15.captain.value;
    var FirstName15 = form15.Fname.value;
    var LastName15 = form15.Lname.value;
    var Date_of_birth15 = form15.dob.value;
    var Email_Id15 = form15.email.value;
    var Contact_No15 = form15.contactNo.value;
    var T_shirt_size15 = form15.shirt.value;
    var Blood_group15 = form15.blood.value;


    var form16 = document.getElementById('form16');

    //var Corporate_name16 = form16.companyName.value;
    var Role16 = form16.captain.value;
    var FirstName16 = form16.Fname.value;
    var LastName16 = form16.Lname.value;
    var Date_of_birth16 = form16.dob.value;
    var Email_Id16 = form16.email.value;
    var Contact_No16 = form16.contactNo.value;
    var T_shirt_size16 = form16.shirt.value;
    var Blood_group16 = form16.blood.value;


    var form17 = document.getElementById('form17');

   // var Corporate_name17 = form17.companyName.value;
    var Role17 = form17.captain.value;
    var FirstName17 = form17.Fname.value;
    var LastName17 = form17.Lname.value;
    var Date_of_birth17 = form17.dob.value;
    var Email_Id17 = form17.email.value;
    var Contact_No17 = form17.contactNo.value;
    var T_shirt_size17 = form17.shirt.value;
    var Blood_group17 = form17.blood.value;


    var form18 = document.getElementById('form18');

    //var Corporate_name18 = form18.companyName.value;
    var Role18 = form18.captain.value;
    var FirstName18 = form18.Fname.value;
    var LastName18 = form18.Lname.value;
    var Date_of_birth18 = form18.dob.value;
    var Email_Id18 = form18.email.value;
    var Contact_No18 = form18.contactNo.value;
    var T_shirt_size18 = form18.shirt.value;
    var Blood_group18 = form18.blood.value;


    var form19 = document.getElementById('form19');

    //var Corporate_name19 = form19.companyName.value;
    var Role19 = form19.captain.value;
    var FirstName19 = form19.Fname.value;
    var LastName19 = form19.Lname.value;
    var Date_of_birth19 = form19.dob.value;
    var Email_Id19 = form19.email.value;
    var Contact_No19 = form19.contactNo.value;
    var T_shirt_size19 = form19.shirt.value;
    var Blood_group19 = form19.blood.value;

    var form20 = document.getElementById('form20');

    //var Corporate_name20 = form20.companyName.value;
    var Role20 = form20.captain.value;
    var FirstName20 = form20.Fname.value;
    var LastName20 = form20.Lname.value;
    var Date_of_birth20 = form20.dob.value;
    var Email_Id20 = form20.email.value;
    var Contact_No20 = form20.contactNo.value;
    var T_shirt_size20 = form20.shirt.value;
    var Blood_group20 = form20.blood.value;


    var form21 = document.getElementById('form21');

    //var Corporate_name21 = form21.companyName.value;
    var Role21 = form21.captain.value;
    var FirstName21 = form21.Fname.value;
    var LastName21 = form21.Lname.value;
    var Date_of_birth21 = form21.dob.value;
    var Email_Id21 = form21.email.value;
    var Contact_No21 = form21.contactNo.value;
    var T_shirt_size21 = form21.shirt.value;
    var Blood_group21 = form21.blood.value;


    var form22 = document.getElementById('form22');

    //var Corporate_name22 = form22.companyName.value;
    var Role22 = form22.captain.value;
    var FirstName22 = form22.Fname.value;
    var LastName22 = form22.Lname.value;
    var Date_of_birth22 = form22.dob.value;
    var Email_Id22 = form22.email.value;
    var Contact_No22 = form22.contactNo.value;
    var T_shirt_size22 = form22.shirt.value;
    var Blood_group22 = form22.blood.value;


    var form23 = document.getElementById('form23');

    //var Corporate_name23 = form23.companyName.value;
    var Role23 = form23.captain.value;
    var FirstName23 = form23.Fname.value;
    var LastName23 = form23.Lname.value;
    var Date_of_birth23 = form23.dob.value;
    var Email_Id23 = form23.email.value;
    var Contact_No23 = form23.contactNo.value;
    var T_shirt_size23 = form23.shirt.value;
    var Blood_group23 = form23.blood.value;


    var form24 = document.getElementById('form24');

    //var Corporate_name24 = form24.companyName.value;
    var Role24 = form24.captain.value;
    var FirstName24 = form24.Fname.value;
    var LastName24 = form24.Lname.value;
    var Date_of_birth24 = form24.dob.value;
    var Email_Id24 = form24.email.value;
    var Contact_No24 = form24.contactNo.value;
    var T_shirt_size24 = form24.shirt.value;
    var Blood_group24 = form24.blood.value;

    var form25 = document.getElementById('form25');

   // var Corporate_name25 = form25.companyName.value;
    var Role25 = form25.captain.value;
    var FirstName25 = form25.Fname.value;
    var LastName25 = form25.Lname.value;
    var Date_of_birth25 = form25.dob.value;
    var Email_Id25 = form25.email.value;
    var Contact_No25 = form25.contactNo.value;
    var T_shirt_size25 = form25.shirt.value;
    var Blood_group25 = form25.blood.value;

    var form26 = document.getElementById('form26');

    //var Corporate_name26 = form26.companyName.value;
    var Role26 = form26.captain.value;
    var FirstName26 = form26.Fname.value;
    var LastName26 = form26.Lname.value;
    var Date_of_birth26 = form26.dob.value;
    var Email_Id26 = form26.email.value;
    var Contact_No26 = form26.contactNo.value;
    var T_shirt_size26 = form26.shirt.value;
    var Blood_group26 = form26.blood.value;

    var form27 = document.getElementById('form27');

   // var Corporate_name27 = form27.companyName.value;
    var Role27 = form27.captain.value;
    var FirstName27 = form27.Fname.value;
    var LastName27 = form27.Lname.value;
    var Date_of_birth27 = form27.dob.value;
    var Email_Id27 = form27.email.value;
    var Contact_No27 = form27.contactNo.value;
    var T_shirt_size27 = form27.shirt.value;
    var Blood_group27 = form27.blood.value;


    var form28 = document.getElementById('form28');

    //var Corporate_name28 = form28.companyName.value;
    var Role28 = form28.captain.value;
    var FirstName28 = form28.Fname.value;
    var LastName28 = form28.Lname.value;
    var Date_of_birth28 = form28.dob.value;
    var Email_Id28 = form28.email.value;
    var Contact_No28 = form28.contactNo.value;
    var T_shirt_size28 = form28.shirt.value;
    var Blood_group28 = form28.blood.value;


    var form29 = document.getElementById('form29');

   // var Corporate_name29 = form29.companyName.value;
    var Role29 = form29.captain.value;
    var FirstName29 = form29.Fname.value;
    var LastName29 = form29.Lname.value;
    var Date_of_birth29 = form29.dob.value;
    var Email_Id29 = form29.email.value;
    var Contact_No29 = form29.contactNo.value;
    var T_shirt_size29 = form29.shirt.value;
    var Blood_group29 = form29.blood.value;


    var form30 = document.getElementById('form30');

    //var Corporate_name30 = form30.companyName.value;
    var Role30 = form30.captain.value;
    var FirstName30 = form30.Fname.value;
    var LastName30 = form30.Lname.value;
    var Date_of_birth30 = form30.dob.value;
    var Email_Id30 = form30.email.value;
    var Contact_No30 = form30.contactNo.value;
    var T_shirt_size30 = form30.shirt.value;
    var Blood_group30 = form30.blood.value;
    
    
    
    if(Role1 !== "")
       {
           document.cookie ="dist1="+Distance1;
       }
   if(Role4 !== "")
       {
           document.cookie ="dist2="+Distance12;
       }
   if(Role7 !== "")
       {
           document.cookie ="dist3="+Distance13;
       }
   if(Role10 !== "")
       {
           document.cookie ="dist4="+Distance14;
       }
   if(Role13 !== "")
       {
           document.cookie ="dist5="+Distance15;
       }
   if(Role16 !== "")
       {
           document.cookie ="dist6="+Distance16;
       }
   if(Role19 !== "")
       {
           document.cookie ="dist7="+Distance17;
       }
   if(Role22 !== "")
       {
           document.cookie ="dist8="+Distance18;
       }
   if(Role25 !== "")
       {
           document.cookie ="dist9="+Distance19;
       }
   if(Role28 !== "")
       {
           document.cookie ="dist10="+Distance20;
       }

    /* Random Registration ID Generats */
      
      
    var   corpoRegid="DEC_"+("0000" + (Math.random()*Math.pow(36,4) << 0)).slice(-4);
/* registration ID Ends here*/
    
    var Participant = {
        "Participant": {
            "Corporate_name":company,
            "Registration_Id": corpoRegid,
            "DateTime":Servertime,
            "Team1": {
                "Participant1": {
                    "Blood_group": Blood_group1,
                    "Contact_no": Contact_No1,
                    "Distance":Distance1,
                    //"Corporate_name": Corporate_name1,
                    "Date_of_birth": Date_of_birth1,
                    "Email_id": Email_Id1,
                    "FName": FirstName1,
                    "LName": LastName1,
                    "Role": Role1,
                    "T_shirt_size": T_shirt_size1
                },
                "Participant2": {
                    "Blood_group": Blood_group2,
                    "Contact_no": Contact_No2,
                    "Distance":Distance1,
                   // "Corporate_name": Corporate_name2,
                    "Date_of_birth": Date_of_birth2,
                    "Email_id": Email_Id2,
                    "FName": FirstName2,
                    "LName": LastName2,
                    "Role": Role2,
                    "T_shirt_size": T_shirt_size2
                },
                "Participant3": {
                    "Blood_group": Blood_group3,
                    "Contact_no": Contact_No3,
                    "Distance":Distance1,
                    //"Corporate_name": Corporate_name3,
                    "Date_of_birth": Date_of_birth3,
                    "Email_id": Email_Id3,
                    "FName": FirstName3,
                    "LName": LastName3,
                    "Role": Role3,
                    "T_shirt_size": T_shirt_size3
                }
            },
            "Team2": {
                "Participant1": {
                    "Blood_group": Blood_group4,
                    "Contact_no": Contact_No4,
                    "Distance":Distance12,
                   // "Corporate_name": Corporate_name4,
                    "Date_of_birth": Date_of_birth4,
                    "Email_id": Email_Id4,
                    "FName": FirstName4,
                    "LName": LastName4,
                    "Role": Role4,
                    "T_shirt_size": T_shirt_size4
                },
                "Participant2": {
                    "Blood_group": Blood_group5,
                    "Contact_no": Contact_No5,
                    "Distance":Distance12,
                   // "Corporate_name": Corporate_name5,
                    "Date_of_birth": Date_of_birth5,
                    "Email_id": Email_Id5,
                    "FName": FirstName5,
                    "LName": LastName5,
                    "Role": Role5,
                    "T_shirt_size": T_shirt_size5
                },
                "Participant3": {
                    "Blood_group": Blood_group6,
                    "Contact_no": Contact_No6,
                    "Distance":Distance12,
                   // "Corporate_name": Corporate_name6,
                    "Date_of_birth": Date_of_birth6,
                    "Email_id": Email_Id6,
                    "FName": FirstName6,
                    "LName": LastName6,
                    "Role": Role6,
                    "T_shirt_size": T_shirt_size6
                }
            },
            "Team3": {
                "Participant1": {
                    "Blood_group": Blood_group7,
                    "Contact_no": Contact_No7,
                    "Distance":Distance13,
                  //  "Corporate_name": Corporate_name7,
                    "Date_of_birth": Date_of_birth7,
                    "Email_id": Email_Id7,
                    "FName": FirstName7,
                    "LName": LastName7,
                    "Role": Role7,
                    "T_shirt_size": T_shirt_size7
                },
                "Participant2": {
                    "Blood_group": Blood_group8,
                    "Contact_no": Contact_No8,
                    "Distance":Distance13,
                   // "Corporate_name": Corporate_name8,
                    "Date_of_birth": Date_of_birth8,
                    "Email_id": Email_Id8,
                    "FName": FirstName8,
                    "LName": LastName8,
                    "Role": Role8,
                    "T_shirt_size": T_shirt_size8
                },
                "Participant3": {
                    "Blood_group": Blood_group9,
                    "Contact_no": Contact_No9,
                    "Distance":Distance13,
                  //  "Corporate_name": Corporate_name9,
                    "Date_of_birth": Date_of_birth9,
                    "Email_id": Email_Id9,
                    "FName": FirstName9,
                    "LName": LastName9,
                    "Role": Role9,
                    "T_shirt_size": T_shirt_size9
                }
            },
            "Team4": {
                "Participant1": {
                    "Blood_group": Blood_group10,
                    "Contact_no": Contact_No10,
                    "Distance":Distance14,
                   // "Corporate_name": Corporate_name10,
                    "Date_of_birth": Date_of_birth10,
                    "Email_id": Email_Id10,
                    "FName": FirstName10,
                    "LName": LastName10,
                    "Role": Role10,
                    "T_shirt_size": T_shirt_size10
                },
                "Participant2": {
                    "Blood_group": Blood_group11,
                    "Contact_no": Contact_No11,
                    "Distance":Distance14,
                   // "Corporate_name": Corporate_name11,
                    "Date_of_birth": Date_of_birth11,
                    "Email_id": Email_Id11,
                    "FName": FirstName11,
                    "LName": LastName11,
                    "Role": Role11,
                    "T_shirt_size": T_shirt_size11
                },
                "Participant3": {
                    "Blood_group": Blood_group12,
                    "Contact_no": Contact_No12,
                    "Distance":Distance14,
                   // "Corporate_name": Corporate_name12,
                    "Date_of_birth": Date_of_birth12,
                    "Email_id": Email_Id12,
                    "FName": FirstName12,
                    "LName": LastName12,
                    "Role": Role12,
                    "T_shirt_size": T_shirt_size12
                }
            },
            "Team5": {
                "Participant1": {
                    "Blood_group": Blood_group13,
                    "Contact_no": Contact_No13,
                    "Distance":Distance15,
                   // "Corporate_name": Corporate_name13,
                    "Date_of_birth": Date_of_birth13,
                    "Email_id": Email_Id13,
                    "FName": FirstName13,
                    "LName": LastName13,
                    "Role": Role13,
                    "T_shirt_size": T_shirt_size13
                },
                "Participant2": {
                    "Blood_group": Blood_group14,
                    "Contact_no": Contact_No14,
                    "Distance":Distance15,
                   // "Corporate_name": Corporate_name14,
                    "Date_of_birth": Date_of_birth14,
                    "Email_id": Email_Id14,
                    "FName": FirstName14,
                    "LName": LastName14,
                    "Role": Role14,
                    "T_shirt_size": T_shirt_size14
                },
                "Participant3": {
                    "Blood_group": Blood_group15,
                    "Contact_no": Contact_No15,
                    "Distance":Distance15,
                   // "Corporate_name": Corporate_name15,
                    "Date_of_birth": Date_of_birth15,
                    "Email_id": Email_Id15,
                    "FName": FirstName15,
                    "LName": LastName15,
                    "Role": Role15,
                    "T_shirt_size": T_shirt_size15
                }
            },
            "Team6": {
                "Participant1": {
                    "Blood_group": Blood_group16,
                    "Contact_no": Contact_No16,
                    "Distance":Distance16,
                  //  "Corporate_name": Corporate_name16,
                    "Date_of_birth": Date_of_birth16,
                    "Email_id": Email_Id16,
                    "FName": FirstName16,
                    "LName": LastName16,
                    "Role": Role16,
                    "T_shirt_size": T_shirt_size16
                },
                "Participant2": {
                    "Blood_group": Blood_group17,
                    "Contact_no": Contact_No17,
                    "Distance":Distance16,
                   // "Corporate_name": Corporate_name17,
                    "Date_of_birth": Date_of_birth17,
                    "Email_id": Email_Id17,
                    "FName": FirstName17,
                    "LName": LastName17,
                    "Role": Role17,
                    "T_shirt_size": T_shirt_size17
                },
                "Participant3": {
                    "Blood_group": Blood_group18,
                    "Contact_no": Contact_No18,
                    "Distance":Distance16,
                   // "Corporate_name": Corporate_name18,
                    "Date_of_birth": Date_of_birth18,
                    "Email_id": Email_Id18,
                    "FName": FirstName18,
                    "LName": LastName18,
                    "Role": Role18,
                    "T_shirt_size": T_shirt_size18
                }
            },
            "Team7": {
                "Participant1": {
                    "Blood_group": Blood_group19,
                    "Contact_no": Contact_No19,
                    "Distance":Distance17,
                   // "Corporate_name": Corporate_name19,
                    "Date_of_birth": Date_of_birth19,
                    "Email_id": Email_Id19,
                    "FName": FirstName19,
                    "LName": LastName19,
                    "Role": Role19,
                    "T_shirt_size": T_shirt_size19
                },
                "Participant2": {
                    "Blood_group": Blood_group20,
                    "Contact_no": Contact_No20,
                    "Distance":Distance17,
                    //"Corporate_name": Corporate_name20,
                    "Date_of_birth": Date_of_birth20,
                    "Email_id": Email_Id20,
                    "FName": FirstName20,
                    "LName": LastName20,
                    "Role": Role20,
                    "T_shirt_size": T_shirt_size20
                },
                "Participant3": {
                    "Blood_group": Blood_group21,
                    "Contact_no": Contact_No21,
                    "Distance":Distance17,
                   // "Corporate_name": Corporate_name21,
                    "Date_of_birth": Date_of_birth21,
                    "Email_id": Email_Id21,
                    "FName": FirstName21,
                    "LName": LastName21,
                    "Role": Role21,
                    "T_shirt_size": T_shirt_size21
                }
            },
            "Team8": {
                "Participant1": {
                    "Blood_group": Blood_group22,
                    "Contact_no": Contact_No22,
                    "Distance":Distance18,
                   // "Corporate_name": Corporate_name22,
                    "Date_of_birth": Date_of_birth22,
                    "Email_id": Email_Id22,
                    "FName": FirstName22,
                    "LName": LastName22,
                    "Role": Role22,
                    "T_shirt_size": T_shirt_size22
                },
                "Participant2": {
                    "Blood_group": Blood_group23,
                    "Contact_no": Contact_No23,
                    "Distance":Distance18,
                   // "Corporate_name": Corporate_name23,
                    "Date_of_birth": Date_of_birth23,
                    "Email_id": Email_Id23,
                    "FName": FirstName23,
                    "LName": LastName23,
                    "Role": Role23,
                    "T_shirt_size": T_shirt_size23
                },
                "Participant3": {
                    "Blood_group": Blood_group24,
                    "Contact_no": Contact_No24,
                    "Distance":Distance18,
                    //"Corporate_name": Corporate_name24,
                    "Date_of_birth": Date_of_birth24,
                    "Email_id": Email_Id24,
                    "FName": FirstName24,
                    "LName": LastName24,
                    "Role": Role24,
                    "T_shirt_size": T_shirt_size24
                }
            },
            "Team9": {
                "Participant1": {
                    "Blood_group": Blood_group25,
                    "Contact_no": Contact_No25,
                    "Distance":Distance19,
                    //"Corporate_name": Corporate_name25,
                    "Date_of_birth": Date_of_birth25,
                    "Email_id": Email_Id25,
                    "FName": FirstName25,
                    "LName": LastName25,
                    "Role": Role25,
                    "T_shirt_size": T_shirt_size25
                },
                "Participant2": {
                    "Blood_group": Blood_group26,
                    "Contact_no": Contact_No26,
                    "Distance":Distance19,
                    //"Corporate_name": Corporate_name26,
                    "Date_of_birth": Date_of_birth26,
                    "Email_id": Email_Id26,
                    "FName": FirstName26,
                    "LName": LastName26,
                    "Role": Role26,
                    "T_shirt_size": T_shirt_size26
                },
                "Participant3": {
                    "Blood_group": Blood_group27,
                    "Contact_no": Contact_No27,
                    "Distance":Distance19,
                   // "Corporate_name": Corporate_name27,
                    "Date_of_birth": Date_of_birth27,
                    "Email_id": Email_Id27,
                    "FName": FirstName27,
                    "LName": LastName27,
                    "Role": Role27,
                    "T_shirt_size": T_shirt_size27
                }
            },
            "Team10": {
                "Participant1": {
                    "Blood_group": Blood_group28,
                    "Contact_no": Contact_No28,
                    "Distance":Distance20,
                   // "Corporate_name": Corporate_name28,
                    "Date_of_birth": Date_of_birth28,
                    "Email_id": Email_Id28,
                    "FName": FirstName28,
                    "LName": LastName28,
                    "Role": Role28,
                    "T_shirt_size": T_shirt_size28
                },
                "Participant2": {
                    "Blood_group": Blood_group29,
                    "Contact_no": Contact_No29,
                    "Distance":Distance20,
                   // "Corporate_name": Corporate_name29,
                    "Date_of_birth": Date_of_birth29,
                    "Email_id": Email_Id29,
                    "FName": FirstName29,
                    "LName": LastName29,
                    "Role": Role29,
                    "T_shirt_size": T_shirt_size29
                },
                "Participant3": {
                    "Blood_group": Blood_group30,
                    "Contact_no": Contact_No30,
                    "Distance":Distance20,
                   // "Corporate_name": Corporate_name30,
                    "Date_of_birth": Date_of_birth30,
                    "Email_id": Email_Id30,
                    "FName": FirstName30,
                    "LName": LastName30,
                    "Role": Role30,
                    "T_shirt_size": T_shirt_size30
                }
            }

        }
    };
   

    //adding data to DB
    refCorporate.push(Participant);
    for (var i = 1; i <= 30; i++) {
        $("#form" + i)[0].reset();
    }
    
    //price in 7.5% more
         var corporatePrice=10000+Math.round(((2.5/100) *10000));
        

    //redirecting to payment page
     sessionStorage.setItem('type',"Corporate");
     sessionStorage.setItem('amt',10250);
     sessionStorage.setItem('RegistID',corpoRegid);
    
    
    
    document.cookie="indRgi1="+corpoRegid;
    document.location.href = 'payment.php';


}
});