import React from 'react'
import './Topbar.sass'
import { Icon } from 'semantic-ui-react'

const Topbar = () => {
  return (
    <div className='topbar__bg'>
        <div className='topbar__logo'>asta</div>
        <div className='topbar__socials'>
          <a href="https://www.facebook.com/TLC.Architectural.Metalwork/" target="_blank" rel="noreferrer">
            <Icon className='topbar__socials__icon' enabled name='facebook' size='large'/>
          </a>
          <a href="https://www.instagram.com/asta_stairs/" target="_blank" rel="noreferrer">
            <Icon className='topbar__socials__icon' enabled name='instagram' size='large'/>
          </a>
        </div>
    </div>
  )
}

export default Topbar