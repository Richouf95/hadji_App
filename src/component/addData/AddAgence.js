import React, { useRef } from 'react'
import { v4 as uuid } from 'uuid';
// import { userIdentifiantsJSON } from '../Connex';
// import { agenceGroupeinfoJSON } from '../Data';
// import { parse, stringify } from 'flatted';

function AddAgence() {

    let aa = uuid();

    const transformToJson = (a) => {
        let z = JSON.stringify(a);
        localStorage.setItem('userIdentifiants', z)
    }

    const agenceNameRef = useRef();
    const agenceDescriptionRef = useRef();
    const agenceIdentifiantRef = useRef();
    const agencePasseWordRef = useRef();

    const handCreateAgence = () => {
        const idGenerate = uuid();

        // Pour identifiant
        // const newAgenceInfosIdentifiant = {
        //     statut: 'agence',
        //     identifiant: agenceIdentifiantRef.current.value,
        //     pwd: agencePasseWordRef.current.value,
        //     id: idGenerate,
        //     agenceInfo: {
        //         id: idGenerate,
        //         name: agenceNameRef.current.value,
        //         description: agenceDescriptionRef.current.value,
        //         profilePhoto: agenceImageRef
        //     },
        //     pelerin: ''
        // }

        let x = JSON.parse(localStorage.getItem('userIdentifiants'));
        localStorage.removeItem('userIdentifiants')
        let y = [...x, {
            statut: 'Agence',
            identifiant: agenceIdentifiantRef.current.value,
            pwd: agencePasseWordRef.current.value,
            id: idGenerate,
            agenceInfo: {
                id: idGenerate,
                name: agenceNameRef.current.value,
                description: agenceDescriptionRef.current.value
            }
        }];
        transformToJson(y)
        console.log(y)
        window.location.reload();
    }

  return (
    <div>
        {/* <!-- Button trigger modal --> */}
        <button style={{ background: '#FFC000' }} type="button" className="btn px-5 fs-3" data-bs-toggle="modal" data-bs-target={`#staticBackdropAddAgence${aa}`}>
        +
        </button>

        {/* <!-- Modal --> */}
        <div className="modal fade" id={`staticBackdropAddAgence${aa}`} data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                <div className="modal-header">
                    <h1 className="modal-title fs-5" id="staticBackdropLabel">Ajouter une nouvelle agence</h1>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                    <form>
                        <div className='input-group mb-3'>
                            <input ref={agenceNameRef} type="text"  className="form-control" placeholder="Nom de l'agence" id="text"  required  />
                        </div>
                        <div className='input-group mb-3'>
                            <input ref={agenceDescriptionRef} type="text"  className="form-control" placeholder="Description de l'agence" id="text"  required  />
                        </div>
                        <hr />
                        <div className='input-group mb-3'>
                            <input ref={agenceIdentifiantRef} type="text"  className="form-control" placeholder="Identifiant" id="text"  required  />
                        </div>
                        <div className='input-group mb-3'>
                            <input ref={agencePasseWordRef} type="text"  className="form-control" placeholder="Mot de passe" id="text"  required  />
                        </div>
                    </form>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Annuler</button>
                    <button onClick={handCreateAgence} type="button" className="btn btn-primary" data-bs-dismiss="modal">Créer</button>
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AddAgence