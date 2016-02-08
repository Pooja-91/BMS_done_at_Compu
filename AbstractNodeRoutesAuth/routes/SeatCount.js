var seatQuantity =
    {
        getCount :function(req,res,next)
        {
            eventId=req.params.eventId;
  
            req.getConnection(function(err,conn){

                if (err) return next("Cannot Connect");
       
                var query = conn.query('CALL getCount(?)',[eventId],function(err,seatCountD){

                
                if(err){
                    console.log(err);
                    return next("Mysql error, check your query");
                    }
                console.log(seatCountD);
                //  console.log(timeInMss);
                res.send(seatCountD);
            
           

                    });

                });
        }
        
    }

module.exports = seatQuantity;