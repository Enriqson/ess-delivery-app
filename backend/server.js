const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser")
const fs = require("fs")

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', (req, res) =>{
  res.send(req.body);
});

app.listen(1337, _ => {
  console.log("Server running on port 1337");
});

