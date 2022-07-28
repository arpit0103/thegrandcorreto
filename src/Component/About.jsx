import React from 'react';
import Mvv from './Mvv';
import Aboutstmt from './Aboutstmt';
import logo from '../Images/tgc5.png';

const About = () => {

  return (
    <section className="about">
    {/* <div className="cof">
      <div className="coffee"></div>
    </div> */}
      <div className="cont">
        <div className="cont1">
          <img src={logo} alt="logo" className='abtlg' />
          <div className="abtcont">
            <p className="qut">"Coffee is a language in itself."</p>
            <p className="qutcont">
              Our brand new cafe offer's you wide range of coffee
              from Espresso To Our Specialized Corretto!!..
              fell the taste of coffee of your choice which is 
              fully customizable.Experience the legacy handmade delicious coffee.'Let The Coffee Bring the Happiness to your Life !!
            </p>
            <div className="coffee"></div>
          </div>
        </div>
        <div className="cont2">
          <h1 className="cont2head">The Grand Correto</h1>
            {Mvv.map((value) =>{
              return(
              <Aboutstmt 
                name={value.name}
                stmt={value.stmt}
              />
              )
            })}
        </div>
      </div>
    </section>
  )
}

export default About;