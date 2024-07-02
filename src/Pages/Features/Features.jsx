import React, { useState } from 'react'
import HeaderPart from '../../Components/HeaderPart/HeaderPart'
import Image from '../../Components/Image'
import Img1 from '../../assets/001.jpg'
import Img2 from '../../assets/002.jpg'
import Img3 from '../../assets/003.jpg'
import Img4 from '../../assets/004.jpg'
import Img5 from '../../assets/005.jpg'
import Img6 from '../../assets/006.jpg'
import Heading from '../../Components/Heading'
import Flex from '../../Components/Flex'
import { IoShareSocialOutline } from "react-icons/io5";
import { IoIosSearch } from "react-icons/io";
import { FaRegComment } from "react-icons/fa";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import '../Features/calender.css';
import List from '../../Components/List'
import ListItem from '../../Components/ListItem'
import BgElement from '../../assets/BgElement.png'
import Container from '../../Components/Container'



const Features = () => {
  const [value, setValue] = useState(new Date());

  function onChange(nextValue) {
    setValue(nextValue);
  }


  return (
    <>
      <HeaderPart Hname='Blog' Page='Blog' />
      <Container>
      <div className='py-20 xl:py-40 relative'>
        <div className='absolute top-96 left-0 xl:block hidden -z-10'><Image Imgsrc={BgElement}/></div>
        <Flex className='flex-wrap justify-center gap-x-[50px]  mx-auto'>
          <div className='leftPart grid gap-y-14 w-full lg:w-[800px] relative z-10'>
            <div className='bg-white rounded-[20px] mx-auto shadow-lg overflow-hidden'>
              <Image Imgsrc={Img2} className='h-[350px] w-full' />
              <div className='px-10 py-12'>
                <Heading className='text-2xl xl:text-2xl'>a selection of the best apps for 2020</Heading>
                <p className='text-secondary mt-3'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                <Flex className='items-center gap-x-4 pt-7 text-secondary'>
                  <div className='h-5 w-5 rounded-full bg-[#BD93D8]'></div>
                  <p>Annette Black</p>
                  <div className='h-1.5 w-1.5 rounded-full bg-primary'></div>
                  <p>Mobile</p>
                  <div className='h-1.5 w-1.5 rounded-full bg-primary'></div>
                  <IoShareSocialOutline />
                  <p>Share</p>
                </Flex>
              </div>
            </div>
            <div className=' rounded-[20px] shadow-lg overflow-hidden'>
              <Image Imgsrc={Img1} className='h-[350px] w-full' />
              <div className='px-10 py-12'>
                <Heading className='text-2xl xl:!text-[36px]'>a selection of the best apps for 2020</Heading>
                <p className='text-secondary mt-3'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                <Flex className='items-center gap-x-4 pt-7 text-secondary'>
                  <div className='h-5 w-5 rounded-full bg-[#BD93D8]'></div>
                  <p>Annette Black</p>
                  <div className='h-1.5 w-1.5 rounded-full bg-primary'></div>
                  <p>Mobile</p>
                  <div className='h-1.5 w-1.5 rounded-full bg-primary'></div>
                  <IoShareSocialOutline />
                  <p>Share</p>
                </Flex>
              </div>
            </div>
            <div className=' rounded-[20px] shadow-lg overflow-hidden'>
              <Image Imgsrc={Img3} className='h-[350px] w-full' />
              <div className='px-10 py-12'>
                <Heading className='text-2xl xl:!text-[36px]'>a selection of the best apps for 2020</Heading>
                <p className='text-secondary mt-3'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                <Flex className='items-center gap-x-4 pt-7 text-secondary'>
                  <div className='h-5 w-5 rounded-full bg-[#BD93D8]'></div>
                  <p>Annette Black</p>
                  <div className='h-1.5 w-1.5 rounded-full bg-primary'></div>
                  <p>Mobile</p>
                  <div className='h-1.5 w-1.5 rounded-full bg-primary'></div>
                  <IoShareSocialOutline />
                  <p>Share</p>
                </Flex>
              </div>
            </div>
          </div>
          <div className='rightPart w-[300px] mt-10 xl:mt-0'>
            <div className='relative w-full'>
              <input type="text" placeholder='Search' className=' !py-1 !border-2 !border-solid !shadow-none !border-[#E6EBFC] !ring-primary !rounded-full !pl-5 !mb-0' />
              <IoIosSearch className='absolute top-[18px] right-0 text-2xl text-secondary' />
            </div>
            <div className='mt-12'>
              <h3 className='text-3xl font-semibold  border-b-2 border-dotted pb-2 border-secondary'>Recent posts</h3>
              <h6 className='text-primary font-medium mt-6'>Dec 10, 2020</h6>
              <h5 className='text-2xl font-semibold'>Launch of a new convenient feature this Saturday...</h5>
              <p className='text-secondary mt-3'>Amet minim mollit non deserunt ullamco est sit aliqua dolor...</p>
              <h6 className='text-primary font-medium mt-6'>Dec 10, 2020</h6>
              <h5 className='text-2xl font-semibold'>Launch of a new convenient feature this Saturday...</h5>
              <p className='text-secondary mt-3'>Amet minim mollit non deserunt ullamco est sit aliqua dolor...</p>
            </div>
            <div className='mt-12'>
              <h3 className='text-3xl font-semibold  border-b-2 border-dotted pb-2 border-secondary'>Recent comments</h3>
              <FaRegComment className='text-primary text-2xl mt-6' />
              <p className='text-secondary mt-3 '>Amet minim mollit non deserunt ullamco est sit aliqua dolor...</p>
              <FaRegComment className='text-primary text-2xl mt-6' />
              <p className='text-secondary mt-3 '>Amet minim mollit non deserunt ullamco est sit aliqua dolor...</p>
              <FaRegComment className='text-primary text-2xl mt-6' />
              <p className='text-secondary mt-3 '>Amet minim mollit non deserunt ullamco est sit aliqua dolor...</p>
            </div>
            <div className='mt-12'>
              <Calendar
                onChange={onChange}
                value={value}
              />
            </div>
            <div className='mt-12 grid grid-cols-3 gap-1'>    
                <Image Imgsrc={Img1} className='h-[100px] w-[100px] hover:scale-150 transition duration-150 ease-in-out'/>
                <Image Imgsrc={Img2} className='h-[100px] w-[100px] hover:scale-150 transition duration-150 ease-in-out'/>
                <Image Imgsrc={Img3} className='h-[100px] w-[100px] hover:scale-150 transition duration-150 ease-in-out'/>
                <Image Imgsrc={Img4} className='h-[100px] w-[100px] hover:scale-150 transition duration-150 ease-in-out'/>
                <Image Imgsrc={Img5} className='h-[100px] w-[100px] hover:scale-150 transition duration-150 ease-in-out'/>
                <Image Imgsrc={Img6} className='h-[100px] w-[100px] hover:scale-150 transition duration-150 ease-in-out'/>
            </div>
            <div className='mt-12'>
                <h3 className='text-3xl font-semibold  border-b-2 border-dotted pb-2 border-secondary'>Tags</h3>
                <List className='text-secondary flex flex-wrap gap-x-7 mt-6 items-center'>
                  <ListItem ItemName='Android app'/>
                  <ListItem ItemName='IOS app' className='before:content-["•"] before:text-primary block before:text-2xl before:mr-4 before:mt-2 leading-3'/>
                  <ListItem ItemName='Mobile' className='before:content-["•"] before:text-primary block before:text-2xl before:mr-4 before:mt-2 leading-3'/>
                  <ListItem ItemName='App design'/>
                  <ListItem ItemName='Development' className='before:content-["•"] before:text-primary block before:text-2xl before:mr-4 before:mt-2 leading-3'/>
                  <ListItem ItemName='Collaboration'/>
                  <ListItem ItemName='Download' className='before:content-["•"] before:text-primary block before:text-2xl before:mr-4 before:mt-2 leading-3'/>
                </List>
            </div>
          </div>
        </Flex>
      </div>
      </Container>
    </>
  )
}

export default Features