import React from 'react'
import Slider from 'react-slick'
import poster1 from '../../images/slider-1.jpg'
import poster2 from '../../images/slider-2.jpg'

import './about-slider.css'

function AboutSlider() {
    const settings = {
      arrows:false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      initialSlide: 0,
      // autoplay: true,
      className: 'poster-slider'

    }


    //   responsive: [
    //     {
    //       breakpoint: 1024,
    //       settings: {
    //         slidesToShow: 3,
    //         slidesToScroll: 3,
    //         infinite: true,
    //         dots: true
    //       }
    //     },
    //     {
    //       breakpoint: 600,
    //       settings: {
    //         slidesToShow: 2,
    //         slidesToScroll: 2,
    //         initialSlide: 2
    //       }
    //     },
    //     {
    //       breakpoint: 480,
    //       settings: {
    //         slidesToShow: 1,
    //         slidesToScroll: 1
    //       }
    //     }
    //   ]
    // }

    return (

            <Slider {...settings}>
              <div>
                  <img src={poster1} alt="1"/>
              </div>
              <div>
                  <img src={poster2} alt="2"/>
              </div>
            </Slider>
      
    )
}
export default AboutSlider;