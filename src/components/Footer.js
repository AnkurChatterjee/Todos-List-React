import React from "react";

function Footer(){
    let footerStyle ={
        position: "relative",
        top: "2vh",
        width: "100%",
        margin: "0px"
    }
    return(
        <div className="bg-dark text-light my-3" style={footerStyle}>
            <p className="text-center py-3">Copyright &copy; MyTodosList.com</p>
        </div>
    )
}

export default Footer;