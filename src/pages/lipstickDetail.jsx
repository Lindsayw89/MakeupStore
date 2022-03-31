import React from 'react'
import MakeupDetails from '../components/makeupDetails'



const LipstickDetails=()=> {
  return (
    <div>
        <h3 className='makeupName'>Lipstick</h3>
        <MakeupDetails makeupType={"lipstick"}/>
    </div>
  )
}

export default LipstickDetails