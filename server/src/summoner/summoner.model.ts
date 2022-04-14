/* eslint-disable prettier/prettier */
export class SummonersData{

    accountId:	    string
    profileIcon:    string
    revisionDate:   number
    name:	        string
    id:	            string
    puuid:	        string
    summonerLevel:  number
    rankedQueue:    string 
    rankedTier:     string
    rankedTierRank: string
    rankedWins:     number
    rankedLosses:   number

    constructor(accId: string, 
        profIcon:       string, 
        revDate:        number, 
        name:           string, 
        id:             string, 
        puuid:          string, 
        sumLevel:       number,
        rankedQueue:    string, 
        rankedTier:     string,
        rankedTierRank: string,
        rankedWins:     number,
        rankedLosses:   number)
        {
            this.accountId = accId
            this.profileIcon = profIcon
            this.revisionDate = revDate
            this.name = name
            this.id = id
            this.puuid = puuid
            this.summonerLevel = sumLevel
            this.rankedQueue = rankedQueue
            this.rankedTier = rankedTier
            this.rankedTierRank = rankedTierRank
            this.rankedWins = rankedWins
            this.rankedLosses = rankedLosses
    }

}