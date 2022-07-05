import React from 'react';
import { useSelector } from 'react-redux';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Inscription from '../components/Inscription';
import Login from '../components/Login';


const Home = () => {
    const valeur = useSelector((state) => state.index.value);
    
    function choixForm() {
        if(valeur === 0){
            return <Login/>
        }
        else{
            return <Inscription/>
        }
    }
    
    return (
        <div className='hompage'>
            <Header/>
            <div className='formulaire'>
                {choixForm()}
            </div>
            <Footer/>
        </div>
    );
};

export default Home;