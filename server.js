// npm packages 
const express = require("express");
const path = require("path");
const fs = require("fs");

// asking app to listen on port 3000
// express installament 
const app = express();
const PORT = process.env.PORT || 3000;

// middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

// connecting our routes 
require('./routes/routes')(app);

// funciton is being used to listen and bind connections
app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
});  