import React from 'react'
import Accordion from "./Accordion"
import './Section13.sass'

const questionsAnswers = [
  {
    question: "WIE BESTELLE ICH EINE ASTA-MODULTREPPE?",
    answer:
      "Bestellungen werden über Distributoren aufgegeben. Eine Karte mit einer Liste unserer Treppenverteiler finden Sie oben.",
  },
  {
    question: "BIS ZU WELCHER HÖHE SIND ASTA-TREPPEN EINSETZBAR?",
    answer:
      "Allein mit den Treppenstufen kann eine Höhe von 4 Metern erreicht werden. Bei Verwendung der Podeste ist die Höhe nicht begrenzt.",
  },
  {
    question: "BRAUCHE ICH FÜR DIE INSTALLATION DER ASTA-TREPPE EIN QUALIFIZIERTES TEAM?",
    answer: `Nein. Die Treppe wurde so konstruiert, dass unsere Kunden die Treppe in wenigen Stunden selbst montieren können. Zusammen mit der bestellten Treppe erhält der Kunde eine Installationsanleitung für jedes Modul. Laden Sie die Montageanleitung herunter.`,
  },
  {
    question: "WO KANN ICH DIE ASTA-TREPPE BENUTZEN?",
    answer: `ASTA-Treppen können an jeder Stelle mit entsprechenden Stufenfüllungen eingebaut werden. Die Stahlkonstruktion der Treppe ist mit Zinkbeschichtung und Pulverfarbe gegen Korrosion geschützt.
    Treppen können erfolgreich innerhalb und außerhalb von Wohngebäuden, Nebengebäuden oder Garagen installiert werden.`,
  },
  {
    question: "PASST DIE ASTA-TREPPE IN MEIN UNGEWÖHNLICHES ZIMMER?",
    answer: `Das hängt davon ab, wie ungewöhnlich Ihr Zimmer ist. Wir empfehlen Ihnen, die Preisliste herunterzuladen und die Installationsmöglichkeiten selbst zu beurteilen. Wenn Sie irgendwelche Probleme haben, können Sie sich gerne an uns wenden – wir werden unser Bestes tun, um Ihnen mit Ihren Optionen zu helfen.`,
  },
  {
    question: "WIE KANN EINE BALUSTRADE AUF EINEM ZWISCHENGESCHOSS INSTALLIERT WERDEN?",
    answer: `ASTA Modulare Balustraden sind in Abschnitten von 2 verschiedenen Längen erhältlich: 1,2 m und 2,4 m. Abschnitte können miteinander kombiniert werden, wobei der letzte Abschnitt auf die gewünschte Länge geschnitten werden sollte. Die Montage der Balustrade ist auf zwei Arten vorgesehen:
    Zum Boden des Zwischengeschosses
    Von der Vorderseite des Zwischengeschosses`,
  },
  {
    question: "KANN EINE TREPPE MIT EINER BEHANDLUNG SELBSTTRAGEND SEIN?",
    answer: `Treppen mit einem rechten oder linken Podest erfüllen nicht die Anforderungen an eine selbsttragende Konstruktion. Das Podest des Systems wird auf der Innenseite von einer einzigen Säule getragen, aber auf der Vorderseite des Podestes ist eine Verankerung erforderlich. Die Verankerung der Seite der Behandlung ist optional.`,
  },
  {
    question: "SIND ANDERE LAUFBREITEN VERFÜGBAR?",
    answer: `ASTA-Modultreppen sind nur in einer Laufbreite – 900 mm – erhältlich.`,
  },
  {
    question: "IST DIE NUTZBARE BREITE VON 900 MM AUSREICHEND?",
    answer: `Basierend auf unserer langjährigen Erfahrung im Treppenbau haben wir die optimale Laufbreite so gewählt, dass sie nicht nur bequem ist und eine weitere Person ungehindert passieren kann, sondern auch, dass das System in begrenzte Räume passt, ohne wertvollen Platz zu beanspruchen.`,
  },
  {
    question: "WIE KÖNNEN DIE PLATTFORMEN MITEINANDER VERBUNDEN WERDEN?",
    answer: `Plattformen werden durch ein zusätzliches Element verbunden, wenn sie als Zwischenplattform mit 180* Richtungswechsel dienen sollen. Bei einer End- oder Zwischenplattform ohne 90*-Richtungswechsel können die Plattformen direkt miteinander verbunden werden. Es ist erlaubt, Plattformen nur in einer Reihe zu verbinden.`,
  },
  {
    question: "IST IM FALLE EINER AUSSENANWENDUNG DIE FEUERVERZINKUNG ODER DIE VERZINKUNG UND PULVERBESCHICHTUNG HALTBARER?",
    answer: `ASTA-Modultreppen sind, unabhängig vom Einbauort, gegen Korrosion geschützt. Die Feuerverzinkung ist ein ausreichender Schutz gegen Korrosion, jedoch kann eine Beschädigung der Beschichtung (was sehr selten vorkommt!) dazu führen, dass die Konstruktion zu rosten beginnt.

    Die Verzinkung mit einer zusätzlichen Beschichtung aus Pulverlack erhöht nicht nur den ästhetischen Wert des Produkts, sondern bietet auch eine zusätzliche Barriere gegen Feuchtigkeit, was die Korrosionsschutzeigenschaften erhöht.`,
  },
  {
    question: "IST LIEFERUNG IM PREIS INBEGRIFFEN?",
    answer: `Die Lieferung von ASTA-Treppen in Polen ist kostenlos. Die Lieferung außerhalb Polens unterliegt einer zusätzlichen Gebühr, die je nach Zieladresse berechnet wird.`,
  },
  {
    question: "IST ES MÖGLICH, EINE TREPPE MIT MONTAGE ZU BESTELLEN?",
    answer: `ASTA Modultreppen sind für die Selbstmontage vorgesehen. Sie können die Dienste örtlicher Baufirmen in Anspruch nehmen oder das Installationsteam fragen, das möglicherweise bereits einige Arbeiten im Zuge von Renovierungen, Bauarbeiten usw. für Sie erledigt hat. Die einfache und intuitive Anleitung ermutigt Sie dennoch, die Installation selbst vorzunehmen.

    Der Hersteller bietet keinen Installationsservice an.`,
  },
  {
    question: "WIE KANN ICH FÜR MEINE TREPPE BEZAHLEN?",
    answer: `Wenn der Kauf direkt vom Hersteller, sowohl in Polen als auch im Ausland, getätigt wurde, wird die Zahlung in Form einer traditionellen Überweisung auf der Grundlage der zuvor gesendeten Proforma-Rechnung realisiert. Bei Zahlungen im Ausland werden Überweisungen auf Fremdwährungskonten (Euro, Britisches Pfund) akzeptiert. In Polen kann der Kunde in der TLC-Zentrale bar oder mit Karte bezahlen.`,
  },
  {
    question: "KÖNNEN WIR DIE TREPPE MIT EINER ANDEREN FARBE STREICHEN?",
    answer: `Ja, ASTA-Modultreppen können in jeder Farbe aus der RAL-Palette lackiert werden. Bitte beachten Sie, dass das Streichen Ihrer Treppe in anderen Farben als Schwarz eine deutliche Erhöhung des Preises der Treppe bedeuten kann. Um mehr zu erfahren, kontaktieren Sie bitte unseren Vertriebsmitarbeiter.`,
  },
]

const Section13 = () => {
  return (
    <div className='section13'>
      <div className='section13__title'>HÄUFIG GESTELLTE FRAGEN</div>
      <div className='section13__content'>
        <Accordion questionsAnswers={questionsAnswers} />
      </div>
    </div>
  )
}

export default Section13