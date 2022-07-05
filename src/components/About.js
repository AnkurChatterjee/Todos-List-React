import React from "react";

function About(){
    const aboutStyle = {
        minHeight: "81vh"
    }
    return(
        <div className="container" style={aboutStyle}>
            <h2 className="text-center">About MyTodosList</h2><br /><br />
            <p>MyTodosList is a single page application that helps you in your day to day
                activities by storing your todos for the day. Simply add a todo and the description of the todo
                in the given form and press the "Add Todo" button. Your todo will be added to the list. Make sure
                that you fill both the todo title and the todo description before hitting the add button because
                the app dosen't take empty fields. You can also delete the todo once it's done. The interesting
                thing about single page applications is that they can render multiple components dynamically, 
                without reloading the page each time. The app also stores all the existing todos in local storage 
                so you won't lose the todos on refreshing the page or opening the page on a new tab. Keep enjoying 
                our app!
            </p>
        </div>
    )
}

export default About;