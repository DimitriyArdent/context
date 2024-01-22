import React, {useContext} from 'react'
import Component1 from './ComponentAcomponents/Component1'
import { secondContext } from '../context/SecondContext'
import './components.css'
function ComponentA( ) {
  const{user,setuser} = useContext(secondContext)
  return (
    <div >
      <div className='wrap'>
        <div >component A</div>
        <div className='comp-a-wrap'>
            <div>{ `${user.name}   ${user.secondName}`}</div>
         </div>
         
      </div>
       
        <Component1></Component1>
    </div>
  )
}

export default ComponentA
