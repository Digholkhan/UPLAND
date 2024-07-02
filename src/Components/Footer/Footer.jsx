import React from 'react'
import List from '../List'
import ListItem from '../ListItem'
import Button from '../Button'
import Image from '../Image'
import dots from '../../assets/dots2.png'
import Flex from '../Flex'
import Heading from '../Heading'
import card from '../../assets/Card.png'


const Footer = () => {
  return (
    <>
    <div className='bg-FooterBG bg-cover'>
        <div className='bg-white pb-10 pt-10 mx-auto lg:w-[1000px]
            rounded-3xl px-8'>
            <Flex className='max-sm:flex-wrap justify-center items-center'>
            <div>
                <Image Imgsrc={card} />
            </div>
            <div>
            <Flex className='items-center'>
            <div className='mr-2.5'>
              <Image Imgsrc={dots} alt="" />
            </div>
            <h6 className='text-primary uppercase'>Newsletter</h6>     
            </Flex>
            <div className='pt-3'>
                <div className=''>
                    <Heading className=''>Be aware of new features</Heading>
                    <p className='text-secondary pt-3'>Culpa non ex tempor qui nulla laborum. Laboris culpa ea ipsum tempor duis do ullamco eiusmod officia magna ad id.</p>
                </div>
                <Flex className='pt-4 gap-x-4 items-center'>
                    <input type="text" placeholder='Email'  className='!py-1 !border-2 !border-solid !shadow-none !border-[#E6EBFC] !ring-primary !rounded-full !pl-5 !mb-0'/>
                    <Button BtnName='Subscribe' className='text-base capitalize text-white bg-BtnC px-9 py-4 rounded-full hover:bg-transparent border-2 border-primary hover:text-primary'/>
                </Flex>
            </div>
            </div>
            </Flex>
        </div>
        <div className='pt-20 pb-12 w-2/5 mx-auto lg:flex'>
            <List className='lg:flex gap-x-10 text-lg text-white text-center !list-disc'>
                <ListItem ItemName='Features' className='hover:text-primary duration-300 lg:!list-disc' />
                <ListItem ItemName='Download app' className=' hover:text-primary duration-300 lg:!list-disc' />
                <ListItem ItemName='UI screens' className='hover:text-primary duration-300 lg:!list-disc' />
                <ListItem ItemName='Testimonials' className='hover:text-primary duration-300 lg:!list-disc' />
                <ListItem ItemName='FAQ' className='hover:text-primary duration-300 lg:!list-disc' />
                <ListItem ItemName='' className='hover:text-primary duration-300 lg:!list-disc' />
                <Button className='text-primary text-base border-2 rounded-full border-primary py-1 px-5 ml-2.5 hover:text-white hover:bg-BtnC mt-5 lg:mt-0' BtnName='Free Trial' />
            </List>
        </div>
            <div className='text-center text-[#B3B1B7]'>
                <hr className='border-[#B3B1B7] '/>
                <h6 className='py-5'>© All rights reserved. Upland 2020</h6>
            </div>
    </div>
    </>
  )
}

export default Footer