import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';

const Slider = ({banner}) => {
  return (
    <div>
          <Carousel fade>

            {banner.map((item)=>(
              <Carousel.Item key={item}>

                    <img
                        className="d-block w-100"
                        src={item}
                        alt="First slide"
                    />
                </Carousel.Item>

        ))}     
              
          </Carousel>     
    </div>
  )
}

export default Slider
