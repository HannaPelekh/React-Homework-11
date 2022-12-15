import { AnyAction, Dispatch, ActionCreator, Action} from "redux";
import { ThunkAction, ThunkDispatch } from "redux-thunk";
import { fetchPopularRepos } from "../api"
import { getReposLoading, getReposFailure, getReposSuccess, setLanguage } from "./popular.actions"
import { IPopularReduserState, RootState} from "../types";

export const getRepos = (language:string) => async (dispatch:any) => {    
    dispatch(setLanguage(language));   
    dispatch(getReposLoading());
    try {
        const repos = await fetchPopularRepos(language)      
        if(repos.length) {
            dispatch(getReposSuccess(repos));
        }
    } catch (error) {
        dispatch(getReposFailure(error))
    }
}

