let express = require('express');
let app = express();

app.get("/", (req, res) => {
    absolute_path = __dirname + '/views/index.html'
    res.sendFile(absolute_path);
});

app.get("/json", (req, res) => {
    res.json({
        "message": "Hello json"
    });
});

app.use("/public", express.static(__dirname + "/public"));




































 module.exports = app;
