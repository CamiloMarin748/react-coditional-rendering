import React from 'react';
import SubjectsName from '../subjects-name/subjects-name.comp';
import ProductRow from '../students-grades/students-grades.comp';

import './grades-table.style.css';


const  GradeTable = () => {

return (
    <div className= "subjects-name-container">  

GRADES TABLE
<br/><br/>

Name      Grade     Gender
<br/>
        <SubjectsName subjectName="Maths"/>
       
        <ProductRow   student={{ 
            name: "juan", 
            grade: 4,
            gender: "male",
         }} />

        <ProductRow   student={{ 
            name: "Ana", 
            grade: 5,
            gender: "female",
         }} />  

        <ProductRow   student={{ 
            name: "Pedro", 
            grade: 0,
            gender: "male",
         }} />  
     <br/>
        <SubjectsName subjectName="Programming"/>

        <ProductRow   student={{ 
            name: "Luis", 
            grade: 1,
            gender: "male",
         }} />

        <ProductRow   student={{ 
            name: "Aleja", 
            grade: 2,
            gender: "female",
         }} />  

        <ProductRow   student={{ 
            name: "Kt", 
            grade: 3,
            gender: "female",
         }} />
<br/>
                 <SubjectsName subjectName="Data Structures"/>

        <ProductRow   student={{ 
            name: "Hugo", 
            grade: 1,
            gender: "male",
         }} />

        <ProductRow   student={{ 
            name: "Luisa", 
            grade: 2,
            gender: "female",
         }} />  

        <ProductRow   student={{ 
            name: "Maria", 
            grade: 3,
            gender: "female",
         }} />  
    </div>
  );

 }
 
 export default GradeTable;
