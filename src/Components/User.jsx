import React from 'react'

const User = ({userName}) => {
    
  return (
    <p> 
        Real Name :  <span className='up'> {userName} </span>
    </p>
  )
}

export default User