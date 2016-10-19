//varibel maken
var express = require('express');
var bodyparser = require('body-parser');
var app = express

//app aanmaken voor url
app.use(bodyparser.urlencoded({
    extended: true
}));