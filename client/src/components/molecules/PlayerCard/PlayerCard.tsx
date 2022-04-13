import { useState } from "react";
import "./PlayerCard.scss";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import LolIcon from "../../../assets/images/lolIcon.png";

type Props = {
  name: string;
  level: string;
};

export function PlayerCard(props: Props) {
  const { name, level } = props;
  const wins = 70;
  const loses = 50;
  const [winRate, setWinRate] = useState((wins / (wins + loses)) * 100);

  return (
    <div className="player-card">
      <div id="header">
        <div className="player-icon">
          <img src={LolIcon} alt="Player Icon" />
        </div>
        <div className="player-info">
          <h1 id="player-nickname">{name}</h1>
          <p id="info">Nivel {level} - Prata IV</p>
        </div>
      </div>

      <div id="content">
        <div id="data">
          <h2 id="wins">Wins : 70</h2>
          <h2 id="loses">Loses : 50</h2>
        </div>
        <div id="display">
          <CircularProgressbar className="display-circular" value={winRate} text={winRate.toFixed(1) + "%"} />
        </div>
      </div>
    </div>
  );
}
