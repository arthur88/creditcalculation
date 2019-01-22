
import React from 'react';
import { Link } from 'react-router-dom';
import isAuthenticated from '../Auth/isAuthenticated';

const Header = () => (
    <header>
        <h1>Credit Calculation App</h1>
        <nav>
            <ul>
                <li><Link to='/'>Home</Link></li>
                {
                    !isAuthenticated() && (
                        <li><Link to='/login'>Login</Link></li>
                    )
                }
                {            
                    isAuthenticated() && (
                        <li><Link to='/logout'>Logout</Link></li>
                    )
                }
                <li><Link to='/about'>About</Link></li>
                <li><Link to='/credit'>Credit Calculation</Link></li>
            </ul>
        </nav>
    </header>
)

export default Header;