/* Empty JS object to act as endpoint for all routes */
let projectData = {};

// TODO-Express to run server and routes
const express = require('express');

// TODO-Start up an instance of app

const app = express();

/* Dependencies */
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// TODO-Cors for cross origin allowance
const cors = require('cors');


/* Initializing the main project folder */
app.use(express.static('website'));

const port = 8103 ;

const server = app.listen(port, listening);

/*app.get('/all', (req, res)=>{
    //console.log("Hi");
    res.send(projectData);
});*/

app.post('/add', callBack);

function callBack(req,res){
    res.send('POST received');
};

const data = [];

app.post('/temperature', addtemperature);

function addtemperature(req,res){
    newEntry={
        temperature: req.body.temperate,
        feelings: req.body.feeling,
        date: req.body.date,
    }
    console.log(req.body);
    console.log(newEntry);
    data.push(newEntry);
    res.send(data);
    console.log(projectData);
};

app.get('/all', (req, res)=>{
    console.log(" data is ", data);
    res.send(data);
});

function listening(){
    console.log("server running");
    console.log(`running on localhost ${port}`);
}

