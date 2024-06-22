import React from 'react'

const Heading = ({className,children}) => {
  return (
    <h3 className={`text-3xl lg:text-5xl capitalize font-semibold ${className}`}>{children}</h3>
  )
}

export default Heading