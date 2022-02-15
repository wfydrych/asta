import React from 'react'
import './Info.sass'
import { Icon } from 'semantic-ui-react'

function scrollTo(selector, yOffset = 0) {
  const el = document.querySelector(selector)
  const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset

  el.scrollIntoView({top: y, behavior: 'smooth'})
}

const Info = () => {
  return (
    <div className='info'>
      <div className='info__contact'>
      SIE BENÖTIGEN HILFE<br />
      IN DER WAHL DER TREPPEN?<br /><br />

      <strong>KONTAKTIERE MICH</strong>
      <br /><br />
      <strong>Sebastian Wirmanski</strong><br />
      Verkaufsleiter Schweiz
      <br /><br />
      <Icon enabled name='phone' color='yellow' /> 079 174 65 55<br /><br />
      <Icon enabled name='mail outline' color='yellow' /> kronenkar@gmx.ch<br /><br />
      </div>

      <div className='info__questions'>
        Die <strong>ASTA-Treppen</strong> sind eine praktische Lösung, die sich perfekt für Ihr Haus, Ihre Garage oder Ihren Hauswirtschaftsraum eignet. Setzen Sie auf eine minimalistische Form und hohe Funktionalität, unterstützt durch eine einfache Installation und den Zugang zu vielen Produktvarianten, die Sie an die Bedingungen und Besonderheiten des Raumes anpassen können.
        <br /><br />
        Der Loft- und rohe Stil oder vielleicht das skandinavische Design? Sie entscheiden, wie Ihr Wohnraum aussehen soll. Gestalten Sie ihn und entscheiden Sie sich für eine Metalltreppe, ohne in teure Projekte zu investieren. Die Einfachheit der Herstellung und des Aufbaus bedeutet, dass der gesamte Montageprozess ohne die Unterstützung von Fachleuten durchgeführt werden kann.
        <br /><br />
        Konfigurieren Sie Ihre Treppe kostenlos. Setzen Sie auf praktische und optisch ansprechende Innenausstattungen.
        <br /><br />
        <ul className='menu-list'>
          <li onClick={() => scrollTo('.section1', 0)}>WAS SIND FERTIGE MODULARE TREPPEN?</li>
          <li onClick={() => scrollTo('.section2', 0)}>MODULARE TREPPEN – ABMESSUNGEN</li>
          <li onClick={() => scrollTo('.section3', 0)}>VORTEILE DER ASTA-MODULTREPPE</li>
          <li onClick={() => scrollTo('.section4', 0)}>MODULARE AUSSEN- UND INNENTREPPEN – WARUM WIR</li>
          <li onClick={() => scrollTo('.section5', 0)}>MODULARE TREPPEN – AUSGEWÄHLTE PROJEKT</li>
          <li onClick={() => scrollTo('.section6', 0)}> MEINUNGEN DER KUNDEN</li>
          <li onClick={() => scrollTo('.section8', 0)}>EXTERNE UND INTERNE MODULARE TREPPEN – BEZEICHNUNG</li>
          <li onClick={() => scrollTo('.section9', 0)}>STAHLTREPPEN – PREIS</li>
          <li onClick={() => scrollTo('.section9', 0)}>MODULARE TREPPEN – KONFIGURIEREN</li>
          <li onClick={() => scrollTo('.section10', 0)}>WIE WERDEN MODULARE TREPPEN MONTIERT?</li>
          <li onClick={() => scrollTo('.section11', 0)}>WO KANN MAN MODULARE TREPPEN KAUFEN?</li>
          <li onClick={() => scrollTo('.section12', 0)}>VERKAUFSSTELLEN FÜR MODULARE TREPPEN</li>
          <li onClick={() => scrollTo('.section13', 0)}>HÄUFIG GESTELLTE FRAGEN</li>
        </ul>
        <br /><br />
        <div className='gewinner'>
          <img alt='asta-gewinner-2022' src='https://www.intertlc.de/wp-content/uploads/2021/12/asta-zloty-medal-budma3.-asta-DE.jpg' loading="lazy" />
        </div>
      </div>
    </div>
  )
}

export default Info