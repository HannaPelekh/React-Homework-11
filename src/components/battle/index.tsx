import React, {FC} from 'react';
import { AppDispatch } from "../../redux/store"; 
import { Link, useLocation } from 'react-router-dom';
import PlayerInput from './PlayerInput';
import PlayerPreview from './PlayerPreview';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { setReset } from '../../redux/battle.thunk';
import { RootState } from '../../types';
import './battle.css';


const Battle:FC = ():JSX.Element => {  
  const dispatch = useDispatch<AppDispatch>()
  const playerOneName:string = useSelector((state:RootState):string => state.battleReducer.playerOneName, shallowEqual);
  const playerTwoName:string = useSelector((state:RootState):string => state.battleReducer.playerTwoName, shallowEqual);
  const playerOneImage:string = useSelector((state:RootState):string => state.battleReducer.playerOneImage, shallowEqual);
  const playerTwoImage:string = useSelector((state:RootState):string => state.battleReducer.playerTwoImage, shallowEqual);
  const location = useLocation();
  
  const handleReset = (id:string)=>{    
    dispatch(setReset(id))    
  }
    return (
      <div className='battle-container'>
        <div className='battle-users'>
          {!playerOneImage ? 
            <PlayerInput
              label='Player 1'
              id='playerOne'              
            /> : 
            <PlayerPreview
              userimg={playerOneImage}
              username={playerOneName} 
            >
              <button className="reset" onClick={() => handleReset('playerOne')}>Reset</button>
            </PlayerPreview>
          }
          {!playerTwoImage ? 
            <PlayerInput
              label="Player 2"
              id='playerTwo'              
            /> :
            <PlayerPreview
              userimg={playerTwoImage}
              username={playerTwoName}  
            >
              <button className="reset" onClick={() => handleReset('playerTwo')}>Reset</button>
            </PlayerPreview>
          }
        </div>
        {playerOneName && playerTwoName && (
          <Link
              to={{
                pathname: '/battle/results',
                search: `?playerOneName=${playerOneName}&playerTwoName=${playerTwoName}`
              }}
              className='battle-btn'>
              Battle
          </Link>
        )}
      </div>
    );
  }
  
  export default Battle;
  