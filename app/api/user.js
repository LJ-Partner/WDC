
var API = require('./index');
var axios = require('axios');


exports.Login= async (user) => {
    
    try {
        const res = await axios.post(API.APIHOST+'user/login',user);
        return await res;
       
    }
    catch (err) {
        
        return  {err:err};
    }   
};
exports.UserInfo= async (token) => {
    
    try {
        const res = await axios.get(API.APIHOST+'user/userInfo',
        { 
            headers: {
                    "Authorization" : 'bearer ' + token,
                    "client":"pc"
                } 
        }
        );
        return await res;
       
    }
    catch (err) {
        
        return  {err:err};
    }   
};
