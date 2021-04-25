import React from 'react';

import './students-grades.style.css';


const StudentsGrades = (props) => { 
    return (
    <div className="students-grades-container">
        {
            props.student.grade<3
            ? // if true
            <span className="product-without-stock"> {props.student.name} </span>
            : // else 
            <span> {props.student.name} </span>
        }
        {' '} {props.student.grade} 
        
        
        {props.student.gender=="male"
        ?
        <span className="product-without-stock"> {props.student.gender} </span>
        
        :
        <span> {props.student.gender} </span>
    }
    </div>
    );
}

export default StudentsGrades;