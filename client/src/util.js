//Import character images
import yoshi from 'images/character-icons/Yoshi.png';
import princessPeach from 'images/character-icons/Peach.png';
import waluigi from 'images/character-icons/Waluigi.png';
import wario from 'images/character-icons/Wario.png';
import boo from 'images/character-icons/Boo.png';
import koopa from 'images/character-icons/Koopa.png';
import luigi from 'images/character-icons/Luigi.png';
import mario from 'images/character-icons/Mario.png';
import toad from 'images/character-icons/Toad.png';
import toadette from 'images/character-icons/Toadette.png';
import dryBones from 'images/character-icons/DryBones.png';
import birdo from 'images/character-icons/Birdo.png';
import donkeyKong from 'images/character-icons/DonkeyKong.png';
import daisy from 'images/character-icons/Daisy.png';

import surprisedToad from 'images/no-games-toad.png'
import trashCanYellow from 'images/delete-icon.png'
import pencilYellow from 'images/edit-icon.png'

//Import Game banners
import mp1Logo from 'images/game-banners/marioparty1.png'
import mp2Logo from 'images/game-banners/marioparty2.png'
import mp3Logo from 'images/game-banners/marioparty3.png'
import mp4Logo from 'images/game-banners/marioparty4.png'
import mp5Logo from 'images/game-banners/marioparty5.png'
import mp6Logo from 'images/game-banners/marioparty6.png'
import mp7Logo from 'images/game-banners/marioparty7.png'
import mpLogo from 'images/game-banners/marioparty-header.png'

//Import place images
import firstPlace from 'images/placed/1st.png';
import secondPlace from 'images/placed/2nd.png';
import thirdPlace from 'images/placed/3rd.png';
import fourthPlace from 'images/placed/4th.png';

//Import Mario Party 1 Boards
import bowsersMagmaMountain from 'images/boards/mp1/bowsers-magma-mountain.png';
import dkJungleAdventure from 'images/boards/mp1/dk-jungle-adventure.png';
import eternalStar from 'images/boards/mp1/eternal-star.png';
import luigisEngineRoom from 'images/boards/mp1/luigis-engine-room-.png';
import mariosRainbowCastle from 'images/boards/mp1/marios-rainbow-castle.png';
import peachsBirthdayCake from 'images/boards/mp1/peaches-birthday-cake.png';
import wariosBattleCanyon from 'images/boards/mp1/warios-battle-canyon.png';
import yoshisTropicalIsland from 'images/boards/mp1/yoshis-tropical-island.png';

//Import Mario Party 2 Boards
import bowserLand from 'images/boards/mp2/bowser-land.png';
import horrorLand from 'images/boards/mp2/horror-land.png';
import mysteryLand from 'images/boards/mp2/mystery-land.png';
import pirateLand from 'images/boards/mp2/pirate-land.png';
import spaceLand from 'images/boards/mp2/space-land.png';
import westernLand from 'images/boards/mp2/western-land.png';

//Import Mario Party 3 Boards
import chillyWaters from 'images/boards/mp3/chilly-waters.png';
import creepyCavern from 'images/boards/mp3/creepy-cavern.png';
import deepBlooberSea from 'images/boards/mp3/deep-bloober-sea.png';
import spinyDesert from 'images/boards/mp3/spiny-desert.png';
import waluigisIsland from 'images/boards/mp3/waluigis-island.png';
import woodyWoods from 'images/boards/mp3/woody-woods.png';

//Import Mario Party 4 Boards
import boosHauntedBash from 'images/boards/mp4/boos-haunted-bash.png';
import bowsersGnarlyParty from 'images/boards/mp4/bowsers-gnarly-party.png';
import goombasGreedyGala from 'images/boards/mp4/goombas-greedy-gala.png';
import koopasSeasideSoiree from 'images/boards/mp4/koopas-seaside-soiree.png';
import shyGuysJungleGym from 'images/boards/mp4/shy-guys-jungle-gym.png';
import toadsMidwayMadness from 'images/boards/mp4/toads-midway-madness.png';

