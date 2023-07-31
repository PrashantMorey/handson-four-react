import React, { useState } from "react";

function Student(){
    const [data, setData] = useState([
        {
            Name: "Jhon",
            Age:26,
            Course: "MERN",
            Batch: "Oct",
            Change: "Edit"
        },
        {
            Name: "Doe",
            Age:25,
            Course: "MERN",
            Batch: "Nov",
            Change: "Edit"
        },
        {
            Name: "Biden",
            Age:26,
            Course: "MERN",
            Batch: "Sept",
            Change: "Edit"
        },
        {
            Name: "Barar",
            Age:22,
            Course: "MERN",
            Batch: "Sept",
            Change: "Edit"
        },
        {
            Name: "Christ",
            Age:24,
            Course: "MERN",
            Batch: "Oct",
            Change: "Edit"
        },
        {
            Name: "Elent",
            Age:23,
            Course: "MERN",
            Batch: "Nov",
            Change: "Edit"
        },
        {
            Name: "Harshit",
            Age:22,
            Course: "MERN",
            Batch: "Oct",
            Change: "Edit"
        }
    ])
    return(
        <>
        <div className="studentHead">
        <h1 className="students">Students Details</h1>
        <button className="studentButton">Add new student</button>
        </div>
        <table className="studentTable">
            <tr className="studentTr">
                <td>Name</td>
                <td>Age</td>
                <td>Course</td>
                <td>Batch</td>
                <td>Change</td>
            </tr><hr/>
            {data.map((item,index)=>{
                return(
                    <>
                <tr  className="studentTr" key={index}>
                    <td>{item.Name}</td>
                    <td>{item.Age}</td>
                    <td>{item.Course}</td>
                    <td>{item.Batch}</td>
                    <td>{item.Change}</td>
                </tr><hr/>
                </>)
            })}
        </table>
        </>
    )
}
export default Student;