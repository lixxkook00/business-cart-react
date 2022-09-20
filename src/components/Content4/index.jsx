import React from 'react'

export default function Content4({infor}) {
  return (
    <>
        <div 
            className="front"
            style={{
                backgroundImage: `url('./images/card-front-04.jpg')`
            }}
        >
            <div className="card-name">
                {
                    infor.name
                }
            </div>
            <div className="card-address">
                {
                    infor.address
                }
            </div>
            <div className="card-email">
                {
                    infor.email
                }
            </div>
            <div className="card-phone">
                {
                    infor.phone
                }
            </div>
        </div>
        <div 
            className="back"
            style={{
                backgroundImage: `url('./images/card-back-04.jpg')`
            }}
        >
        </div>
    </>
  )
}
