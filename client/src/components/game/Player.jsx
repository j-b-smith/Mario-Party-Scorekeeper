import {characterIcons} from "util.js";
import {placeIcons} from "util.js";

function Player({player}){
  return(
    <tr>
      <td className="player-col">
        <div className="player-col-content">
          <div className="character-content">
            <img src={characterIcons[player.character]} alt="Character Icon"/>
            <span>{player.character}</span>
          </div>
          <div className="player-name-content">
            <p>{player.player}</p>
          </div>
        </div>
      </td>
      <td className="stars-col">{player.stars}</td>
      <td className="coins-col">{player.coins}</td>
      <td className="placed-col"><img src={placeIcons[player.placed]} alt="Finishing Place"/></td>
    </tr>
  );
}

export default Player;
