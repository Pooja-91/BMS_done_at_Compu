var standD=
    {
        getStand : function(req,res,next)
        {
            var eventid=req.params.eventId;
            req.getConnection(function(err,conn){

                if (err) return next("Cannot Connect");

                var query = conn.query('CALL GetStandDetails(?)',[eventid],function(err,stand_D){

                
                    if(err)
                    {
                        console.log(err);
                        return next("Mysql error, check your query");
                    }
                    console.log(stand_D);
                    res.send(stand_D);
          

                    });

                });
        }
    }

module.exports = standD;