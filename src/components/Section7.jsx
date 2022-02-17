import React from 'react'
import './Section7.sass'
import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'

const YoutubeEmbed = ({ embedId }) => (
  <div className="video-responsive">
    <iframe
      width="320"
      height="200"
      src={`https://www.youtube.com/embed/${embedId}`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="ASTA"
    />
  </div>
)

function scrollTo(selector, yOffset = 0) {
  const el = document.querySelector(selector)
  const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset

  el.scrollIntoView({top: y, behavior: 'smooth'})
}

const responsive = {
  0: { items: 1 },
  820: { items: 2 },
  1250: { items: 3 },
}

const items = [
  <div className="item" data-value="1">
    <YoutubeEmbed embedId="tXIVwXe1KRM" />
  </div>,
  <div className="item" data-value="2">
    <YoutubeEmbed embedId="jI63QIoCG3k" />
  </div>,
  <div className="item" data-value="3">
    <YoutubeEmbed embedId="7BJQL79Ga1Q" />
  </div>,
  <div className="item" data-value="4">
    <YoutubeEmbed embedId="lUgRb62Gizk" />
  </div>,
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
        <div onClick={() => scrollTo('.section12', 0)}className='section7__bg__btn'>VERKAUFSSTELLEN FÜR MODULARE TREPPEN</div>
      </div>
    </div>
  )
}

export default Section7