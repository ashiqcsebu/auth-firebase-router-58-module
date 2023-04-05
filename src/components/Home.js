import React, { useContext } from 'react';
import { AuthContext } from '../contexts/UserContext';

const Home = () => {

    const {user} = useContext(AuthContext)
    return (
        <div>
          {user?.email && <h1>welcome,  {user.email} </h1>}
        </div>
    );
};

export default Home;