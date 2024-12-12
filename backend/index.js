// index.js is the main entry point for express server 

const express = require('express'); // import express 
const app = express(); // instantiate express to variable
app.listen(3000,() => console.log("Server listening at port 3000")); // specify port number where server is going to listen 

app.get("/", (req, res) => { 
  res.send("Hello Wendy"); 
}); 

app.get("/about", (req, res) => { 
  res.send("About route"); 
})
