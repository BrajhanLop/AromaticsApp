import React, { useState} from 'react';
import "../../components/styles/contacto.css";


const Contacto = () => {
    
    const [name, setName] = useState('');
    const [user, setUser] = useState('');

    return (
        <div className='contactContainer'>
            <h4 className='contactTitle'>En qué podemos ayudarte? 
                <br/>
                Dejanos tu consulta y en breve te respondemos 
            </h4>
            <form>
                <div className='formContact'>
                    <input type="text" className='input' name="name" value={name} 
                            onChange={(e)=>setName(e.target.value)} 
                            placeholder='Nombre'/>
                    <input type="text" className='input' name="user" value={user} 
                            onChange={(e)=>setUser(e.target.value)} 
                            placeholder='nombre@user.com'/>
                </div>
                <div className='textArea'>
                    <textarea className='inputText' name="message" cols="60" rows="10" placeholder='Mensaje...'></textarea>
                </div>
            </form>
        </div>
    );
};


export default Contacto;