import React from 'react'

export default function Content3({infor}) {
  return (
    <>
        <div 
            className="front"
            style={{
                backgroundImage: `url('./images/card-front-03.jpg')`
            }}
        >
        </div>
        <div 
            className="back"
            style={{
                backgroundImage: `url('./images/card-back-03.jpg')`
            }}
        >
        </div>
    </>
  )
}
