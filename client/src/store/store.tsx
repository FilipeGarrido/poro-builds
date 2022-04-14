import { useState, ReactChildren, createContext, ReactElement } from "react";

type GlobalStateType = {
  accountId:	    string;
  profileIcon:    string;
  revisionDate:   number;
  name:	          string;
  id:	            string;
  puuid:	        string;
  summonerLevel:  number;
  rankedQueue:    string;
  rankedTier:     string;
  rankedTierRank: string;
  rankedWins:     number;
  rankedLosses:   number;
};

type GlobalContext = {
  state: GlobalStateType;
  dispatch: () => undefined;
};

type Provider = {
  wins :  number;
  losses : number;
  rank : string;
  tier : string;
  playerName: string;
  playerLevel: number;
  profileIcon: string;
  setNewData: GlobalContext;
}

const initialState: GlobalStateType = {
  accountId : "",
  profileIcon : "",
  revisionDate : 0,
  name : "",
  id : "",
  puuid : "",
  summonerLevel : 0,
  rankedQueue : "",
  rankedTier : "",
  rankedTierRank : "",
  rankedWins : 0,
  rankedLosses : 0
};

export const PlayerDataContext = createContext(initialState);

export function Store(props: { children: ReactElement }) {
  const [data, setData] = useState<GlobalStateType>(initialState);

  function updateData(value: GlobalStateType) {
    setData(value);
    console.log(value);
  }

  return (
    <PlayerDataContext.Provider<Provider>
      value={{
        wins : data.rankedWins,
        losses : data.rankedLosses,
        rank : data.rankedTier,
        tier : data.rankedTierRank,
        playerName: data.name,
        playerLevel: data.summonerLevel,
        profileIcon: data.profileIcon,
        setNewData: (nd) => updateData(nd),
      }}
    >
      {props.children}
    </PlayerDataContext.Provider>
  );
}
