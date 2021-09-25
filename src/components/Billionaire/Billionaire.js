import React from 'react';
import './Billionaire.css'
const Billionaire = (props) => {
    console.log(props.billionaire)
    const {name,age,money,img,id} = props.billionaire
    return (
        < >
            
            <div class="card mx-3 my-3 mt-5">
    <img src={img} class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title">{name}</h5>
      <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
      <p>He Is {age} Years Old</p>
      <p class="card-text">Money ${money} B</p>
      
    </div>

        </div>
        </>
    );
};

export default Billionaire;

