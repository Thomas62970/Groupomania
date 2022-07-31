import React  from 'react';
import axios from 'axios';
import { increment } from '../feature/indexSlice';
import { useDispatch } from 'react-redux';

const api = axios.create({
    baseURL: 'http://127.0.0.1:3000/api/auth'
})

const Inscription = () => {
    const dispatch = useDispatch()
    class Inscription extends React.Component{
    constructor(props){
        super(props);
        this.state = [];
        this.state =  {
            email: '',
            nom: '',
            prenom: '',
            password: '',
        }
        this.handleChange = this.handleChange.bind(this)
        this.validLogin = this.validLogin.bind(this)
    }

    handleChange (e){
        const name = e.target.name
        this.setState({
           [name]: e.target.value, 
        })
    }
    validLogin = async () =>{
        const res = await api.post('/signup', {
            email: this.state.email,
            nom: this.state.nom,
            prenom: this.state.prenom,
            password: this.state.password,
        })
        .then((response) => {
            localStorage.setItem("token", "Bearer " + response.data.token)
            console.log(response.data.userId)
            console.log(response.data.moderator)
            localStorage.setItem("id", response.data.userId)
            localStorage.setItem("moderator", response.data.moderator)
        })
          .catch((error) =>{
            res.status(400).json({error});
          })
    }
    render (){
        return <div className='inscription'>
            <h2>Inscription</h2>
            <form onSubmit={this.validLogin}>
            <label htmlFor="email">Email</label>
            <input id="email" name="email" value={this.state.email} onChange={this.handleChange} />
            <label htmlFor="nom">Nom</label>
            <input id="nom" name="nom" value={this.state.nom} onChange={this.handleChange} />
            <label htmlFor="prenom">Prénom</label>
            <input id="prenom" name="prenom" value={this.state.prenom} onChange={this.handleChange} />
            <label htmlFor="password">Password</label>
            <input id="password" name="password" value={this.state.password} onChange={this.handleChange} />
            <button className='valider' type='submit' >valider</button>
            </form>
            <button className='btnIndex' onClick={() => dispatch(increment())}>Déja un compte?</button>
        </div>
        
    }
}
   
    return(
        <div>
            <Inscription/>
        </div>

    )
};

export default Inscription;