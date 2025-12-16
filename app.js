import express from "express";

const app = express();
const port = 3001;

const sweets = [
    {
        id: 1,
        nome: "ciambellone",
        descrizione:" pan di spagna e zuchero",
        
    },
    {
        id: 2,
        nome: "Cracker Barbabietola",
        descrizione:" cracker fatto con la barbabietola",
        
    },
    {
        id: 3,
        nome: "Pane fritto dolce",
        descrizione:" pane fritto in olio e ricoperto di zucchero  ",
        
    },
    {
        id: 4,
        nome: "Pasta Barbabietola",
        descrizione:" pasta fatta con la barbabietola",
        
    },
    {
        id: 5,
        nome: "Torta Paesana",
        descrizione:" torta fatta con mandorle e noci",
        
    },
];


app.get("/", (req, res) => {
    res.send("Server del mio blog")
})

app.get("/bacheca", (req, res) => {
    const numElementi = {
       numSweets: sweets.length,
       sweets: sweets,
    };
    res.json(numElementi);
    console.log(numElementi)
});

app.use(express.static("public"));

app.listen(port, function () {
    console.log("funziona")
})