import React from 'react'
import imgProfile from './imgProfile.png'
import PelerinMoreInfo from './pelerinMoreInfo';
import Kaba from './pngtree-kaba-house-png-image_6104065.png'

function ContaineIfAdmin({selectionner}) {

    // if (item.statut === '') {
    //   pelerinStatut =  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-hourglass-split" viewBox="0 0 16 16">
    //     <path d="M2.5 15a.5.5 0 1 1 0-1h1v-1a4.5 4.5 0 0 1 2.557-4.06c.29-.139.443-.377.443-.59v-.7c0-.213-.154-.451-.443-.59A4.5 4.5 0 0 1 3.5 3V2h-1a.5.5 0 0 1 0-1h11a.5.5 0 0 1 0 1h-1v1a4.5 4.5 0 0 1-2.557 4.06c-.29.139-.443.377-.443.59v.7c0 .213.154.451.443.59A4.5 4.5 0 0 1 12.5 13v1h1a.5.5 0 0 1 0 1h-11zm2-13v1c0 .537.12 1.045.337 1.5h6.326c.216-.455.337-.963.337-1.5V2h-7zm3 6.35c0 .701-.478 1.236-1.011 1.492A3.5 3.5 0 0 0 4.5 13s.866-1.299 3-1.48V8.35zm1 0v3.17c2.134.181 3 1.48 3 1.48a3.5 3.5 0 0 0-1.989-3.158C8.978 9.586 8.5 9.052 8.5 8.351z"/>
    //   </svg>  
    // } else if(item.statut === true) {
    //   pelerinStatut = <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-file-earmark-check" viewBox="0 0 16 16">
    //       <path d="M10.854 7.854a.5.5 0 0 0-.708-.708L7.5 9.793 6.354 8.646a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0l3-3z"/>
    //       <path d="M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2zM9.5 3A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5v2z"/>
    //   </svg>
    // } else if (item === false) {
    //   pelerinStatut = <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-x-square-fill mx-2" viewBox="0 0 16 16">
    //       <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm3.354 4.646L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 1 1 .708-.708z"/>
    //   </svg>
    // }

    const listePelerin = JSON.parse(localStorage.pelerin);
    let listeTrier;
    let listeTrierShow;
    if(selectionner) {
      listeTrier = listePelerin.filter((item)  => item.parentAgenceId === selectionner.id);
      if(listeTrier.length !== 0) {
        listeTrierShow = listeTrier.map((item, index) => {
          let pelerinStatut;
          if (item.statut === '') {
            pelerinStatut = <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-hourglass-split" viewBox="0 0 16 16">
              <path d="M2.5 15a.5.5 0 1 1 0-1h1v-1a4.5 4.5 0 0 1 2.557-4.06c.29-.139.443-.377.443-.59v-.7c0-.213-.154-.451-.443-.59A4.5 4.5 0 0 1 3.5 3V2h-1a.5.5 0 0 1 0-1h11a.5.5 0 0 1 0 1h-1v1a4.5 4.5 0 0 1-2.557 4.06c-.29.139-.443.377-.443.59v.7c0 .213.154.451.443.59A4.5 4.5 0 0 1 12.5 13v1h1a.5.5 0 0 1 0 1h-11zm2-13v1c0 .537.12 1.045.337 1.5h6.326c.216-.455.337-.963.337-1.5V2h-7zm3 6.35c0 .701-.478 1.236-1.011 1.492A3.5 3.5 0 0 0 4.5 13s.866-1.299 3-1.48V8.35zm1 0v3.17c2.134.181 3 1.48 3 1.48a3.5 3.5 0 0 0-1.989-3.158C8.978 9.586 8.5 9.052 8.5 8.351z"/>
            </svg> 
          } else if(item.statut === true) {
            pelerinStatut = <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-file-earmark-check" viewBox="0 0 16 16">
                <path d="M10.854 7.854a.5.5 0 0 0-.708-.708L7.5 9.793 6.354 8.646a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0l3-3z"/>
                <path d="M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2zM9.5 3A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5v2z"/>
            </svg>
          } else if (item.statut === false) {
            pelerinStatut = <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-x-square-fill mx-2" viewBox="0 0 16 16">
                <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm3.354 4.646L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 1 1 .708-.708z"/>
            </svg>
          }
          return(
            <div key={index}>
              <div className='listePelerin' style={{paddingLeft:'10px', paddingRight:'10px'}}>
                <div className='itemPelerin' style={{display:'flex', alignItems:'center', margin:'5px 0', background:'#C6C1BD', borderRadius:'20px 20px 20px 20px', padding:'5px', height:'60px'}}>
                  <div><img style={{width:'50px', borderRadius:'100%'}} src={imgProfile} alt="K" /></div>
                  <div><h3 style={{margin:'0 10px', width:'370px', textAlign:'left'}}>{item.name}</h3></div>
                  <div style={{marginLeft:'5px', marginRight:'5px'}}>
                    {
                      pelerinStatut
                    } 
                  </div>
                  <div style={{marginLeft:'5px', marginRight:'5px'}}>
                    <PelerinMoreInfo pelerinInfo={item} />
                  </div>
                </div>
              </div>
            </div>
          )
        })
      } else {
        return listeTrierShow = <h1 style={{marginTop:'300px'}}>Liste Vide !</h1>
      }
    }

    const showing = selectionner ? (
      listeTrierShow
    ) : (<h1 style={{marginTop:'250px'}}>Choisissez une Agence</h1>);

    const divInfoAgence = selectionner ? (
      <div className='row' style={{display:'flex', background: 'rgb(198, 193, 189)', borderRadius:'20px', marginTop:'5px', marginBottom:'15px', width:'95%', margin:'auto'}}>
        <div className='col-2 text-start px-4'>
          <img style={{ width: '100px', borderRadius: '100%' }} src={Kaba} alt='Kaba' />
        </div>
        <div className='col-10 text-start px-4'>
          <h6>Agence id : {selectionner.id}</h6>
          <h2>Agence : {selectionner.agenceInfo.name}</h2>
          <h5>Description : {selectionner.agenceInfo.description}</h5>
        </div>
      </div>
    ) : ('');
    
  return (
    <div>
        <div>
          {
            divInfoAgence
          }
        </div>
        <div style={{marginTop:'10px'}}>
          <h3>Liste des pelerins</h3>
        </div>
        {
          showing
        }
    </div>
  )
}

export default ContaineIfAdmin