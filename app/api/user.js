
var API = require('./index');
var axios = require('axios');


exports.Login= async  (user)=>{
    //console.log("----------------aaa: ",user)
    try{
       const res = await axios.post(API.APIHOST+'user/login',user);
       return await res;
    }
    catch(err){
        //console.log(err);
        return  {err:err};
    }
    
       
};
