require('dotenv').config();

let express = require('express');
let app = express();

app.use("/public", express.static(__dirname + "/public"));
app.use((req, res, next) => {
    var info = req.method + " " + req.path + " - " + req.ip;
    console.log(info);
    next();
});

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
































 module.exports = app;
