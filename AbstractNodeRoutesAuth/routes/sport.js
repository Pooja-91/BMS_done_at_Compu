
/*------------------------------------CRUD OPERATION ON Sport TABLE---------------------------------------------------------------------------*/

var sport=
    {
        getSprot : function(req,res,next)
        {
            req.getConnection(function(err,conn){

                if (err) return next("Cannot Connect");

                var query = conn.query('CALL GetSportDetails()',function(err,sport_D) {

                
            if(err)
            {
                console.log(err);
                return next("Mysql error, check your query");
            }
                    
                    var  sportData=JSON.stringify(sport_D);
          
                    var spr=JSON.parse(sportData);
                    console.log(spr);
                    
                    
                    
                     res.send(sport_D);
    
                    //res.json(spr);
         
                });

            });
        }
    }

//module.exports.router = router;
module.exports = sport;