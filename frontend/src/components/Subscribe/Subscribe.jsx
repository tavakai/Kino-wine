/* eslint-disable max-len */
/* eslint-disable no-nested-ternary */
import { useState } from 'react'
import Done from '../Done/Done'
import MyPaiment from '../MyPaiment/MyPaiment'
import Preloader from '../Preloader/Preloader'
import s from './Subscribe.module.css'

export default function Subscribe() {
  const [modal, setModal] = useState('')

  const controlHandler = (e) => {
    if (e.target.className.includes('Subscribe_modal_window')) {
      setModal(false)
    }
  }
  return (
    <div>
      {/* <div className={s.modal_window_dark}> */}

      <div
        className={`${s.modal_window} ${modal ? `${s.modal_window_active} ${s.modal_window_dark}` : ''}`}
        onClick={controlHandler}
      >

        {/* <h2>{modal === 'Лайт' ? '100' : modal === 'Оптимум' ? '200' : '300'}</h2> */}
        {/* <h3 style={{ color: 'white' }}>Оплатить подписку</h3>
        <h5 style={{ color: 'white' }}>Чтобы начать пользоваться сервисом Кино под вино</h5> */}
        {/* <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '30px',
          padding: '0 100px',
          margin: '50px 0',

        }}
        > */}
        <MyPaiment subscribeLevel={modal} />

        {/* </div> */}
      </div>
      {/* </div> */}
      <div style={{
        display: 'flex', justifyContent: 'space-around', padding: '10px', maxWidth: '800px', width: '100%', margin: '0 auto',
      }}
      >
        <div style={{
          maxWidth: '250px',
          width: '100%',
          height: '500px',
          backgroundColor: 'white',
          background: 'rgba(0, 0, 0, 0.2)',
          boxShadow: '0.5px 1px 5px white',
          margin: '10px',
          borderRadius: '15px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '20px',
        }}
        >
          <div><img style={{ maxWidth: '250px' }} src="https://ae04.alicdn.com/kf/H0eab35f558eb459c9c8deb5ac7af3bd4e/Marvel.jpg" alt="..." /></div>
          <div style={{ color: 'white', marginTop: '13px' }}>Список кино и сериалов на кажый день в формате  HD на 1 месяц</div>
          <div><button className={s.button_color} type="button" onClick={() => setModal('Лайт')}>Лайт</button></div>
        </div>
        <div style={{
          maxWidth: '250px',
          width: '100%',
          height: '500px',
          backgroundColor: 'white',
          background: 'rgba(0, 0, 0, 0.2)',
          boxShadow: '0.5px 1px 5px white',
          margin: '10px',
          borderRadius: '15px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '20px',
        }}
        >
          <div><img style={{ maxWidth: '250px' }} src="https://avatars.dzeninfra.ru/get-zen_doc/1866101/pub_5e1e443c0ce57b00ae1a3315_5e1e7c47e4fff000adc2b035/scale_1200" alt="..." /></div>
          <div style={{ color: 'white', marginTop: '29px' }}>Список кино и сериалов на кажый день в формате  HD на 3 месяца </div>
          <div><button className={s.button_color} type="button" onClick={() => setModal('Оптимум')}>Оптимум</button></div>
        </div>
        <div style={{
          maxWidth: '250px',
          width: '100%',
          height: '500px',
          backgroundColor: 'white',
          background: 'rgba(0, 0, 0, 0.2)',
          boxShadow: '0.5px 1px 5px white',
          margin: '10px',
          borderRadius: '15px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '20px',

        }}
        >
          <div><img style={{ maxWidth: '250px' }} src="https://ae04.alicdn.com/kf/H199e19106975487788419462a7e01260o/-.jpg" alt="..." /></div>
          <div style={{ color: 'white', marginBottom: '55px' }}>Список кино и сериалов на кажый день в формате 4K на 3 месяца</div>
          <div><button className={s.button_color} type="button" onClick={() => setModal('Премиум')}>Премиум</button></div>
        </div>
      </div>

    </div>
  )
}
