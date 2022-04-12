/* eslint-disable prettier/prettier */
import { Injectable } from "@nestjs/common";
import { SummonersData } from "./summoner.model";
import axios from "axios";
require("dotenv/config")

@Injectable()
export class SummonerService{

    summoner: SummonersData[] = []

    async postSummonersData(summName,region){
            const data = await axios.get(`https://${region}/lol/summoner/v4/summoners/by-name/${summName}?api_key=${process.env.API_KEY}`).then(resp => resp.data)
            const newPlayer = new SummonersData(data.accountId,data.profileIconId,data.revisionDate,data.name,data.id,data.puuid,data.summonerLevel)
            this.summoner.push(newPlayer)
            return this.summoner
    }
}