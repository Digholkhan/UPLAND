import React, { useState } from 'react'
import Flex from '../Flex'
import Container from '../Container'
import logo from '../../assets/Logo.png'
import List from '../List'
import ListItem from '../ListItem'
import Button from '../Button'
import { CiMobile2 } from "react-icons/ci";
import {FaBars} from 'react-icons/fa'
import {RxCross1} from 'react-icons/rx'

const Navbar = () => {
  const [show,setShow]= useState(false);
  const handleClick =()=>{
    setShow(!show)
  }
  return (
    <div className='absolute w-full top-0 left-0 z-10'>
      <Container>
        <Flex className='items-center'>
          <div className='w-1/5'>
            <img src={logo} alt="logo" />
          </div>
          <Flex className='justify-start w-3/5 items-center'>
            <div>
              <List className={`absolute hover:cursor-pointer lg:static duration-300 lg:flex justify-end gap-x-12 lg:text-white text-base px-5 py-5 lg:px-0 lg:py-0  w-full text-center  bg-white lg:bg-transparent ${show ? 'top-[88px] left-0' : 'top-[88px] left-[-30rem]'}`}>
                <ListItem ItemName='Features' className='hover:text-primary duration-300 ' />
                <ListItem ItemName='Download app' className='hover:text-primary duration-300 !list-disc' />
                <ListItem ItemName='UI screens' className='hover:text-primary duration-300 !list-disc' />
                <ListItem ItemName='Testimonials' className='hover:text-primary duration-300 !list-disc' />
                <ListItem ItemName='FAQ' className='hover:text-primary duration-300 !list-disc' />
                <ListItem ItemName='' className='hover:text-primary duration-300 !list-disc' />
              </List>
            </div>
            <Button className='text-primary text-base border-2 rounded-full border-primary py-1 px-5 ml-2.5 hover:text-white hover:bg-BtnC' BtnName='Free Trial' />
          </Flex>
       
          <div className='w-1/5 flex justify-end items-center'>
            <Button className='group flex text-white text-lg hover:text-primary'> <CiMobile2 className='text-3xl text-primary group-hover:text-white flex justify-start' />+1 742 65 84 122</Button>
          </div>
          <div onClick={handleClick}>
              {show == true ? <RxCross1 className='text-white'/>:<FaBars className="block lg:hidden text-white"/>}
         </div>
        </Flex>
      </Container>
    </div>
  )
}

export default Navbar