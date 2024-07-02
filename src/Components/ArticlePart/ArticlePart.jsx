import React from 'react'
import Container from '../Container'
import Flex from '../Flex'
import Image from '../Image'
import dots from '../../assets/dots2.png'
import Heading from '../Heading'
import Button from '../Button'
import Box from '../Box'
import { IoShareSocialOutline } from "react-icons/io5";

const ArticlePart = () => {
  return (
    <div>
        <Container className='py-40'>
            <Flex className='flex-wrap justify-center xl:justify-end gap-x-[30px]'>
                <Box className='!w-[480px] py-10'>
                    <Image Imgsrc={dots}/>
                    <Heading className='pt-3 '>read the latest news and articles</Heading>
                    <p className='text-secondary pt-[30px] pb-12'>Culpa non ex tempor qui nulla laborum. Laboris culpa ea incididunt dolore ipsum tempor duis do ullamc.</p>
                    <Button className='text-primary text-decoration underline font-medium'>Read more</Button>
                </Box>
                <Box className='!w-[480px] shadow-lg py-10'>
                    <h6 className='text-primary font-medium pb-2'>Dec 10, 2020</h6>
                    <Heading className='text-[28px] font-semibold pb-6'>Launch of a new convenient feature this Saturday. Trend 2020</Heading>
                    <p className='text-secondary'>Culpa non ex tempor qui nulla laborum. Laboris culpa ea incididunt dolore ipsum tempor duis do ullamc.</p>
                    <Flex className='items-center gap-x-4 pt-7 text-secondary'>
                        <div className='h-5 w-5 rounded-full bg-[#BD93D8]'></div>
                        <p>Annette Black</p>
                        <div  className='h-1.5 w-1.5 rounded-full bg-primary'></div>
                        <IoShareSocialOutline />
                        <p>Share</p>
                    </Flex>
                </Box>
                <Box className='!w-[480px] shadow-lg py-10'>
                    <h6 className='text-primary font-medium pb-2'>Dec 10, 2020</h6>
                    <Heading className='text-[28px] font-semibold pb-6'>What you need to know before using Upland Application</Heading>
                    <p className='text-secondary'>Culpa non ex tempor qui nulla laborum. Laboris culpa ea incididunt dolore ipsum tempor duis do ullamc.</p>
                    <Flex className='items-center gap-x-4 pt-7 text-secondary'>
                        <div className='h-5 w-5 rounded-full bg-[#BD93D8]'></div>
                        <p>Annette Black</p>
                        <div  className='h-1.5 w-1.5 rounded-full bg-primary'></div>
                        <IoShareSocialOutline />
                        <p>Share</p>
                    </Flex>
                </Box>       
            </Flex>
        </Container>
    </div>
  )
}

export default ArticlePart