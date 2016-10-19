aanmaken van file node js in netbeans
aanmaken van file html in netbeans

*OPEN NU NODE JS*
TYP NA:

1. variabel aanmaken voor express.
2. require doen voor express om de webserver in node js eenvoudige te maken.

var express = require('express')

3. variabel aanmaken voor bodyparser.
4. require doen voor bodyparser, 
   extensie op express voor eenvoudig body uit te lezen

var bodyparser = require('body-parser');

5. variabel app doen en linken met express en app aanmaken voor url

var app = express();
app.use(bodyparser.urlencoded({
    extended: true
}));

6. automatische json-body parsers van request MET media-type application/json gespecifieerd in de request maken.

app.use(bodyparser.json());
var uitkomst = [];

7. app een function geven

app.get("/", function(response){
    response.sendfile(__dirname + '/CalculatorHtml.html');
});

8.  berekening dat ze allemaal moet doen

app.get("/uitkomst", function(response)
});

9. om json terug te sturen

  {response.send(uitkomst);
});

10. reponse te krijgen
 
app.post("/", function(request, response){
    var berekening = request.body.display;
    var uitrekenen = eval(request.body.display);
    uitkomst.push({"berekening": berekening, "uitkomst": uitrekenen});
    console.log(uitrekenen);
    response.status(203).send(uitkomst);
});

11. host code 4567

app.listen(4567);

12. om te laten werken

console.log("Start server...");

13. *OPEN NU FILE HTML*

14. creëer een titel

 <title>Rekenmachine</title>

15. creëer form en geef benaming

    <form name="rekenmachine" action="/" method="post">

16. creëer een input en schrijf code (waarin je button en tekst)

17. schrijf een tekst op.

   "Made By Makau-Futa J."

18. laten het nu runnen

THANK YOU AND ENJOY! :D



---------------------------------------------------------------------------------


Totale code:
//variabel aanmaken
var express = require('express'); // eenvoudige webserver in node js
var bodyparser = require('body-parser'); // extensie op express voor eenvoudig body uit te lezen
var app = express();

// automatische json-body parsers van request MET media-type application/json gespecifieerd in de request.
app.use(bodyparser.json());

// om op te tellen
app.get('/plus/:number1/:number2', function(req, res) {
  var result = parseInt(req.params.number1) + parseInt( req.params.number2);
  res.send("De som is: " + result);
});

// om het verschil te doen
app.get('/minus/:number1/:number2', function(req, res) {
  var result = parseInt(req.params.number1) - parseInt( req.params.number2);
  res.send("De aftrekking is: " + result);
});

// om te kunnen vermenigvuldigen
app.get('/vermenigvuldig/:number1/:number2', function(req, res) {
  var result = parseInt(req.params.number1) * parseInt( req.params.number2);
  res.send("De vermenigvuldiging is: " + result);
});

// om te kunnen delen
app.get('/deler/:number1/:number2', function(req, res) {
  var result = parseInt(req.params.number1) / parseInt( req.params.number2);
  res.send("De deling is: " + result);
});

// de server starten op poort 4567 (bereikbaar op http://localhost:4567 )
app.listen(4567);

// lijntje voor te zien dat alles is opgestart.
console.log("Server started");
