import React from 'react'

const Image = ({Imgsrc,className}) => {
  return (
    <div >
        <img src={Imgsrc}  className={className}/>
    </div>
  )
}

export default Image