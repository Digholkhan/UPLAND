import React from 'react'
import Heading from '../Heading'
import Button from '../Button'

const Modal = () => {
    const [showModal, setShowModal] = useState(false);
  return (
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
  )
}

export default Modal