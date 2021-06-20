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
//server.listen(3000);
server.listen(process.env.PORT || 3000);
app.get('/', function(req, res){res.send('Hello World')});

/* 
Servidor
 */

const usuarios = [
    {id: 0, name: "Matheus Sales Oliveira", username:"laranja", email: "m203577@dac.unicamp.br", 
    favoriteSerie: "The Boys", password: "abcldldl", action: 1,
    adventure: 0, comedy: 0, drama: 1, fantasy: 1,
    horror: 0, musical: 0 },

    {id: 1, name: "Gabriella Carlos", username:"aqui", email: "g245677@dac.unicamp.br", 
    favoriteSerie: "Game of Thrones", password: "ssssss", action: 0,
    adventure: 1, comedy: 1, drama: 0, fantasy: 1,
    horror: 0, musical: 0 },
]
const endpoint = "/usuarios";

const series = [
{
    /*
    idSerie: 0,
    seriePoster: "assets/images/gotfinal.jpg",
    serieName: "Game of Thrones",
    serieSinopse: "Situada nos continentes fictícios de Westeros e Essos, a série centra-se no Trono de Ferro dos Sete Reinos e segue um enredo de alianças e conflitos entre as famílias nobres dinásticas, seja competindo para reivindicar o trono ou lutando por sua independência.",
    serieGenre: "Fantasia",
    numberSeasons: 8,
    numberEpisodes: 73,},

   { idSerie: 1,
    seriePoster:'assets/images/bb.jpg',
    serieName: "Breaking Bad",
    serieSinopse: "Retrata a vida do químico Walter White, um homem brilhante frustrado em dar aulas para adolescentes do ensino médio enquanto lida com um filho sofrendo de paralisia cerebral, uma esposa grávida e dívidas intermináveis. White, então, é diagnosticado com um câncer no pulmão - o que o leva a sofrer um colapso emocional e abraçar uma vida de crimes para pagar suas dívidas hospitalares e dar uma boa vida aos seus filhos.",
    serieGenre: "Drama",
    numberSeasons: 5,
    numberEpisodes: 62,},

    {idSerie: 2,
        seriePoster: 'assets/images/wv.jpg',
        serieName: "WandaVision",
        serieSinopse: "Situada três semanas após os eventos de Avengers: Endgame (2019) Wanda Maximoff e Visão estão vivendo uma vida suburbana idílica na cidade de Westview, no estado de New Jersey, tentando esconder suas verdadeiras identidades. À medida que começam a entrar nas novas décadas, o casal suspeita que as coisas não são o que parecem",
        serieGenre: "Fantasia",
        numberSeasons: 1,
        numberEpisodes: 9,},
    

   { idSerie: 3,
    seriePoster:  'assets/images/odeia.png',
    serieName: "Todo Mundo Odeia o Chris",
    serieSinopse: "Conta a história da família Rock entre os anos de 1982 até 1987, com o foco no menino Chris",
    serieGenre: "Comédia",
    numberSeasons: 4,
    numberEpisodes: 88,},

  {  idSerie: 4,
    seriePoster: 'assets/images/xena.jpg',
    serieName: "Xena",
    serieSinopse: "Xena, uma guerreira que já foi conhecida como 'Destruidora das Nações', começa sua épica aventura para provar, não só para si mesma, mas para todos, que mudou para o bem. ... É quando ela conhece Gabrielle, uma trovadora de uma pequena cidade, cheia de vida e louca por aventuras.",
    serieGenre: "Aventura",
    numberSeasons: 6,
    numberEpisodes: 134,},

    {idSerie: 5,
        seriePoster: 'assets/images/ahs.jpg',
    serieName: "American Horror Story",
    serieSinopse:     "Série de terror cada temporada narra uma história independente (com próprio começo, meio e fim), seguindo um conjunto de personagens e ambientações distintas.",
    serieGenre: "Terror",
    numberSeasons: 9,
    numberEpisodes: 103,},

    {idSerie: 6,
        seriePoster: 'assets/images/glee.jpg',
    serieName: "Glee",
    serieSinopse: "A história de Glee se passa na fictícia William McKinley High School, em Lima, Ohio, e gira em torno de um grupo de estudantes entusiasmados e ambiciosos na sua luta para viver seu cotidiano nos cruéis corredores do colégio.",
    serieGenre: "Musical",
    numberSeasons: 6,
    numberEpisodes: 121,},

  {  idSerie: 7,
    seriePoster: 'assets/images/t.jpg',
    serieName: "The Boys",
    serieSinopse:     "The Boys se passa em um universo onde indivíduos superpoderosos são reconhecidos como heróis pelo público em geral e pertencem à poderosa corporação Vought International, que os comercializa e monetiza. Fora de suas personas heroicas, a maioria é arrogante e corrupta.",
    serieGenre: "Ação",
    numberSeasons: 2,
    numberEpisodes: 16,}, */

   
    /*idSerie:
    SeriePoster:
    serieName:
    serieSinopse:
    serieGenre:
    numberSeasons:
    numberEpisodes:

    idSerie:
    SeriePoster:
    serieName:
    serieSinopse:
    serieGenre:
    numberSeasons:
    numberEpisodes: */
  //}

}
]
const endpointSerie = "/series";

