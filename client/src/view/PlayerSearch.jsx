import React , { useState , useContext ,useEffect } from "react"
import { Link } from 'react-router-dom';
import {PlayerDataContext} from  '../data/store'
import { Button , Autocomplete, TextField } from "@mui/material"
import './PlayerSearch.scss'
import Logo from '../assets/logo.png'
import LogoNome from '../assets/nameLogo.png'
import SearchIcon from '@mui/icons-material/Search';
import Theme from '../components/Themes/Themes'

const regions = [
    {label : 'BR'   , value : "br1.api.riotgames.com"},
    {label : 'EUN'  , value : 'eun1.api.riotgames.com'},
    {label : 'EUW'  , value : 'euw1.api.riotgames.com'},
    {label : 'JP'   , value : 'jp1.api.riotgames.com'},
    {label : 'KR'   , value : 'kr.api.riotgames.com'},
    {label : 'LA1'  , value : 'la1.api.riotgames.com'},
    {label : 'LA2'  , value : 'la2.api.riotgames.com'},
    {label : 'NA'   , value : 'na1.api.riotgames.com'},
    {label : 'OC'   , value : 'oc1.api.riotgames.com'},
    {label : 'TR'   , value : 'tr1.api.riotgames.com'},
    {label : 'RU'   , value : 'ru1.api.riotgames.com'},
]

export default function PlayerSearch(){

    const {setNewData} = useContext(PlayerDataContext)

    const [region , setRegion ] = useState(regions[0])
    const [nameInput ,setNameInput] = useState('')
    const [nameToSend , setNameToSend] = useState('')

    function SearchPlayer(){
        fetch(`https://${region.value}/lol/summoner/v4/summoners/by-name/${nameToSend}?api_key=${process.env.API_KEY}`)
            .then(resp => resp.json())
            .then(dados => setNewData(dados))

    }

    function nameChange(nameToChange){
        let name = nameToChange
        let nameChange = name.replace(/ /g,'%20')
        setNameToSend(nameChange)
        setNameInput(name)
    }
    return(
        <div className="player-search">
            <div id="logo">
                <img src={Logo} alt="PoroBuilds Logo" />
            </div>
            <div id="search-forms">
                <form action="">
                    <div id="input-name">
                        <input type="text" placeholder="Nome de Invocador" value={nameInput} onChange={(e)=>nameChange(e.target.value)}/>
                    </div>
                    <div id='autocomplete'>
                        <Theme>
                            <Autocomplete
                                id="combo-box-demo"
                                value={region}
                                onChange={(event, newValue) => {
                                    setRegion(newValue);
                                }}
                                sx={{width:'100px', color:(theme)=>theme.palette.primary.contrastText}}
                                options={regions}
                                renderInput={(params) => <TextField {...params} label="Região" />}
                            /> 
                        </Theme>
                    </div>    
                    <div id="button-container">
                        <Link to={'/homePage'}>
                            <Button id="button" 
                                    variant="contained" 
                                    endIcon={<SearchIcon />} 
                                    onClick={()=> SearchPlayer()}>Buscar</Button>
                        </Link>
                    </div>
                </form>
            </div>
            <div>
                <p></p>
            </div>
            <div id="logo-name">
                <img src={LogoNome} alt="PoroBuilds Logo" width='50%' />
            </div>
        </div>
    )
}
