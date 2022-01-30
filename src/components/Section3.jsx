import React from 'react'
import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'
import './Section3.sass'

const responsive = {
  0: { items: 1 },
  568: { items: 3 },
  1024: { items: 5 },
};

const items = [
  <div className="item" data-value="1"><img alt='' width='232px' src='https://www.intertlc.de/wp-content/uploads/2019/05/modultreppe-16.jpg' /></div>,
  <div className="item" data-value="2"><img alt='' width='232px' src='https://www.intertlc.de/wp-content/uploads/2019/05/modultreppe-24.jpg' /></div>,
  <div className="item" data-value="3"><img alt='' width='232px' src='https://www.intertlc.de/wp-content/uploads/2019/05/modultreppe-23.jpg' /></div>,
  <div className="item" data-value="4"><img alt='' width='232px' src='https://www.intertlc.de/wp-content/uploads/2019/05/modultreppe-22.jpg' /></div>,
  <div className="item" data-value="5"><img alt='' width='232px' src='https://www.intertlc.de/wp-content/uploads/2019/05/modultreppe-21.jpg' /></div>,
  <div className="item" data-value="6"><img alt='' width='232px' src='https://www.intertlc.de/wp-content/uploads/2019/05/modultreppe-20.jpg' /></div>,
  <div className="item" data-value="7"><img alt='' width='232px' src='https://www.intertlc.de/wp-content/uploads/2019/05/modultreppe-19.jpg' /></div>,
  <div className="item" data-value="8"><img alt='' width='232px' src='https://www.intertlc.de/wp-content/uploads/2019/05/modultreppe-18.jpg' /></div>,
  <div className="item" data-value="9"><img alt='' width='232px' src='https://www.intertlc.de/wp-content/uploads/2019/05/modultreppe-17.jpg' /></div>,
];

const Section3 = () => {
  return (
    <div className='section3'>
      <div className='section3__title'>VORTEILE DER ASTA-MODULTREPPE</div>
      <div className='section3__content'>
        <AliceCarousel
          mouseTracking
          items={items}
          responsive={responsive}
          controlsStrategy="alternate"
          infinite
        />
      </div>
    </div>
  )
}

export default Section3