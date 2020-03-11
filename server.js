const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const fs = require('fs');
const file = fs.readFileSync("public/text.txt").toString('utf-8');


// Sets up the Express App
// =============================================================
const app = express();
const PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


const htmlRoutes = require("./routing/htmlRoutes");
//const apiRoutes = require("./routing/apiRoutes");

app.use('/', htmlRoutes);
//app.use('/api', apiRoutes);

// to confirm server.
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });


  /////////////////

let arrayOfText = file.split(',');
console.log(arrayOfText.length);
let tfa = [];

arrayOfText.map(item =>  {
    if (item.includes('tfa')) {
        tfa.push(item);
    };
    console.log(tfa);
});

