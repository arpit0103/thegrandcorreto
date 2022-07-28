import React from 'react';
import Button from '@mui/material/Button';

const Orderproductcard = (props) => {
  return (
    <div className="ordercard">
        <div className="order1">
            <img src={props.img} alt="img" className='orderpic'/>
        </div>
        <div className="ordername">
            <h2>{props.name}</h2>
        </div>
        <div className="btn">
            <Button className='orderbut' variant='outlined'>Add to Cart {props.price}</Button>
        </div>
    </div>
  )
}

export default Orderproductcard