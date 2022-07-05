import React from "react";
import TodoItem from "./TodoItem";

function Todos(props){
    let todosStyle = {
        minHeight: "40vh",
        margin: "30px auto"
    }
    return(
        <div className="container" style={todosStyle}>
            <h3 className="my-3">Todo List</h3>
            {props.todos.length === 0? "No todos to display": 
            props.todos.map((todo) => <TodoItem key={todo.id} todo={todo} onDelete = {props.onDelete} />)}
        </div>
    )
}

export default Todos;