const temporadas = [
  {idSerie: 0, temporada: 1, episodios: 10,},

    {idSerie: 0, temporada: 2, episodios: 10,},

    {idSerie: 0, temporada: 3, episodios: 10,},

    {idSerie: 0, temporada: 4, episodios: 10,},

    {idSerie: 0, temporada: 5, episodios: 10,},

    {idSerie: 0,  temporada: 6, episodios: 10,},

    {idSerie: 0, temporada: 7, episodios: 7,},

    {idSerie: 0, temporada: 8, episodios: 6,}, 

   // Breaking Bad
    {idSerie: 1, temporada: 1, episodios: 7,},

    {idSerie: 1, temporada: 2, episodios: 13,},

    {idSerie: 1, temporada: 3, episodios: 13,},

    {idSerie: 1, temporada: 4, episodios: 16,},

    {idSerie: 1, temporada: 5, episodios: 16,},


     
]
const endpointTemporadas = "/temporadas";


const reviews = [ /*
    {username:"3", idSerie: 0, temporada: 1, episodios: 10, rate: 55, comment:"mais ou menos",},
    {username:"2", idSerie: 0, temporada: 1, episodios: 10, rate: 60, comment:".",},
    {username:"1", idSerie: 0, temporada: 2, episodios: 3, rate: 80, comment: "ok",},

    {username:"3", idSerie: 1, temporada: 1, episodios: 10, rate: 32, comment:"mais ou menos",},
    {username:"2", idSerie: 1, temporada: 1, episodios: 10, rate: 10, comment:".",},
    {username:"1", idSerie: 1, temporada: 2, episodios: 3, rate: 11, comment: "ok",},

    {username:"1", idSerie: 2, temporada: 2, episodios: 3, rate: 44, comment: "ok",},
    {username:"f", idSerie: 3, temporada: 2, episodios: 3, rate: 12, comment: "ok",},
    {username:"a", idSerie: 4, temporada: 2, episodios: 3, rate: 80, comment: "ok",},
    {username:"2", idSerie: 2, temporada: 2, episodios: 3, rate: 20, comment: "ok",},
    {username:"3", idSerie: 3, temporada: 2, episodios: 3, rate: 10, comment: "ok",},
    {username:"4", idSerie: 4, temporada: 2, episodios: 3, rate: 45, comment: "ok",},

    {username:"ola", idSerie: 5, temporada: 2, episodios: 3, rate: 12, comment: "ok",},
    {username:"aqui", idSerie: 6, temporada: 2, episodios: 3, rate: 48, comment: "ok",},
    {username:"3", idSerie: 7, temporada: 2, episodios: 3, rate: 90, comment: "ok",},
    {username:"gg", idSerie: 5, temporada: 2, episodios: 3, rate: 24, comment: "ok",},
    {username:"rr", idSerie: 6, temporada: 2, episodios: 3, rate: 55, comment: "ok",},
    {username:"rre", idSerie: 7, temporada: 2, episodios: 3, rate: 100, comment: "ok",},

    {username:"marcos@gmail.com", idSerie: 0, temporada: 2, episodios: 3, rate: 70, comment: "teste",}*/



]
const endpointReviews = "/reviews";


app.get(endpoint, function(req,res){
    res.send(usuarios.filter(Boolean));
});

app.get(endpointSerie, function(req,res){
    res.send(series.filter(Boolean));
});

app.get(endpointTemporadas, function(req,res){
    res.send(temporadas.filter(Boolean));
});

app.get(endpointReviews, function(req,res){
    res.send(reviews.filter(Boolean));
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

app.get(`${endpointSerie}/:id`, function(req,res){
    const id = req.params.id;
    const serie = series[id];
    
    if(!serie){
        res.send = ("{}");
    }else{
        res.send(serie);
    }

})

app.get(`${endpointTemporadas}/:id`, function(req,res){
    const id = req.params.id;
    const temporada = temporadas[id];
    
    if(!temporada){
        res.send = ("{}");
    }else{
        res.send(temporada);
    }
})

app.get(`${endpointReviews}/:id`, function(req,res){
    const id = req.params.id;
    const review = reviews[id];
    
    if(!review){
        res.send = ("{}");
    }else{
        res.send(review);
    }

})

app.post(endpointReviews, (req, res) => {
    const review = {
        username : req.body["username"],
        idSerie : req.body["idSerie"],
        temporada: req.body["temporada"],
        episodios: req.body["episodios"],
        rate: req.body["rate"],
        comment: req.body["comment"],
    };
    reviews.push(review);
    res.send("1");
    notify();
});

app.post(endpoint, (req, res) => {
    const usuario = {
        id : usuarios.length,
        username : req.body["username"],
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
       username : req.body["username"],
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
