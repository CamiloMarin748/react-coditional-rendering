import React from 'react';

import './subjects-name.style.css';


const SubjectsName = (props) =>{
    return (
<div className="subjects-name-container">
    {props.subjectName}
</div>

    ); 
    
}

export default SubjectsName;