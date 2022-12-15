import axios, {AxiosResponse} from 'axios';
import { IRepos, IPlayerProfile} from './types';

export const fetchPopularRepos = async (language:string): Promise<IRepos[]> => {
    return await axios.get("https://api.github.com/search/repositories?q=stars:>1+language:" + language + "&sort=stars&order=desc&type=Repositories")           
        .then((r:AxiosResponse):IRepos[] => r.data.items) 
    } 

const id:string = 'YOUR_CLIENT_ID';
const sec:string = 'YOUR_SECRET_ID';
const params:string = '?client_id' + id + '?client_secret' + sec;

const handleError = (error:unknown) => console.error(error);

export const getProfile = async (username:string): Promise<IPlayerProfile> => {
    return await axios.get('https://api.github.com/users/' + username + params)
        .then((user:AxiosResponse) => user.data)
        .catch(handleError)
};

export const getRepos = async (username:string): Promise<[]>=> {    
    return await axios.get('https://api.github.com/users/' + username + '/repos' + params + '&per_page=100')
        .then((repos:AxiosResponse) => repos.data)
        .catch(handleError)
};

