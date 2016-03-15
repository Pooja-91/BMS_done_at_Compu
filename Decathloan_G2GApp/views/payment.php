<?php
error_reporting(0);
        if(!strstr($_SERVER['HTTP_REFERER'],"individual_registration.html") 
           && !strstr($_SERVER['HTTP_REFERER'],"team_registration.html")
           && !strstr($_SERVER['HTTP_REFERER'],"corporate_registration.html")
          && !strstr($_SERVER['HTTP_REFERER'],"payment.php") 
           && !strstr($_SERVER['HTTP_REFERER'],"newResponse")
          )
         {
            
           // echo $_SERVER['HTTP_REFERER'];
               // redirect to home page.
                   header("Location: ../index.html");
            
            die();
           };
            
    
    ?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">



    <script src="../libs/jquery.min.js"></script>
      <script src="../libs/bootstrap.min.js"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.5.0/css/font-awesome.css">
    <link rel="stylesheet" href="../css/bootstrap.min.css">
    <link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css">


    <script src="../libs/firebase.js"></script>


    <!-- Validation Js-->
    <script src="../libs/min/jquery.validate.min.js"></script>
    <script src="../libs/min/additional-methods.min.js"></script>
    <script src="../js/paymentFormValidation.js"></script>
    <link rel="stylesheet" href="../css/main/payment.css">


    <!-- Date picker scripts-->
    <script src="../libs/bootstrap-datepicker.js"></script>
    <link rel="stylesheet" href="../css/datepicker.css">

</head>
<?php
require './smtp_mail/PHPMailerAutoload.php';

require_once dirname( __FILE__ ) . '/payu.php';

function payment_success($trans_id, $productinfo, $amount, $mailSentFalg) {
  /* Payment success logic goes here. */

  ?>

    <body>
        <div class="container-flude ">
            <div class="row">
                <div class="col-sm-12">
                    <br>
                    <br>
                    <label id="confmess">Thank you for Registering!</label>
                    <div class="panel panel-default">
                        <div class="panel-body">
                            <h4><span class="glyphicon glyphicon-ok text-success"></span> &nbsp;
    Your transaction is successful</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="row">
            <div class="col-sm-12">
                <label id="confmess">Event Name :
                    <?php echo $productinfo; ?>
                </label>
            </div>
        </div>
        
        <div class="row">
            <div class="col-sm-12">
                <label id="confmess">Registration ID :
                    <?php echo $_COOKIE['indRgi1']; ?>
                </label>
            </div>
        </div>
              
        <div class="row">
            <div class="col-sm-12">
                <label id="confmess">Transaction ID :
                    <?php echo $trans_id; ?>
                </label>
            </div>
        </div>
        
         <div class="row">
            <div class="col-sm-12">
                <label id="confmess">PayU ID :
                    <?php echo $_POST['mihpayid'] ?>
                </label>
            </div>
        </div>
        
        <div class="row">
            <div class="col-sm-12">
                <label id="confmess">Registration Fee  : Rs.
                    <?php echo ($amount-round($amount-$amount/1.025)) ?>
                </label>
                
            </div>
        </div>
        <div class="row">
            <div class="col-sm-12">
                <label id="confmess">Internet Handling Charges  : Rs.
                    
                    <?php echo round($amount-$amount/1.025) ?>
                </label>
            </div>
        </div>

        <div class="row">
            <div class="col-sm-12">
                <label id="confmess">Amount Paid : Rs.
                    <?php echo $amount; ?>
                </label>
                <br>
                 <span name='amount' id="price">Including(+2.5% Tax)</span>
                
                
            </div>
        </div>
        <div class="row">
            <div class="col-sm-12">
                <label id="confmess">Message: Thank You for being part of Force to Spread SportAbilities by contributing your money, time and efforts to support the future of Para-Sports in India </label>
            </div>
        </div>
        <script>
            //save data to db  Customer transaction details
            paymentSuccess('<?php echo $productinfo; ?>', '<?php echo $amount; ?>', '<?php echo $trans_id; ?>',"<?php echo $_POST['mihpayid']?>");
        </script>
        <script>
            //save data to db  Customer transaction details
            emailSend("<?php echo $_POST['email']?>","tickets@get2thegames.com","Get2TheGames - ASTHA Decathlon Walkathon 2016 Registration","<?php echo $_POST['status']?>","<?php echo $_POST['productinfo']?>","<?php echo date('Y-m-d')?>","<?php echo $_POST['txnid']?>","<?php echo $_POST['mihpayid']?>","<?php echo $_POST['amount']?>" "<?php echo $_COOKIE['indRgi1']?>");

        </script>
        <?php
    if($mailSentFalg){
      echo "<h5>Please Check Your Mail. A Confirmation mail has been sent to your registered E-Mail ID.</h5>";
    }
    ?>
    </body>
    <?php
}

