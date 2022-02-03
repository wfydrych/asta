import React from 'react'
import './Info.sass'
import {Icon} from 'semantic-ui-react'

const Info = () => {
  return (
    <div className='info'>
      <div className='info__contact'>
      SIE BENÖTIGEN HILFE<br />
      IN DER WAHL DER TREPPEN?<br /><br />

      <strong>KONTAKTIERE MICH</strong>
      <br /><br />
      <strong>Sebastian Wirmanski</strong><br />
      Product sales manager
      <br /><br />
      <Icon enabled name='phone' color='yellow' /> +41 791 746 555<br /><br />
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
          <li>WAS SIND FERTIGE MODULARE TREPPEN?</li>
          <li>MODULARE TREPPEN – ABMESSUNGEN</li>
          <li>VORTEILE DER ASTA-MODULTREPPE</li>
          <li>MODULARE AUSSEN- UND INNENTREPPEN – WARUM WIR</li>
          <li>MODULARE TREPPEN – AUSGEWÄHLTE PROJEK</li>
          <li> MEINUNGEN DER KUNDEN</li>
          <li>EXTERNE UND INTERNE MODULARE TREPPEN – BEZEICHNUNG</li>
          <li>STAHLTREPPEN – PREIS</li>
          <li>MODULARE TREPPEN – KONFIGURIEREN</li>
          <li>WIE WERDEN MODULARE TREPPEN MONTIERT?</li>
          <li>WO KANN MAN MODULARE TREPPEN KAUFEN?</li>
          <li>VERKAUFSSTELLEN FÜR MODULARE TREPPEN</li>
          <li>HÄUFIG GESTELLTE FRAGEN</li>
        </ul>
        <br /><br />
        <div className='gewinner'>
          <img alt='asta-gewinner-2022' src='https://www.intertlc.de/wp-content/uploads/2021/12/asta-zloty-medal-budma3.-asta-DE.jpg' />
        </div>
      </div>
    </div>
  )
}

export default Info