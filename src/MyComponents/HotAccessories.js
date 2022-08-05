import React from 'react'
import HotItemCard from "./HotItemCard.js";
import  "../Styles/HotAccesories.css";

const HotAccessories = ({ music }) => {
  return (
      <div className="HotAccessories">
          <div style={{width:"100%"}}>
              {music && music.map((item, index) => (
                  <HotItemCard key={item.id} name={item.title} price={item.content} image={item.previewImage} index={index} />
              ))}
          </div>
      </div>
  )
}

export default HotAccessories
