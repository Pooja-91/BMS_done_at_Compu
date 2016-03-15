                var refCustomer = new Firebase("https://get2mygames.firebaseio.com/Customer");
                var refCustTrans = new Firebase("https://get2mygames.firebaseio.com/Customer_transaction");
/*Emaol log */
                 var refEmaillog = new Firebase("https://get2mygames.firebaseio.com/Email_log");

 

                $(document).ready(function () {

                    //document.getElementById("price").value = sessionStorage.getItem("price");
                     
                    var type=sessionStorage.getItem("type");
                    var amt=sessionStorage.getItem("amt");
                    console.log(amt);
                  
                    if(type=="Individual" && amt==513)
                        {
                            document.getElementById("price").value=513;
                        }
                    else if(type=="Team" && amt==1025)
                        {
                            document.getElementById("price").value=1025;
                        }
                    else if(type=="Corporate" && amt==10250)
                        {
                            document.getElementById("price").value=10250;
                        }
                     else
                        {
                            window.location.href="http://decathlon.get2thegames.com";
                        }
                    
                })


                //billing data save into db
                function billingInfoSave(form) {

                    //var Role=form.captain.value;

                    var FirstName = form.FirstName.value;
                    var Email_Id = form.Email.value;
                    var Contact_No = form.Phone.value;
                    var Address = form.Address.value;



                    refCustomer.push({
                        Customer: {
                            "FullName": FirstName,
                            "Email_id": Email_Id,
                            "Mobile_no": Contact_No,
                            "Address": Address
                        }

                    })
                    


                }


                //on payment Success save data into db
                function paymentSuccess(productinfo, amount, trans_id,payuid) {


                    refCustTrans.push({

                        "Amount": amount,
                        "Customer_trans_id": trans_id,
                        "Event_Name": productinfo,
                        "Status": "Success",
                        "payuid":payuid
                    })


                }

                function emailSend(email,from,message,status,productinfo,send_date,tranID,payuid,amount,registid) {

                    
                    refEmaillog.push({

                        "From": from,
                        "To": email,
                        "Message": productinfo,
                        "Subject":message,
                        "Status":status,
                        "Send_date":send_date,
                        "TransactionID":tranID,
                        "PayUID":payuid,
                        "Amount":amount,
                        "RegistrationID":registid
                    })


                }


                //form Validation 
                $(document).ready(function () {

                    jQuery.validator.addMethod("lettersonly", function (value, element) {
                        return this.optional(element) || /^[a-zA-Z\s]*$/.test(value);
                    }, "Please enter only letters");

                    $("#form").validate({
                        rules: {
                            FirstName: {
                                required: true,
                                lettersonly: true
                            },
                            Email: {
                                required: true,
                                email: true
                            },
                            Phone: {
                                required: true,
                                phoneUS: true
                                    //max:10,
                            },
                            Address: "required"
                                // agree: "required"
                        },
                        messages: {
                            FirstName: "Please Enter Your Name",
                            Email: "Please Enter Your Valid Email Address",
                            Phone: "Please Enter Your Valid Contact Number",
                            Address: "Please Enter Your Valid Address "
                        }
                    });


                    $('#btn').click(function () {

                        if ($("#form").valid()) {
                            
                            var payForm = document.getElementById("form");
                            billingInfoSave(payForm);
                            
         
                            payForm.submit();
                           // $("#form")[0].reset();



                        }


                    });


                });