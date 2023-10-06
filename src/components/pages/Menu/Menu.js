import React from 'react';
import menuImg from "../../../img/image 3.png"

const Menu = () => {
    
    return (
        <div id='menu'>
            <div className='container'>
                <div className='menu'>
                    <h1 className='menu--h1'>MENU</h1>
                    <div className='menu--blocks'>
                        <div className='menu--blocks__block'>
                            <img src={menuImg} alt=''/>
                            <div className='menu--blocks__block--texts'>
                                <p className='menu--p1'>shawarma</p>
                                <div className='menu--blocks__block--order'>
                                    <p className='menu--p2'>5$</p>
                                    <button className='menu--blocks__block--order__btn'>to order</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Menu;