import React from 'react'

const Container = ({className,children,id}) => {
  return (
    <div className={`max-w-container px-2.5 py-8 mx-auto ${className}`} id={id} >{children}</div>
  )
}

export default Container