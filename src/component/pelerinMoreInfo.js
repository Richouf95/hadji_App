import React from 'react'
import imgProfile from './imgProfile.png'

function PelerinMoreInfo({pelerinInfo}) {

    const transformToJsonTrue = (a) => {
        let z = JSON.stringify(a);
        localStorage.removeItem('pelerin');
        localStorage.setItem('pelerin', z)
    }

    const transformToJsonFalse = (a) => {
        let z = JSON.stringify(a);
        localStorage.removeItem('pelerin');
        localStorage.setItem('pelerin', z)
    }
    
    const handleAccpterPelerin = () => {
        const localPelerin = JSON.parse(localStorage.pelerin);
        let copyLocalPelerin = localPelerin;
        console.log(copyLocalPelerin)
        copyLocalPelerin.map((item) => {
            if (item.id === pelerinInfo.id) {
                return item.statut = true;
            }
            return;
        })
        transformToJsonTrue(copyLocalPelerin)
        window.location.reload();
    }

    const handleRejeterPelerin = () => {
        const localPelerin = JSON.parse(localStorage.pelerin);
        let copyLocalPelerin = localPelerin;
        console.log(copyLocalPelerin)
        copyLocalPelerin.map((item) => {
            if (item.id === pelerinInfo.id) {
                return item.statut = false;
            }
            return;
        })
        transformToJsonFalse(copyLocalPelerin)
        window.location.reload();
    }

  return (
    <>
        {/* <!-- Button trigger modal --> */}
        <button style={{background:'#FFC000', border:'none'}} type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target={`#exampleModal${pelerinInfo.id}`}>
        Voir
        </button>

        {/* <!-- Modal --> */}
        <div style={{marginTop:'100px'}} className="modal fade" id={`exampleModal${pelerinInfo.id}`} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                <div className="modal-header"  style={{background:'#C6C1BD'}}>
                    <h1 className="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body" style={{background:'#C6C1BD'}}>
                    <div>
                        <img style={{width:'400px', borderRadius:'100%'}} src={imgProfile} alt='Profile' />
                    </div>
                    <div style={{textAlign:'left'}}>
                        <h6>Pèlerin id : {pelerinInfo.id}</h6>
                        <h2>Nom : {pelerinInfo.name}</h2>
                        <h2>Date de naissance : {pelerinInfo.dateNaissance}</h2>
                        <h2>Lieu de naissance : {pelerinInfo.lieuNaissance}</h2>
                        <h2>Residence : {pelerinInfo.residence}</h2>
                        <h2>PassPort : {pelerinInfo.passPort}</h2>
                    </div>
                </div>
                <div className="modal-footer" style={{background:'#C6C1BD', display:'flex', justifyContent:'center'}}>
                    <button onClick={handleAccpterPelerin} style={{ background: '#FFC000', color:'black', border:"none" }} type="button" className="btn btn-primary" data-bs-dismiss="modal">
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-file-earmark-check" viewBox="0 0 16 16">
                            <path d="M10.854 7.854a.5.5 0 0 0-.708-.708L7.5 9.793 6.354 8.646a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0l3-3z"/>
                            <path d="M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2zM9.5 3A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5v2z"/>
                        </svg>
                        Accepter
                    </button>
                    <button onClick={handleRejeterPelerin} style={{background:'#A45C48', color:'black', border:'none'}} type="button" className="btn btn-primary" data-bs-dismiss="modal">
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-x-square-fill mx-2" viewBox="0 0 16 16">
                            <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm3.354 4.646L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 1 1 .708-.708z"/>
                        </svg>
                        rejeter
                    </button>
                </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default PelerinMoreInfo