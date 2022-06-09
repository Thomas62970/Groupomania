import React, {useState} from 'react';


const Connection = () => {
        const [index, setIndex] = useState(0)
    return (
        <div className='bloc-connect'>
            <div >
                <h1>Bienvenue chez Groupomania</h1>
            </div>
            <div className='btn-ins-log'>
                <button onClick={()=>{if(index === 0){setIndex(index + 2)}else{setIndex(index - 2)}}}>Inscription/Login</button>{console.log(index)}
            </div>
            <div className='inscription' style={{zIndex:1}}>
                <h2>Inscription</h2>
                <form>
                    <label>Email : <input  type="email" required="required"></input></label>
                    <label>Nom : <input  type="text" required="required"></input></label>
                    <label>Prénom : <input  type="text" required="required"></input></label>
                    <label>Mot de passe : <input  type="password" required="required"></input></label>
                    <input type='submit' value='Valider' className='valider'></input>
                </form>
            </div>
            <div className='login' style={{zIndex:index}}>
                <h2>Connection</h2>
                <form>
                    <label>Email : <input  type="email" required="required"></input></label>
                    <label>Mot de passe : <input  type="password" required="required"></input></label>
                    <input type='submit' value='Valider' className='valider'></input>
                </form>
            </div>
        </div>
    );
};

export default Connection;