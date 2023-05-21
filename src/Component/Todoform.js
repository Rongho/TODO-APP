import React, { useEffect, useRef, useState } from 'react'

function Todoform(props) {
  const[input, setinput]=useState('')

  const Inputref= useRef(null);

 useEffect(()=>{
  Inputref.current.focus();
 })

const handlechange=e=>{
 setinput(e.target.value)
}


const handlesubmit=e=>{
  e.preventDefault()

  props.onSubmit({
    id: Math.floor(Math.random() * 10000),
    text: input
  });
  setinput('')
}


  return (
    <form className='todo-form' onSubmit={handlesubmit}>
      <input
      type='text'
      placeholder='add a task'
      value={input}
      name='text'
      onChange={handlechange}
      className='todo-input'
      ref={Inputref}
      />
      <button className='todo-button'>add a task</button>

    </form>
    
  )
}

export default Todoform