import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addNewCard, openInforModal } from '../../actions';
import Content from '../Content';
import Content2 from '../Content2';
import Content3 from '../Content3';
import Content4 from '../Content4';
import './DemoCart.scss'

export default function DemoCart({type}) {
    const dispatch = useDispatch()

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

    const infor = useSelector(state => state.infor)

    const handleShow = () => {
        dispatch(openInforModal())
    }

    // handle add to cart
    const handleAddToCart = () => {
        setToCartState('move-to-cart')

        const newCard = {
            img: `card-front-0${type}.jpg`,
            name : `Card 0${type}`,
            price: 100000,
            quantity: 1
        }

        dispatch(addNewCard(newCard))

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
        <div className={`card-item card-item--${type}`}>
            <div 
                ref={card}
                className={`flip-container ${activeState}`} 
                onClick={toggleActive}
                onMouseMove={(e) => handleAnimation(e)}
            >
                <div className={`flipper ${toCartState}`}>
                    {
                        type===1
                        &&
                        <Content infor={infor}/>
                    }

                    {
                        type===2
                        &&
                        <Content2 infor={infor}/>
                    }

                    {
                        type===3
                        &&
                        <Content3 infor={infor}/>
                    }

                    {
                        type===4
                        &&
                        <Content4 infor={infor}/>
                    }
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
                    <div className="button-item" onClick={() => handleShow()}>
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
