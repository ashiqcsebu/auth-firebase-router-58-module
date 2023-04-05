import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../contexts/UserContext';


const Header = () => {


    const {user, logOut} = useContext(AuthContext)

    const handleSignOut = () =>{
        logOut()
        .then(()=>{})
        .catch(error => console.error(error))
    }
    
    return (
        <div>
            <div className="navbar bg-primary text-primary-content  ">
                <Link className='btn btn-ghost' to="/home">Home</Link>
                <Link className='btn btn-ghost' to="/orders">Orders</Link>
                <Link className='btn btn-ghost' to="/login">Log In</Link>
                <Link className='btn btn-ghost' to="/register">Register</Link>
                {user?.email && <h1>welcome,  {user.email} </h1>}
                <Link onClick={handleSignOut} className='btn btn-ghost' to="/login">Log Out</Link>
            </div>
        </div>
    );
};

export default Header;