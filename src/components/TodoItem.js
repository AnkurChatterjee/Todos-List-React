import React from "react";

function TodoItem({todo, onDelete}){
    return(
        <div className="container my-3">
            <h4 className="my-1">{todo.title}</h4>
            <p className="my-0">{todo.desc}</p>
            <button className="btn btn-sm btn-danger my-0" onClick={() => onDelete(todo)}>Delete</button><hr />
        </div>
    )
}

export default TodoItem;