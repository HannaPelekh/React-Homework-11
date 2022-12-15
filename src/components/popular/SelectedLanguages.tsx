import React, { useEffect, memo, useCallback, FC } from "react"; 
import { AppDispatch } from "../../redux/store"; 
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import { getRepos } from "../../redux/popular.thunk.js";
import { RootState } from "../../types";
import { Dispatch, AnyAction} from "redux"; 

const languages:string[] = ['All', 'JavaScript', 'Ruby', 'CSS', 'Python', 'Java'];

const SelectedLanguages:FC = memo(():JSX.Element => {    
    
    const dispatch = useDispatch<AppDispatch>();
    const selectedLanguage:string = useSelector((state:RootState):string => state.popularReducer.selectedLanguage, shallowEqual)
    const loading:boolean =  useSelector((state:RootState):boolean => state.popularReducer.loading)
    
    
    useEffect(() => {  
        dispatch(getRepos(selectedLanguage))
    }, []);
    
    const onSelectedLanguage = useCallback((selectedLanguage:string)  => {  
        dispatch(getRepos(selectedLanguage))        
    }, [selectedLanguage]);
    
    return (
    <ul className="languages">
        {languages.map((language:string, index:number):JSX.Element => {
            return (
                <li 
                    key={index}
                    className={(!loading ? "clickable" : "disable")} 
                    style={language === selectedLanguage ? {color: '#d0021b'} : {color: '#000'}}                                    
                    onClick={() => {                        
                        language !== selectedLanguage && 
                        onSelectedLanguage(language)
                    }}                                   
                >                    
                    {language}                    
                </li>
            )
        })}
    </ul>
    );
});

export default SelectedLanguages;





