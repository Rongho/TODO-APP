import React, { useState } from 'react'
import Todoform from './Todoform';
import Todo from './Todo';

function Todolist() {
  const[todo, settodo]=useState([])

const addTodo = todos =>{
  if(!todos.text || /^\s*$/.test(todos.text)){
    return;
  }


const newTodos = [todos, ...todo];

    settodo(newTodos);
    console.log(...todo);
  };

const RemoveTodo = id=>{
  const removedArr = [...todo].filter(todos => todos.id !== id);

  settodo(removedArr);
}

const updateTodo = (todoId, newValue) => {
  if (!newValue.text || /^\s*$/.test(newValue.text)) {
    return;
  }

  settodo(prev => prev.map(item => (item.id === todoId ? newValue : item)));
};


  const CompleteTodo =id =>{
    let updatetodo= todo.map(todos=>{
      if(todos.id===id){
        todo.isComplete = !todo.isComplete;
      }
      return todos;
    });
    settodo(updatetodo)
  }
  
  return (
    <div>
<h1>Hey what's the plan for today.</h1>
<Todoform onSubmit={addTodo}/>
<Todo todo={todo} CompleteTodo={CompleteTodo} RemoveTodo={RemoveTodo} updateTodo={updateTodo}/>
    </div>
  )
  }

export default Todolist