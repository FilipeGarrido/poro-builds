/* eslint-disable prettier/prettier */
import { Module } from "@nestjs/common";
import { SummonerController } from "./summoner.controller";
import { SummonerService } from "./summoner.service";

@Module({
    controllers:[SummonerController],
    providers:[SummonerService]
})

export class SummonerModule{}