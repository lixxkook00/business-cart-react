import React, { useEffect, useState } from 'react'
import './HomeHeader.scss'

import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CustomInfor from '../../Modals/CustomInfor';
import { useSelector } from 'react-redux';
import FormatAmount from '../FormatAmount';

export default function HomeHeader() {
    // handle data
    const cartData = useSelector(state => state.cart)
    
    let total = 0
    cartData.forEach((cartItem) => {
        total += cartItem.price
    })

    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    const list = (anchor) => (
        <Box
            // sx={{ width: '75%' , maxWidth: '400px'}}
            role="presentation"
            // onClick={toggleDrawer(anchor, false)}
            // onKeyDown={toggleDrawer(anchor, false)}
        >
            <div className="cart">
                <div className="cart-title">
                    YOUR CART
                </div>

                <div className="cart-content">

                    {
                        cartData.length > 0
                        ?
                            cartData.map((item,index) => {
                                return (
                                    <div key={index} className="cart-item">
                                        <div className="cart-item-img">
                                            <img src={`./images/${item.img}`} alt="" />
                                        </div>
                                        <div className="cart-item-content">
                                            <div className="cart-item-name">
                                                {item.name}
                                            </div>
                                            <div className="d-flex justify-content-between">
                                                <div className="cart-item-quantity">
                                                    <div className="cart-item-quantity-button">
                                                        <i className="fa-solid fa-minus"></i>
                                                    </div>
                                                    <div className="cart-item-quantity-value">
                                                        <input type="number" value={item.quantity}/>
                                                    </div>
                                                    <div className="cart-item-quantity-button">
                                                        <i className="fa-solid fa-plus"></i>
                                                    </div>
                                                </div>
                                                <div className="cart-item-price value">
                                                    <FormatAmount amount={item.price}/> VND
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        :

                        <div className="empty">
                            Choose some awesome Card :*
                        </div>
                    }
                    
                </div>

                <div className="cart-total">
                    <div className="cart-total-content">
                        <span>Total</span>
                        <h5 className="value">
                            {
                                <FormatAmount amount={total}/>
                            } VND
                        </h5>
                    </div>
                    <div className="primary-button">
                        Order now
                    </div>
                </div>
            </div>
        </Box>
    );


    // handle animation add cart
    const [active,setActive] = useState('')

    useEffect(() => {
        setTimeout(() => {
            setActive('active');

            setTimeout(() => {
                setActive('');
            },500)
        },500)
    },[cartData])

    return (
        <div className="header">

            <div className="header-language">
                <img src="https://cdn-icons-png.flaticon.com/512/1377/1377975.png" alt="" />
            </div>

            <div className="header-name">
                Core Power
            </div>
            
            <div className={`header-cart ${active}`} onClick={toggleDrawer('right', true)}>
                <i className="fa-solid fa-cart-shopping"></i>

                <div className="header-cart-noti">
                    {
                        cartData.length
                    }
                </div>
            </div>

            <CustomInfor />

            <Drawer
                anchor={'right'}
                open={state['right']}
                onClose={toggleDrawer('right', false)}
            >
                {list('right')}
            </Drawer>
        </div>
    )
}
