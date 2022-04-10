import React from "react";
import { Link, useRouteMatch } from 'react-router-dom';
import './NavBar.scss'

function MenuLink({ label, to, activeOnlyWhenExact }) {
    let match = useRouteMatch({
      path: to,
      exact: activeOnlyWhenExact
    });
  
    return (
      <div>
        <Link className={match ? "active" : ""} to={to}>{label}</Link>
      </div>
    );
}

const Navbar = ()=>{
    return(
        <div className="NavBar">
            
            <nav>
                <ul>
                    <li> <MenuLink  activeOnlyWhenExact={true}
                                    label={'Home Page'} 
                                    to="/homePage"/> 
                    </li>
                    <li> <MenuLink  activeOnlyWhenExact={true}
                                    label={'Picks'} 
                                    to="/picks"/> 
                    </li>
                    <li> <MenuLink  activeOnlyWhenExact={true}
                                    label={'Bans'} 
                                    to="/bans"/> 
                    </li>
                </ul>

            </nav>
            
            
        </div>
    )
}

export default Navbar