import React from 'react'
import './Section8.sass'
import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'

const responsive = {
  0: { items: 1 },
};

const items = [
  <div className="item" data-value="1"><img alt='' src='https://www.intertlc.de/wp-content/uploads/2021/06/modultreppe-asta-12.jpg' /></div>,
  <div className="item" data-value="2"><img alt='' src='https://www.intertlc.de/wp-content/uploads/2021/06/modultreppe-asta-11.jpg' /></div>,
];

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
          <li>Haupttreppe</li>
          <li>technische Treppen in öffentlichen Gebäuden,</li>
          <li>Wirtschaftstreppe,</li>
          <li>Garagentreppe,</li>
          <li>Kellertreppe,</li>
          <li>Terrassentreppe,</li>
          <li>Dachbodentreppe.</li>
        </ul>
      </div>
      <AliceCarousel
          mouseTracking
          items={items}
          responsive={responsive}
          controlsStrategy="alternate"
          infinite
          autoWidth
          autoPlay
          animationDuration='4000'
        />
    </div>
  )
}

export default Section8