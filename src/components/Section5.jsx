import React from 'react'
import './Section5.sass'
import Gallery from 'react-grid-gallery'

const IMAGES =
[
  {
    src: "https://schodyasta.pl/wp-content/uploads/2021/12/schody-modulowe-asta-12.01-3-r.jpg",
    thumbnail: "https://schodyasta.pl/wp-content/uploads/2021/12/schody-modulowe-asta-12.01-3-r-768x1024-300x200.jpg",
    thumbnailWidth: 300,
    thumbnailHeight: 200,
  },
  {
    src: "https://schodyasta.pl/wp-content/uploads/2021/12/schody-modulowe-asta-12.01-1-r.jpg",
    thumbnail: "https://schodyasta.pl/wp-content/uploads/2021/12/schody-modulowe-asta-12.01-1-r-768x1024-300x200.jpg",
    thumbnailWidth: 300,
    thumbnailHeight: 200,
  },
  {
    src: "https://schodyasta.pl/wp-content/uploads/2021/12/schody-do-salonow-asta-12.21-2-r.jpg",
    thumbnail: "https://schodyasta.pl/wp-content/uploads/2021/12/schody-do-salonow-asta-12.21-2-r-768x1024-300x200.jpg",
    thumbnailWidth: 300,
    thumbnailHeight: 200,
  },
  {
    src: "https://schodyasta.pl/wp-content/uploads/2021/12/schody-do-salonow-asta-12.21-1-r.jpg",
    thumbnail: "https://schodyasta.pl/wp-content/uploads/2021/12/schody-do-salonow-asta-12.21-1-r-768x1024-300x200.jpg",
    thumbnailWidth: 300,
    thumbnailHeight: 200,
  },
  {
    src: "https://schodyasta.pl/wp-content/uploads/2021/12/schody-stalowe-asta-apartament-1.jpg",
    thumbnail: "https://schodyasta.pl/wp-content/uploads/2021/12/schody-stalowe-asta-apartament-1-1024x768-300x200.jpg",
    thumbnailWidth: 300,
    thumbnailHeight: 200,
  },
  {
    src: "https://schodyasta.pl/wp-content/uploads/2021/12/schody-stalowe-asta-apartament-2.jpg",
    thumbnail: "https://schodyasta.pl/wp-content/uploads/2021/12/schody-stalowe-asta-apartament-2-1024x768-300x200.jpg",
    thumbnailWidth: 300,
    thumbnailHeight: 200,
  },
  {
    src: "https://schodyasta.pl/wp-content/uploads/2021/12/schody-modulowe-asta-2.jpg",
    thumbnail: "https://schodyasta.pl/wp-content/uploads/2021/12/schody-modulowe-asta-2-766x1024-300x200.jpg",
    thumbnailWidth: 300,
    thumbnailHeight: 200,
  },
  {
    src: "https://schodyasta.pl/wp-content/uploads/2021/12/schody-modulowe-asta-11.jpg",
    thumbnail: "https://schodyasta.pl/wp-content/uploads/2021/12/schody-modulowe-asta-11-769x1024-300x200.jpg",
    thumbnailWidth: 300,
    thumbnailHeight: 200,
  },
  {
    src: "https://schodyasta.pl/wp-content/uploads/2021/12/schody-modulowe-asta-realizacje.jpg",
    thumbnail: "https://schodyasta.pl/wp-content/uploads/2021/12/schody-modulowe-asta-realizacje-1024x768-300x200.jpg",
    thumbnailWidth: 300,
    thumbnailHeight: 200,
  },
  {
    src: "https://schodyasta.pl/wp-content/uploads/2021/12/modular_stairs_asta-1-e1637159436755.jpg",
    thumbnail: "https://schodyasta.pl/wp-content/uploads/2021/12/modular_stairs_asta-1-e1637159436755-768x1024-300x200.jpg",
    thumbnailWidth: 300,
    thumbnailHeight: 200,
  },
  {
    src: "https://schodyasta.pl/wp-content/uploads/2021/12/modular_stairs_asta-2-e1637159422785.jpg",
    thumbnail: "https://schodyasta.pl/wp-content/uploads/2021/12/modular_stairs_asta-2-e1637159422785-768x1024-300x200.jpg",
    thumbnailWidth: 300,
    thumbnailHeight: 200,
  },
  {
    src: "https://schodyasta.pl/wp-content/uploads/2021/12/modular-stairs-e1637159412395.jpg",
    thumbnail: "https://schodyasta.pl/wp-content/uploads/2021/12/modular-stairs-e1637159412395-767x1024-300x200.jpg",
    thumbnailWidth: 300,
    thumbnailHeight: 200,
  },
  {
    src: "https://schodyasta.pl/wp-content/uploads/2021/12/schody_modulowe_asta_zastosowanie_1600-e1637159392406.jpg",
    thumbnail: "https://schodyasta.pl/wp-content/uploads/2021/12/schody_modulowe_asta_zastosowanie_1600-e1637159392406-1024x768-300x200.jpg",
    thumbnailWidth: 300,
    thumbnailHeight: 200,
  },
  {
    src: "https://schodyasta.pl/wp-content/uploads/2021/12/schody-metalowe-modulowe-13.jpg",
    thumbnail: "https://schodyasta.pl/wp-content/uploads/2021/12/schody-metalowe-modulowe-13-1024x768-300x200.jpg",
    thumbnailWidth: 300,
    thumbnailHeight: 200,
  },
  {
    src: "https://schodyasta.pl/wp-content/uploads/2021/12/schody-systemowe-3.jpg",
    thumbnail: "https://schodyasta.pl/wp-content/uploads/2021/12/schody-systemowe-3-768x1024-300x200.jpg",
    thumbnailWidth: 300,
    thumbnailHeight: 200,
  },
  {
    src: "https://schodyasta.pl/wp-content/uploads/2021/12/schody-modulowe-do-samodzielnego-montazu.jpg",
    thumbnail: "https://schodyasta.pl/wp-content/uploads/2021/12/schody-modulowe-do-samodzielnego-montazu-300x200.jpg",
    thumbnailWidth: 300,
    thumbnailHeight: 200,
  },
  {
    src: "https://schodyasta.pl/wp-content/uploads/2021/12/schody-modulowe-metalowe-1.jpg",
    thumbnail: "https://schodyasta.pl/wp-content/uploads/2021/12/schody-modulowe-metalowe-1-1024x683-300x200.jpg",
    thumbnailWidth: 300,
    thumbnailHeight: 200,
  },
  {
    src: "https://schodyasta.pl/wp-content/uploads/2021/12/schody-modulowe-metalowe-2.jpg",
    thumbnail: "https://schodyasta.pl/wp-content/uploads/2021/12/schody-modulowe-metalowe-2-1024x578-300x200.jpg",
    thumbnailWidth: 300,
    thumbnailHeight: 200,
  },
  {
    src: "https://schodyasta.pl/wp-content/uploads/2021/12/schody-systemowe-asta-2-e1637159483638.jpg",
    thumbnail: "https://schodyasta.pl/wp-content/uploads/2021/12/schody-systemowe-asta-2-e1637159483638-769x1024-300x200.jpg",
    thumbnailWidth: 300,
    thumbnailHeight: 200,
  },
  {
    src: "https://schodyasta.pl/wp-content/uploads/2021/12/schody-modulowe-metalowe-realizacja-2.jpg",
    thumbnail: "https://schodyasta.pl/wp-content/uploads/2021/12/schody-modulowe-metalowe-realizacja-2-769x1024-300x200.jpg",
    thumbnailWidth: 300,
    thumbnailHeight: 200,
  },
  {
    src: "https://schodyasta.pl/wp-content/uploads/2021/12/schody-modulowe-samodzielny-montaz-1.jpg",
    thumbnail: "https://schodyasta.pl/wp-content/uploads/2021/12/schody-modulowe-samodzielny-montaz-1-768x1024-300x200.jpg",
    thumbnailWidth: 300,
    thumbnailHeight: 200,
  },
  {
    src: "https://schodyasta.pl/wp-content/uploads/2021/12/schody-modulowe-samodzielny-montaz-asta-tlc-www-4.jpg",
    thumbnail: "https://schodyasta.pl/wp-content/uploads/2021/12/schody-modulowe-samodzielny-montaz-asta-tlc-www-4-768x1024-300x200.jpg",
    thumbnailWidth: 300,
    thumbnailHeight: 200,
  },
  {
    src: "https://schodyasta.pl/wp-content/uploads/2021/12/schody-modulowe-stalowe-1.jpg",
    thumbnail: "https://schodyasta.pl/wp-content/uploads/2021/12/schody-modulowe-stalowe-1-1024x683-300x200.jpg",
    thumbnailWidth: 300,
    thumbnailHeight: 200,
  },
  {
    src: "https://schodyasta.pl/wp-content/uploads/2021/12/schody-modulowe-wymiary-1.jpg",
    thumbnail: "https://schodyasta.pl/wp-content/uploads/2021/12/schody-modulowe-wymiary-1-1024x683-300x200.jpg",
    thumbnailWidth: 300,
    thumbnailHeight: 200,
  },
  {
    src: "https://schodyasta.pl/wp-content/uploads/2021/12/schody-modulowe-zewnetrzne-uk.jpg",
    thumbnail: "https://schodyasta.pl/wp-content/uploads/2021/12/schody-modulowe-zewnetrzne-uk-768x1024-300x200.jpg",
    thumbnailWidth: 300,
    thumbnailHeight: 200,
  },
  {
    src: "https://schodyasta.pl/wp-content/uploads/2021/12/schody-zewnetrzne-modulowe-realizacja.jpg",
    thumbnail: "https://schodyasta.pl/wp-content/uploads/2021/12/schody-zewnetrzne-modulowe-realizacja-683x1024-300x200.jpg",
    thumbnailWidth: 300,
    thumbnailHeight: 200,
  }
]

const Section5 = () => {
  return (
    <div className='section5'>
      <div className='section5__title'>MODULARE TREPPEN - AUSGEWÄHLTE PROJEKTE</div>
      <div className='section5__content'>
        <Gallery
          images={IMAGES}
          enableImageSelection={false}
          margin='5px'
        />
      </div>
    </div>
  )
}

export default Section5