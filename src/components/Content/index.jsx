import React from 'react'

export default function Content({infor}) {
  return (
    <>
        <div className="front">
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
        
        <div className="back">
        </div>
    </>
  )
}
