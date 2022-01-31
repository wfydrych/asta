import React from 'react'
import './Footer.sass'
import {Icon} from 'semantic-ui-react'

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer__section1 footer__sections'>
        <div className='footer__section1__contact'>KONTAKT</div>
        <div className='footer__section1__number'><Icon enabled name='phone' size='large' /> +41 791 746 555</div>
      </div>
      <div className='footer__section2 footer__sections'>
        <div className='footer__title'>INFORMATION</div>
        <div className='footer__links'>LINK</div>
        <div className='footer__links'>LINK</div>
        <div className='footer__links'>LINK</div>
        <div className='footer__links'>LINK</div>
        <div className='footer__links'>LINK</div>
      </div>
      <div className='footer__section3 footer__sections'>
        <div className='footer__title'>INFORMATION</div>
        <div className='footer__links'>LINK</div>
        <div className='footer__links'>LINK</div>
        <div className='footer__links'>LINK</div>
        <div className='footer__links'>LINK</div>
        <div className='footer__links'>LINK</div>
      </div>
      <div className='footer__section4 footer__sections'>
        <div className='footer__title'>FINDEN SIE UNS AUF</div>
          <span className='footer__iconscontainer'><Icon enabled name='facebook' size='large' className='footer__icons' /></span>
          <span className='footer__iconscontainer'><Icon enabled name='linkedin' size='large' className='footer__icons' /></span>
          <span className='footer__iconscontainer'><Icon enabled name='youtube' size='large' className='footer__icons' /></span>
          <span className='footer__iconscontainer'><Icon enabled name='pinterest' size='large' className='footer__icons' /></span>
      </div>
    </div>
  )
}

export default Footer