import React from 'react'
import "../Styles/HotItemCard.css";

const HotItemCard = ({ image, index, name, price, pdfUrl}) => {
  return (
      <div className="HotItemCard">
          <a href={pdfUrl} target="_blank">
          <img src={image} alt={`${index} product`} />
          <p>{name}</p>
          <span>{price}</span>
        </a>
      </div>
  )
}

export default HotItemCard
