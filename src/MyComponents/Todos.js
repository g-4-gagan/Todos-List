import React from 'react';
import TodoItem from './TodoItem.js'

function Todos(props) {

   let listStyle ={
   	minHeight : "70vh"
  }

  return (
    <div className="container" style={listStyle}>
    	<h3 className="text-center my-3">Todos List</h3>
    	{props.todos.length===0?"No Todos to Display":
    	props.todos.map((todo)=>{
    		return (
    		<TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete}/> 
    		)
    	})}
    	

    </div>
  );
}

export default Todos;
