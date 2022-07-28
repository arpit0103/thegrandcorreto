import React from 'react'

const Cardsec = (props) => {
  return (
    <div className="card4 concard">
            <img src= {props.img} alt="pic-1" className="cardimg" />
            <p>{props.info}</p>
        </div>
  )
}

export default Cardsec