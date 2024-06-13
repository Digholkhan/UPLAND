import React from 'react'
import Slider from "react-slick";
import Img1 from '../../assets/img-1.png'
import Img2 from '../../assets/img-2.png'
import Img3 from '../../assets/img-3.png'
import Img4 from '../../assets/img-4.png'
import Image from '../Image';


const SlickSlider = () => {
        const settings = {
            className: "center",
            centerMode: true,
            infinite: true,
            centerPadding: "60px",
            slidesToShow: 3,
            speed: 500
        };
        return (
            <div className="slider-container">
            <Slider {...settings}>
                <div>
                    <Image Imgsrc={Img1}/>
                </div>
                <div>
                    <Image Imgsrc={Img2}/>
                </div>
                <div>
                    <Image Imgsrc={Img3}/>
                </div>
                <div>
                    <Image Imgsrc={Img4}/>
                </div>               
            </Slider>
            </div>
        );
 
}

export default SlickSlider