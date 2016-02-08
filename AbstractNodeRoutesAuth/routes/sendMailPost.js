    
    
    /*----------------------------------------------------Node Mailer----------------------------------------------------------------------------*/

var nodemailer = require("nodemailer");
// create reusable transport method (opens pool of SMTP connections)

var smtpTransport = nodemailer.createTransport("SMTP",{
    service: "Gmail",
    auth: {
        user: "pujacompu@gmail.com",
        pass: "escort@91"
    }
});




/*--------------------------------------------------------GEt Email Template Data------------------------------------------------------------*/
var EmailTemplate = [];
var mailSubject;
var tempBody;
var mailOptions={};

 

var sendMailD ={

   
    postsendMail : function(req,res,next)
    {
        var data=
            {
            To:req.body.To,
            customerName:req.body.customerName,
            orderId:req.body.orderId,
            orderDate:req.body.orderDate,
            orderStatus:req.body.orderStatus
        
            }
       
        req.getConnection(function(err,conn){

        if (err) return next("Cannot Connect");
        

            var query=conn.query('CALL getEmailTemplate()',function(err, result) {
    
            if (!err)
            {
                // EmailTemplate={result};
        
                EmailTemplate=JSON.stringify(result[0]);
          
                var jsonObjEmail=JSON.parse(EmailTemplate);
          
                console.log('The solution is: ',jsonObjEmail); 
                console.log('----------------------------- Template_name :',jsonObjEmail[0].template_name);
          
                //mailOptions["subject"]=jsonObjEmail[0].mail_subject;
                //mailOptions["text"]=jsonObjEmail[0].template_body;
          
                mailSubject=jsonObjEmail[0].mail_subject;
                //tempBody=jsonObjEmail[0].template_body;
          
                passBodyData(mailSubject,data.To,data.customerName,data.orderId,data.orderDate,data.orderStatus);
          
          
                // console.log('----------------------------- Template_sub :',mailSubject);
                console.log(data);
                res.send("Your Mail is sent successfully");
          
            }
            else
            {
                console.log('Error while performing Query.');
            }
    
        });
            
            
    });
 
    
    }

    
}

        // send mail with defined transport object
function passBodyData(sub,to,custname,orderId,orderDate,orderStatus)
{
    // setup e-mail data with unicode symbols
   
    
var mailOptions = 
    {
    to: to, // list of receivers
    subject:sub, // Subject line
    //text: name orderId orderDate , // plaintext body
    html:"<div style='border: 4px solid #B8646E;width:600px;padding:10px'>This is a Test Mail for Your Order(From BMS TEAM compu..)<div style='margin-top:5px;'>Dear "+custname+",</div><div style='margin-top:5px;'>Thank you for booking tickets with us. Please check the order details.&nbsp;</div><table><thead><tr><th colspan='3' style='text-align:left'><strong>Order Details</strong></th></tr></thead><tbody><tr><td>Order ID</td><td>&nbsp;:&nbsp;</td><td>"+orderId+"</td></tr><tr><td>Order Date</td><td>&nbsp;:&nbsp;</td><td>"+orderDate+"</td></tr><tr><td>Order Status</td><td>&nbsp;:&nbsp;</td><td>"+orderStatus+"</td></tr></tbody></table>&nbsp;</div>"
    }

smtpTransport.sendMail(mailOptions, function(error, response){
    if(error){
        console.log(error);
    }else{
        console.log("Message sent: " + response.message);
    }

    // if you don't want to use this transport object anymore, uncomment following line
    //smtpTransport.close(); // shut down the connection pool, no more messages
});


    
}

/*--------------------------------------------------------End Email Template Data------------------------------------------------------------*/

  



module.exports = sendMailD;