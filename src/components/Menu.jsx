import React from 'react'
import './Menu.sass'

const Menu = () => {
  return (
    <div className='menu'>
      <a href="https://www.intertlc.de/Download/Prasentation_Modultreppe_ASTA.pdf" target="_blank" rel="noreferrer">
        <div className='menu__btn'>PROSPEKT</div>
      </a>
      <a href="https://www.intertlc.de/Download/MODULTREPPE_ASTA_MONTAGEANLEITUNG.pdf" target="_blank" rel="noreferrer">
        <div className='menu__btn'>MONTAGEANLEITUNG</div>
      </a>
      <a href="https://www.intertlc.de/Download/Preisliste_Modultreppe_Asta.pdf" target="_blank" rel="noreferrer">
        <div className='menu__btn'>PREISLISTE</div>
      </a>
    </div>
  )
}

export default Menu