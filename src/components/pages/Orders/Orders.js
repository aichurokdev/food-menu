import React from 'react';
import ordersImg from "../../../img/image 6 (1).png"

const Orders = () => {
    return (
        <div id='orders'>
            <div className='container'>
                <div className='orders'>
                    <h1 className='orders--h1'>TO ORDER</h1>
                    <div className='orders--blocks'>
                        <div className='orders--blocks__block'>
                            <img className='orders--img'src={ordersImg} alt=''/>
                            <div className='orders--blocks__block--texts'>
                                <div className='orders--blocks__block--texts__text'>
                                    <p className='order--p1 '>cappucino</p>
                                    <p className='order--p2'>10.5$</p>
                                </div>
                                <div className='orders--blocks__block--texts__btns'>
                                    <button className='orders--btn1'>delete order</button>
                                    <div className='order--inc'>
                                        <button className='inc'>+</button>
                                        <p className='inc-p'>1x</p>
                                        <button className='inc'>-</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='last-btn'>
                        <button className='last-btnn'>to order</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Orders;