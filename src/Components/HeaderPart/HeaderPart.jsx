import React from 'react'
import List from '../List'
import ListItem from '../ListItem'
import { NavLink } from 'react-router-dom'
import Container from '../Container'

const HeaderPart = ({className,children,Hname,Page}) => {
  return (
    <>
        <div className={`bg-Header bg-cover relative top-0 py-52 ${className}`}>
          <Container>
              <div className='ml-10 xl:ml-[330px]'>
                  <h5 className='text-[60px] font-semibold text-white'>{Hname}</h5>
                  <List className='flex gap-x-10 text-[#B3B1B7] mt-5'>
                      <NavLink to='/'>
                          <ListItem ItemName= 'Home'/>
                      </NavLink>
                      <ListItem ItemName={Page} className='!list-disc'/>
                  </List>
              </div>
              {children}
          </Container>
        </div>
    </>
  )
}

export default HeaderPart