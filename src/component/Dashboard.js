import React from 'react'
import Logo from './Logo'
import Titre from './Title'
import Aside from './Aside'
import AppBody from './AppBody'
import Footer from './Footer'

function Dashboard() {

  const deconnecter = () => {
    localStorage.removeItem('enLigne');
    window.location.reload();
  }

  return (
    <div>

        <div className='row'>
            <div className='col-4' style={{height:'100px'}}><Logo /></div>
            <div className='col-8'><Titre /></div>
            <div onClick={deconnecter} style={{position:'absolute', right:'-350px', top:'30px', fontSize:'1.7em', color:'#C6C1BD'}}>
              Deconnexion 
              <svg style={{color:'#FFC000', marginLeft:'10px'}} xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-door-open-fill" viewBox="0 0 16 16">
                <path d="M1.5 15a.5.5 0 0 0 0 1h13a.5.5 0 0 0 0-1H13V2.5A1.5 1.5 0 0 0 11.5 1H11V.5a.5.5 0 0 0-.57-.495l-7 1A.5.5 0 0 0 3 1.5V15H1.5zM11 2h.5a.5.5 0 0 1 .5.5V15h-1V2zm-2.5 8c-.276 0-.5-.448-.5-1s.224-1 .5-1 .5.448.5 1-.224 1-.5 1z"/>
              </svg>
            </div>
        </div>
        <div className='row m-2' style={{height:'650px'}}>
            <div className='col-4 aside' style={{paddingRight:'0'}}><Aside  /></div>
            <div className='col-8 appbody' style={{paddingRight:'10px'}}><AppBody /></div>
        </div>
        <div className='row m-2 footer'>
              <Footer />
        </div>

    </div>
  )
}

export default Dashboard