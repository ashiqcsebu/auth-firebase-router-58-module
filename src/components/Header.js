import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <div className="navbar bg-neutral text-neutral-content">
                <Link to="/Home">Home</Link>
                <Link to="/login">Log In</Link>
                <Link to="/register">Register</Link>
                
            </div>
        </div>
    );
};

export default Header;