//Import Mario Party 5 Boards
import bowserNightmare from 'images/boards/mp5/bowser-nightmare.png';
import futureDream from 'images/boards/mp5/future-dream.png';
import pirateDream from 'images/boards/mp5/pirate-dream.png';
import rainbowDream from 'images/boards/mp5/raindbow-dream.png';
import toyDream from 'images/boards/mp5/toy-dream.png';
import underseaDream from 'images/boards/mp5/undersea-dream.png';

//Import Mario Party 6 Boards
import castawayBay from 'images/boards/mp6/castaway-bay.png';
import clockworkCastle from 'images/boards/mp6/clockwork-castle.png';
import egaddsGarage from 'images/boards/mp6/egadds-garage.png';
import faireSquare from 'images/boards/mp6/faire-square.png';
import snowflakeLake from 'images/boards/mp6/snowflake-lake.png';
import toweringTreetop from 'images/boards/mp6/towering-treetop.png';

//Import Mario Party 7 Boards
import bowsersEnchantedInferno from 'images/boards/mp7/bowsers-enchanted-inferno-.png';
import grandCanal from 'images/boards/mp7/grand-canal.png';
import neonHeights from 'images/boards/mp7/neon-heights.png';
import pagodaPeak from 'images/boards/mp7/pagoda-peak.png';
import pyramidPark from 'images/boards/mp7/pyramid-park.png';
import windmillville from 'images/boards/mp7/windmillville.png';

//Store place icon reference
export const placeIcons = {
  1 : firstPlace,
  2 : secondPlace,
  3 : thirdPlace,
  4 : fourthPlace,
};

