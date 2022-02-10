import React from 'react'
import './Section7.sass'
import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'

const responsive = {
  0: { items: 1 },
  568: { items: 2 },
  1024: { items: 3 },
};

const items = [
  <div className="item" data-value="1"><img alt='' width='350px' src='https://i.ytimg.com/vi_webp/7BJQL79Ga1Q/sddefault.webp' loading="lazy" /></div>,
  <div className="item" data-value="2"><img alt='' width='350px' src='https://i.ytimg.com/vi_webp/7BJQL79Ga1Q/sddefault.webp' loading="lazy" /></div>,
  <div className="item" data-value="3"><img alt='' width='350px' src='https://i.ytimg.com/vi_webp/7BJQL79Ga1Q/sddefault.webp' loading="lazy" /></div>,
  <div className="item" data-value="4"><img alt='' width='350px' src='https://i.ytimg.com/vi_webp/7BJQL79Ga1Q/sddefault.webp' loading="lazy" /></div>,
]

const Section7 = () => {
  return (
    <div className='section7'>
      <div className='section7__title'>SEHEN SIE UNSEREN NEUEN FILM ÜBER ASTA MODULAR TREPPEN</div>
      <div className='section7__content'>
        <AliceCarousel
          mouseTracking
          items={items}
          responsive={responsive}
          controlsStrategy="alternate"
          infinite
        />
      </div>
      <div className='section7__bg'>
        <div className='section7__bg__btn'>VERKAUFSSTELLEN FÜR MODULARE TREPPEN</div>
      </div>
    </div>
  )
}

export default Section7