import React, { Fragment, useContext } from 'react'
import { userContext } from './MyContext'

function Title() {
  const user = useContext(userContext)
  return (
    <Fragment>
        <h1 style={{fontSize:"5em", marginTop:'50px', background:'#FFC000', borderRadius: '20px 20px 20px 20px'}}>{ user.statut }</h1>
    </Fragment>
  )
}

export default Title