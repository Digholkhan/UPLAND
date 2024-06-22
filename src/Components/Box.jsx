import React from 'react'
import Image from './Image'


const Box = ({Imgsrc,children,className}) => {
  return (
    <>  
      <div className={`rounded-[20px] py-[50px] px-[40px] w-[300px] lg:w-[380px]  ${className}`}>
            <Image className="mx-auto" Imgsrc={Imgsrc}/>
            <div className='pt-8'>
              {children}  
            </div>
      </div>
    </>
  )
}

export default Box