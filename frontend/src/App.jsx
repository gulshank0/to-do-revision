import React, { useState } from 'react'
import './App.css'
import Card from './components/Card.jsx'
import Todos from './components/Todos.jsx'

function App() {
const [todos, setTodos] = useState([]);

fetch("http://localhost:3000/todos")
.then(async function(res){
  const json = await res.json();
  setTodos(json.todos);
})



  return (
    <>
   
   <Card/> 
    <Todos todos={todos}/> 
    </>
  )
}

export default App
