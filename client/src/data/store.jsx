import React, { useState } from "react";

const initialData = {
  id: "",
  accountId: "",
  puuid: "",
  name: "",
  profileIconId: 0,
  revisionDate: 0,
  summonerLevel: 0,
};

export const PlayerDataContext = React.createContext(initialData);

const store = (props) => {
  const [data, setData] = useState(initialData);

  function updateData(value) {
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
};

export default store;
