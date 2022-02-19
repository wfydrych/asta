import React from 'react'
import './Footer.sass'
import { Icon } from 'semantic-ui-react'

function scrollTo(selector, yOffset = 0) {
  const el = document.querySelector(selector)
  const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset

  el.scrollIntoView({top: y, behavior: 'smooth'})
}

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer__section1 footer__sections'>
        <div className='footer__section1__contact'>KONTAKT</div>
        <div className='footer__section1__number'><Icon enabled name='phone' size='large' /> 079 174 65 55</div>
      </div>
      <div className='footer__section2 footer__sections'>
        <div className='footer__title'>INFORMATION</div>
        <div onClick={() => scrollTo('.section14', 0)} className='footer__links'>KONTAKT</div>
        <a href="https://www.intertlc.de/das-unternehmen/" target="_blank" rel="noreferrer">
          <div className='footer__links'>DAS UNTERNEHMEN</div>
        </a>
        <a href="https://www.intertlc.de/das-unternehmen/unser-potenzial/" target="_blank" rel="noreferrer">
          <div className='footer__links'>UNZER POTENZIAL</div>
        </a>
        <a href="https://www.intertlc.de/download/" target="_blank" rel="noreferrer">
          <div className='footer__links'>DOWNLOAD</div>
        </a>
        <a href="https://www.intertlc.de/qualitatszertifikate/" target="_blank" rel="noreferrer">
          <div className='footer__links'>QUALITATSZERTIFIKATE</div>
        </a>
      </div>
      <div className='footer__section3 footer__sections'>
        <div className='footer__title'>INFORMATION</div>
        <a href="https://www.intertlc.de/mobile-system/temporare-umzaunungen/absperrung/" target="_blank" rel="noreferrer">
          <div className='footer__links'>ABSPERRUNG</div>
        </a>
        <a href="https://www.intertlc.de/mobile-system/temporare-umzaunungen/bauumzaunung/" target="_blank" rel="noreferrer">
          <div className='footer__links'>BAUUMZÄUNUNG</div>
        </a>
        <a href="https://www.intertlc.de/mobile-system/temporare-umzaunungen/temporare-maschenzaune/" target="_blank" rel="noreferrer">
          <div className='footer__links'>TEMPORÄRE MASCHENZÄUNE</div>
        </a>
        <a href="https://www.intertlc.de/technische-dokumentation/" target="_blank" rel="noreferrer">
          <div className='footer__links'>TECHNISCHE DOKUMENTATION</div>
        </a>
        <a href="https://www.intertlc.de/datenschutzerklarung/" target="_blank" rel="noreferrer">
          <div className='footer__links'>DATENSCHUTZERKLÄRUNG</div>
        </a>
      </div>
      <div className='footer__section4 footer__sections'>
        <div className='footer__title'>FINDEN SIE UNS AUF</div>
          <span className='footer__iconscontainer'>
            <a href="https://www.facebook.com/TLC.Architectural.Metalwork/" target="_blank" rel="noreferrer">
              <Icon enabled name='facebook' size='large' className='footer__icons' />
            </a>
            <a href="https://www.linkedin.com/company/inter-tlc-group" target="_blank" rel="noreferrer">
              <Icon enabled name='linkedin' size='large' className='footer__icons' />
            </a>
            <a href="https://www.youtube.com/channel/UCS-jF8a18UdskTzARkltDRQ" target="_blank" rel="noreferrer">
              <Icon enabled name='youtube' size='large' className='footer__icons' />
            </a>
            <a href="https://www.pinterest.ch/tlcgroup0031/" target="_blank" rel="noreferrer">
              <Icon enabled name='pinterest' size='large' className='footer__icons' />
            </a>
          </span>
      </div>
    </div>
  )
}

export default Footer