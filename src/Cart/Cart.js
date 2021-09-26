import React from 'react';

const Cart = (props) => {
    
    const {cart} = props;
    let total = 0;
    for(const billionaire of cart){
        total = parseFloat(total)  + parseFloat( billionaire.money);
        
    }
    let name = ''
    for(const billionaire of cart){
        name = name + billionaire.name + " " +","
    }
    return (
        <div className="my-card">
            <div className="card border-black mb-3 my-5" style={{"maxWidth": "18rem"}}>
  <div className="card-header bg-transparent border-black text-center">Header</div>
  <div className="card-body text-black">
    <h5 className="card-title ">Choosen Billionaires - {props.cart.length}</h5>
    <p className="card-text text black">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <p>Total Money - {total.toFixed(2)} B</p>
    <h5 className=" ">Choosen Billionaires Name -</h5><p className="fs-6 text

"> {name}</p>
  </div>
  <div className="card-footer bg-transparent border-black text-center">Footer</div>
</div>
        </div>
    );
};

export default Cart;