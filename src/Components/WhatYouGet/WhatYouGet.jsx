import React from 'react'
import Heading from '../Heading'
import dots from '../../assets/dots2.png'
import Box from '../Box'
import Flex from '../Flex'
import Container from '../Container'
import Img1 from '../../assets/box1.jpg'
import Img2 from '../../assets/box2.jpg'
import Img3 from '../../assets/box3.jpg'


const WhatYouGet = () => {
  return (
    <>  
        <Container>
            <div className='text-center mt-15 lg:mt-[150px]'>
                <div className='w-4 mx-auto mb-4'>
                    <img src={dots} alt="" />
                </div>
                <Heading>See what you will get with us</Heading>
            </div>

            <Flex className='flex-wrap justify-center gap-8 lg:gap-x-[30px] mt-[50px]'>
                <Box Imgsrc={Img1} className='shadow-lg'>
                    <h2 className='text-xl lg:text-[28px] font-semibold'>Development courses</h2>
                    <p className='text-sm lg:text-base text-secondary pt-[15px]'>Culpa non ex tempor qui nulla laborum. Laboris culpa ea incididunt dolore ipsum tempor duis do ullamco eiusmod officia magna ad id.</p>
                </Box>
                <Box Imgsrc={Img2} className='shadow-lg'>
                    <h2 className='text-xl text-[28px] font-semibold'>Money saving services</h2>
                    <p className='text-sm lg:text-base text-secondary pt-[15px]'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>
                </Box>
                <Box Imgsrc={Img3} className='shadow-lg'>
                    <h2 className='text-xl text-[28px] font-semibold'>Usability interface</h2>
                    <p className='text-sm lg:text-base text-secondary pt-[15px]'>Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Culpa non ex tempor qui nulla laborum.</p>
                </Box>
            </Flex>
        </Container>   
    </>
  )
}

export default WhatYouGet