import React, { useState } from "react";

function AddTodo(props){
    let [title, setTitle] = useState("");
    let [desc,setDesc] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!title || !desc)
            alert("Title or Description cannot be empty");
        else{
            props.addTodo(title,desc);
            setTitle("");
            setDesc("");
        }
    }
    return(
        <div className="container my-3">
            <h3>Add a Todo</h3>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Todo Title</label>
                    <input type="text" value={title} className="form-control" id="title" onChange={(e) => setTitle(e.target.value)} />
                </div>
                <div className="mb-3">
                    <label htmlFor="desc" className="form-label">Description</label>
                    <input type="text" value={desc} className="form-control" id="desc" onChange={(e) => setDesc(e.target.value)} />
                </div>
                <button type="submit" className="btn btn-sm btn-success">Add Todo</button>
            </form>
        </div>
    )
}

export default AddTodo;