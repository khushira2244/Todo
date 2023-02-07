import React, { useEffect } from 'react'
import {v4 as uuidv4} from 'uuid'

const Form = ({input,setInput,setTodos,todos,editTodo,setEditTodo}) => {
  const handleChange=(e)=>{
    setInput(e.target.value)
  }
  const updateTodo=(title,id,completed)=>{
    const newTodo= todos.map((todo)=>{
      if(todo.id==id){
         return {title,id,completed}
      }
      
  
      else{
        todo
      }
      setTodos(newTodo)
      setEditTodo('')
    })

  }
 


  const handleSubmit=(e)=>{
   e.preventDefault()
   if(!editTodo){
   setTodos([...todos,{id:uuidv4(),title:input,completed:false}])
   setInput('')
   
  }else{
    updateTodo(input,editTodo.id,editTodo.completed)
    
  }
}
useEffect(()=>{
  if(editTodo){
    setInput(editTodo.title)
  }else{
    setInput('')
  }
},[editTodo,setInput])
  
  
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" className='task-input'  value={input} onChange={handleChange} ></input>
        <button className="button-add" type="submit">
                    {editTodo ? 'Ok':'Add'}</button>
      </form>
    </div>
  )
}

export default Form