import React, {Component} from 'react';
import './slider.css';
import Slider from 'react-slick';
import mountains from './mountains.jpg';
import road from './road.jpg';
import forest from './forest.jpg';
import shine from './shine.jpg';

class UisSlider extends Component {
  
    render () {
        var settings = {
            dots: true,
            infinite: true,
            autoplay: true,
            adaptiveHeight: true,
            autoplaySpeed: 10000,
            speed: 1000,
            slidesToShow: 1,
            slidesToScroll: 1
        };
        return (
            <div id="slider" className="slider">
                <Slider {...settings}>
                    <div><img src={shine}></img></div>
                    <div><img src={mountains}></img></div>
                    <div><img src={forest}></img></div>
                </Slider>
            </div>
        );
    };
}
export default UisSlider;