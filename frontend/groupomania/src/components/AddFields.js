import React from 'react';
import axios from 'axios'

const api = axios.create({
    baseURL: 'http://127.0.0.1:3000/api/publication'
})

const AddFields = () => {

    class AddFields extends React.Component{
        constructor(props){
            super(props);
            this.state = [];
            this.state = {
                texte: '',
                image: '',
                Headers:{
                    Authorization: localStorage.getItem('token')
                }
            }
            this.handleChange = this.handleChange.bind(this);
            this.addPubli = this.addPubli.bind(this);
        }
        handleChange (e){
            const name = e.target.name
            this.setState({
               [name]: e.target.value, 
            })
        }
        addPubli= async() =>{
            await api.post('/', {
                texte: this.state.texte,
                image: this.state.image,
            })
            .then((res) =>{
                console.log(res);
                window.location = '/fields';
            })
            .catch((err) =>{
                console.log(err);
            })
        }
        render (){
            return <div className='blocAdd'>
                <h2>Publier</h2>
                <form onSubmit={this.addPubli}>
                    <label htmlFor='texte'>Votre texte</label>
                    <textarea rows='3' cols='40' id="texte" name="texte" value={this.state.texte} onChange={this.handleChange} />
                    <label htmlFor='image'>Un contenu multimédia ?</label>
                    <input type='file' id='image' name='image' accept='image/*' value={this.state.image}  onChange={this.handleChange} />
                    <button className='publier' type='submit' >Publier</button>
                </form>
            </div>
        }
    }
    
    return (
        <div>
            <AddFields/>
        </div>
    );
};

export default AddFields;