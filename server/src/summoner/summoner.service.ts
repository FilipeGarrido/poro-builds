/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { SummonersData } from './summoner.model';
import axios from 'axios';
require('dotenv/config');

@Injectable()
export class SummonerService {
  summoner: SummonersData[] = [];

  async postData(name: string, region: string) {
    
    const urlPlayerData = `https://${region}/lol/summoner/v4/summoners/by-name/${name}?api_key=${process.env.API_KEY}`;
    const response = await axios.get(urlPlayerData);
    const { data } = response;

    const urlIcon = `http://ddragon.leagueoflegends.com/cdn/12.7.1/img/profileicon/${data.profileIconId}.png`;
    
    const iconResponse = await axios.get(urlIcon);
    const iconImage = iconResponse.data

    const urlRanked = `https://${region}/lol/league/v4/entries/by-summoner/${data.id}?api_key=${process.env.API_KEY}`;
    const rankedResponse = await axios.get(urlRanked);
    const rankedData = rankedResponse.data
    const rankedQueue = rankedData[0].queueType
    const rankedTier = rankedData[0].tier
    const rankedTierRank = rankedData[0].rank
    const rankedWins = rankedData[0].wins
    const rankedLosses = rankedData[0].losses

    const newPlayer = new SummonersData(
      data.accountId,
      iconImage,
      data.revisionDate,
      data.name,
      data.id,
      data.puuid,
      data.summonerLevel,
      rankedQueue,
      rankedTier,
      rankedTierRank,
      rankedWins,
      rankedLosses
    );
    this.summoner.push(newPlayer);
    return this.summoner;
  }

  getData(){
    return [...this.summoner]
  }
}
