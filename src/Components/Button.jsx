import React from 'react'

const Button = ({className,BtnName,Icon,children,onClick}) => {
  return (
    <button onClick={onClick} className={className}> {BtnName}{Icon}{children} </button>
  )
}

export default Button