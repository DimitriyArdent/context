import React, {useContext,useRef} from 'react'
import { MainContext } from '../../context/Context'
import { secondContext } from '../../context/SecondContext'
 function Component2( ) {

 //const text = useContext(MainContext)
  const {text,setText} = useContext(MainContext)
  const{user,setUser} = useContext(secondContext)
  setText('it Works')
 const ref = useRef(null)
 const refLastName = useRef(null)

  
 function handleSubmit(e){
    e.preventDefault()
    setUser((prev)=>({...prev, name:ref.current.value, secondName: refLastName.current.value}))
 }
  return (
    <div className='wrap'>
            <div>Comp. 2</div>
                <div className='comp-a-wrap'>
                    {user.name + ' '}
                     
                    {user.secondName}
                </div>
             

             <form className='form' onSubmit={(e)=>handleSubmit(e)}>
                <label>name:</label>
                <input ref={ref}></input>
                <label>last name:</label>
                <input ref={refLastName}></input>
                <button type='submit'>submit</button>
             </form>

    </div>
  )
}

export default Component2
