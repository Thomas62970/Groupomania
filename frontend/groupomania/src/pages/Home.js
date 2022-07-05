import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Inscription from '../components/Inscription';
import Login from '../components/Login';


const Home = () => {
    return (
        <div className='hompage'>
            <Header/>
            <div className='formulaire'>
                <Inscription/>
                <Login/>
            </div>
            <Footer/>
        </div>
    );
};

export default Home;