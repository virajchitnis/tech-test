const express = require('express');
const port = process.env.PORT || 3000;

const app = express();

app.get('/', function (req, res){
    res.send({'works': 'works'});
});

app.listen(port);
console.log("Server started on port " + port);
