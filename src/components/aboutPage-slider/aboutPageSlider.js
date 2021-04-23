import React from 'react'
import Slider from 'react-slick'


import './about-slider.css'

function AboutPageSlider() {
    const settings = {
      arrows:false,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      initialSlide: 1,
      // autoplay: true,

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
              <>
                <div className='at mb-5'>
                    <div class="container">MARVEL CORPORATE INFORMATION</div>
                </div>  
              </>
 
            </Slider>
      
    )
}
export default AboutPageSlider;