function payment_failure() {
  /* Payment failure logic goes here. */
?>

        <body>
            <div class="container-flude ">
                <div class="row">
                    <div class="col-sm-12">
                        <br>
                        <br>
                        <label>Transaction Failed.</label>
                        <div class="panel panel-default">
                            <div class="panel-body">
                                <h4><span class="glyphicon glyphicon-ok text-failure"></span> &nbsp;
    We are sorry. The transaction has failed.</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </body>
        <?php
}

function payment_form()
{
?>

            <body>
                <div class="container-flude">
                    <h1>Billing Details</h1>

                    <div class="row">

                        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                            <form action="" method="post" id="form" novalidate>
                                
                                <div class="form-group">
                                    <input type="text" class="form-control" id="fullName" placeholder="Full Name" name="FirstName">
                                    <label id="fname" style="color:red;"></label>
                                </div>

                                <div class="form-group">
                                    <input type="email" class="form-control" id="inputEmail" placeholder="Email" name="Email">
                                    <label id="mail" style="color:red;"></label>
                                </div>
                                <div class="form-group">
                                    <input type="text" class="form-control" id="mobileNum" placeholder="Mobile Number" name="Phone">
                                    <label id="mob" style="color:red;"></label>
                                </div>
                                <div class="form-group">
                                    <input type="text" class="form-control" id="address" placeholder="Address" name="Address">
                                    <label id="add" style="color:red;"></label>
                                </div>
                                <br>

                                <div class="form-group">
                                    <div class="row">
                                    <div class="col-xs-12 col-sm-12 col-lg-6 col-md-6">
                                    <strong>Your Amount is:
             <i class="fa fa-inr"></i>
                                        
            
             <input style="border: azure; width:50px" name='amount' id="price" type='text' value="" readonly><br>
                                        <span name='amount' id="price">Including(+2.5% Tax)</span>

             </strong>
                                        </div>
                                    </div>
                                </div>

                                

                        </div>


                        </form>
                        <!--<div class="form-group">

                                <div class="row">
                                    <div class="col-xs-12 col-sm-12 col-lg-6 col-md-6">

                                        <button class="btn btn-primary" id="btn" type="button">MAKE PAYMENT</button>
                                        <button onclick="document.location.href='../index.html';" class="btn btn-primary">Cancel</button>

   
                                    </div>
                                </div>
                                </div>
-->



                    </div>

                    <div class="form-group">

                                <div class="row">
                                    <div class="col-xs-12 col-sm-12 col-lg-6 col-md-6">

                                        <button class="btn btn-primary" id="btn" type="button">MAKE PAYMENT</button>
                                        <button onclick="document.location.href='../index.html';" class="btn btn-primary">Cancel</button>

   
                                    </div>
                                </div>
                                </div>

                </div>

                </div>
                </div>
                </div>
                </div>
            </body>
            <?php
}


