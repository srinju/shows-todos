import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'

function App() {
  const [changeTodo , setCHangeTodo] = useState(1);


  return <div>
    <button onClick={function(){
      setCHangeTodo(1);
    }} style={{margin:10}}>1</button>

    <button onClick={function(){
      setCHangeTodo(2);
    }} style={{margin:10}}>2</button>

    <button onClick={function(){
      setCHangeTodo(3);
    }} style={{margin:10}}>3</button>

    <button onClick={function(){
      setCHangeTodo(4);
    }} style={{margin:10}}>4</button>

    <Todo id={changeTodo} />
  </div>
}

function Todo({id}) {
  const [todo , setTodo] = useState([]);

  useEffect(() => {
    fetch("https://sum-server.100xdevs.com/todo?id=" + id)
     .then( async function(res){
       const json = await res.json();
       setTodo(json.todo)
     })
  },[id])


  return <div>
    <h1>
      {todo.title}
    </h1>
    <h3>
      {todo.description}
    </h3>
  </div>
}

export default App
