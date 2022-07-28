import React from 'react'

const Card = (props) => {
  return (
        <div className="card1 concard">
            <img src={props.img} alt="pic-1" className="cardimg" />
            <p>{props.info}</p>
        </div>
  )
}

export default Card;