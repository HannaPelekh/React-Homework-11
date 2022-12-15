import { GET_USER_DATA, SET_USER_DATA_RESET, GET_BATTLE_LOADING, GET_WINNER_BATTLE, GET_BATTLE_FAILURE} from "./battle.constants"
import { AnyAction } from "redux"
import { AxiosError } from "../types" 
import { IPlayerBattle } from "../types"
export const getUserData = (id:string, userName:string):AnyAction => ({
    type:'GET_USER_DATA',    
    id, 
    userName
})

export const setDataReset = (payload:string):AnyAction => ({
    type:'SET_USER_DATA_RESET', 
    payload
})

export const getBattleLoading = ():AnyAction => ({
    type:'GET_BATTLE_LOADING'
})

export const getWinnerBattle = (payload:IPlayerBattle[]):AnyAction => ({
    type:'GET_WINNER_BATTLE',
    payload    
})
export const getBattleFailure = (payload:AxiosError | null):AnyAction => ({
    type:'GET_BATTLE_FAILURE',
    payload    
})
