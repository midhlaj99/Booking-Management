import React from 'react';
import styles from './navbar.module.css'; 
import { NavLink } from 'react-router-dom'

function Navbar(){
    return(
        <>
            <div className={styles.navigation}>
                <ul>
                    <li>
                        <NavLink to="/" exact
                        activeClassName='myactive' activeStyle={{color:'#333',textDecoration:'underline'}}
                        >
                            Requests
                        </NavLink>
                    </li>

                    <li>
                        <NavLink to="/services"
                            activeClassName='myactive' activeStyle={{color:'#333',textDecoration:'underline'}}
                        >
                        Services
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/payments"
                            activeClassName='myactive' activeStyle={{color:'#333',textDecoration:'underline'}}
                        >
                            Payments
                        </NavLink>
                    </li>
                </ul>
            </div>
        </>
    )
}
export default Navbar