import { useContext } from "react";
import "./HomePage.scss";
import { PlayerCard } from "../../molecules/PlayerCard";
import { PlayerDataContext } from "../../../store/store";

export function HomePage() {
  const { playerName, playerLevel } = useContext(PlayerDataContext);

  return (
    <div>
      <PlayerCard playerName={playerName} playerLevel={playerLevel} />
    </div>
  );
}
