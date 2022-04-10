import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { get } from 'http';
import { url } from 'inspector';

const LOL_KEY = 'RGAPI-8da54502-aaca-4955-8dd6-4587b481e454'
const LOL_URL = 'http://br1.api.riotgames.com'
const LOL_Icons = 'http://ddragon.leagueoflegends.com/cdn/12.6.1/img/profileicon/'

require('dotenv').config()

@Injectable()
export class AppService {
  getHello(): string {
    return 'Batata';
  }

  getSummonersName(): any{
    return 'Abacate';
  }
}
