import React, { useEffect, useState } from 'react';
import Cart from '../../Cart/Cart';
import Billionaire from '../Billionaire/Billionaire';
import './Main.css'
const Main = () => {
    const [billionaires, setBillionaires] = useState([])
    const[cart,setCart] = useState([])

    useEffect(()=>{
        fetch('./billionaire.JSON')
        .then(response => response.json())
        .then(data => setBillionaires(data));
    }, [])
   const handleAddToCart =(billionaire) =>{
       const newCart = [...cart,billionaire]
       setCart(newCart)

   }
    return (
        <div className="main-container">
            <div className="billionaire-container">
            
             {
                 billionaires.map(billionaire => <Billionaire
                   handleAddToCart ={handleAddToCart}
                    key={billionaire.id}
                     billionaire={billionaire}></Billionaire>)
             }
            </div>
            <div className="cart-container">
           <Cart cart={cart}></Cart>
            
            </div>
            
        </div>
    );
};

export default Main;