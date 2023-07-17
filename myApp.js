let express = require('express');
let app = express();

app.get("/", (req, res) => {
    absolute_path = __dirname + '/views/index.html'
    res.sendFile(absolute_path);
});



































 module.exports = app;
