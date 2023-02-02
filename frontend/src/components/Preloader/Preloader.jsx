import React, { useEffect } from 'react'
import s from './Preloader.module.css'

export default function Preloader() {
  return (
    <div style={{
      display: 'flex',
      height: '50vh',
      maxWidth: '100%',
      width: '90%',
      justifyContent: 'center',
      alignItems: 'center',
      position: 'absolute',
      zIndex: '999',
      background: 'rgba(0, 0, 0, 0.8)',
    }}
    >
      <div className={s.loader} />
    </div>
  )
}
