import React from 'react'
import Container from '../Container'
import Flex from '../Flex'
import Image from '../Image'
import Img from '../../assets/pop.png'
import Heading from '../Heading'
import dots from '../../assets/dots2.png'
import List from '../List'
import ListItem from '../ListItem'
import { CiCircleCheck } from "react-icons/ci";

const TheMostPop = () => {
  return (
    <>
        <Container className='mt-40'>
            <Flex className='justify-center'>
                <div>
                    <Image Imgsrc={Img}/>
                </div>
                <div className='w-[550px] pl-14'>
                    <Image Imgsrc={dots}/>
                    <Heading className='capitalize pt-4'>The most popular application 2021</Heading>
                    <p className='text-[27px] text-secondary pt-[30px]'>Culpa non ex tempor qui nulla laborum. Laboris culpa ea incididunt dolore ipsum.</p>
                    <List className='pt-[30px]'>
                        <ListItem className='flex items-center text-base text-secondary'><CiCircleCheck className='text-primary text-2xl mr-4'/>Elit mollit aliqua quis ad sint nulla Lorem commodo reprehenderit.</ListItem>
                        <ListItem className='flex items-center text-base text-secondary pt-4'><CiCircleCheck className='text-primary text-2xl mr-4'/>Tempor consectetur aliqua aute veniam occaecat eu do esse adipisicing ut. </ListItem>
                        <ListItem className='flex items-center text-base text-secondary pt-4'><CiCircleCheck className='text-primary text-[45px] mr-4'/>Culpa non ex tempor qui nulla laborum. Laboris culpa ea incididunt dolore ipsum tempor duis do ullamco eiusmod officia magna ad id.</ListItem>
                    </List>
                </div>
            </Flex>
        </Container>
    </>
  )
}

export default TheMostPop