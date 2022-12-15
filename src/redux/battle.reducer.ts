import { GET_USER_DATA, SET_USER_DATA_RESET, GET_BATTLE_LOADING, GET_WINNER_BATTLE} from "./battle.constants"
import { AnyAction } from "redux";
import { IBattleReduserState } from "../types";

const initialState:IBattleReduserState = {    
    playerOneName: "",
    playerTwoName: "",
    playerOneImage: "",
    playerTwoImage: "",
    winner: null,
    loser: null,
    loading: false,
    error: null
}
export const battleReducer = (store:IBattleReduserState | undefined = initialState, action:AnyAction): IBattleReduserState => {
    switch (action.type){
        case GET_USER_DATA:            
            if (action.id === 'playerOne') {                
                return {
                    ...store,
                    playerOneName: action.userName,
                    playerOneImage: `https://github.com/${action.userName}.png?size=200`
                }
            } else {
                return {
                ...store,
                playerTwoName: action.userName,
                playerTwoImage: `https://github.com/${action.userName}.png?size=200`
                }
            }
            case SET_USER_DATA_RESET:  
                if (action.payload === 'playerOne') {
                    return {
                        ...store,
                        playerOneName: '',
                        playerOneImage: '',                        
                    }
                }
                else {
                    return {
                        ...store,
                        playerTwoName: '',
                        playerTwoImage: '',                        
                    }
                }  
            case GET_WINNER_BATTLE:                
                return {
                    ...store,
                    winner: action.payload[0],
                    loser: action.payload[1],
                    loading: false
                }
            case GET_BATTLE_LOADING:
                return {
                    ...store, 
                    winner: null,
                    loser: null,
                    loading: true,
                    error: null,
                }                
        default: 
            return store
    }    
}