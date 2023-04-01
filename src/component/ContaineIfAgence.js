import React, { useEffect, useState } from 'react'
import imgProfile from './imgProfile.png'
import Kaba from './pngtree-kaba-house-png-image_6104065.png'

function ContaineIfAgence({selectionner}) {

    let pelerinStatut;

    if (selectionner) {
        if(selectionner.statut === '') {
            pelerinStatut = <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-hourglass-split" viewBox="0 0 16 16">
                <path d="M2.5 15a.5.5 0 1 1 0-1h1v-1a4.5 4.5 0 0 1 2.557-4.06c.29-.139.443-.377.443-.59v-.7c0-.213-.154-.451-.443-.59A4.5 4.5 0 0 1 3.5 3V2h-1a.5.5 0 0 1 0-1h11a.5.5 0 0 1 0 1h-1v1a4.5 4.5 0 0 1-2.557 4.06c-.29.139-.443.377-.443.59v.7c0 .213.154.451.443.59A4.5 4.5 0 0 1 12.5 13v1h1a.5.5 0 0 1 0 1h-11zm2-13v1c0 .537.12 1.045.337 1.5h6.326c.216-.455.337-.963.337-1.5V2h-7zm3 6.35c0 .701-.478 1.236-1.011 1.492A3.5 3.5 0 0 0 4.5 13s.866-1.299 3-1.48V8.35zm1 0v3.17c2.134.181 3 1.48 3 1.48a3.5 3.5 0 0 0-1.989-3.158C8.978 9.586 8.5 9.052 8.5 8.351z"/>
            </svg>
        } else if(selectionner.statut === true) {
            pelerinStatut = <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-file-earmark-check" viewBox="0 0 16 16">
                <path d="M10.854 7.854a.5.5 0 0 0-.708-.708L7.5 9.793 6.354 8.646a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0l3-3z"/>
                <path d="M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2zM9.5 3A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5v2z"/>
            </svg>
        } else if (selectionner.statut === false) {
            pelerinStatut = <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-x-square-fill mx-2" viewBox="0 0 16 16">
                <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm3.354 4.646L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 1 1 .708-.708z"/>
            </svg>
        }
    }

    const showing = selectionner ? 
    (<div style={{height:'500px', width:'500px', background:'red', margin:'20px auto', borderRadius:'20px', background: '#C6C1BD'}}>
        <h1 style={{textAlign:'right', paddingRight:'30px'}}>statut : 
            {
                pelerinStatut
            }
        </h1>
        <div>
            <img style={{width:'400px', borderRadius:'100%'}} src={imgProfile} alt='Profile' />
        </div>
        <div style={{textAlign:'left', paddingLeft:'30px'}}>
            <h6>Pèlerin id : {selectionner.id}</h6>
            <h3>Nom : {selectionner.name}</h3>
            <h3>Date de naissance : {selectionner.dateNaissance}</h3>
            <h3>Lieu de naissance : {selectionner.lieuNaissance}</h3>
            <h3>Residence : {selectionner.residence}</h3>
            <h3>PassPort : {selectionner.passPort}</h3>
        </div>
    </div>
    ) : (<h1 style={{marginTop:'200px'}}>Choisissez un Pèlerin</h1>);

    
  return (
    <div>
        {
            showing
        }
    </div>
  )
}

export default ContaineIfAgence