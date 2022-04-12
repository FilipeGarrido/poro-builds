/* eslint-disable prettier/prettier */
import { Controller, Param, Post } from "@nestjs/common";
import { SummonerService } from "./summoner.service";

@Controller()
export class SummonerController{
    constructor(private readonly summonerService: SummonerService){}

    @Post(':region/:summName')
    getSummonerData(@Param('summName') summName: string, @Param('region') region:string){
        return this.summonerService.postSummonersData(summName,region)
    }
}