import React from 'react'
import Heading from '../Heading'
import Image from '../Image'
import dots from '../../assets/dots2.png'
import SlickSlider from '../SlickSlider/SlickSlider'
import Slider from "react-slick";
import Img0 from '../../assets/img-0.png'
import Img1 from '../../assets/img-1.png'
import Img2 from '../../assets/img-02.png'
import Img3 from '../../assets/img-3.png'
import Img4 from '../../assets/img-4.png'
import Container from '../Container'
import './slider'
import './UiPresentation.css'


const UiPresentation = () => {
    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 3,
        speed: 500
    };
  return (
    <>       
        <div className='bg-Uipresentaion bg-center bg-cover bg-no-repeat  lg:h-[1172px] w-full lg:my-32 pt-40 lg:pt-96'>
            
            <Container>
                <div>
                    <div className="w-4 mx-auto text-center ">
                        <Image Imgsrc={dots} />
                    </div>
                    <Heading className='text-center text-white pt-4'>watch our UI presentation</Heading>
                </div>
                <div >
                    <div class="carousel h-[500px] lg:h-[900px] rounded-[20px]">
                        <div class="carousel-item Vbl">
                            <Image Imgsrc={Img0}/>
                        </div>
                        
                        <div class="carousel-item Vbl">
                            <Image Imgsrc={Img1}/>
                        </div>
                        
                        <div class="carousel-item Vbl">
                            <Image Imgsrc={Img2} className='rounded-[20px]'/>
                        </div>
                        
                        <div class="carousel-item Vbl">
                            <Image Imgsrc={Img3}/>
                        </div>
                        
                        <div class="carousel-item Vbl">
                            <Image Imgsrc={Img4}/>
                        </div>                       
                    </div>
                </div>     
            </Container>   
        </div>
    </>
  )
}

export default UiPresentation