//saves variable to access methods and properties of the express module
const express = require("express");
//saves a variable to access the request body using body-parser
const bodyParser = require("body-parser");

const app = express();

//uses body parsers url encoder to encode data from forms
app.use(bodyParser.urlencoded({extended:false}));

//sets the app to set the template engine to pug.  uses the"Views dir to find templates"
app.set('view engine', 'pug');

//get the sites route route
app.get("/", (req, res) =>
{
    res.render("index");
})

//get the flashcard route
app.get("/cards", (req, res) =>
{
    //renders the card template and passes in an object with key-value pairs
    res.render("card", {prompt: "Whos that pokemon"});
})

app.get("/hello", (req, res) =>
{
    res.render('hello');
})
//sets up the server to listen on the port
app.listen(process.env.PORT, (req, res) =>
{
   //when the server starts listening console log helpful to see if we have set it up correctly
   console.log(`App running on port ${process.env.PORT} `)
})