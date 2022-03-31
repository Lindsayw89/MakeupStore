import React from 'react'
import MakeupDetails from '../components/makeupDetails'



const FoundationDetail=()=> {
  return (
    <div>
        <h3 className='makeupName'>Foundation</h3>
        <MakeupDetails makeupType={"foundation"}/>
    </div>
  )
}

export default FoundationDetail