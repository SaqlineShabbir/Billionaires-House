import React from 'react';
import './Billionaire.css'
const Billionaire = (props) => {
   
    const {name,age,money,img,id} = props.billionaire
    return (
        < >
            
            <div className="card mx-3 my-3 mt-5 shadow-lg">
    <img src={img} className="card-img-top" alt="..."/>
    <div className="card-body">
      <h5 className="card-title">{name}</h5>
      <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
      <p>He Is {age} Years Old</p>
      <p className="card-text">Money ${money} B</p>

      <button onClick={ ()=> props.handleAddToCart(props.billionaire)} className="buttons">Add To Cart</button>
      
    </div>

        </div>
        </>
    );
};

export default Billionaire;

