import express from "express";

const app = express();
const port = 3001;

app.use(express.static("public"));
const sweets = [
    {
        id: 1,
        nome: "Ciambellone",
        descrizione:" pan di spagna e zuchero",
        img: "/img/ciambellone.jpeg",
        
    },
    {
        id: 2,
        nome: "Cracker Barbabietola",
        descrizione:" cracker fatto con la barbabietola",
        img: "/img/cracker_barbabietola.jpeg",
        
    },
    {
        id: 3,
        nome: "Pane fritto dolce",
        descrizione:" pane fritto in olio e ricoperto di zucchero  ",
        img: "/img/pane_fritto_dolce.jpeg",
        
    },
    {
        id: 4,
        nome: "Pasta Barbabietola",
        descrizione:" pasta fatta con la barbabietola",
        img: "/img/pasta_barbabietola.jpeg",
        
    },
    {
        id: 5,
        nome: "Torta Paesana",
        descrizione:" torta fatta con mandorle e noci",
        img: "/img/torta_paesana.jpeg",
        
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



app.listen(port, function () {
    console.log("funziona")
})