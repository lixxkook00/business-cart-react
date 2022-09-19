import React, { useEffect, useRef, useState } from 'react'

export default function DemoCart2() {

    const [activeState , setActiveState] = useState("")
    const [toCartState , setToCartState] = useState("")

    const card = useRef(null);

    const toggleActive = () => {
        if( activeState === 'active'){
            setActiveState('comeback')
            setTimeout(()=>{
                setActiveState('')
                card.current.children[0].children[0].style.transform = "rotateY(0deg) rotateX(0deg)"
            },1000)
        }else{
            setActiveState('active')
        }
    }

    const handleAnimation = (e) => {
        const m = -(window.innerWidth / 2 - e.pageX) / 30
        const n = (window.innerHeight / 2 - e.pageY) / 80;

        if(card.current.classList.length > 1){
            card.current.children[0].children[0].style.transform =  "rotateY(" + m + "deg) rotateX(" + n + "deg)"
        }
    }

    const handleAddToCart = () => {
        setToCartState('move-to-cart')
        setTimeout(() => {
            setActiveState('comeback')
            setTimeout(()=>{
                setToCartState('')
                setActiveState('')
                card.current.children[0].children[0].style.transform = "rotateY(0deg) rotateX(0deg)"
            },1000)
        },500)
    }

    return (
    <>
        <div className='card-item'>
            <div 
                ref={card}
                className={`flip-container ${activeState}`} 
                onClick={toggleActive}
                onMouseMove={(e) => handleAnimation(e)}
            >
                <div className={`flipper ${toCartState}`}>
                    <div 
                        className="front"
                        style={{
                            backgroundImage: `url('./images/card-front-02.jpg')`
                        }}
                    >
                    </div>
                    <div 
                        className="back"
                        style={{
                            backgroundImage: `url('./images/card-back-02.jpg')`
                        }}
                    >
                    </div>
                </div>
            </div>
        </div>
        {
            activeState === 'active'
            &&

            <div 
                className="overlay"
                onClick={toggleActive}
            >

            </div>
        }

        {
            activeState === 'active'
            &&

            <div className="button">
                <div className="button-wrapper">
                    <div className="button-item">
                        Customize
                    </div>
                    <div 
                        className="button-item" 
                        onClick={() => handleAddToCart()}
                    >
                        Add to cart
                    </div>
                </div>
            </div>
        }

    </>
    )
}
