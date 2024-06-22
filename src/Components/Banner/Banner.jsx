import React from 'react'
import Button from '../Button'
import dots from '../../assets/dots2.png'
import Flex from '../Flex'
import Container from '../Container'

const Banner = () => {
  return (
    <>
     <div className='relative top-0 bg-BannerImg bg-cover py-[120px] lg:py-[240px]'>
      <Container>
        <div className='w-[300px] lg:w-[600px] ml-8 lg:ml-[330px]'>
          <Flex className='items-center'>
            <div className='mr-2.5'>
              <img src={dots} alt="" />
            </div>
            <h6 className='text-primary uppercase text-sm lg:text-base'>trendy application</h6>     
          </Flex>
          <h1 className='text-3xl lg:text-7xl text-white font-bold capitalize'>work faster with powerful tools</h1>
          <p className='text-white text-sm lg:text-2xl mt-4 lg:mt-8'>Laboris culpa ea incididunt dolore ipsum tempor duis do ullamco eiusmod officia magna ad id.</p>
          <div className='mt-6 lg:mt-12'>
              <Button BtnName='Learn More' className='text-sm lg:text-base text-white bg-BtnC px-5 lg:px-9 py-2 lg:py-4 rounded-full hover:bg-transparent border-2 border-primary hover:text-primary'/>
          </div>
        </div>
      </Container>
     </div>
    </>
  )
}

export default Banner