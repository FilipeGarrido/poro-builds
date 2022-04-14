import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from 'axios'
import { PlayerDataContext } from "../../../store/store";
import { Button, Autocomplete, TextField } from "@mui/material";
import "./PlayerSearch.scss";
import Logo from "../../../assets/images/logo.png";
import LogoNome from "../../../assets/images/nameLogo.png";
import SearchIcon from "@mui/icons-material/Search";
import { Themes } from "../../themes";

type Regions = {
  label: string;
  value: string;
};

const regions: Regions[] = [
  { label: "BR", value: "br1.api.riotgames.com" },
  { label: "EUN", value: "eun1.api.riotgames.com" },
  { label: "EUW", value: "euw1.api.riotgames.com" },
  { label: "JP", value: "jp1.api.riotgames.com" },
  { label: "KR", value: "kr.api.riotgames.com" },
  { label: "LA1", value: "la1.api.riotgames.com" },
  { label: "LA2", value: "la2.api.riotgames.com" },
  { label: "NA", value: "na1.api.riotgames.com" },
  { label: "OC", value: "oc1.api.riotgames.com" },
  { label: "TR", value: "tr1.api.riotgames.com" },
  { label: "RU", value: "ru1.api.riotgames.com" },
];

export function PlayerSearch() {

  const { setNewData , profileIconId } = useContext(PlayerDataContext);

  const [region, setRegion] = useState(regions[0]);
  const [nameInput, setNameInput] = useState("");
  const [nameToSend, setNameToSend] = useState("");

  async function onClick() {

    const url = `http://localhost:3003`;

    try {
      const recievingData =  await axios.get(url);
      const data = recievingData.data;
      
      let exist = false;
      let id = '';

      //Verificar se existe alguem ja cadastrado
      if(data.length != 0){
        //Verificar se o nome ja esta armazenado
        data.forEach( (element: any) => {
          if(element.name == nameInput){
            exist = true
            id = element.id
          }
        })

        if(!exist){
          const newRecievingData = await axios.post(`${url}/${region.value}/${nameToSend}`);
          const newData = newRecievingData.data
          console.log(newData)
          return setNewData(newData)
        }else{
          const summoner = await axios.get(`${url}/${id}`)
          console.log(summoner.data)
          return setNewData(summoner.data)
        }
      }
      else{
        const newData = await axios.post(`${url}/${region.value}/${nameToSend}`);
        console.log(newData.data)
        return setNewData (newData.data)
      }
    } catch (e) {
      console.log(e);
    }
  }

  function nameChange(nameToChange: string) {
    let name = nameToChange;
    let nameChange = name.replace(/ /g, "%20");
    setNameToSend(nameChange);
    setNameInput(name);
  }

  return (
    <div className="player-search">
      <div id="logo">
        <img src={Logo} alt="PoroBuilds Logo" />
      </div>
      <div id="search-forms">
        <form action="src/components/pages/PlayerSearch/PlayerSearch.tsx">
          <div id="input-name">
            <input
              type="text"
              placeholder="Nome de Invocador"
              value={nameInput}
              onChange={(e) => nameChange(e.target.value)}
            />
          </div>
          <div id="autocomplete">
            <Themes>
              <Autocomplete
                id="combo-box-demo"
                value={region}
                onChange={(event, region) => {
                  if (!region) {
                    return;
                  }
                  setRegion(region);
                }}
                sx={{color: (theme) => theme.palette.primary.contrastText }}
                options={regions}
                renderInput={(params) => <TextField {...params} label="Região" />}
              />
            </Themes>
          </div>
          <div id="button-container">
            <Link to={"/homePage"}>
              <Button id="button" variant="contained" endIcon={<SearchIcon />} onClick={() => onClick()}>
                Buscar
              </Button>
            </Link>
          </div>
        </form>
      </div>
      <div id="logo-name">
        <img src={LogoNome} alt="PoroBuilds Logo" width="50%" />
      </div>
    </div>
  );
}
