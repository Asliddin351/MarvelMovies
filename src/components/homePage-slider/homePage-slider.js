import React from 'react'
import Slider from 'react-slick'


import './home-slider.css'

function HomePageSlider() {
    const settings = {
      arrows:false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      initialSlide: 0,
      autoplay: true,

      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    }
  

    return (

            <Slider {...settings}>
              <div>
                <div className='poster-slider slider-1'></div>  
              </div>
              <div>
                <div className='poster-slider slider-2'></div>  
              </div>
              
 
            </Slider>
      
    )
}
export default HomePageSlider;