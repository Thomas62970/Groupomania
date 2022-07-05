import React  from 'react';
import axios from 'axios';
import { decrement } from '../feature/indexSlice';
import { useDispatch } from 'react-redux';

const api = axios.create({
    baseURL: 'http://localhost:3000/api/auth'
})

const Login = () => {
    const dispatch = useDispatch();
    class Login extends React.Component{
    constructor(props){
        super(props);
        this.state = [];
        this.state =  {
            email: '',
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
        let res = await api.post('/login', {
            email: this.state.email,
            password: this.state.password
        })
        console.log(res);
    }
    
        
    render (){
        return <div className='login'>
            <h2>Connection</h2>
            <form onSubmit={this.validLogin}>
            <label htmlFor="email">Email</label>
            <input id="email" name="email" value={this.state.email} onChange={this.handleChange} />
            <label htmlFor="password">Password</label>
            <input id="password" name="password" value={this.state.password} onChange={this.handleChange} />
            <button className='valider' type='submit' >valider</button>
            </form>
            <button className='btnIndex' onClick={() => dispatch(decrement())}>Pas encore de compte?</button>
        </div>
        
    }
}
   
    return(
        <div>
            <Login/>
        </div>

    )
};

export default Login;