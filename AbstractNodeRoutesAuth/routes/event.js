var event=
    {
        getEvent : function(req,res,next)
        {
            req.getConnection(function(err,conn){

            if (err) return next("Cannot Connect");

            var query = conn.query('CALL GetEventDetails()',function(err,event_D){

                
            if(err){
                console.log(err);
                return next("Mysql error, check your query");
            }
            console.log(event_D);
            res.send(event_D);
           
                });

            });
            
            
        }
    }

module.exports = event;