const express = require('express');
const  cors = require("cors");

const app = express();

app.use(express.json())
app.use(cors());

app.listen(3000);

app.get('/', function(req, res){res.send('Hello World')});

/* 
Servidor
 */

const usuarios = [
    {id: 0, name: "Matheus Sales Oliveira", email: "m203577@dac.unicamp.br", 
    favoriteSerie: "The Boys", password: "abcldldl", GenreAction: 1,
    GenreAdventure: 0, GenreComedy: 0, GenreDrama: 1, GenreFantasy: 1,
    GenreHorror: 0, GenreMusical: 0 },

    {id: 1, name: "Gabriella Carlos", email: "g245677@dac.unicamp.br", 
    favoriteSerie: "Game of Thrones", password: "ssssss", GenreAction: 0,
    GenreAdventure: 1, GenreComedy: 1, GenreDrama: 0, GenreFantasy: 1,
    GenreHorror: 0, GenreMusical: 0 },
]
const endpoint = "/usuarios";

app.get(endpoint, function(req,res){
    res.send(usuarios)
});

app.get(`${endpoint}/:id`, function(req,res){
    const id = req.params.id;
    const usuario = usuarios[id];
    
    if(!usuario){
        res.send = ("{}");
    }else{
        res.send(usuario);
    }

})

app.post(endpoint, (req,res) =>{
    const usuario = {
        id : usuario.lenght,
        name : req.body["name"],
        email: req.body["email"],
        favoriteSerie: req.body["favoriteSerie"],
        password: req.body["password"],
        GenreAction: req.body["GenreAction"],
        GenreAdventure: req.body["GenreAdventure"],
        GenreComedy: req.body["GenreComedy"],
        GenreDrama: req.body["GenreDrama"],
        GenreFantasy: req.body["GenreFantasy"],
        GenreHorror: req.body["GenreHorror"],
        GenreMusical: req.body["GenreMusical"],
    };
    usuarios.push(usuario);
    res.send("1");
})

