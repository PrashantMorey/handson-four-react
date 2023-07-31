import React from "react";
import { Link } from "react-router-dom";
import './Design.css';

function LinkCompo(){
    return(
        <div className="header">
            <Link className="header1" to='/'>Home</Link>
            <Link className="header1" to='/student'>Student</Link>
            <Link className="header1" to='/contact'>Contact</Link>
        </div>

    )
}
export default LinkCompo;