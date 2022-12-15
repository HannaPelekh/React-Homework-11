import React, { memo, FC } from "react";
import { useSelector } from "react-redux";
import Loader from "../General/loader/loader";
import { IRepos} from "../../types";
import { RootState } from "../../types"; 

const RepoGrid:FC = memo(():JSX.Element => {  
    const repos:IRepos[] =  useSelector((state:RootState):IRepos[] => state.popularReducer.repos)   
    const loading:boolean =  useSelector((state:RootState):boolean => state.popularReducer.loading)  
    
    return (
        !loading ? 
            <ul className="popular-list">
                {repos.map((repo:IRepos, index:number):JSX.Element => {
                    return(
                        <li key={repo.name} className='popular-item'>
                            <div className="popular-rank">#{index + 1}</div>
                            <ul className="space-list-items">
                                <li>
                                    <img src={repo.owner.avatar_url} alt="Avatar" className="avatar"/>
                                </li>
                                <li className="name-box">
                                    <a href={repo.html_url} target="_blank" className="name">{repo.name}</a>
                                </li>
                                <li>
                                    @{repo.owner.login}
                                </li>
                                <li>
                                    @{repo.stargazers_count} stars
                                </li>
                            </ul>
                        </li>

                    )
                })}
            </ul>
        : <Loader/>
    )
});


export default RepoGrid;
