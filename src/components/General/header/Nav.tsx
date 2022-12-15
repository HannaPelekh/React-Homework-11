import { NavLink } from "react-router-dom";
import React, {FC} from "react"
import './header.css'; 
const navLinks:string[] = ['Home', 'Popular', 'Battle']

const Nav:FC = ():JSX.Element => {  
    return (
      <div className="header"> 
        <ul className="nav">
          {navLinks.map((navLink:string, index:number): JSX.Element => {
                return (
                  <li key={index}>
                      <NavLink end to={navLink === 'Home' ? '/' : navLink.toLowerCase()}>
                          {navLink}
                      </NavLink>
                  </li>
              )
          })}
        </ul>
      </div>
    );
  }
  
  export default Nav;
  