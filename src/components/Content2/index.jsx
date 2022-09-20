import React from 'react'

export default function Content2({infor}) {
  return (
    <>
        <div 
            className="front"
            style={{
                backgroundImage: `url('./images/card-front-02.jpg')`
            }}
        >
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
                backgroundImage: `url('./images/card-back-02.jpg')`
            }}
        >
        </div>
    </>
  )
}
