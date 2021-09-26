import React from 'react';
import './Billionaire.css'
const Billionaire = (props) => {
   
    const {name,age,money,img,country,pera,id} = props.billionaire
    return (
        < >
            
            <div className="card mx-3 my-3 mt-5 shadow-lg">
    <img src={img} className="card-img-top" alt="..."/>
    <div className="card-body">
      <h5 className="card-title">{name}</h5>

      <p>{pera}.</p>
      <p>Currently He Is Number {id} Billionaire In The World in the age of {age}</p>
      <p className="card-text">Money - ${money} B</p>
      <p>Country Name - {country}</p>

      <button onClick={ ()=> props.handleAddToCart(props.billionaire)} className="buttons"><i class="fas fa-calculator"></i> Add To Count</button>
      
    </div>

        </div>
        </>
    );
};

export default Billionaire;

