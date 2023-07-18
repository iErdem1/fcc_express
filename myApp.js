require('dotenv').config(); 

const bodyParser = require('body-parser');
let express = require('express');
let app = express();

app.use("/public", express.static(__dirname + "/public"));
app.use((req, res, next) => {
    var info = req.method + " " + req.path + " - " + req.ip;
    console.log(info);
    next();
});
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.get("/", (req, res) => {
    console.log("/ request");
    absolute_path = __dirname + '/views/index.html'
    res.sendFile(absolute_path);
});

app.get("/json", (req, res) => {
    console.log("/json req");
    ms = process.env.MESSAGE_STYLE
    
    if(ms === "uppercase") {
        res.json({
            "message": "Hello json".toUpperCase()
        });
    };
    res.json({
        "message": "Hello json"
    });
});

app.get("/now", function(req, res, next) {
    req.time = new Date().toString();
    next();
}, function(req, res) {
    res.json({
        time: req.time
    });
});

app.get("/:word/echo", (req,res) => {
    const { word } = req.params;
    res.json({
        echo: word,
    }); 
});

app.get("/name", (req, res) => {
    var {first: firstName, last: lastName} = req.query;
    res.json({
        name: `${firstName} ${lastName}`
    });
});































 module.exports = app;
