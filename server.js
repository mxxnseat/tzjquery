const express = require("express");
const path = require("path");

const port = process.env.port || 3000;
const app = express();

app.use(express.static(path.join(__dirname,"public")));


app.get("/", (req, res)=>{
    res.send(req.body);
})

app.listen(port, ()=>{
    console.log("listen");
})