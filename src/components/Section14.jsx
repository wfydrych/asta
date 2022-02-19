import React, { useState } from 'react'
import { Icon } from 'semantic-ui-react'
import { send } from 'emailjs-com'
import './Section14.sass'

const Section14 = () => {
  const [toSend, setToSend] = useState({
    from_name: '',
    to_name: '',
    message: '',
    reply_to: '',
  })

  const onSubmit = (e) => {
    e.preventDefault();
    send(
      // settings
    )
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text)
      })
      .catch((err) => {
        console.log('FAILED...', err)
      })
  };

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value })
  };

  return (
    <div className='section14'>
      <div className='section14__title'>BITTE ZÖGERN SIE NICHT UNS ZU KONTAKTIEREN</div>
      <div className='section14__content'>
        <form onSubmit={onSubmit}>
          <div className='section14__content__message'>
            <div className='section14__content__message__left'>
              <input
                type='text'
                name='from_name'
                placeholder='Vorname und Nachname'
                value={toSend.from_name}
                onChange={handleChange}
              />
              <input
                type='text'
                name='to_name'
                placeholder='Telefonnummer'
                value={toSend.to_name}
                onChange={handleChange}
              />
              <input
                type='text'
                name='reply_to'
                placeholder='E-Mail Adresse'
                value={toSend.reply_to}
                onChange={handleChange}
              />
              <button type='submit' className='btn-send'>Senden</button>
            </div>
            <div className='section14__content__message__right'>
              <textarea
                className='nachricht'
                type='text'
                name='message'
                placeholder='Ihre Nachricht:'
                value={toSend.message}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className='terms'>
              * Ich stimme der Verarbeitung meiner personenbezogenen Daten durch TLC Sp. z o.o., gemäß dem Gesetz zum Schutz personenbezogener Daten zum Zwecke der Einreichung des Antrags über das Formular. Ich erkläre auch, dass ich meine personenbezogenen Daten freiwillig zur Verfügung stelle und mir meines Rechts auf Zugang und Kontrolle der Inhalte bewusst bin, einschließlich der Möglichkeit, jederzeit eine dauerhafte Löschung zu verlangen. Ich akzeptiere die Bestimmungen der Datenschutzerklärung.
            </div>
        </form>
        <div className='section14__content__profile'>
          <strong>Sebastian Wirmanski</strong><br />
          Verkaufsleiter Schweiz
          <br /><br />
          <span><Icon enabled name='phone' color='black' /> 079 174 65 55<br /><br /></span>
          <span><Icon enabled name='mail outline' color='black' /> kronenkar@gmx.ch<br /><br /></span>
        </div>
      </div>
    </div>
  )
}

export default Section14