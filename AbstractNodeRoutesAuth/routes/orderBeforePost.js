var orderBeforeD={
    
    postOrderB : function(req,res,next)
    {
        var OrderBefore=
        {
            //paymentFirstname:req.body.paymentFirstname,
            //paymentLastname:req.body.paymentLastname,
            //paymentAddress:req.body.paymentAddress,
            //paymentCity:req.body.paymentCity,
            //paymentPostcode:req.body.paymentPostcode,
            paymentcode:req.body.paymentcode,
            vcomment:req.body.vcomment,
            vTotal:req.body.vTotal,
            servicecharge:req.body.servicecharge,
            taxlabel:req.body.taxlabel,
            taxvalue:req.body.taxvalue,
            vQuantity:req.body.vQuantity,
            vcommisssion:req.body.vcommisssion,
            deliveryCharge:req.body.deliveryCharge,
            paymentCharge:req.body.paymentCharge,
            paymentTransactionId:req.body.paymentTransactionId,
            vstatus:req.body.vstatus,
            payResponse:req.body.payResponse,
            customerId:req.body.customerId,
            cartId:req.body.cartId,
            eventName:req.body.eventName,
            vPrice:req.body.vPrice,
            vServicetax:req.body.vServicetax,
            attributeId:req.body.attributeId,
            eventId:req.body.eventId,
            addressId:req.body.addressId
        };
   
                                                      
    req.getConnection(function(err,conn){

        if (err) return next("Cannot Connect");
       
       var query =  conn.query('CALL addOrderBeforePayment(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,@orderId); SELECT @orderId as orderId',[
                                                                                                                OrderBefore.paymentcode,
                                                                                                                OrderBefore.vcomment,
                                                                                                                OrderBefore.vTotal,
                                                                                                                OrderBefore.servicecharge,
                                                                                                                OrderBefore.taxlabel,
                                                                                                                OrderBefore.taxvalue,
                                                                                                                OrderBefore.vQuantity,
                                                                                                                OrderBefore.vcommisssion,
                                                                                                                OrderBefore.deliveryCharge,
                                                                                                                OrderBefore.paymentCharge,
                                                                                                                OrderBefore.paymentTransactionId,
                                                                                                                OrderBefore.vstatus,
                                                                                                                OrderBefore.payResponse,
                                                                                                                OrderBefore.customerId,
                                                                                                                OrderBefore.cartId,
                                                                                                                OrderBefore.eventName,
                                                                                                                OrderBefore.vPrice,
                                                                                                                OrderBefore.vServicetax,
                                                                                                                OrderBefore.attributeId,
                                                                                                                OrderBefore.eventId,
       OrderBefore.addressId], function(err,OrderBeforeD){

                  
            if(err){
                console.log(err);
                return next("Mysql error, check your query");
            }
            console.log(OrderBeforeD);
           //  console.log(timeInMss);
            res.send(OrderBeforeD);
          

         });

    });
    }
}


module.exports = orderBeforeD;