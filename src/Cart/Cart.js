import React from 'react';
import './Cart.css'
const Cart = (props) => {
    
    const {cart} = props;
    let total = 0;
    for(const billionaire of cart){
        total = parseFloat(total)  + parseFloat( billionaire.money);
        
    }
   
    return (
        <div className="my-card ms-5">
            <div className="card border-black mb-3 my-5" style={{"maxWidth": "18rem"}}>
  <div className="card-header count text-white text-center fw-bold"><h5>Count Here</h5></div>
  <div className="card-body text-black">
    <h5 className="card-title ">Choosen Billionaires - {props.cart.length}</h5>
    <h5>Choosen Billionaires Name -</h5>
   <ul>
       {
           cart.map(billionaire=> <li>{billionaire.name}</li>)
       }
   </ul>
   
    <h5 className="">Total Money</h5> <p> - {total.toFixed(2)} B</p>
   
  </div>
  <div className=" count card-footer  border-black text-center"></div>
</div>
        </div>
    );
};

export default Cart;
