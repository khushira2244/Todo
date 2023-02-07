import React from 'react'

const Todo = ({todos,setTodos,setEditTodo}) => {
  const handleComplete=(todo)=>{
   setTodos( todos.filter((item)=>{
     if(todo.id==item.id){
      return ({...item,completed:!item.completed})
     }else{
      return item
     }
   }))

  }

  const handleDelete=({id})=>{
    const filterTodo=todos.filter((todo)=>todo.id!==id)
    setTodos(filterTodo)
  }

const handleEdit=(({id})=>{
  const findTodo=todos.find((todo)=>todo.id==id)
  setEditTodo(findTodo)
})

  const renderLists=  todos.map((todo)=>{
    return (
        <li key={todo.id}
          className="list-item">
         <input type="text" 
         value={todo.title}
         onChange={(e)=>e.preventDefault()}
         className="list"
         />
         <div>
          <button className='button-complete-task-button'>
            <i className="fa fa-check circle" onClick={()=>handleComplete(todo)}></i>
          </button>
          <button className="button-complete-task-button" >
                      <i className="fa fa-edit"  onClick={()=>handleEdit(todo)}></i>
                  </button>
                  <button className="button-complete-task-button">
                      <i className="fa fa-trash" onClick={()=>handleDelete(todo)}></i>
                  </button>
         </div>
         </li>
         )
         
  })
       return (
    <div>
  
     {renderLists}
    </div>
  )
       }


export default Todo