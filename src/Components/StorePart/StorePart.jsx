import React from 'react'
import Container from '../Container'
import Heading from '../Heading'
import Button from '../Button'
import Image from '../Image'
import dots from '../../assets/dots2.png'
import { IoLogoGooglePlaystore } from "react-icons/io5";
import { FaApple } from "react-icons/fa";
import Box from '../Box'
import List from '../List'
import ListItem from '../ListItem'
import Flex from '../Flex'
import BgElement from '../../assets/BgElement.png'

const StorePart = () => {
  return (
    <div className='relative'>  
        <div className='absolute top-0 right-0 hidden xl:block'><Image Imgsrc={BgElement}/></div>
        <Container>
            <div className='py-16 xl:py-40'>
                <Flex className='flex-wrap justify-center'>
                    <div className='w-[500px]'>
                        <Image Imgsrc={dots}/>
                        <Heading className='pt-[14px]'>easy download and ready to use</Heading>
                        <p className='text-secondary pt-[30px] pb-[50px]'>Velit occaecat duis occaecat nostrud. Veniam occaecat id ea Lorem est officia excepteur cupidatat consectetur. Labore do nulla ipsum dolore ipsum. Proident excepteur ex aliqua cupidatat adipisicing.</p>
                        <div className=''>
                            <Button  className='relative text-sm font-medium border-2 border-primary py-[18px] px-[35px] pl-[50px] rounded-full bg-primary text-white hover:bg-transparent hover:text-primary group'><IoLogoGooglePlaystore className='absolute top-[16px] left-[20px] text-[24px] '/>
                            {/* <span>Download on the</span> */}
                            Google play</Button>
                            <Button  className='relative py-[18px] px-[35px] pl-[50px] rounded-full text-primary border-2 border-primary ml-[20px] hover:bg-primary hover:text-white'><FaApple className='absolute text-[24px] top-[18px] left-[20px]'/>App store</Button>
                        </div>
                    </div>
                    <div className='flex flex-wrap justify-center xl:justify-normal'>
                        <Box className='w-[300px] xl:pl-[100px]'>
                            <h6 className='text-primary font-medium text-xs'>Basic</h6>
                            <h5 className='text-[32px] font-medium'>$12</h5>
                            <p className='text-secondary text-base pb-2.5 border-b-2 border-[#5841a39e] border-dotted space-x-2'>/per month</p>
            
                            <List className='list-disc pt-[30px] pl-6 text-base text-secondary'>
                                <ListItem>Proident excepteur</ListItem>
                                <ListItem>Veniam occaecat id ea</ListItem>
                                <ListItem>Labore do nulla ipsum</ListItem>
                                <ListItem>Culpa non ex tempor qui</ListItem>
                            </List>
                        </Box>
                        <Box className='w-[300px]'>
                            <h6 className='text-primary font-medium text-xs'>popular</h6>
                            <h5 className='text-[32px] font-medium'>$99</h5>
                            <p className='text-secondary text-base pb-3 border-b-2 border-[#5841a39e] border-dotted space-x-2'>/per year</p>
                            <List className='list-disc pt-[30px] pl-6 text-base text-secondary w-'>
                                <ListItem>Velit occaecat duis</ListItem>
                                <ListItem>Culpa non ex tempor quia</ListItem>
                                <ListItem> Excepteur cupidatat consectetur</ListItem>
                                <ListItem>Proident excepteur</ListItem>
                            </List>
                        </Box>
                    </div>
                </Flex>
            </div>
        </Container>
    </div>
  )
}

export default StorePart