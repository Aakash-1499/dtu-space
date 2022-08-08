import React from 'react'
import HotItemCard from "./HotItemCard.js";
import  "../Styles/HotAccesories.css";

const HotAccessories = ({ music }) => {
  return (
      <div className="HotAccessories">
          <div  className="HotWidth">
              {music && music.map((item, index) => (
                  <HotItemCard key={item.id} pdfUrl={item.pdfUrl} name={item.title} price={item.content} image={item.previewImage} index={index} />
              ))}
          </div>
      </div>
  )
}

export default HotAccessories
