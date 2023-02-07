import React from 'react';
import { useState } from 'react';
import './App.css';
import Form from './Components/Form';
import Todo from './Components/Todo';
import Header from './Components/Header';
function App() {
  const [input,setInput]=useState("")
  const [editTodo,setEditTodo]=useState([])
  const [todos,setTodos]=useState([])
  return (
    <div className='container'>
    <div div className='app-wrapper'>
    <div>
    <Header/>
    </div>
      
      <Form 
      input={input}
      setInput={setInput}
      editTodo={editTodo}
      setEditTodo={setEditTodo}
      todos={todos}
      setTodos={setTodos}
      />
      <div>
      <Todo
     
      setEditTodo={setEditTodo}
      todos={todos}
      setTodos={setTodos}
      />
      </div>
    
 </div>
    </div>
  );
}

export default App;
