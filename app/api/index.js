const express = require('express');
const fs = require('fs');
const dotenv = require('dotenv');

if(fs.readFileSync(process.cwd() + '/app/.env')){
    
    const envConfig = dotenv.parse(fs.readFileSync(process.cwd() + '/app/.env'))
    for (var k in envConfig) {
        process.env[k] = envConfig[k]
      }
   
} else{
    console.error('.env not exists!!!');
}


module.exports= {
    APIHOST :process.env.APIHOST,
    REDISHOST: process.env.REDISHOST,
    REDISPORT: process.env.REDISPORT,
    REDISDB: process.env.REDISDB
} 
