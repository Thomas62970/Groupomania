import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FaThumbsUp } from 'react-icons/fa'

const AllFields = () => {
    const [fields, setFields] = useState([])
    useEffect(() => {
        const fieldsData = () =>{
            axios('http://127.0.0.1:3000/api/publication')
            .then((res)=>{
                    setFields(res.data)
            })
        }
        fieldsData();
    },[])
    console.log(fields[0]);
    let users 
        const userData = async () =>{
            for(let i = 0; i < fields.length; i++){
                
                 axios(`http://127.0.0.1:3000/api/auth/${fields[i].user_Id}`)
                .then((res)=>{
                    users[i] = json(res.data)
                })
                    /*publi[i] =  {
                        nom: res.data.id,
                        id : fields[i].id,
                        texte: fields[i].texte,
                        image: fields[i].image,
                        like: fields[i].like
                    }*/
                    
                }
                
            }
            userData();
                                        
        
         
    console.log(users);
    
    let publi = []
       /* for(let i = 0; i < fields.length; i++){

                    publi[i] = {
                        nom: users.id,
                        id : fields[i].id,
                        texte: fields[i].texte,
                        image: fields[i].image,
                        like: fields[i].like
                    }
                    console.log(users);
        }*/

    console.log(publi);


    



    return (
        <div className='blocPubli'>
            {publi.map(item =>(
                 <div key={item.id} className='publi'>
                    <p>Nom: {item.nom} {item.prenom}</p>
                    <p>{item.texte}</p>
                    <img  src={item.image} alt='logo'/>
                    <p><button><FaThumbsUp/></button>{item.like}</p>
                </div>
            ))}
        </div>
    );
};

export default AllFields;