import React, { useState, useEffect, useContext } from "react";
import "./HomePage.scss";
import PlayerCard from "../components/PlayerCard/PlayerCard";
import { PlayerDataContext } from "../data/store";

export default function HomePage() {
  const { playerName, playerLevel } = useContext(PlayerDataContext);

  return (
    <div>
      <PlayerCard playerName={playerName} playerLevel={playerLevel} />
    </div>
  );
}
