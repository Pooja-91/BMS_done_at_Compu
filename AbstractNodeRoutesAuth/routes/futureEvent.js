var futureeventD=
    {
        getfutureEvent : function(req,res,next)
        {
            req.getConnection(function(err,conn){

            if (err) return next("Cannot Connect");
       
            var query = conn.query('CALL GetFutureEventDetails()',function(err,Fevent_D){

                
            if(err){
                console.log(err);
                return next("Mysql error, check your query");
            }
            console.log(Fevent_D);
          
            res.send(Fevent_D);
           
                });

            });
            
        }
    }


module.exports =futureeventD;