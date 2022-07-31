import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer'
import AllFields from '../components/AllFields';
import AddFields from '../components/AddFields';



const Fields = () => {
    return (
        <div>
            <Header/>
            <div className='blocFields'>
                <AddFields/>
                <AllFields/>
            </div>
            <Footer/>
        </div>
    );
};

export default Fields;