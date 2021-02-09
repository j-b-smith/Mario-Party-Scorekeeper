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
  useUnifiedTopology: true,
  useFindAndModify: false
});

//Verify connection established
mongoose.connection.once("open", () => {
  console.log("MongoDB database connection established successfully");
});

//Create player schema
const playersSchema = new mongoose.Schema({
  name: String,
  character: String,
  stars: Number,
  coins: Number,
  placed: Number
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
    res.send(games);
  });
}

//Post New Games to the database
app.post("/api/newgame", (req, res) => {
  console.log("This is the request");
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

//Update game
app.put('/api/updategame', (req, res) => {
  console.log(req.body);
  const sortedPlayers = getCharacterPlaces(req.body.players);

  const update = {
    board: req.body.board,
    date: req.body.date,
    players: [
      getPlayerFromArray(sortedPlayers, 0),
      getPlayerFromArray(sortedPlayers, 1),
      getPlayerFromArray(sortedPlayers, 2),
      getPlayerFromArray(sortedPlayers, 3)
    ],
    gameNumber: req.body.gameNumber
  };

  Game.findByIdAndUpdate(req.body._id, update, {useFindAndModify: false }, (err) => {
    if (err) return console.error(err);
    console.log(req.body._id);
    res.send(`Game with _id: ${req.body._id} successfully updated.`);
  });

  Game.findById(req.body._id, (game) => {
    // console.log(game);
  });
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

  //Get sorted players arrays
  const sortedPlayers = getCharacterPlaces(req.body.formData.players);

  let game = new Game({
    board: req.body.formData.board,
    date: new Date(),
    players: [
      new Player(getPlayerFromArray(sortedPlayers, 0)),
      new Player(getPlayerFromArray(sortedPlayers, 1)),
      new Player(getPlayerFromArray(sortedPlayers, 2)),
      new Player(getPlayerFromArray(sortedPlayers, 3))
    ],
    gameNumber: req.body.gameNumber
  });

  game.save((err) => {
      if (err) return console.error(err);
      console.log("Game saved to games collection.");
  });
}

const getCharacterPlaces = (players) => {
  //Sort the array of players by the greatest number of stars
  //If the number of stars is equal, sort by the greatest number of coins
  players.sort((a, b) => b.stars === a.stars ? b.coins - a.coins : b.stars - a.stars);

  //Set the place of each player
  players.forEach((player, index) => {
    player.placed = index + 1;
  })

  return players;
}


const getPlayerFromArray = (playerArray, index) => {
return   {
          name:      playerArray[index].name,
          character: playerArray[index].character,
          stars:     playerArray[index].stars,
          coins:     playerArray[index].coins,
          placed:    playerArray[index].placed
  }
}
