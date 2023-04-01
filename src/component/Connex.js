import React, {useRef, useState} from 'react'
import Kaba from './pngtree-kaba-house-png-image_6104065.png'
import {userContext} from './MyContext'
import Dashboard from './Dashboard';

let userConnected;

function Connex() {

    const conn = [...JSON.parse(localStorage.getItem('userIdentifiants')), {
        statut: 'Admin',
        identifiant: 'admin',
        pwd: 'admin'
    }]

    const [connectState, setConnectState] = useState(false)

    const idInputRef = useRef();
    const pwdInputRef = useRef();

    const transformToJson = (a) => {
        let z = JSON.stringify(a);
        localStorage.setItem('enLigne', z)
    }

    let connecterOuPas;

    let connecter;

    let pasConnecter;

    if(localStorage.enLigne) {
        userConnected = JSON.parse(localStorage.enLigne);
        console.log(userConnected)
        connecterOuPas = true;
        connecter = <Dashboard />;
    }

    const handleConnexionClick = () => {

        conn.map(item => {
            if(item.identifiant === idInputRef.current.value && item.pwd === pwdInputRef.current.value) {
                setConnectState(true);
                userConnected = item;
                transformToJson(item)
            }
            return item
        })

    }

    const pageShow = connectState ? (
        <Dashboard />
    ) : 
    (
        <div>
            <div>
                <img style={{width:'300px'}} src={Kaba} alt='LogoKaba'/>
            </div>
            <div className='row' style={{background:'#393738', display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center', padding:'20px'}}>
                <div>
                    <input ref={idInputRef} style={{width:'300px', background:'#C6C1BD'}} className="form-control my-3" type="text" placeholder="Entrez votre ID" aria-label="default input example" />
                </div>
                <div>
                    <input ref={pwdInputRef} style={{width:'300px', background:'#C6C1BD'}} type="password" placeholder="Entrez votre mot de passe" className="form-control my-3" id="inputPassword" />
                </div>
                <div>
                    <button onClick={handleConnexionClick} className='btn' style={{background:'#FFC000'}}>Connexion</button>
                </div>
            </div>
        </div>
    )

    const onEstBonOuPas = connecterOuPas ? (connecter) : (pageShow);

  return (
    <userContext.Provider value={userConnected}>
        {
            onEstBonOuPas
        }
    </userContext.Provider>
  )
}

export default Connex