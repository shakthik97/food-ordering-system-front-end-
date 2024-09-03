import React from 'react'
import { topMeal } from './topMeal'
import CarouselItems from './CarouselItems'
import Slider from 'react-slick'

const MultiItemCarousel = () => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay:true,
    autoplaySpeed:2000,
    arrows: false
  };

  return (
    <div>
        <Slider {...settings}>
            {topMeal.map((item, index)=><CarouselItems 
            key={index}
            image={item.image}
            title={item.title}
            />)}
        </Slider>
    </div>
  )
}

export default MultiItemCarousel  