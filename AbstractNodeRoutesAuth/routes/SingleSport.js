var SingleSportD={
    
        getOneSport :function(req,res,next)
        {
                 var sportId=req.params.sportId;
  
            req.getConnection(function(err,conn){

                if (err) return next("Cannot Connect");
       
                var query = conn.query('CALL GetSpecificSport(?)',[sportId],function(err,sportSingle_D){

                
                    if(err){
                            console.log(err);
                            return next("Mysql error, check your query");
                            }
                    console.log(sportSingle_D);
                    //  console.log(timeInMss);
                    res.send(sportSingle_D);
            
           

                    });

                });
        }
    
    
    
    
    
}

module.exports = SingleSportD;