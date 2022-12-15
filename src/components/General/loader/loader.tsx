import React, {FC} from "react";
import './loader.css'; 

const Loader :FC = ():JSX.Element => {  
    return (
        <div className="loading-container">
            <div className="circles">
                <div className="circle"></div>
                <div className="circle"></div>
                <div className="circle"></div>
                <div className="circle"></div>
                <div className="circle"></div>
                <div className="circle"></div>
                <div className="circle"></div>
            </div>
        </div>

    )
}
export default Loader;