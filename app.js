//saves variable to access methods and properties of the express module
const express = require("express");

const app = express();

//get the sites route route
app.get("/", (req, res) =>
{
    res.send("<h1>This is working<h1>");
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