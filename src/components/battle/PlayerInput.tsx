import React, { useState, memo} from "react";
import { useDispatch } from "react-redux";
import { getUser } from "../../redux/battle.thunk";
import { AppDispatch } from "../../redux/store";
import { IInputProps } from "../../types";

const PlayerInput = memo(( props:IInputProps ):JSX.Element => {  
    
    const [userName, setUserName] = useState(``);
    const dispatch = useDispatch<AppDispatch>();

    const handleSubmit = (e:React.FormEvent) =>{
        e.preventDefault(); 
        dispatch(getUser(props.id, userName))          
    }
    return (      
        <form className="form_container" onSubmit={handleSubmit}>
            <label htmlFor={props.id} className="player_title">{props.label}</label>
            <input
                className="player_input"
                id={props.id}
                type='text'
                placeholder="Github Username"
                autoComplete="off"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
            />
            <button className="player_btn"
                disabled={!userName}
                type='submit'
            >Submit</button>
        </form>
    );
});

export default PlayerInput;
