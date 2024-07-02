import React,{useState} from 'react'
import Image from '../Image'
import dots from '../../assets/dots2.png'
import Flex from '../Flex'
import Heading from '../Heading'
import Button from '../Button'

const TrialPart = () => {

  const [showModal, setShowModal] = useState(false);

  return (
    <div className='bg-TrialBg bg-cover py-80'>
       <div className='text-center py-40 bg-TrialBGFrame bg-no-repeat bg-center'>
          <Flex className='justify-center items-center'>
            <div className='mr-2.5'>
              <Image Imgsrc={dots} alt=""/>
            </div>
            <h6 className='text-primary uppercase'>trendy application</h6>     
          </Flex>
          <Heading className='text-5xl lg:!text-[80px] w-[300px] lg:w-[580px] mx-auto font-bold text-white pb-[40px] pt-3'>Get a free trial for <span className='text-primary'>30</span> days</Heading>
          <Button BtnName='get a free trial' className='text-base capitalize text-white bg-BtnC px-9 py-4 rounded-full hover:bg-transparent border-2 border-primary hover:text-primary' onClick={() => setShowModal(true)}/>

          {showModal ? (
                <>
                  <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none bg-white ">
                    <div className="bg-PopUp bg-cover bg-center p-20 w-[731px] h-[800px] mx-auto ">
                        <div className="pl-36">
                          <Heading className='text-3xl lg:!text-[50px]  mx-auto font-semibold text-white pb-[40px] pt-3 text-start'>Get a free trial for <span className='text-primary'>30</span> days</Heading>
                          <p className='text-white w-[400px] text-start'>Culpa non ex tempor qui nulla laborum. Laboris culpa ea incididunt dolore ipsum tempor duis do ullamc.</p>
                          <div className='grid justify-start'>
                            <input type="text" placeholder='Name'  className='!w-[400px] !my-8 !py-1 !border-2 !border-solid !border-secondary !bg-white !text-secondary !rounded-full !pl-5 !mb-0'/>
                            <input type="text" placeholder='Email'  className='!w-[400px] !my-8 !py-1 !border-2 !border-solid !border-secondary  !bg-white !text-secondary !rounded-full !pl-5 !mb-0'/>
                            <input type="text" placeholder='Message'  className='!w-[400px] !my-8 !py-1 !border-2 !border-solid !border-secondary  !bg-white  !text-secondary !rounded-[20px] !pl-5 !mb-0  !pb-24'/>
                          </div>
                            <div className='flex justify-start'>
                            <Button BtnName='get a free trial' className=' mt-8 text-base capitalize text-white bg-BtnC px-9 py-4 rounded-full hover:bg-transparent border-2 border-primary hover:text-primary' onClick={() => setShowModal(false)}/>
                            </div>
                        </div>
                    </div>
                  </div>
                </>
           ) : null}
       </div>
    </div>
  )
}

export default TrialPart