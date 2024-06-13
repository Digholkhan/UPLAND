import React from 'react'
import Image from '../Image'
import dots from '../../assets/dots2.png'
import Flex from '../Flex'
import Heading from '../Heading'
import Button from '../Button'

const TrialPart = () => {
  return (
    <div className='bg-TrialBg bg-cover py-80'>
       <div className='text-center py-40 bg-TrialBGFrame bg-no-repeat bg-center'>
          <Flex className='justify-center items-center'>
            <div className='mr-2.5'>
              <Image Imgsrc={dots} alt=""/>
            </div>
            <h6 className='text-primary uppercase'>trendy application</h6>     
          </Flex>
          <Heading className='text-[80px] w-[580px] mx-auto font-bold text-white pb-[40px] pt-3'>Get a free trial for <span className='text-primary'>30</span> days</Heading>
          <Button BtnName='get a free trial' className='text-base capitalize text-white bg-BtnC px-9 py-4 rounded-full hover:bg-transparent border-2 border-primary hover:text-primary'/>
       </div>
    </div>
  )
}

export default TrialPart