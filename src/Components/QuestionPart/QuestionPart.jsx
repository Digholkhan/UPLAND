import React, { useState } from 'react'
import Flex from '../Flex'
import Container from '../Container'
import { CiPlay1 } from "react-icons/ci";
import Image from '../Image';
import dots from '../../assets/dots2.png'
import Heading from '../Heading';
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";
import BgElement from '../../assets/BgElement.png'
import AOS from 'aos';
import 'aos/dist/aos.css';

const QuestionPart = () => {
  const [show,setShow]= useState(false);
  const [show1,setShow1]= useState(false);
  const [show2,setShow2]= useState(false);
  // let handleshow1=()=>{
  //   setShow(!show) 
   
  // }

  return (
    <>
      <div className='relative'>
        <div className='absolute top-20 left-0 -z-10'><Image Imgsrc={BgElement}/></div>
        <Container>
            <Flex className='flex-wrap justify-center'>
                <div className='bg-PlayBg bg-cover w-[552px] lg:mr-[30px]'>
                    <div className='w-[300px] lg:w-[500px] h-[300px] lg:h-[500px] rounded-full bg-[#BD93D8] flex justify-center items-center mx-auto'>
                      <div className='w-[100px] h-[100px] rounded-full bg-[#fff] text-3xl text-primary flex justify-center items-center'><CiPlay1 /></div>
                    </div>
                </div>
              <div>
                <div className='pt-20 lg:pt-0 z-10' >
                  <Image Imgsrc={dots}/>
                  <Heading className='pt-3 pb-12'>Frequently Asked Questions</Heading>
                </div>
                <div className='border-0 w-[350px] lg:w-[555px]'>                  
                    <div className={`relative flex items-start justify-between cursor-pointer  
                       ${show?'pb-0':'pb-5'}`} onClick={()=>setShow(!show)} > 
                      <div className='w-[555px]'>
                          <h3 className={`text-xl lg:text-2xl font-medium border-b-2 border-dotted  w-full pb-5 ${show?'border-red-500':'border-secondary'}`}>How to start using Upland Application?
                          </h3>
                          {show&&
                            <div>
                            <p className="py-7 text-secondary pl-5">
                            Velit occaecat duis occaecat nostrud. Veniam occaecat id ea Lorem est officia excepteur cupidatat consectetur. Labore do nulla ipsum dolore ipsum. Proident excepteur ex aliqua cupidatat adipisicing in cillum amet eu dolore labore in aliquip.
                            </p>
                            </div>
                          }
                        </div>
                        {/* <button onClick={()=>setShow(!show)} className={`absolute top-2 right-0 ${show?"text-red-500":"text-secondary"}`}>{show?<FaMinus/>:<FaPlus/>}</button> */}
                        <FaMinus className={`absolute top-2 right-0 transition-all duration-300 ${show?"opacity-100":"opacity-0 -rotate-45"}`} /><FaPlus className={`absolute top-2 right-0 transition-all duration-300 ${show?"opacity-0 rotate-45":"opacity-100"}`} />
                    </div>
                    <div className={`relative flex items-start justify-between cursor-pointer  ${show1?'pb-0':'pb-5'}`} onClick={()=>setShow1(!show1)}> 
                    <div className='w-[555px]'>
                        <h3 className={`text-xl lg:text-2xl font-medium border-b-2 border-dotted  pb-5 ${show1?"border-red-500":"border-secondary"} `}>How can I register?
                        </h3>
                        {show1&&
                          <div>
                          <p className="py-7 text-secondary pl-5">
                          Velit occaecat duis occaecat nostrud. Veniam occaecat id ea Lorem est officia excepteur cupidatat consectetur. Labore do nulla ipsum dolore ipsum. Proident excepteur ex aliqua cupidatat adipisicing in cillum amet eu dolore labore in aliquip.
                          </p>
                          </div>
                        }
                      </div>
                      <button onClick={()=>setShow1(!show1)} className={`absolute top-2 right-0 ${show1?"text-red-500":"text-secondary"}`} >{show1?<FaMinus />:<FaPlus />}</button>
                    </div>
                    <div className={`relative flex items-start justify-between cursor-pointer  ${show2?'pb-0':'pb-5'}`} onClick={()=>setShow2(!show2)}> 
                    <div className='w-[555px]'>
                        <h3 className={`text-xl lg:text-2xl font-medium border-b-2 border-dotted  pb-5 ${show2?"border-red-500":"border-secondary"}`}>Can I use free plan permanently?
                        </h3>
                        {show2&&
                          <div>
                          <p className="py-7 text-secondary pl-5">
                          Velit occaecat duis occaecat nostrud. Veniam occaecat id ea Lorem est officia excepteur cupidatat consectetur. Labore do nulla ipsum dolore ipsum. Proident excepteur ex aliqua cupidatat adipisicing in cillum amet eu dolore labore in aliquip.
                          </p>
                          </div>
                        }  
                    </div>
                      <button onClick={()=>setShow2(!show2)} className={`absolute top-2 right-0 ${show2?"text-red-500":"text-secondary"}`}>{show2?<FaMinus />:<FaPlus />}</button>
                    </div>         
                </div>
              </div>
            </Flex>
        </Container>
      </div>
    </>  
  )
}

export default QuestionPart