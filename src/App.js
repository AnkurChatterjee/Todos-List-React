import './App.css';
import Header from './components/Header';
import Todos from './components/Todos';
import Footer from './components/Footer';
import AddTodo from './components/addTodo';
import About from './components/About';
import React, {useState, useEffect} from 'react';
import { Routes, Route } from 'react-router-dom';

function App() {
  let initTodos;
  if(localStorage.getItem("todos") === null){
    initTodos = [];
  }
  else{
    initTodos = JSON.parse(localStorage.getItem("todos"))
  }
  

  const onDelete = (todo) => {
    setTodos(todos.filter((e) => {
      return e!== todo
    }))
    localStorage.setItem("todos",JSON.stringify(todos));
  }
  const addTodo = (title,desc) => {
    console.log("I am from todo",title,desc);
    let id;
    if(todos.length === 0)
      id=1;
    else
      id = todos[todos.length-1].id+1;
    let myTodos = {
      id: id,
      title: title,
      desc: desc
    }
    console.log(myTodos);
    setTodos([...todos,myTodos]);
  }
  let [todos,setTodos] = useState(initTodos);
  useEffect(() => {
    localStorage.setItem("todos",JSON.stringify(todos));
  },[todos])
  return (
    <div className="App">
      <Header title={"Todos List"} searchBar={false} />
      <Routes>
        <Route path="/home" element = {
          <>
            <AddTodo addTodo = {addTodo}/>
            <Todos todos={todos} onDelete = {onDelete}/>
          </>
        } />
        <Route path="" element = {
          <>
            <AddTodo addTodo = {addTodo}/>
            <Todos todos={todos} onDelete = {onDelete}/>
          </>
        } />
        <Route path="/about" element = {<About />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
