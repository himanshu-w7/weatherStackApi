const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const fs =require('fs');
const url=require('url');
const ejs = require ('ejs');
const historicalJs = require('./historical.js')

const app = express();
const http = require('http');
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static('public'));
app.get(url,(req,res)=>{
    res.sendFile(__dirname+"/index.html");
})
app.post('/',(req,res)=>{

   
const city=req.body.city;
const apiKey="2cd5795afc2c51fa06a8a7851fb58110";
const homeRoute = "http://api.weatherstack.com/current";
 console.log(city);
    const currentApi = homeRoute+"?access_key="+apiKey+"&query="+city;
     
    http.get(currentApi,function(response){
        console.log(response.statusCode);
    
       response.on("data",(data)=>{
       const weatherData=JSON.parse(data);

        res.send(weatherData);
       
        
       })
     })
    })
    
   
app.listen(3000,'127.0.0.1',()=>{
    console.log("Server started in port 3000");
})
