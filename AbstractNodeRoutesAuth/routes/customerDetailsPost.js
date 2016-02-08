var customerDetailsD={
    
    postCustomerD : function(req,res,next)
    {
        var customer=
        {
            vFirstName:req.body.FirstName,
            vEmail:req.body.Email,
            vTelephone:req.body.Phone,
            vAddress:req.body.Address,
            vPostcode:req.body.Postcode,
          
        }
   // [customer.vFirstName,customer.vEmail,customer.vTelephone,customer.vAddress,customer.vPostcode]
    req.getConnection(function(err,conn){

        if (err) return next("Cannot Connect");
       
        var query = conn.query('CALL addCustomerDetail(?,?,?,?,?,@customerId,@addressId); SELECT @customerId AS customerId,@addressId AS addressId',[customer.vFirstName,customer.vEmail,customer.vTelephone,customer.vAddress,customer.vPostcode],function(err,customerD){

                
            if(err){
                console.log(err);
                return next("Mysql error, check your query");
            }
            console.log(customerD);
         
          //  console.log(query);
           //  console.log(timeInMss);
            res.send(customerD);
            
          

         });

    });

    }
}

module.exports = customerDetailsD;