const express = require('express');
const  cors = require("cors");

const app = express();

app.use(express.json())
app.use(cors());

//app.listen(3000);
const server = require('http').createServer(app);
const io = require('socket.io')(server);

const INVALIDATE = "invalidate";
function notify(){
    io.sockets.emit(INVALIDATE, 1);
}
server.listen(3000);
app.get('/', function(req, res){res.send('Hello World')});

/* 
Servidor
 */

const usuarios = [
    {id: 0, name: "Matheus Sales Oliveira", email: "m203577@dac.unicamp.br", 
    favoriteSerie: "The Boys", password: "abcldldl", action: 1,
    adventure: 0, comedy: 0, drama: 1, fantasy: 1,
    horror: 0, musical: 0 },

    {id: 1, name: "Gabriella Carlos", email: "g245677@dac.unicamp.br", 
    favoriteSerie: "Game of Thrones", password: "ssssss", action: 0,
    adventure: 1, comedy: 1, drama: 0, fantasy: 1,
    horror: 0, musical: 0 },
]
const endpoint = "/usuarios";

app.get(endpoint, function(req,res){
    res.send(usuarios.filter(Boolean));
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

app.post(endpoint, (req, res) => {
    const usuario = {
        id : usuarios.length,
        name : req.body["name"],
        email: req.body["email"],
        favoriteSerie: req.body["favoriteSerie"],
        password: req.body["password"],
        action: req.body["action"],
        adventure: req.body["adventure"],
        comedy: req.body["comedy"],
        drama: req.body["drama"],
        fantasy: req.body["fantasy"],
        horror: req.body["horror"],
        musical: req.body["musical"],
    };
    usuarios.push(usuario);
    res.send("1");
    notify();
});

app.put(`${endpoint}/:id`, (req, res) => {
   const id = req.params.id;
   const usuario = {
       id: id,
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
       GenreMusical: req.body["GenreMusical"]
   };

   usuarios[id] = usuario;
   res.send("1");
   notify();
});

app.delete(`${endpoint}/:id`, (req, res) => {
    const id = req.params.id;
    delete usuarios[id];
 
    res.send("1");
    notify();
 });