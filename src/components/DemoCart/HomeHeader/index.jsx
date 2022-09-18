import React from 'react'
import './HomeHeader.scss'

export default function HomeHeader() {
  return (
    <div className="header">

        <div className="header-language">
            <img src="https://cdn-icons-png.flaticon.com/512/1377/1377975.png" alt="" />
        </div>

        <div className="header-name">
            Core Power
        </div>
        
        <div className="header-cart">
            <i className="fa-solid fa-cart-shopping"></i>
        </div>
    </div>
  )
}
