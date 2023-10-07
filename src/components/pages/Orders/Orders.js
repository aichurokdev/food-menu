import React, { useEffect } from 'react';
import ordersImg from "../../../img/image 6 (1).png"
import { useSelector } from 'react-redux';
import { useState } from 'react';

const Orders = () => {
    const order=useSelector((state)=>state.order)
    console.log(order);
        useEffect(()=>{
            console.log('order updated:', order);
        },[])

        // const loadImage = async (url) => {
        //     const response = await fetch(url);
        //     const blob = await response.blob();
        //     return URL.createObjectURL(blob);
        // };

        // useEffect(()=>{
        //     const LoadImage=async()=>{
        //         const orderImages = await Promise.all(
        //             order.map(async(el)=>{
        //                 const imageUrl=await loadImage(el.image)
        //                 return{...el, imageUrl}
        //             })
        //         )
        //     }
        //     loadImage()
        // },[order])
        const [orderWithImages, setOrderWithImages] = useState([]);

        useEffect(() => {
            const loadImage = async (url) => {
              try {
                const response = await fetch(url);
                const blob = await response.blob();
                return URL.createObjectURL(blob);
              } catch (error) {
                console.error('Error loading image:', error);
                return null;
              }
            };
        
            const loadImages = async () => {
              const ordersWithImages = [];
              for (const el of order) {
                const imageUrl = await loadImage(el.image);
                if (imageUrl) {
                  ordersWithImages.push({ ...el, imageUrl });
                }
              }
        
              setOrderWithImages(ordersWithImages);
            };
        
            loadImages();
          }, [order]);
        
          useEffect(() => {
            console.log('orderWithImages updated:', orderWithImages);
          }, [orderWithImages]);
        
const Orders = ({dark, setDark}) => {
    return (
        <div id='orders'>
            <div className='container'>
                <div className='orders'>
                    <h1 style={{ color: dark ? "#fff" : "" }} className='orders--h1'>TO ORDER</h1>
                    <div className='orders--blocks'>
                        {
                            orderWithImages.map((el,idx)=>
                                (
                                <div key={idx}className='orders--blocks__block'>
                            {el.imageUrl && (
                                    <img className='orders--img' src={el.imageUrl} alt='' />
                                )}
                            <div className='orders--blocks__block--texts'>
                                <div className='orders--blocks__block--texts__text'>
                                    <p className='order--p1 '>{el.foodName}</p>
                                    <p className='order--p2'>{el.price}$</p>
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

                            )
                                )
                        }
                        
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