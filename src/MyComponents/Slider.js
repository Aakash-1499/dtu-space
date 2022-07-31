import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';

const Slider = () => {
  return (
    <div>
          <Carousel fade interval={3000}>
        <Carousel.Item >

          <img
            className="d-block w-100"
            src={require('../data/4.gif')}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item >

                    <img
                        className="d-block w-100"
            src={require('../data/3.gif')}
                        alt="First slide"
                    />
        </Carousel.Item> 
        
        <Carousel.Item >

          <img
            className="d-block w-100"
            src={require('../data/5.gif')}
            alt="First slide"
          />
        </Carousel.Item>
       
        </Carousel>
  
    </div>
  )
}

export default Slider
