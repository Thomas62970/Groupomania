import React from 'react';
import image from '../assets/icon-left-font-monochrome-black.svg'

const Header = () => {
    return (
        <div className='header'>
            <img src={image} alt='logo Groupomania'/>
        </div>
    );
};

export default Header;