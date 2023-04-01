import React, { useContext, useRef } from 'react'
import {v4 as uuid} from 'uuid';
import { userContext } from '../MyContext';

function AddPelerin() {

    const user = useContext(userContext)
    const parentAgenceId = user.id

    let bb = uuid();

    const pelerinNameRef = useRef();
    const pelerinTelRef = useRef();
    const pelerinlieuNaissanceRef = useRef();
    const pelerinDatenaissanceRef = useRef();
    const pelerinResidenceRef = useRef();
    const pelerinPassportRef = useRef();

    const transformToJson = (a) => {
        let z = JSON.stringify(a);
        localStorage.setItem('pelerin', z)
    }

    const handleAddPelerin = () => {
        const idGenerate = uuid();

        let x = JSON.parse(localStorage.getItem('pelerin'));
        localStorage.removeItem('pelerin')
        let y = [...x, {
            parentAgenceId: parentAgenceId,
            id: idGenerate,
            name: pelerinNameRef.current.value,
            lieuNaissance: pelerinlieuNaissanceRef.current.value,
            dateNaissance: pelerinDatenaissanceRef.current.value,
            residence: pelerinResidenceRef.current.value,
            passPort: pelerinPassportRef.current.value,
            statut: ''
        }]
        transformToJson(y)
        window.location.reload();
    }

  return (
    <div>
        {/* <!-- Button trigger modal --> */}
        <button style={{ background: '#FFC000' }} type="button" className="btn px-5 fs-3" data-bs-toggle="modal" data-bs-target={`#staticBackdropAddPelerin${bb}`}>
        +
        </button>

        {/* <!-- Modal --> */}
        <div className="modal fade" id={`staticBackdropAddPelerin${bb}`} data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div className="modal-dialog">
            <div className="modal-content">
                <div className="modal-header">
                    <h1 className="modal-title fs-5" id="staticBackdropLabel">Ajouter un nouveau pèlerin</h1>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                    <form>
                        <div className='input-group mb-3'>
                            <input ref={pelerinNameRef} type="text"  className="form-control" placeholder="Nom de du pèlerin" id="text"  required  />
                        </div>
                        <div className='input-group mb-3'>
                            <input ref={pelerinTelRef} type="text"  className="form-control" placeholder="Téléphone du Pèlerin" id="text"  required  />
                        </div>
                        <div className='input-group mb-3'>
                            <input ref={pelerinlieuNaissanceRef} type="text" className="form-control" placeholder="Lieu de Naissance" id="inputGroupFile02" />
                        </div>
                        <div className='input-group mb-3'>
                            <input ref={pelerinDatenaissanceRef} type="date" className="form-control"  id="inputGroupFile02" />
                        </div>
                        <div className='input-group mb-3'>
                            <input ref={pelerinResidenceRef} type="text" className="form-control" placeholder="Residence" id="inputGroupFile02" />
                        </div>
                        <div className='input-group mb-3'>
                            <input ref={pelerinPassportRef} type="text" className="form-control" placeholder="Numero de passport" id="inputGroupFile02" />
                        </div>
                    </form>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Annuler</button>
                    <button onClick={handleAddPelerin} type="button" className="btn btn-primary" data-bs-dismiss="modal">Créer</button>
                </div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default AddPelerin