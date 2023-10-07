    import React, { useState } from 'react';
    import menuImg from "../../../img/image 3.png"
    import { useDispatch, useSelector } from 'react-redux';
    import { useEffect } from 'react';
    import { useNavigate } from 'react-router-dom';
    import { GET_ORDER } from '../../redux/actionTypes';

    const Menu = ({dark, setDark}) => {
        const dispatch=useDispatch()
        const menu=useSelector((state)=>state.menu)
        console.log(menu);
        useEffect(() => {
            console.log('menu Updated:', menu); 
        }, [menu]);
        const order = useSelector((state)=>state.order)
        console.log(order);
        useEffect(()=>{
            console.log('order updated:', order);
        },[])

        const handleOrder = (item) => {
            dispatch({type:GET_ORDER, payload:item});
          };

        return (
            <div id='menu'>
                <div className='container'>
                    <div className='menu'>
                        <h1 className='menu--h1'>MENU</h1>
                        <div className='menu--blocks'>
                            {
                                menu && menu.map((el, idx)=>(
                                    <div key={idx}className='menu--blocks__block'>
                                        <img className='menu-img'src={URL.createObjectURL(el.image)} alt=''/>
                                        <div className='menu--blocks__block--texts'>
                                            <p className='menu--p1'>{el.foodName}</p>
                                            <div className='menu--blocks__block--order'>
                                                <p className='menu--p2'>{el.price}$</p>
                                                <button className='menu--blocks__block--order__btn'onClick={()=>handleOrder(el)}>to order</button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                                </div>
                                </div>
                                </div>
                                </div>)
}


export default Menu;
  

