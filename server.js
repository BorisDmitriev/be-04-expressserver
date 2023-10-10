const express = require('express');
const app = express();


app.get('/hello', (request, response) => {
    response.send("Greeting...")
});

app.get('/time', (request, response) => {
    let date_ob = new Date();
    response.send(date_ob)
});

app.get('/random', (request, response) => {
    let num = Math.random()
    response.send(num.toString())
});

app.get('/isNumber/:param1', (request, response) => {
    const params = request.params;
    if(!isNaN(params.param1)){
        response.send("This is a number")
    }else {
        response.send("This is not a number")
    }
    
});

const server = app.listen(3001, () => {
   console.log("The server is listening... 🐒") 
});

module.exports = server;