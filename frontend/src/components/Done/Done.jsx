import React from 'react'
import s from './Done.module.css'

export default function Done() {
  return (
    <div className={`${s.wrapper}`}>
      <div>
        <svg
          width="130"
          height="130"
          viewBox="0 0 48 48"
          fill="none"
          stroke="white"
          strokeWidth="3"
          strokeDasharray="100"
        >
          <path
            id="check"
            d="M 12,22 L 22,31 L 36,13"
            strokeDashoffset="0"
          >
            <animate
              attributeName="stroke-dashoffset"
              from="100"
              to="0"
              repeatCount="indefinite"
              dur="3s"
            />
          </path>
        </svg>
      </div>
    </div>
  )
}
