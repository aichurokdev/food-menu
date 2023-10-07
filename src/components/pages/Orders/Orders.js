import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ADD_TO_MINUS, GET_IMAGE } from '../../redux/actionTypes';
const Orders = ({ dark, setDark }) => {
  const menu = useSelector((state) => state.menu);
  const dispatch = useDispatch();
  const [orderWithImages, setOrderWithImages] = useState([]);

  useEffect(()=>{
    const storedOrders=JSON.parse(localStorage.getItem('orders'))||[]
    setOrderWithImages(storedOrders)
  },[])
  useEffect(()=>{
    localStorage.setItem('orders',JSON.stringify(orderWithImages))
  },[orderWithImages])



  return (
    <div id='orders'>
      <div className='container'>
        <div className='orders'>
          <h1 style={{ color: dark ? '#fff' : '' }} className='orders--h1'>
            TO ORDER
          </h1>
          <div className='orders--blocks'>
            {menu&&menu.map((el, idx) => (
              <div key={idx} className='orders--blocks__block'>
                <img className='orders--img' src={URL.createObjectURL(el.image)} alt='' />
                <div className='orders--blocks__block--texts'>
                  <div className='orders--blocks__block--texts__text'>
                    <p className='order--p1 '>{el.foodName}</p>
                    <p className='order--p2'>{el.price * el.quantity}$</p>
                  </div>
                  <div className='orders--blocks__block--texts__btns'>
                    <button className='orders--btn1'>delete order </button>
                    <div className='order--inc'>
                      <button
                        className='inc'
                        onClick={() => dispatch({ type: GET_IMAGE, payload: el })}
                      >
                        +
                      </button>
                      <p>{el.quantity}</p>
                      <button
                        className='inc'
                        onClick={() => dispatch({ type: ADD_TO_MINUS, payload: el })}
                      >
                        -
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
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