//Store character icon reference
  export const characterIcons = {
    "Wario": wario,
    "Yoshi": yoshi,
    "Princess Peach": princessPeach,
    "Waluigi": waluigi,
    "Boo": boo,
    "Koopa": koopa,
    "Luigi": luigi,
    "Mario": mario,
    "Toad": toad,
    "Toadette": toadette,
    "Birdo": birdo,
    "Dry Bones": dryBones,
    "Donkey Kong": donkeyKong,
    "Princess Daisy": daisy
  };

  //Store game banner reference
  export const gameLogos = {
    main: mpLogo,
    mp1: mp1Logo,
    mp2: mp2Logo,
    mp3: mp3Logo,
    mp4: mp4Logo,
    mp5: mp5Logo,
    mp6: mp6Logo,
    mp7: mp7Logo,
  };

 export const allGameBoards = {
   marioParty1Boards: {
     "Bowser's Magma Mountain": bowsersMagmaMountain,
     "DK's Jungle Adventure": dkJungleAdventure,
     "Eternal Star": eternalStar,
     "Luigi's Engine Room": luigisEngineRoom,
     "Mario's Rainbow Castle": mariosRainbowCastle,
     "Peach's Birthday Cake": peachsBirthdayCake,
     "Wario's Battle Canyon": wariosBattleCanyon,
     "Yoshi's Tropical Island": yoshisTropicalIsland
   },
   marioParty2Boards : {
     "Bowser Land": bowserLand,
     "Horror Land": horrorLand,
     "Mystery Land": mysteryLand,
     "Pirate Land": pirateLand,
     "Space Land": spaceLand,
     "Western Land": westernLand
   },
   marioParty3Boards: {
     "Chilly Waters": chillyWaters,
     "Creepy Cavern": creepyCavern,
     "Deep Bloober Sea": deepBlooberSea,
     "Spiny Desert": spinyDesert,
     "Waluigi's Island": waluigisIsland,
     "Woody Woods": woodyWoods
   },
   marioParty4Boards: {
     "Boo's Haunted Bash": boosHauntedBash,
     "Bowser's Gnarly Party": bowsersGnarlyParty,
     "Goomba's Greedy Gala": goombasGreedyGala,
     "Koopa's Seaside Soiree": koopasSeasideSoiree,
     "Shy Guy's Jungle Gym": shyGuysJungleGym,
     "Toad's Midway Madness": toadsMidwayMadness
   },
   marioParty5Boards: {
     "Bowser Nightmare": bowserNightmare,
     "Future Dream": futureDream,
     "Pirate Dream": pirateDream,
     "Rainbow Dream": rainbowDream,
     "Toy Dream": toyDream,
     "Undersea Dream": underseaDream
   },
   marioParty6Boards: {
     "Castaway Bay": castawayBay,
     "Clockwork Castle": clockworkCastle,
     "E. Gadd's Garage": egaddsGarage,
     "Faire Square": faireSquare,
     "Snowflake Lake": snowflakeLake,
     "Towering Treetop": toweringTreetop
   },
   marioParty7Boards: {
     "Bowser's Enchanted Inferno": bowsersEnchantedInferno,
     "Grand Canal": grandCanal,
     "Neon Heights": neonHeights,
     "Pagoda Peak": pagodaPeak,
     "Pyramid Park": pyramidPark,
     "Windmillville": windmillville
   }
 }

 export const allGameCharacters = {
   mp1Characters: [
     "Mario",
     "Luigi",
     "Princess Peach",
     "Yoshi",
     "Wario",
     "Donkey Kong",
   ],
   mp2Characters: [
     "Mario",
     "Luigi",
     "Princess Peach",
     "Yoshi",
     "Wario",
     "Donkey Kong",
   ],
   mp3Characters: [
     "Mario",
     "Luigi",
     "Princess Peach",
     "Yoshi",
     "Wario",
     "Donkey Kong",
     "Waluigi",
     "Princess Daisy"
   ],
   mp4Characters: [
     "Mario",
     "Luigi",
     "Princess Peach",
     "Yoshi",
     "Wario",
     "Donkey Kong",
     "Waluigi",
     "Princess Daisy"
   ],
   mp5Characters: [
     "Mario",
     "Luigi",
     "Princess Peach",
     "Yoshi",
     "Wario",
     "Waluigi",
     "Princess Daisy",
     "Toad",
     "Boo",
     "Koopa Kid"
   ],
   mp6Characters: [
     "Mario",
     "Luigi",
     "Princess Peach",
     "Yoshi",
     "Wario",
     "Waluigi",
     "Princess Daisy",
     "Toad",
     "Boo",
     "Koopa Kid",
     "Toadette"
   ],
   mp7Characters: [
     "Mario",
     "Luigi",
     "Princess Peach",
     "Yoshi",
     "Wario",
     "Waluigi",
     "Princess Daisy",
     "Toad",
     "Boo",
     "Koopa Kid",
     "Toadette",
     "Dry Bones",
     "Birdo"
   ]
 };

 //Store game baord reference
 export const gameBoardReference = {
   1: allGameBoards.marioParty1Boards,
   2: allGameBoards.marioParty2Boards,
   3: allGameBoards.marioParty3Boards,
   4: allGameBoards.marioParty4Boards,
   5: allGameBoards.marioParty5Boards,
   6: allGameBoards.marioParty6Boards,
   7: allGameBoards.marioParty7Boards,
 }

 export const characterReference = {
   1: allGameCharacters.mp1Characters,
   2: allGameCharacters.mp2Characters,
   3: allGameCharacters.mp3Characters,
   4: allGameCharacters.mp4Characters,
   5: allGameCharacters.mp5Characters,
   6: allGameCharacters.mp6Characters,
   7: allGameCharacters.mp7Characters,
 }

 export const noGamesToad = surprisedToad;
 export const deleteIcon = trashCanYellow;
 export const editIcon = pencilYellow;

  /* eslint import/no-anonymous-default-export: [2, {"allowObject": true}] */
  export default {};
