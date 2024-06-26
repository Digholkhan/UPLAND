import React from 'react'
import Button from '../Button'
import dots from '../../assets/dots2.png'
import Flex from '../Flex'
import Container from '../Container'

const Banner = () => {
  return (
    <>
     <div className='relative top-0 bg-BannerImg bg-cover py-[120px] xl:py-[240px]'>
      <Container>
        <div className='w-[300px] xl:w-[600px] ml-8 xl:ml-[330px]'>
          <Flex className='items-center'>
            <div className='mr-2.5'>
              <img src={dots} alt="" />
            </div>
            <h6 className='text-primary uppercase text-sm xl:text-base'>trendy application</h6>     
          </Flex>
          <h1 className='text-3xl xl:text-7xl text-white font-bold capitalize'>work faster with powerful tools</h1>
          <p className='text-white text-sm xl:text-2xl mt-4 xl:mt-8'>Laboris culpa ea incididunt dolore ipsum tempor duis do ullamco eiusmod officia magna ad id.</p>
          <div className='mt-6 xl:mt-12'>
          <Button BtnName='Learn More' className='text-sm xl:text-base text-white bg-BtnC px-5 xl:px-9 py-2 xl:py-4 rounded-full hover:bg-transparent border-2 border-primary hover:text-primary'/>
          </div>
        </div>
      </Container>
     </div>
    </>
  )
}

export default Banner