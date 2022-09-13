//import dependencies 
const express = require('express');
const cors = require('cors');

//import json files 
const projects = require('./projects.json')
const about = require('./about.json')

//create app object
const app = express();

//middleware 
app.use(cors());

//home route for testing app
app.get('/', (req,res) => {
    res.send('Hello world');
})

//route for retrieving projects
app.get('/projects', (req,res) => {
    res.json(projects)
})

//route for retrieving about 
app.get('/about', (req,res) => {
    res.json(about)
})

//declare PORT
const PORT = process.env.PORT || 5000;

//Listen for PORT 
app.listen(PORT, () => console.log(`Listening on port ${PORT}`))