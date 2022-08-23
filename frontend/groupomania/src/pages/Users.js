import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';
import User from '../components/User';

const Users = () => {
    return (
        <div>
            <Header/>
            <User/>
            <Link to="/fields">Retour</Link>
            <Footer/>
        </div>
    );
};

export default Users;