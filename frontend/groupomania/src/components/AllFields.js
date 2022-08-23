import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FaThumbsUp } from 'react-icons/fa'


const AllFields = () => {
    
    const [fields, setFields] = useState([])
    const [users, setUsers] = useState([])
    useEffect(() => {
        fieldsData();
        console.log(fields);
    },[])
        const fieldsData = () =>{
            var users=[]
            axios('http://127.0.0.1:3000/api/publication')
            .then((res)=>{
                console.log(res.data);
                setFields(res.data);
                for(const [key, value] of res.data.entries()){
                    axios(`http://127.0.0.1:3000/api/auth/${value.user_Id}`)
                    .then((res)=>{
                        console.log(res.data.nom);
                        users[key] = res.data.nom;
                        setUsers(users);
                    })
                }
            })
        }
    
   
        

    



    return (
        <div className='blocPubli'>
            {fields.map((item, index) =>(
                 <div key={item.id} className='publi'>
                    <p>Nom: {users[index]}</p>
                    <p>{item.texte}</p>
                    <img  src={item.image} alt='logo'/>
                    <p><button><FaThumbsUp/></button>{item.like}</p>
                </div>
            ))}
        </div>
    );
};

export default AllFields;