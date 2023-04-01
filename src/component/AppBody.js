import React, { Fragment, useContext, useRef, useState } from 'react'
import imgProfile from './imgProfile.png'
import Kaba from './pngtree-kaba-house-png-image_6104065.png'
import { userContext } from './MyContext'
// import PelerinMoreInfo from './pelerinMoreInfo'
import ContaineIfAgence from './ContaineIfAgence'
import ContaineIfAdmin from './ContaineIfAdmin'

// import { pelerinSelectioner } from './Aside'

function AppBody() {

  const elementRef = useRef();

  const [pelerinSelectioner, setPelerinSelectioner] = useState('')

  const user = useContext(userContext)

  const handleChoix = (a) => {
    setPelerinSelectioner(a)

    let r = document.querySelectorAll('.itemAgence')
    let rr = Array.from(r);
console.log(rr)

    rr.map(item => {
      item.style.background ='#C6C1BD';
    })

    let id = `${a.id}`;
    let t = document.getElementById(id)
    t.style.background = '#A45C48';
    t.style.borderRadius = '20px 0px 0px 20px';
  }

  let laBonne;
  
  let listeAgence = JSON.parse(localStorage.userIdentifiants);
  let listePelerin2 = JSON.parse(localStorage.pelerin);
  let laBonneListeDePelerin;

  const witchListe = (e) => {
    if(e === 'Agence') {
      laBonneListeDePelerin = listePelerin2.filter((item) => item.parentAgenceId === user.id)
      return (
        laBonne = laBonneListeDePelerin.map((item, index) => {
          return (
            <div onClick={() => handleChoix(item)} key={index} id={item.id} className={`itemAgence ${item.id}`} style={{background: '#C6C1BD', borderRadius: '20px 0px 0px 20px'}}>
              <div className='hehe' style={{ display: 'flex', alignItems: 'center', margin: '5px 0', borderRadius: '20px 0px 0px 20px', padding: '5px', height: '60px' }}>
                <div><img style={{ width: '50px', borderRadius: '100%' }} src={imgProfile} alt="K" /></div>
                <div><h3 style={{ margin: '0 10px', minWidth:'150px', textAlign:'left' }}>{item.name}</h3></div>
                <div style={{marginLeft:'5px', marginRight:'5px'}}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-hourglass-split" viewBox="0 0 16 16">
                    <path d="M2.5 15a.5.5 0 1 1 0-1h1v-1a4.5 4.5 0 0 1 2.557-4.06c.29-.139.443-.377.443-.59v-.7c0-.213-.154-.451-.443-.59A4.5 4.5 0 0 1 3.5 3V2h-1a.5.5 0 0 1 0-1h11a.5.5 0 0 1 0 1h-1v1a4.5 4.5 0 0 1-2.557 4.06c-.29.139-.443.377-.443.59v.7c0 .213.154.451.443.59A4.5 4.5 0 0 1 12.5 13v1h1a.5.5 0 0 1 0 1h-11zm2-13v1c0 .537.12 1.045.337 1.5h6.326c.216-.455.337-.963.337-1.5V2h-7zm3 6.35c0 .701-.478 1.236-1.011 1.492A3.5 3.5 0 0 0 4.5 13s.866-1.299 3-1.48V8.35zm1 0v3.17c2.134.181 3 1.48 3 1.48a3.5 3.5 0 0 0-1.989-3.158C8.978 9.586 8.5 9.052 8.5 8.351z"/>
                  </svg>  
                </div>
              </div>
            </div>
          )
        })
      )
    } else {
      return (
        laBonne = listeAgence.map((item, index) => {
          return (
            <div onClick={() => handleChoix(item)} key={index} id={item.id} className={`itemAgence ${item.id}`} style={{background: '#C6C1BD', borderRadius: '20px 0px 0px 20px'}}>
              <div className='hehe' style={{ display: 'flex', alignItems: 'center', margin: '5px 0', borderRadius: '20px 0px 0px 20px', padding: '5px', height: '60px' }}>
                <div><img style={{ width: '50px', borderRadius: '100%' }} src={Kaba} alt="K" /></div>
                <div><h3 style={{ margin: '0 10px' }}>{item.agenceInfo.name}</h3></div>
              </div>
            </div>
          )
        })
      )
    }
  }

  witchListe(user.statut);

  // ---------------------------------

  // const user = useContext(userContext)

  const divInfoAgence = user.statut === 'Agence' ? (
    <div className='row' style={{display:'flex'}}>
      <div className='col-2 text-start px-4'>
        <img style={{ width: '100px', borderRadius: '100%' }} src={Kaba} alt='Kaba' />
      </div>
      <div className='col-10 text-start px-4'>
        <h6>Agence id : {user.id}</h6>
        <h2>Agence : {user.agenceInfo.name}</h2>
        <h5>Description : {user.agenceInfo.description}</h5>
      </div>
    </div>
  ) : ('');

  // const listePelerin = JSON.parse(localStorage.pelerin).map((item, index) => {
  //   return(
  //     <div key={index}>
  //       <div className='listePelerin' style={{paddingLeft:'10px', paddingRight:'10px'}}>
  //         <div className='itemPelerin' style={{display:'flex', alignItems:'center', margin:'5px 0', background:'#C6C1BD', borderRadius:'20px 20px 20px 20px', padding:'5px', height:'60px'}}>
  //           <div><img style={{width:'50px', borderRadius:'100%'}} src={imgProfile} alt="K" /></div>
  //           <div><h3 style={{margin:'0 10px', width:'370px', textAlign:'left'}}>{item.name}</h3></div>
  //           <div style={{marginLeft:'5px', marginRight:'5px'}}>
  //             <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-hourglass-split" viewBox="0 0 16 16">
  //               <path d="M2.5 15a.5.5 0 1 1 0-1h1v-1a4.5 4.5 0 0 1 2.557-4.06c.29-.139.443-.377.443-.59v-.7c0-.213-.154-.451-.443-.59A4.5 4.5 0 0 1 3.5 3V2h-1a.5.5 0 0 1 0-1h11a.5.5 0 0 1 0 1h-1v1a4.5 4.5 0 0 1-2.557 4.06c-.29.139-.443.377-.443.59v.7c0 .213.154.451.443.59A4.5 4.5 0 0 1 12.5 13v1h1a.5.5 0 0 1 0 1h-11zm2-13v1c0 .537.12 1.045.337 1.5h6.326c.216-.455.337-.963.337-1.5V2h-7zm3 6.35c0 .701-.478 1.236-1.011 1.492A3.5 3.5 0 0 0 4.5 13s.866-1.299 3-1.48V8.35zm1 0v3.17c2.134.181 3 1.48 3 1.48a3.5 3.5 0 0 0-1.989-3.158C8.978 9.586 8.5 9.052 8.5 8.351z"/>
  //             </svg>  
  //           </div>
  //           <div style={{marginLeft:'5px', marginRight:'5px'}}>
  //             <PelerinMoreInfo pelerinInfo={item} />
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //   )
  // })

  const functionCorpsAppBody = (a) => {
    if(a === 'Agence') {
      return <ContaineIfAgence selectionner={pelerinSelectioner} />
    } else {
      return <ContaineIfAdmin selectionner={pelerinSelectioner} />
    }
  }
    
  return (
    <Fragment>
        <div style={{background:'#C6C1BD', marginTop:'5px',marginBottom:'10px', borderRadius:'20px 20px 20px 20px'}}>
          {
            divInfoAgence
          }
        </div>
        {
          functionCorpsAppBody(user.statut)
        }
        <div style={{minHeight:'425px',maxHeight:'425px', minWidth:'280px', maxWidth:'280px', position:'absolute', left:'120px', top:'380px', overflowY: 'scroll'}}>
          {
            laBonne
          }
        </div>
    </Fragment>
  )
}

export default AppBody