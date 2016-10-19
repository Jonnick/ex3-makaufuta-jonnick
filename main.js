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

//berekening dat ze allemaal moet doen
app.get("/uitkomst", function(response)

//om json terug te sturen
  {response.send(uitkomst);
});

//reponse te krijgen 
app.post("/", function(request, response){
    var berekening = request.body.display;
    var uitrekenen = eval(request.body.display);
    uitkomst.push({"berekening": berekening, "uitkomst": uitrekenen});
    console.log(uitrekenen);
    response.status(203).send(uitkomst);
});