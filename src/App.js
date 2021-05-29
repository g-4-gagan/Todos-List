import './App.css';
import Header from './MyComponents/Header.js';
import Todos from './MyComponents/Todos.js';
import About from './MyComponents/About.js';
import Footer from './MyComponents/Footer.js';
import AddTodo from './MyComponents/AddTodo.js';
import React,{useState,useEffect} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {

  let initTodo;

  if(localStorage.getItem('todos')===null)
  {
    initTodo=[];
  }
  else
  {
    initTodo = JSON.parse(localStorage.getItem('todos'));
  }
  
  const onDelete = (todo)=>{
    //Deleting this way in raect will not work
    //let index = todos.indexOf(todo);
    //todos.splice(index,1);

    setTodos(todos.filter((e)=>{
      return e!==todo;
   }));

  }

  const addTodo = (title,desc)=>{
    //console.log(title+" "+desc);
    let sno;
    if(todos.length===0)
    {
      sno=1;
    }
    else
    {
     sno = todos[todos.length-1].sno-1;
    }

    const myTodo = {
      sno: sno,
      title: title,
      desc: desc
    }
    setTodos([...todos,myTodo]); 
  }

  const [todos,setTodos] =useState(initTodo);
  useEffect(()=>{
    localStorage.setItem('todos',JSON.stringify(todos));
  },[todos]);

  return (

    <Router>
    <Header title="MyTodosList" searchBar={false}/>
    <Switch>
    <Route exact path='/' render={()=>{
      return(
      <>
      <AddTodo addTodo={addTodo}/>
      <Todos todos={todos} onDelete={onDelete}/>
      </>
      )
     }}>
    
    </Route>
    <Route exact path='/about'>
      <About/>
    </Route>
    </Switch>
    <Footer/>
    </Router>
  );
}

export default App;
