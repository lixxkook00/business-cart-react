import React from 'react'
import './HomeHeader.scss'

import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CustomInfor from '../../Modals/CustomInfor';

export default function HomeHeader() {

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
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <div className="cart">
                <div className="cart-title">
                    YOUR CART
                </div>

                <div className="cart-content">
                    <div className="cart-item">

                    </div>
                </div>

                <div className="cart-total">
                    <div className="cart-total-content">
                        <span>Total</span>
                        <h5 className="value">
                            $0.00
                        </h5>
                    </div>
                    <div className="primary-button">
                        Order now
                    </div>
                </div>
            </div>
        </Box>
    );

    return (
        <div className="header">

            <div className="header-language">
                <img src="https://cdn-icons-png.flaticon.com/512/1377/1377975.png" alt="" />
            </div>

            <div className="header-name">
                Core Power
            </div>
            
            <div className="header-cart" onClick={toggleDrawer('right', true)}>
                <i className="fa-solid fa-cart-shopping"></i>

                <div className="header-cart-noti">
                    0
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
