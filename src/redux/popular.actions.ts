import { AxiosError } from "../types" 
import { AnyAction } from "redux"
import { IRepos } from "../types"
import { SET_LANGUAGE, GET_REPOS_LOADING, GET_REPOS_SUCCESS, GET_REPOS_FAILURE } from "./popular.constants"

export const setLanguage = (payload:string):AnyAction => ({
    type:'SET_LANGUAGE',
    payload
})

export const getReposLoading = ():AnyAction => ({
    type:'GET_REPOS_LOADING',    
})

export const getReposSuccess = (payload:IRepos[]):AnyAction => ({
    type:'GET_REPOS_SUCCESS',  
    payload    
})

export const getReposFailure = (payload: unknown):AnyAction => ({
    type:'GET_REPOS_FAILURE',
    payload    
})