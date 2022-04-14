import { useState , useContext, useEffect } from "react";
import "./PlayerCard.scss";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { PlayerDataContext } from "../../../store/store";

export function PlayerCard() {
  const { playerName, playerLevel , wins , losses , rank , tier , profileIcon} = useContext(PlayerDataContext);

  const [winRate, setWinRate] = useState((wins / (wins + losses)) * 100);

  useEffect(()=> {setWinRate((wins / (wins + losses)) * 100)},[wins])
  
  return (
    <div className="player-card">
      <div id="header">
        <div className="player-icon">
          <img src={profileIcon} alt="Player Icon" />
        </div>
        <div className="player-info">
          <h1 id="player-nickname">{playerName}</h1>
          <p id="info">Nivel {playerLevel} - {rank} {tier}</p>
        </div>
      </div>

      <div id="content">
        <div id="data">
          <h2 id="wins">Wins : {wins}</h2>
          <h2 id="loses">Loses : {losses}</h2>
        </div>
        <div id="display">
          <CircularProgressbar className="display-circular" value={winRate} text={winRate.toFixed(1) + "%"} />
        </div>
      </div>
    </div>
  );
}
