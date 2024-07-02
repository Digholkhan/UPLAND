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
import Img9 from '../../assets/99.png'
import tg from '../../assets/tg.png'
import { GoReply } from "react-icons/go";
import Button from '../../Components/Button'
import Container from '../../Components/Container'


const Post = () => {
    const [value, setValue] = useState(new Date());

    function onChange(nextValue) {
        setValue(nextValue);
    }
    
  return (
    <>
    <HeaderPart Hname='Post' Page='Post' />
    <Container>
    
    <div className='py-20 xl:py-40 relative'>
    <div className='absolute top-96 left-0 xl:block hidden'><Image Imgsrc={BgElement}/></div>
      <Flex className='flex-wrap justify-center gap-x-[50px]'>
        <div className='leftPart w-full lg:w-[800px] '>
          <div className='border-b-2  border-dashed border-secondary'>
            <Image Imgsrc={Img2} className='h-[400px] w-full rounded-[20px] ' />
            <div className='py-2'> 
              <Flex className='items-center gap-x-4 pt-7 text-secondary pb-5'>
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
          <div className='mt-10 '>
            <Heading className='!text-4xl'>a selection of the best apps for 2020</Heading>
            <p className='text-secondary mt-6'>There’s such a thing as “too much information”, especially for the companies scaling out their sales operations. That’s why Attentive was born in 2015 help sales teams make their increasing pipelines simpler to manage. Indeed, the small, Portugal-based team is itself focused on scaling, having much participated in accelerator
            </p>
            <p className='text-secondary mt-7'>In this episode, Attentive founder Robert Fox talks about what it takes to build a tech new product from the ground up. Discover their approach to running an engineering team, from adopting new open source technologies, to onboarding junior developers and learning .
            </p>
          </div>
          <div className='mt-10 p-12 shadow-lg rounded-[20px]'>
             <h3 className='text-secondary text-2xl font-medium'>“Ullamco exercitation incididunt ut fugiat ex velit nulla. Lorem amet ut ad aute irure exercitation elit exercitation Lorem non aliqua occaecat ea sunt. Commodo non duis aute mollit sint. Mollit veniam dolor aliqua nulla sit est do mollit esse ut amet.”</h3>
             <div className='flex justify-between pt-5 '>
             <h4 className='text-xl font-semibold'>Robert Fox</h4>
             <Image Imgsrc={Img9}/>
          </div>
          </div>
          <div className='mt-10'>
            <Heading className='!text-2xl'>a selection of the best apps for 2020</Heading>
            <p className='text-secondary mt-6'>There’s such a thing as “too much information”, especially for the companies scaling out their sales operations.Lorem non aliqua occaecat ea sunt. That’s why Attentive was born in 2015 help sales teams make their increasing pipelines simpler to manage. Indeed, the small.
            </p>
            <List className='text-secondary mt-10 grid gap-y-5'>    
                <ListItem  className='before:content-["•"] before:text-primary flex items-center before:text-2xl before:mr-4  leading-3'>We’ve been supporting WordPress since the beginning.</ListItem>
                <ListItem ItemName='IOS app' className='before:content-["•"] before:text-primary flex items-center before:text-2xl before:mr-4  leading-3'>Our easy-to-use control panel and API let you spend.</ListItem>
                <ListItem ItemName='Mobile' className='before:content-["•"] before:text-primary flex items-center before:text-2xl before:mr-4  leading-3'>Perfect for large sites or agencies managing multiple clients.</ListItem>                
            </List>
            <p className='text-secondary mt-10'>There’s such a thing as “too much information”, especially for the companies scaling out their sales operations. That’s why Attentive was born in 2015 help sales teams make their increasing pipelines simpler to manage. Indeed, the small, Portugal-based team is itself focused on scaling, having much participated in accelerator
            </p>
            <p className='text-secondary mt-7'>In this episode, Attentive founder Robert Fox talks about what it takes to build a tech new product from the ground up. Discover their approach to running an engineering team, from adopting new open source technologies, to onboarding junior developers and learning .
            </p>
          </div>
          <div className='mt-10'>
              <div className=' border-b-2 border-dashed pb-2 border-secondary'>
                <List className='text-secondary flex gap-x-7 mt-6 items-center'>
                  <h5 className='text-black font-medium'>Tags:</h5>
                  <ListItem ItemName='Android app'/>
                  <ListItem ItemName='IOS app' className='flex items-center before:content-["•"] before:text-primary  before:text-2xl before:mr-4 '/>
                  <ListItem ItemName='Mobile' className='flex items-center before:content-["•"] before:text-primary  before:text-2xl before:mr-4'/>
                </List>
              </div>
              <div className='flex px-10 py-5 shadow-lg rounded-[20px] mt-10'>
                <div><Image Imgsrc={tg}/></div>
                <div className='ml-5'>
                  <h3 className='text-2xl font-semibold'>Robert Fox</h3>
                  <p className='text-secondary'>Ullamco exercitation incididunt ut fugiat ex velit nulla. Lorem amet ut ad aute irure exercitation elit exercitation Lorem non accaecat ea sunt.</p>
                  <List className='text-secondary flex gap-x-7 mt-6 items-center'>
                  <ListItem ItemName='FB'/>
                  <ListItem ItemName='TW' className='flex items-center before:content-["•"] before:text-primary  before:text-2xl before:mr-4 '/>
                  <ListItem ItemName='IN' className='flex items-center before:content-["•"] before:text-primary  before:text-2xl before:mr-4'/>
                  </List>
                </div>
              </div>
          </div>
          <div className='mt-24 '>
            <Heading className='!text-4xl'>Comments(3)</Heading>
            <div className='mt-10 pb-10  border-b-2 border-secondary border-dashed'> 
              <Flex className='items-center gap-x-4 pt-7 text-secondary pb-5'>
                <div className='h-5 w-5 rounded-full bg-[#BD93D8]'></div>
                <p>Annette Black</p>
                <div className='h-1.5 w-1.5 rounded-full bg-primary'></div>
                <p>Dec 10, 2020</p>
                <div className='h-1.5 w-1.5 rounded-full bg-primary'></div>
                <GoReply className='text-primary text-2xl'/>
                <p className='text-primary'>Reply</p>
              </Flex>
               <p className='text-secondary'>Ullamco exercitation incididunt ut fugiat ex velit nulla. Lorem amet ut ad aute irure exercitation elit exercitation Lorem non aliqua occaecat ea sunt.</p>
            </div>
            <div className='mt-10 xl:ml-20 pb-10  border-b-2 border-secondary border-dashed'> 
              <Flex className='items-center gap-x-4 pt-7 text-secondary pb-5'>
                <div className='h-5 w-5 rounded-full bg-[#BD93D8]'></div>
                <p>Annette Black</p>
                <div className='h-1.5 w-1.5 rounded-full bg-primary'></div>
                <p>Dec 10, 2020</p>
                <div className='h-1.5 w-1.5 rounded-full bg-primary'></div>
                <GoReply className='text-primary text-2xl'/>
                <p className='text-primary'>Reply</p>
              </Flex>
               <p className='text-secondary'>Ullamco exercitation incididunt ut fugiat ex velit nulla. Lorem amet ut ad aute irure exercitation elit exercitation Lorem non aliqua occaecat ea sunt.</p>
            </div>
            <div className='mt-10 pb-10  border-b-2 border-secondary border-dashed'> 
              <Flex className='items-center gap-x-4 pt-7 text-secondary pb-5'>
                <div className='h-5 w-5 rounded-full bg-[#BD93D8]'></div>
                <p>Annette Black</p>
                <div className='h-1.5 w-1.5 rounded-full bg-primary'></div>
                <p>Dec 10, 2020</p>
                <div className='h-1.5 w-1.5 rounded-full bg-primary'></div>
                <GoReply className='text-primary text-2xl'/>
                <p className='text-primary'>Reply</p>
              </Flex>
               <p className='text-secondary'>Ullamco exercitation incididunt ut fugiat ex velit nulla. Lorem amet ut ad aute irure exercitation elit exercitation Lorem non aliqua occaecat ea sunt.</p>
            </div>
          </div>
          <div className='mt-10'>
            <Heading className='!text-4xl '>leave a reply</Heading>
            <div className=''>
                <Flex className='flex-wrap xl:flex-nowrap gap-x-5'>
                  <input type="text" placeholder='Name'  className='!w-full xl:!w-[400px] !my-8 !py-1 !border-2 !border-solid !border-[#E6EBFC] !shadow-none !bg-white !text-secondary !rounded-full !pl-5 !mb-0'/>
                  <input type="text" placeholder='Email'  className='!w-full xl:!w-[400px] !my-8 !py-1 !border-2 !border-solid !border-[#E6EBFC] !shadow-none  !bg-white !text-secondary !rounded-full !pl-5 !mb-0'/>
                </Flex>
                <div className='flex flex-wrap'>
                <input type="text" placeholder='Message'  className='!w-full !my-8 !py-1 !border-2 !border-solid !border-[#E6EBFC] !shadow-none !bg-white  !text-secondary !rounded-[20px] !pl-5 !mb-0  !pb-24'/>
                </div>
            </div>
            <Button BtnName='Post Comment' className='mt-5 text-sm lg:text-base text-white bg-BtnC px-5 lg:px-9 py-2 lg:py-4 rounded-full  border-2 border-primary '/>
          </div>
        </div>
        <div className='rightPart w-[300px] mt-10 xl:mt-0'>
          <div className='relative w-full'>
            <input type="text" placeholder='Search' className=' !py-1 !border-2 !border-solid !border-[#E6EBFC] !shadow-none !rounded-full !pl-5 !mb-0' />
            <IoIosSearch className='absolute top-[18px] right-0 text-2xl text-secondary' />
          </div>
          <div className='mt-12'>
            <h3 className='text-3xl font-semibold  border-b-2 border-dashed pb-2 border-secondary'>Recent posts</h3>
            <h6 className='text-primary font-medium mt-6'>Dec 10, 2020</h6>
            <h5 className='text-2xl font-semibold'>Launch of a new convenient feature this Saturday...</h5>
            <p className='text-secondary mt-3'>Amet minim mollit non deserunt ullamco est sit aliqua dolor...</p>
            <h6 className='text-primary font-medium mt-6'>Dec 10, 2020</h6>
            <h5 className='text-2xl font-semibold'>Launch of a new convenient feature this Saturday...</h5>
            <p className='text-secondary mt-3'>Amet minim mollit non deserunt ullamco est sit aliqua dolor...</p>
          </div>
          <div className='mt-12'>
            <h3 className='text-3xl font-semibold  border-b-2 border-dashed pb-2 border-secondary'>Recent comments</h3>
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
              <h3 className='text-3xl font-semibold  border-b-2 border-dashed pb-2 border-secondary'>Tags</h3>
              <List className='text-secondary flex flex-wrap gap-x-7 mt-6 items-center'>
                <ListItem ItemName='Android app'/>
                <ListItem ItemName='IOS app' className='before:content-["•"] before:text-primary flex items-center before:text-2xl before:mr-4  leading-3'/>
                <ListItem ItemName='Mobile' className='before:content-["•"] before:text-primary flex items-center before:text-2xl before:mr-4  leading-3'/>
                <ListItem ItemName='App design'/>
                <ListItem ItemName='Development' className='before:content-["•"] before:text-primary flex items-center before:text-2xl before:mr-4  leading-3'/>
                <ListItem ItemName='Collaboration'/>
                <ListItem ItemName='Download' className='before:content-["•"] before:text-primary flex items-center before:text-2xl before:mr-4  leading-3'/>
              </List>
          </div>
        </div>
      </Flex>
    </div>
    </Container>
    
  </>
  )
}

export default Post