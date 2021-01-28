//Reequired modules
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");

//Create express app and set bodyParser
const app = express();
app.use(bodyParser.urlencoded({
  extended: true
}));

//Set JSON body parser
app.use(bodyParser.json());

//Allow client to connect to API
app.use(cors());

//Set static directory
app.use(express.static(__dirname + '/public'));

//Connect to MongoDB database
mongoose.connect("mongodb://localhost:27017/marioPartyDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

//Verify connection established
mongoose.connection.once("open", () => {
  console.log("MongoDB database connection established successfully");
});

//Create player schema
const playersSchema = new mongoose.Schema({
  player: String,
  character: String,
  stars: Number,
  coins: Number,
  placed: Number,
});

//Create game scema
const gameSchema = new mongoose.Schema({
  board: String,
  date: String,
  players: [playersSchema],
  gameNumber: Number
});

//Create game model
const Game = mongoose.model("Game", gameSchema);

//Create player model
const Player = mongoose.model("Player", playersSchema);

//Get Games from the database
function getGames(gameNumber, res) {
  let games = {};
  Game.find({gameNumber: gameNumber}, (err, dbGames) => {
    if (err) console.error(err);
    games = dbGames;
    res.send(games);
  });
}

app.post("/api/newgame", (req, res) => {
  console.log("This is the response");
  console.log(req.body);
  res.send("API Post successful");

});

//Test GET
app.get("/api", (req, res) => {
  res.send("<h1>You have successfully connected to the API</h1>");
});

app.get("/api/mp1", (req, res) => {
  getGames(1, res);
});

app.get("/api/mp2", (req, res) => {
  getGames(2, res);
});

app.get("/api/mp3", (req, res) => {
  getGames(3, res);
});

app.get("/api/mp4", (req, res) => {
  getGames(4, res);
});

app.get("/api/mp5", (req, res) => {
  getGames(5, res);
});

app.get("/api/mp6", (req, res) => {
  getGames(6, res);
});

app.get("/api/mp7", (req, res) => {
  getGames(7, res);
});

//Start server
app.listen(process.env.PORT || 8080, () => {
  console.log("The server is running on port 8080");
});


//
// let waluigi = new Player({
//   player: "Joe",
//   character: "Dry Bones",
//   stars: Math.floor(Math.random() * 101),
//   coins: Math.floor(Math.random() * 101),
//   placed: 4
// });
//
// let yoshi = new Player({
//   player: "Kayla",
//   character: "Birdo",
//   stars: Math.floor(Math.random() * 101),
//   coins: Math.floor(Math.random() * 101),
//   placed: 3
// });
//
// let princessPeach = new Player({
//   player: "Kelly",
//   character: "Donkey Kong",
//   stars: Math.floor(Math.random() * 101),
//   coins: Math.floor(Math.random() * 101),
//   placed: 2
// });
//
// let wario = new Player({
//   player: "Nathan",
//   character: "Mario",
//   stars: Math.floor(Math.random() * 101),
//   coins: Math.floor(Math.random() * 101),
//   placed: 1
// });
//
//   for (var i = 1; i < 5; i++){
//   let game = new Game({
//       board: "Faire Square",
//       date: "12-25-2020",
//       players: [waluigi, yoshi, princessPeach, wario],
//       gameNumber: i
//     });
//     game.save();
//   }

// //Create all games array
// let allGames = [
//   {marioPartyOneGames: []},
//   {marioPartyTwoGames: []},
//   {marioPartyThreeGames: []},
//   {marioPartyFourGames: []},
//   {marioPartyFiveGames: []},
//   {marioPartySixGames: []},
//   {marioPartySevenGames: []}
// ];
//
// /*******Not filling arrays***********/
// //Populate each game array
// for (var i = 0; i < allGames.length; i++){
//   Game.find({gameNumber: i + 1}, (err, dbGames) => {
//   if (err) console.error(err);
//   // allGames[i].push(dbGames);
//   console.log(dbGames);
//   console.log(allGames[i]);
// });
// }
//
// //Create a new game and add it to the DB
// function createNewGame(req){
//   //Create game
//   let game = new Game({
//     board: req.body.board,
//     players: [],
//     gameNumber: 1
//   });
//
// //Loop through players
// for (var i = 0; i < req.body.player.length; i++){
//
//   //Create new player
//   let player = new Player({
//     player: req.body.player[i],
//     character: req.body.character[i],
//     stars: req.body.stars[i],
//     coins: req.body.coins[i],
//     /* Need function to calculate place*/
//     placed: "1st"
//   });
//
//   //Add player to game
//   game.players.push(player);
// }
//
// //Save game in DB
// game.save();
//
// return game;
// }
