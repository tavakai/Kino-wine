/* eslint-disable no-nested-ternary */
import { useState } from 'react'
import s from './Subscribe.module.css'

export default function Subscribe() {
  const [modal, setModal] = useState('')
  return (
    <div style={{ display: 'flex', justifyContent: 'space-around', position: 'relative' }}>
      {modal && (
      <div style={{
        position: 'absolute', border: '5px solid red', width: '600px', height: '60vh', backgroundColor: 'grey',
      }}
      >
        <h2>{modal === 'Лайт' ? '100' : modal === 'Оптимум' ? '200' : '300'}</h2>
        <button type="button" onClick={() => setModal('')}>{modal}</button>
      </div>
      )}
      <div style={{
        display: 'flex', justifyContent: 'space-around', padding: '10px',
      }}
      >
        <div style={{
          backgroundColor: 'white',
          margin: '10px',
          height: '600px',
          borderRadius: '15px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '20px',
        }}
        >
          <div><img style={{ width: '100%', height: '100%' }} src="https://ae04.alicdn.com/kf/H0eab35f558eb459c9c8deb5ac7af3bd4e/Marvel.jpg" alt="..." /></div>
          <div><button className={s.button_color} type="button" onClick={() => setModal('Лайт')}>Лайт</button></div>
        </div>
        <div style={{
          backgroundColor: 'white',
          margin: '10px',
          borderRadius: '15px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '20px',
        }}
        >
          <div><img style={{ width: '100%', height: '100%' }} src="https://avatars.dzeninfra.ru/get-zen_doc/1866101/pub_5e1e443c0ce57b00ae1a3315_5e1e7c47e4fff000adc2b035/scale_1200" alt="..." /></div>
          <div><button className={s.button_color} type="button" onClick={() => setModal('Оптимум')}>Оптимум</button></div>
        </div>
        <div style={{
          backgroundColor: 'white',
          margin: '20px',
          borderRadius: '15px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '20px',

        }}
        >
          <div><img style={{ width: '100%', height: '100%' }} src="https://ae04.alicdn.com/kf/H199e19106975487788419462a7e01260o/-.jpg" alt="..." /></div>
          <div><button className={s.button_color} type="button" onClick={() => setModal('Премиум')}>Премиум</button></div>
        </div>
      </div>
    </div>
  )
}
