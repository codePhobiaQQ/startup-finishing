import React from 'react'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import Slider from "react-slick";

import avatar3 from '../../static/img/avatar3.png'

const Feedback = props => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    vertical: true,
    // centerMode: true
  }

  const slides = [
    {
      name: '1'
    },
    {
      name: '1'
    },
    {
      name: '1'
    },
    {
      name: '1'
    },
    {
      name: '1'
    },
  ]

  return (

    <div className="feedback" id="Voices">
      <div className="feedback_wrapper">
        <div className="feedback_title">Отзывы</div>

        <Slider
          {...settings}
        >
          {slides.map((slide, index) => {
            return (
              <div key={index} className="slider-wrapper">
                <div  className="feedback_item">
                  <div className="feedback_item_avatar">
                    <img src={avatar3} alt="#" />
                  </div>
                  <div className="feedback_item_body">
                    <div className="feedback_name">Софья Петрова</div>
                    <div className="feedback_text">Безусловно, убеждённость, некоторых оппонентов обеспечивает широкому
                      кругу.
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </Slider>

      </div>
    </div>
  );
};

export default Feedback;