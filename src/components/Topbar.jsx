import React from 'react'
import './Topbar.sass'
import { Icon } from 'semantic-ui-react'

const Topbar = () => {
  return (
    <div className='topbar__bg'>
        <div className='topbar__logo'>asta</div>
        <div className='topbar__socials'>
          <Icon className='topbar__socials__icon' enabled name='facebook' size='large'/>
          <Icon className='topbar__socials__icon' enabled name='instagram' size='large'/>
        </div>
    </div>
  )
}

export default Topbar