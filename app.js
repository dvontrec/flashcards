//saves variable to access methods and properties of the express module
const express = require("express");

const app = express();

//sets the app to set the template engine to pug.  uses the"Views dir to find templates"
app.set('view engine', 'pug');

//get the sites route route
app.get("/", (req, res) =>
{
    res.render("index");
})

app.get("/hello", (req, res) =>
{
    res.send("hello, this works too!");
})
//sets up the server to listen on the port
app.listen(process.env.PORT, (req, res) =>
{
   //when the server starts listening console log helpful to see if we have set it up correctly
   console.log(`App running on port ${process.env.PORT} `)
})