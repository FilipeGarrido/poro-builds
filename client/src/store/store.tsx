import { useState, ReactChildren, createContext, ReactElement } from "react";

type GlobalStateType = {
  id: string;
  accountId: string;
  puuid: string;
  name: string;
  playerName: string;
  playerLevel: number;
  profileIconId: number;
  revisionDate: number;
  summonerLevel: number;
  profileIcon: any;
  rankedQueue: string;
  rankedTier: string;
  rankedTierRank: string;
  rankedWins: number;
  rankedLosses: number;
};

type GlobalContext = {
  state: GlobalStateType;
  dispatch: () => undefined;
};

const initialState: GlobalStateType = {
  id: "",
  accountId: "",
  puuid: "",
  name: "",
  playerName: "",
  playerLevel: 0,
  profileIconId: 0,
  revisionDate: 0,
  summonerLevel: 0,
  profileIcon: '',
  rankedQueue: '',
  rankedTier: '',
  rankedTierRank: '',
  rankedWins: 0,
  rankedLosses: 0,
};

export const PlayerDataContext = createContext(initialState);

export function Store(props: { children: ReactElement }) {
  const [data, setData] = useState<GlobalStateType>(initialState);

  function updateData(value: GlobalStateType) {
    setData(value);
    console.log(value);
  }

  return (
    <PlayerDataContext.Provider
      value={{
        playerName: data.name,
        playerLevel: data.summonerLevel,
        setNewData: (nd) => updateData(nd),
      }}
    >
      {props.children}
    </PlayerDataContext.Provider>
  );
}
