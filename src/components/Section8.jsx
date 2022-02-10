import React from 'react'
import './Section8.sass'
import {Icon} from 'semantic-ui-react'
import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'

const responsive = {
  0: { items: 1 },
  2000: { items: 1},
}

const items = [
  <div className="item" data-value="1"><img alt='' src='https://www.intertlc.de/wp-content/uploads/2021/06/modultreppe-asta-12.jpg' loading="lazy" /></div>,
  <div className="item" data-value="2"><img alt='' src='https://www.intertlc.de/wp-content/uploads/2021/06/modultreppe-asta-11.jpg' loading="lazy" /></div>,
]

const Section8 = () => {
  return (
    <div className='section8'>
      <div className='section8__title'>EXTERNE UND INTERNE MODULARE TREPPEN – BEZEICHNUNG</div>
      <div className='section8__content'>
        Wenn Sie sich für eine modulare ASTA-Treppe entscheiden, können Sie die Komponenten je nach Verwendungszweck aufeinander abstimmen – 
        sie funktionieren sowohl im Innen- als auch im Außenbereich hervorragend.
        <br /><br />
        Die ASTA-Treppen können verwendet werden als:
        <br /><br />
        <ul>
          <li><Icon enabled name='check' color='yellow' size='small' /> Haupttreppe</li>
          <li><Icon enabled name='check' color='yellow' size='small' /> technische Treppen in öffentlichen Gebäuden,</li>
          <li><Icon enabled name='check' color='yellow' size='small' /> Wirtschaftstreppe,</li>
          <li><Icon enabled name='check' color='yellow' size='small' /> Garagentreppe,</li>
          <li><Icon enabled name='check' color='yellow' size='small' /> Kellertreppe,</li>
          <li><Icon enabled name='check' color='yellow' size='small' /> Terrassentreppe,</li>
          <li><Icon enabled name='check' color='yellow' size='small' /> Dachbodentreppe.</li>
        </ul>
      </div>
      <AliceCarousel
          mouseTracking
          items={items}
          responsive={responsive}
          controlsStrategy="alternate"
          infinite
          autoWidth
        />
    </div>
  )
}

export default Section8