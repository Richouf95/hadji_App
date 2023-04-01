import React, { Fragment, useContext } from 'react'
import { userContext } from './MyContext'
import AddAgence from './addData/AddAgence';
import AddPelerin from './addData/AddPelerin';

// export let pelerinSelectioner;
function Aside() {

  // const handleChoix = (a) => {
  //   return pelerinSelectioner = a;
  // }

  const user = useContext(userContext)

  // let laBonne;
  
  // let listeAgence = JSON.parse(localStorage.userIdentifiants);
  // let listePelerin = JSON.parse(localStorage.pelerin);

  // const witchListe = (e) => {
  //   if(e === 'Agence') {
  //     return (
  //       laBonne = listePelerin.map((item, index) => {
  //         return (
  //           <div onClick={() => handleChoix(item)} key={index} className='itemAgence' style={{ display: 'flex', alignItems: 'center', margin: '5px 0', background: '#A45C48', borderRadius: '20px 0px 0px 20px', padding: '5px', height: '60px' }}>
  //             <div><img style={{ width: '50px', borderRadius: '100%' }} src={imgProfile} alt="K" /></div>
  //             <div><h3 style={{ margin: '0 10px', minWidth:'150px', textAlign:'left' }}>{item.name}</h3></div>
  //             <div style={{marginLeft:'5px', marginRight:'5px'}}>
  //               <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-hourglass-split" viewBox="0 0 16 16">
  //                 <path d="M2.5 15a.5.5 0 1 1 0-1h1v-1a4.5 4.5 0 0 1 2.557-4.06c.29-.139.443-.377.443-.59v-.7c0-.213-.154-.451-.443-.59A4.5 4.5 0 0 1 3.5 3V2h-1a.5.5 0 0 1 0-1h11a.5.5 0 0 1 0 1h-1v1a4.5 4.5 0 0 1-2.557 4.06c-.29.139-.443.377-.443.59v.7c0 .213.154.451.443.59A4.5 4.5 0 0 1 12.5 13v1h1a.5.5 0 0 1 0 1h-11zm2-13v1c0 .537.12 1.045.337 1.5h6.326c.216-.455.337-.963.337-1.5V2h-7zm3 6.35c0 .701-.478 1.236-1.011 1.492A3.5 3.5 0 0 0 4.5 13s.866-1.299 3-1.48V8.35zm1 0v3.17c2.134.181 3 1.48 3 1.48a3.5 3.5 0 0 0-1.989-3.158C8.978 9.586 8.5 9.052 8.5 8.351z"/>
  //               </svg>  
  //             </div>
  //           </div>
  //         )
  //       })
  //     )
  //   } else {
  //     return (
  //       laBonne = listeAgence.map((item, index) => {
  //         return (
  //           <div key={index} className='itemAgence' style={{ display: 'flex', alignItems: 'center', margin: '5px 0', background: '#A45C48', borderRadius: '20px 0px 0px 20px', padding: '5px', height: '60px' }}>
  //             <div><img style={{ width: '50px', borderRadius: '100%' }} src={Kaba} alt="K" /></div>
  //             <div><h3 style={{ margin: '0 10px' }}>{item.agenceInfo.name}</h3></div>
  //           </div>
  //         )
  //       })
  //     )
  //   }
  // }

  // witchListe(user.statut);

  const titleAddNew = user.statut === 'Admin' ? (<h2 style={{ color: '#C6C1BD', marginTop: '10px' }}>Ajouter Agence</h2>) : (<h2 style={{ color: '#C6C1BD', marginTop: '10px' }}>Ajouter Pèlerin</h2>);

  const btnAddNew = user.statut === 'Admin' ? (<AddAgence />) : (<AddPelerin />);

  return (
    <Fragment>
      {
        titleAddNew
      }
      
      {
        btnAddNew
      }
      
      <input style={{ background: '#C6C1BD', width: '95%' }} className="form-control my-3" list="datalistOptions" id="exampleDataList" placeholder="Type to search..." />
      {/* <datalist id="datalistOptions">
        {
          laBonne.map((item, index) => {
            return <option key={index} value={item.agenceInfo.name} />
          })
        }
      </datalist> */}

      <div className='listeAgence' style={{ paddingLeft: '10px' }}>
        {/* {
          laBonne
        } */}
      </div>

    </Fragment>
  )
}

export default Aside