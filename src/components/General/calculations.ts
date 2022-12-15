import { AxiosError } from "../../types"; 
import { getProfile, getRepos } from "../../api";
import { IRepos } from "../../types";

import { IPlayerProfile, IPlayerBattle } from "../../types";
const handleError = (error:AxiosError):void => console.error(error);

const getStarCount = (repos:IRepos[]):number =>{    
    return repos.reduce((acc, repo) => {        
        return acc + repo.stargazers_count;
    }, 0)
}

const calculateScore = (profile:IPlayerProfile, repos:IRepos[]):number => {
    const followers = profile.followers;
    const totalStars = getStarCount(repos);    
    return followers + totalStars;
}
const getUserData = (username:string):Promise<IPlayerBattle> => {
    return Promise.all([
        getProfile(username),
        getRepos(username)
    ])
    .then(([profile, repos]):IPlayerBattle => {        
        return {
            profile: profile,
            score: calculateScore(profile, repos)
        }
    })
}

const sortPlayers = (players:IPlayerBattle[]):IPlayerBattle[] => {   
    return players.sort((a, b) => 
        b.score - a.score
    );
}

export const startBattle = (players:string[]):Promise<void | IPlayerBattle[]> => {
    return Promise.all(players.map(getUserData))
    .then(sortPlayers)
    .catch(handleError)
}