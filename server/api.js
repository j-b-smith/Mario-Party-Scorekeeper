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
function getGames(res) {
  let games = {};
  Game.find({}, (err, dbGames) => {
    if (err) console.error(err);
    games = dbGames;
    console.log(games);
    res.send(games);
  });
}

//Post New Games to the database
app.post("/api/newgame", (req, res) => {
  console.log("This is the request");
  console.log(req.body);
  addNewGame(req);
  res.send("API Post successful")
});

//Delete game by _id
app.delete('/api/deletegame', (req, res) => {
  Game.findOneAndRemove({_id: req.body._id}, (err) => {
    if (err) console.error(err);
    res.send(`Game with _id: ${req.body._id} successfully deleted.`)
  })
});

//Test GET
app.get("/api", (req, res) => {
  res.send("<h1>You have successfully connected to the MariopPartyScoreKeeper API</h1>");
});

//Return all games
app.get("/api/allGames", (req, res) => {
  getGames(res);
});

//Start server
app.listen(process.env.PORT || 8080, () => {
  console.log("The server is running on port 8080");
});

const addNewGame = (req) => {

  //Create players from response
  let player1 = new Player({
    player: req.body.formData.player1Name,
    character: req.body.formData.player1Character,
    stars: req.body.formData.player1Stars,
    coins: req.body.formData.player1Coins,
    placed: req.body.formData.player1Placed
  });

   let player2 = new Player({
    player: req.body.formData.player2Name,
    character: req.body.formData.player2Character,
    stars: req.body.formData.player2Stars,
    coins: req.body.formData.player2Coins,
    placed: req.body.formData.player2Placed
  });

  let player3 = new Player({
    player: req.body.formData.player3Name,
    character: req.body.formData.player3Character,
    stars: req.body.formData.player3Stars,
    coins: req.body.formData.player3Coins,
    placed: req.body.formData.player3Placed
  });

  let player4 = new Player({
    player: req.body.formData.player4Name,
    character: req.body.formData.player4Character,
    stars: req.body.formData.player4Stars,
    coins: req.body.formData.player4Coins,
    placed: req.body.formData.player4Placed
  });


  let game = new Game({
    board: req.body.formData.board,
    date: new Date(),
    players: [player1, player2, player3, player4],
    gameNumber: req.body.gameNumber
  });

  game.save((err) => {
      if (err) return console.error(err);
      console.log("Game saved to games collection.");
  });
}

// Game.deleteMany({});

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
