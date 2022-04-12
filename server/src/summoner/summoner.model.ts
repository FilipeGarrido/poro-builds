/* eslint-disable prettier/prettier */
export class SummonersData{

    accountId:	    string
    profileIconId:  number
    revisionDate:   number
    name:	        string
    id:	            string
    puuid:	        string
    summonerLevel:  number

    constructor(accId: string, 
        profIconId: number, 
        revDate: number, 
        name: string, 
        id: string, 
        puuid: string, 
        sumLevel: number)
        {
            this.accountId = accId
            this.profileIconId = profIconId
            this.revisionDate = revDate
            this.name = name
            this.id = id
            this.puuid = puuid
            this.summonerLevel = sumLevel
    }

}