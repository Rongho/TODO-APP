import React, { useState } from 'react'
import Todoform from './Todoform'
import { RiCloseCircleLine } from 'react-icons/ri'
import { TiEdit } from 'react-icons/ti'

function Todo({todo,CompleteTodo,RemoveTodo, updateTodo}) {
  const[edit, setedit]= useState({
    id:null,
    value:''
  });

  const submitUpdate = value => {
    updateTodo(edit.id, value);
    setedit({
      id: null,
      value: ''
    });
  };

  if (edit.id) {
    return <Todoform edit={edit} onSubmit={submitUpdate} />;
  }


  return todo.map((todos, index)=>
  <div className={todos.isComplete?'todos-row complete':'todo-row'} key={index}>
      <div key={todos.id} onClick={()=>CompleteTodo(todos.id)}>
        {todos.text} 
      </div>
      <div className="icons">
        <RiCloseCircleLine onClick={()=>RemoveTodo(todos.id)}
        className='delete-icon'/>
        <TiEdit onClick={()=>setedit({id:todos.id,value: todos.text})}
        className='edit-icon'/>
      </div>
  </div>
  )
}

export default Todo