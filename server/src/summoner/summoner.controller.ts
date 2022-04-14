/* eslint-disable prettier/prettier */
import { Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { SummonerService } from './summoner.service';

@Controller()
export class SummonerController {
  constructor(private readonly summonerService: SummonerService) {}

  @Post(':region/:name')
  postSummonerData(
    @Param('name') summName: string,
    @Param('region') region: string,
  ) {
    return this.summonerService.postData(summName, region);
  }

  @Get()
  getSummonerData(){
    return this.summonerService.getData()
  }

  @Get(':id')
    getPlayerData(@Param('id') id:string){
        return this.summonerService.getPlayerData(id);
    }

  @Delete('all')
  cleanDB(){
    return this.summonerService.deleteAll()
  }
}
