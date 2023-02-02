import React from 'react'
import s from './Footer.module.css'
import google from '../images/googl.png';
import mail from '../images/mail.png';
import twit from '../images/twit.png';
import yan from '../images/yan.png';

export default function Footer() {
  return (
    <div className={s.footer}>

      <div style={{ display: 'flex', flexDirection: 'column' }}>
        {' '}
        <img src={google} alt="..." style={{ width: '30px', height: '30px' }} />
      </div>
      <div><img src={mail} alt="...." style={{ width: '30px', height: '30px' }} /></div>
      <div><img src={twit} alt="...." style={{ width: '30px', height: '30px' }} /></div>
      <div><img src={yan} alt="..." style={{ width: '30px', height: '30px' }} /></div>

    </div>
  )
}
