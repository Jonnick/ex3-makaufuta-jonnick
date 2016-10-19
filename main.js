//varibel maken
var express = require('express');
var bodyparser = require('body-parser');
var app = express

//app aanmaken voor url
app.use(bodyparser.urlencoded({
    extended: true
}));

//json pakket maan maken in naam van bodyparser
app.use(bodyparser.json());
var uitkomst = [];

//app een function geven
app.get("/", function(response){
    response.sendfile(__dirname + '/CalculatorHtml.html');
});