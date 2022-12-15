import { getUserData, setDataReset, getBattleLoading, getWinnerBattle, getBattleFailure} from "./battle.actions";
import { startBattle } from "../components/General/calculations";
import { ThunkAction, ThunkDispatch } from "redux-thunk";
import { IPlayerBattle,RootState } from "../types";
import { AnyAction} from "redux";


export const getUser = (id:string, userName:string) => (dispatch:any) => {  
    dispatch(getUserData(id, userName));    
}

export const setReset = (id:string) => async (dispatch:any) => {
    await dispatch(setDataReset(id));
}

export const getWinner = (users:string[]) => async (dispatch:any) => {
    await dispatch(getBattleLoading());
    try {
        const players: void | IPlayerBattle[] = await startBattle(users)        
        if (players.length) {
            dispatch(getWinnerBattle(players))
        }
    } catch (error) {
        await dispatch(getBattleFailure(error));
    }
}


