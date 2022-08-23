import axios from 'axios';
import React, { useEffect, useState } from 'react';




const User = () => {
    let idUser = localStorage.getItem('id');
    const [iUser, setIUser] = useState([]);
    let token = localStorage.getItem('token');

    useEffect(() => {
    const users = async () =>{
        const res = await axios(`http://127.0.0.1:3000/api/auth/${idUser}`,)
        console.log(res);
        setIUser(res.data)
    }
    users();
    },[idUser])
    console.log(iUser);
    class User extends React.Component{
        constructor(props){
            super(props);
            this.state = [];
            this.state = {
                nom: '',
                prenom: '',
                email: '',
                password:'',
                avatar: ''
            }
            this.handleChange = this.handleChange.bind(this);
            this.modify = this.modify.bind(this);
        }

        handleChange (e){
            const name = e.target.name
            this.setState({
               [name]: e.target.value, 
            })
        }
        modify = async () =>{
            let data ={
                nom: this.state.nom,
                prenom: this.state.prenom,
                email: this.state.email,
                password: this.state.password,
                avatar: this.state.avatar,
            }
            await axios.put(`http://127.0.0.1:3000/api/auth/${idUser}`, data ,{
                
                headers:{
                    Authorization: token
                }
            })
            .then((res) => {
                console.log(res);
                alert('modification éffectué')
            })  
            .catch((err)=>{
                console.log(err);
            })  
        }

    

    render (){
        return <div className='blocUser'>
                <img src={iUser.avatar} alt='logo utilisateurs'/>
                <form onSubmit={this.modify}>
                <label htmlFor='nom'>Nom</label>
                <input id="nom" name="nom" defaultValue={iUser.nom} onChange={this.handleChange} />
                <label htmlFor='prenom'>Prénom</label>
                <input id="prenom" name="prenom" defaultValue={iUser.prenom} onChange={this.handleChange} />
                <label htmlFor='email'>email</label>
                <input id="email" name="email" defaultValue={iUser.email} onChange={this.handleChange} />
                <label htmlFor='password'>Mot de Passe</label>
                <input id="password" name="password" onChange={this.handleChange} />
                <input type='file' id='avatar' name='avatar' accept='image/*' onChange={this.handleChange}/>
                <div>
                    <button  type='submit'>Modifier</button>
                    <button>Supprimer</button>
                </div>
            </form>
        </div>
    };
    }

    return(
        <User/>
    )
};

export default User;