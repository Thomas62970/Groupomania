import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const RedictUser = () => {
    let User = localStorage.getItem('id');
    const [iUser, setIUser] = useState([]);

    useEffect(() => {
    const users = async () =>{
        const res = await axios(`http://127.0.0.1:3000/api/auth/${User}`,)
        console.log(res);
        setIUser(res.data)
    }
    users();
    },[User])
    console.log(iUser);



    return (
        <div className='logoUser'>
           <Link to="/user"><img src={iUser.avatar} alt='logo utilisateur'/></Link>
            
        </div>
    );
};

export default RedictUser;