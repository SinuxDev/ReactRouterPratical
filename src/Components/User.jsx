import React from 'react'

const User = ({userID}) => {
    let userName;
    switch(userID){
        case 1:
            userName = "Shin Shin";
         break;
        case 2:
            userName = "Aung Aung";
         break;
        case 3:
            userName = "Thant Thant";
         break;
        case 4:
            userName = "Aye Aye";
         break;
        case 5:
            userName = "Kyaw Kyaw";
         break;
        default:
            userName = "unknown user...";
         break;
    }
  return (
    <p> 
        Posted By <span className='up'> {userName} </span>
    </p>
  )
}

export default User