import { AxiosRequestConfig, AxiosResponse, } from "axios"
import React, {ReactNode} from "react";

export interface RootState{
    popularReducer: IPopularReduserState,    
    battleReducer: IBattleReduserState    
}
export interface IPopularReduserState{
    selectedLanguage: string,
    repos: IRepos[],
    loading: boolean,
    error: string | null
}
export interface IRepos{    
    owner: {
        avatar_url: string,
        login: string,
    }
    name: string,
    html_url: string,
    stargazers_count: number,
}
export interface IPlayerPreview{
    userimg:  string,
    username: string,
    children: ReactNode
}
export interface IPlayerProfile{    
        login: string, 
        avatar_url: string, 
        followers: number,
        following: number    
}
export interface IPlayerBattle{
    profile: IPlayerProfile,
    score: number
}
export interface IInputProps {
    label: string;
    id: string;
}
export interface IBattleReduserState{
    playerOneName: string,
    playerTwoName: string,
    playerOneImage: string,
    playerTwoImage: string,
    winner: null | IPlayerBattle,
    loser: null | IPlayerBattle,
    loading: boolean,
    error: string | null
}

export interface AxiosError<T = any, D=any> extends Error{
    config: AxiosRequestConfig<D>;
    code?: string;
    request?: any; 
    response?: AxiosResponse<T, D>; 
    isAxiosError: boolean; 
    toJSON: () => object; 
}

 