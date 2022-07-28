import React from 'react';
import carddetail from './Carddetail';
import Cardsecdet from './Cardsecdet';
import Card from './Card';
import Cardsec from './Cardsec';
import whyus from '../Images/whyus.png';
import Typical from 'react-typical';

const Home = () => {


  return (
    <>
    <section id="navbar">
        <div className="quotes">
          <p id="text">
            <Typical
              loop={Infinity}
              steps={
                [
                  'The Grand Correto !!',
                  4000,
                  'Drink Coffe | Do Stuff | Repeat',
                  4000,
                ]
              }
              wrapper='b'
            />
          </p>
        </div>
        <div className="card">
           {carddetail.map((value) => {
             return(
                <Card 
                img = {value.img}
                info = {value.info}
            />
            )
        })}
         </div>
         <div className="cardsec">
            {Cardsecdet.map((value)=>{
             return(
                <Cardsec
                     img = {value.img}
                info = {value.info}
                />
            )
        })}
        </div>   
    </section>

    <section className="content">
    <div className="content1">
        Welcome To Our Cafe !
    </div>
    <div className="content2">
        Our brand new cafe offer's you wide range of coffee
        from Espresso To Our Specialized Corretto!!..
        fell the taste of coffee of your choice which is 
        fully customizable.Experience the legacy handmade delicious coffee.

        'Let The Coffee Bring the Happiness to your Life !!'
    </div>
    </section>

    <section className="why">
    <div className="whyus">
        <p className="whyustext1">Our Love, for Your Love</p>
        <p className="whyustext2">Our Cafe is dream place for coffee lovers.The Perfect place to spend time with your loved one with our beloved coffee.</p>
    </div>
    <div className="whyus2">
        <img src= {whyus} alt="whyus" className="whyusimg" />
    </div>
    </section>
    </>
  )
}

export default Home;