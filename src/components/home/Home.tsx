import React, {FC} from "react";
import { Link } from "react-router-dom";
import './home.css';

const Home:FC = ():JSX.Element => {  
    return( 
    <div className="home-container">
        <h1>Githab Battle: Battle you friends ... and stuff</h1>
        <Link to='battle' target='_blank' className="button">Battle</Link>
    </div>
    );
}

export default Home; 


