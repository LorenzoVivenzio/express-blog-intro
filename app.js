import express from "express";

const app = express();
const port = 3001;


app.get("/", (req, res) => {
    res.send("la mia bacheca")
})

app.use(express.static("public"));

app.listen(port, function(){
    console.log("funziona")
})