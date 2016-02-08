var orderAfterD={
    postOrderA : function(req,res,next)
    {
             var OrderAfter=
        {
            cartId:req.body.cartId,
            orderId:req.body.orderId,
            eventId:req.body.eventId,
            stockstatusId:req.body.stockstatusId
          
        };
   
  
    
        req.getConnection(function(err,conn){

        if (err) return next("Cannot Connect");
       
                var query =  conn.query('CALL addOrderAfterPayment(?,?,?,?)',                       [OrderAfter.cartId,OrderAfter.orderId,OrderAfter.eventId,OrderAfter.stockstatusId], function(err,OrderAfterD){

                  
            if(err){
                console.log(err);
                return next("Mysql error, check your query");
            }
            console.log(OrderAfterD);
           //  console.log(timeInMss);
            res.send(OrderAfterD);
          

                });

            });

    }
}

module.exports = orderAfterD;