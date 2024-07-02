import React from 'react'
import HeaderPart from '../../Components/HeaderPart/HeaderPart'
import Heading from '../../Components/Heading'
import { IoIosSearch } from "react-icons/io";
import Container from '../../Components/Container';
import Image from '../../Components/Image';
import ImgE from '../../assets/Error.png'
import BgElement from '../../assets/BgElement.png'

const Error = () => {
  return (
    <>
        <HeaderPart Hname='Oops!' Page='404' />
        <Container>
        <div className='flex justify-center py-16'>
          <div className='mt-20'>
             <h2 className='text-[88px] font-bold'>404</h2>
             <h3 className='text-[50px] font-semibold pt-3'>Page not found</h3>
             <p className='text-secondary text-2xl pt-7 pb-7 w-[380px]'>It looks like nothing was found at this location. Maybe try a search?</p>
             <div className='w-[400px] relative pt-5'>
              <input type="text" placeholder='Search' className='!py-1 !border-2 !border-solid !border-[#E6EBFC] !rounded-full !pl-5 !mb-0 !shadow-none  !ring-primary' />
              <IoIosSearch className='absolute top-[35px] right-0  text-2xl text-secondary' />
            </div>
          </div>
          <div className='ml-32'>
            <Image Imgsrc={ImgE}  />
          </div>
        </div>
        <div className='absolute bottom-[-450px] right-0'><Image Imgsrc={BgElement}/></div>
        </Container>
    </>
  )
}

export default Error