import React from 'react'
import Container from '../Container'
import Heading from '../Heading'
import Image from '../Image'
import dots from '../../assets/dots2.png'
import Img from '../../assets/99.png'
import Flex from '../Flex'
import Box from '../Box'
import { HiArrowLongLeft } from "react-icons/hi2";
import { HiArrowLongRight } from "react-icons/hi2";
import Slider from "react-slick";
import './AboutUs.css'

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} text-5xl text-[#cccccc] absolute top-[-36%] right-[22%] hover:text-primary`}
      style={{ ...style,  }}
      onClick={onClick}
       
    >
    <HiArrowLongRight/>
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
    className={`${className} text-5xl text-[#cccccc] absolute top-[-36%] left-[72%] hover:text-primary`}
    style={{ ...style,  }}
    onClick={onClick}
    >
    <HiArrowLongLeft/>
    </div>
  );
}
const AboutUs = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    nextArrow: <SampleNextArrow />,
    prevArrow:  <SamplePrevArrow />
  };
  return (
    <> 
      <Container>
          <Flex className='justify-between'>
          <div className='pl-[200px] pb-[54px]'>
            <Image Imgsrc={dots}/>
            <Heading className='pt-3'>they say about us</Heading>
          </div>
          </Flex>
          <div className="slider-container">
            <Slider {...settings}>
                <Box className='shadow-lg w-[480px]'>
                    <Image Imgsrc={Img}/>
                    <p className='pt-[15px] text-secondary '>“Velit occaecat duis occaecat nostrud. Veniam occaecat id ea Lorem est officia excepteur cupidatat consectetur. Labore do nulla ipsum dolore ipsum. Proident excepteur ex aliqua cupidatat.”</p>
                    <Flex className='items-center pt-[30px]'>
                      <div className='w-[60px] h-[60px] rounded-full bg-[#BD93D8] mr-[20px]'></div>
                      <h6 className='text-base font-medium'>Brooklyn Simmons</h6>
                    </Flex>
                </Box>
                <Box className='shadow-lg w-[480px]'>
                    <Image Imgsrc={Img}/>
                    <p className='pt-[15px] text-secondary'>“Velit occaecat duis occaecat nostrud. Veniam occaecat id ea Lorem est officia excepteur cupidatat consectetur. Labore do nulla ipsum dolore ipsum. Proident excepteur ex aliqua cupidatat.”</p>
                    <Flex className='items-center pt-[30px]'>
                      <div className='w-[60px] h-[60px] rounded-full bg-[#BD93D8] mr-[20px]'></div>
                      <h6 className='text-base font-medium'>Brooklyn Simmons</h6>
                    </Flex>
                </Box>
                <Box className='shadow-lg w-[480px]'>
                    <Image Imgsrc={Img}/>
                    <p className='pt-[15px] text-secondary'>“Velit occaecat duis occaecat nostrud. Veniam occaecat id ea Lorem est officia excepteur cupidatat consectetur. Labore do nulla ipsum dolore ipsum. Proident excepteur ex aliqua cupidatat.”</p>
                    <Flex className='items-center pt-[30px]'>
                      <div className='w-[60px] h-[60px] rounded-full bg-[#BD93D8] mr-[20px]'></div>
                      <h6 className='text-base font-medium'>Brooklyn Simmons</h6>
                    </Flex>
                </Box>
                <Box className='shadow-lg w-[480px]'>
                    <Image Imgsrc={Img}/>
                    <p className='pt-[15px] text-secondary '>“Velit occaecat duis occaecat nostrud. Veniam occaecat id ea Lorem est officia excepteur cupidatat consectetur. Labore do nulla ipsum dolore ipsum. Proident excepteur ex aliqua cupidatat.”</p>
                    <Flex className='items-center pt-[30px]'>
                      <div className='w-[60px] h-[60px] rounded-full bg-[#BD93D8] mr-[20px]'></div>
                      <h6 className='text-base font-medium'>Brooklyn Simmons</h6>
                    </Flex>
                </Box>
                <Box className='shadow-lg w-[480px]'>
                    <Image Imgsrc={Img}/>
                    <p className='pt-[15px] text-secondary'>“Velit occaecat duis occaecat nostrud. Veniam occaecat id ea Lorem est officia excepteur cupidatat consectetur. Labore do nulla ipsum dolore ipsum. Proident excepteur ex aliqua cupidatat.”</p>
                    <Flex className='items-center pt-[30px]'>
                      <div className='w-[60px] h-[60px] rounded-full bg-[#BD93D8] mr-[20px]'></div>
                      <h6 className='text-base font-medium'>Brooklyn Simmons</h6>
                    </Flex>
                </Box>
                <Box className='shadow-lg w-[480px]'>
                    <Image Imgsrc={Img}/>
                    <p className='pt-[15px] text-secondary'>“Velit occaecat duis occaecat nostrud. Veniam occaecat id ea Lorem est officia excepteur cupidatat consectetur. Labore do nulla ipsum dolore ipsum. Proident excepteur ex aliqua cupidatat.”</p>
                    <Flex className='items-center pt-[30px]'>
                      <div className='w-[60px] h-[60px] rounded-full bg-[#BD93D8] mr-[20px]'></div>
                      <h6 className='text-base font-medium'>Brooklyn Simmons</h6>
                    </Flex>
                </Box>
                <Box className='shadow-lg w-[480px]'>
                    <Image Imgsrc={Img}/>
                    <p className='pt-[15px] text-secondary '>“Velit occaecat duis occaecat nostrud. Veniam occaecat id ea Lorem est officia excepteur cupidatat consectetur. Labore do nulla ipsum dolore ipsum. Proident excepteur ex aliqua cupidatat.”</p>
                    <Flex className='items-center pt-[30px]'>
                      <div className='w-[60px] h-[60px] rounded-full bg-[#BD93D8] mr-[20px]'></div>
                      <h6 className='text-base font-medium'>Brooklyn Simmons</h6>
                    </Flex>
                </Box>
                <Box className='shadow-lg w-[480px]'>
                    <Image Imgsrc={Img}/>
                    <p className='pt-[15px] text-secondary'>“Velit occaecat duis occaecat nostrud. Veniam occaecat id ea Lorem est officia excepteur cupidatat consectetur. Labore do nulla ipsum dolore ipsum. Proident excepteur ex aliqua cupidatat.”</p>
                    <Flex className='items-center pt-[30px]'>
                      <div className='w-[60px] h-[60px] rounded-full bg-[#BD93D8] mr-[20px]'></div>
                      <h6 className='text-base font-medium'>Brooklyn Simmons</h6>
                    </Flex>
                </Box>
                <Box className='shadow-lg w-[480px]'>
                    <Image Imgsrc={Img}/>
                    <p className='pt-[15px] text-secondary'>“Velit occaecat duis occaecat nostrud. Veniam occaecat id ea Lorem est officia excepteur cupidatat consectetur. Labore do nulla ipsum dolore ipsum. Proident excepteur ex aliqua cupidatat.”</p>
                    <Flex className='items-center pt-[30px]'>
                      <div className='w-[60px] h-[60px] rounded-full bg-[#BD93D8] mr-[20px]'></div>
                      <h6 className='text-base font-medium'>Brooklyn Simmons</h6>
                    </Flex>
                </Box>
            </Slider>
          </div>
      </Container>  
    </>
  )
}

export default AboutUs