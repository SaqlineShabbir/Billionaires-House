import React, { useEffect, useState } from 'react';
import Billionaire from '../Billionaire/Billionaire';
import './Main.css'
const Main = () => {
    const [billionaires, setBillionaires] = useState([])
    useEffect(()=>{
        fetch('./billionaire.JSON')
        .then(response => response.json())
        .then(data => setBillionaires(data));
    }, [])
    return (
        <div className="main-container">
            <div className="billionaire-container">
            
             {
                 billionaires.map(billionaire => <Billionaire billionaire={billionaire}></Billionaire>)
             }
            </div>
            <div className="cart-container">
           <h1>hello cart</h1>
            </div>
            
        </div>
    );
};

export default Main;