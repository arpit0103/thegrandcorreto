import React from 'react';
import Orderproduct from './Orderproduct';
import Orderproductcard from './Orderproductcard';
import pcf from '../Images/pcf.jpg';
import Button from '@mui/material/Button';
const Ourproduct = () => {

  return (
    <>
    <section className="product">
      <div className="prhe">
        <h1 className='prheh'>"Taste the Coffee Once !!!</h1>
        <h1 className='prheh'>And Tongue Wants More"</h1>
      </div>
      <div className="pcard">
          <img src={pcf} alt="pic" className='pcf'/>
          <div className="ptit">
          <h1 className='pcfhead'>Our Product</h1>
          <div className="pbntn">
          <Button variant='outlined' className='pbtn' href="#pdct">Shop Now</Button>
          </div>
          </div>
      </div>
    </section>
    <div className="product1" id="pdct">
    <div className="productorder">
        {Orderproduct.map((value) => {
          return(
            <Orderproductcard
              name={value.name}
              img={value.img}
              price={value.price}
            />
          )
        })}
      </div>
      <div className="productcafe"></div>
      </div>
    </>

  )
}

export default Ourproduct;