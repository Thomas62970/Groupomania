import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer'
import AllFields from '../components/AllFields';
import AddFields from '../components/AddFields';
import RedictUser from '../components/RedictUser';



const Fields = () => {
    return (
        <div>
            <Header/>
            <div className='blocPage'>
                <RedictUser/>
                <div className='blocFields'>
                    <AddFields/>
                    <AllFields/>
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default Fields;