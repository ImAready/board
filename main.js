const express = require('express');
const app = express();


var board = require('./routes/contr')(app)
app.use('/contr', board);


app.listen(3003, function(){
    console.log('connected 3003 port...');
});