//On Payment Gateway Response
if($_POST && !empty($_POST) && isset($_POST['status']) && isset($_POST['unmappedstatus']) && isset($_POST['mihpayid']) &&
  $_POST['status'] != "" && $_POST['unmappedstatus']!="" && $_POST['txnid'] != ""){
  //echo "<pre>";print_r($_POST);
    if($_POST['status'] == "success"){ //If payment was Success
      if($_POST['unmappedstatus'] == "captured"){ // Double check
        //Shoot an email after successfull registration

          //Mail For User
          $mail = new PHPMailer;
            //$mail->SMTPDebug = 3;                               // Enable verbose debug output

            $mail->isSMTP();                                      // Set mailer to use SMTP
            $mail->Host = 'email-smtp.eu-west-1.amazonaws.com';  // Specify main and backup SMTP servers
            $mail->SMTPAuth = true;                               // Enable SMTP authentication
            $mail->Username = 'AKIAJTWTPF2QREOSWJBQ';                 // SMTP username
            $mail->Password = 'ArpqSDhmfTwMXSnjgrgdQVygRDmD+SF0/BvBby7f3Yiy';                           // SMTP password
            $mail->SMTPSecure = 'tls';                            // Enable TLS encryption, `ssl` also accepted
            $mail->Port = 587;                                    // TCP port to connect to

            $mail->setFrom("tickets@get2thegames.com", 'Get2TheGames');
            $mail->addAddress($_POST['email'], $_POST['firstname']);     // Add a recipient
            //$mail->addAddress('admin@get2thegames.com'); //A copy for admin
            $mail->addReplyTo('no-reply@get2thegames.com', 'No-Reply');
            $mail->isHTML(true);                                  // Set email format to HTML

            $mail->Subject = 'Get2TheGames - ASTHA Decathlon Walkathon 2016 Registration';
            $userBody = '<h4>Dear '.$_POST['firstname'].', <br/></h4>';
            $userBody .= '<h4>Thank You for Registering for the event <br/>
                              Your transaction is successful.</h4>';
            $userBody .= '<table><tbody>';

            $userBody .= '<tr><td colspna="3"><b><u>Transaction Details:</u></b></br></td></tr>';
            $userBody .= '<tr><td><b>Transaction ID</b></td><td> : </td><td>'.$_POST['txnid'].'</td></tr>';
            $userBody .= '<tr><td><b>PayU ID</b></td><td> : </td><td>'.$_POST['mihpayid'].'</td></tr>';
            $userBody .= '<tr><td><b>Event Name</b></td><td> : </td><td>'.$_POST['productinfo'].'</td></tr>';
          $regFee= ($_POST['amount']-round($_POST['amount']-$_POST['amount']/1.025)) ;
          $userBody .= '<tr><td><b>Registration Fee Rs.</b></td><td> : </td><td>'.$regFee.'</td></tr>';
           $internateCharges= round($_POST['amount']-$_POST['amount']/1.025);
           $userBody .= '<tr><td><b>Internet Handling Charges Rs.</b></td><td> : </td><td>'. $internateCharges.'</td></tr>';

          
            
           
            $userBody .= '<tr><td><b>Amount Paid Rs.</b></td><td> : </td><td>'.$_POST['amount'].' including (+2.5% Tax)'.'</td></tr>';
            $userBody .= '<tr><td><b>Transaction Status</b></td><td> : </td><td>'.$_POST['status'].'</br></td></tr>';
          
           $userBody .= '<tr><td><b>Registration ID</b></td><td> : </td><td>'.$_COOKIE['indRgi1'].'</br></td></tr>';


            $userBody .= '<tr><td colspna="3"><b><u>Registrar Details:</u></b></br></td></tr>';
            $userBody .= '<tr><td><b>Username</b></td><td> : </td><td>'.$_POST['firstname'].'</td></tr>';
            $userBody .= '<tr><td><b>Email ID</b></td><td> : </td><td>'.$_POST['email'].'</td></tr>';
            $userBody .= '<tr><td><b>Contact Number</b></td><td> : </td><td>'.$_POST['phone'].'</td></tr>';
            $userBody .= '</tbody></table>';
            $userBody .= '<div><strong>Thanks and Regards</strong><br />
                            Get2TheGames<br />
                            Phone: +91-8040926994<br />
                            Email: support@get2thegames.com</div>
                            <div style="font-style:italic;margin-top:5px;">Note: Please do not reply to this message. Mail sent to this address cannot be answered</div>
                            ';
            $mail->Body = $userBody;
            //$mail->AltBody = 'This is the body in plain text for non-HTML mail clients';

            $mailSentFalg =0;
            if(!$mail->send()) {
                /*echo 'Message could not be sent.';
                echo 'Mailer Error: ' . $mail->ErrorInfo;*/
            } else {
                //echo 'Message has been sent';
                $mailSentFalg = 1;
            }
          
            payment_success($_POST['txnid'], $_POST['productinfo'], $_POST['amount'], $mailSentFalg);

            //Mail For Admin
            $mail = new PHPMailer;
            //$mail->SMTPDebug = 3;                               // Enable verbose debug output

            $mail->isSMTP();                                      // Set mailer to use SMTP
            $mail->Host = 'email-smtp.eu-west-1.amazonaws.com';  // Specify main and backup SMTP servers
            $mail->SMTPAuth = true;                               // Enable SMTP authentication
            $mail->Username = 'AKIAJTWTPF2QREOSWJBQ';                 // SMTP username
            $mail->Password = 'ArpqSDhmfTwMXSnjgrgdQVygRDmD+SF0/BvBby7f3Yiy';                           // SMTP password
            $mail->SMTPSecure = 'tls';                            // Enable TLS encryption, `ssl` also accepted
            $mail->Port = 587;                                    // TCP port to connect to

            $mail->setFrom("tickets@get2thegames.com", 'Get2TheGames');
            //$mail->addAddress($_POST['email'], $_POST['firstname']);     // Add a recipient
            $mail->addAddress('admin@get2thegames.com'); //A copy for admin
            //$mail->addReplyTo('no-reply@get2thegames.com', 'No-Reply');
            $mail->isHTML(true);                                  // Set email format to HTML

            $mail->Subject = 'Get2TheGames - ASTHA Decathlon Walkathon 2016 Registration';
            $adminBody = '<h4>Dear Admin, <br/></h4>';
            $adminBody .= '<h5>New Registrar Detail</h5>';
            $adminBody .= '<table><tbody>';

            $adminBody .= '<tr><td colspna="3"><b><u>Transaction Details:</u></b></br></td></tr>';
            $adminBody .= '<tr><td><b>Transaction ID</b></td><td> : </td><td>'.$_POST['txnid'].'</td></tr>';
            $adminBody .= '<tr><td><b>PayU ID</b></td><td> : </td><td>'.$_POST['mihpayid'].'</td></tr>';
            $adminBody .= '<tr><td><b>Event Name</b></td><td> : </td><td>'.$_POST['productinfo'].'</td></tr>';

          
         
          $regFee= ($_POST['amount']-round($_POST['amount']-$_POST['amount']/1.025)) ;
          
           
          $adminBody .= '<tr><td><b>Registration Fee Rs.</b></td><td> : </td><td>'.$regFee.'</td></tr>';
          $internateCharges= round($_POST['amount']-$_POST['amount']/1.025);
          $adminBody .= '<tr><td><b>Internet Handling Charges Rs.</b></td><td> : </td><td>'.$internateCharges.'</td></tr>';
            $adminBody .= '<tr><td><b>Amount Paid</b></td><td> : </td><td>'.$_POST['amount'].' including (+2.5% Tax)'.'</td></tr>';
            $adminBody .= '<tr><td><b>Transaction Status</b></td><td> : </td><td>'.$_POST['status'].'</br></td></tr>';
          
          $adminBody .= '<tr><td><b>Registration ID</b></td><td> : </td><td>'.$_COOKIE['indRgi1'].'</br></td></tr>';

            $adminBody .= '<tr><td colspna="3"><b><u>Registrar Details:</u></b></br></td></tr>';
            $adminBody .= '<tr><td><b>Username</b></td><td> : </td><td>'.$_POST['firstname'].'</td></tr>';
            $adminBody .= '<tr><td><b>Email ID</b></td><td> : </td><td>'.$_POST['email'].'</td></tr>';
            $adminBody .= '<tr><td><b>Contact Number</b></td><td> : </td><td>'.$_POST['phone'].'</td></tr>';
            $adminBody .= '</tbody></table>';
            $adminBody .= '<h4>Thanks</h4>';
          
            $mail->Body = $adminBody;
            //$mail->AltBody = 'This is the body in plain text for non-HTML mail clients';

            $mailSentFalg =0;
            if(!$mail->send()) {
                /*echo 'Message could not be sent.';
                echo 'Mailer Error: ' . $mail->ErrorInfo;*/
            } else {
                //echo 'Message has been sent';
                $mailSentFalg = 1;
            }
      }
    }elseif($_POST['status'] == "failure"){ //If payment was Failure
      payment_failure();
    }elseif($_POST['status'] == "pending"){ //If payment was Pending (RARE CASE)
      payment_failure();
    }
}
else //If Form POST data are valid send them to PAYU
if ($_POST['FirstName'] && $_POST['Email'] && $_POST['Phone'] && (int)$_POST['Phone'] && (int)$_POST['amount'] ){
  pay_page( array ('key' => 'ryBWbt', 'txnid' => uniqid( 'decathlon_' ), 'amount' => $_POST['amount'],
      'firstname' => $_POST['FirstName'], 'email' => $_POST['Email'], 'phone' => $_POST['Phone'], 'address1'=> $_POST['Address'],
      'productinfo' => 'ASTHA - Decathlon Walkathon 2016', 'surl' => 'payment_success', 'furl' => 'payment_failure'),
      'xy9IH2g8' );
}
else  //If Form POST data are not valid show error
if($_POST && !empty($_POST) && (!$_POST['FirstName'] || !$_POST['Email'] || !$_POST['Phone'] || !(int)$_POST['Phone'] || !(int)$_POST['amount'])){
//echo "<pre>";print_r($_POST);

  echo "<p class='error-info'>Please Provide all details with valid info.</p>";
}else{

   // echo '<script type="text/javascript">alert();SaveCustomer();</script>';
  payment_form();
}
?>


</html>