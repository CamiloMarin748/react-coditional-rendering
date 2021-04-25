import React from 'react';
import GradeTable from '../grades-table/grades-table.comp';
import GradesTable from '../grades-table/grades-table.comp';
import SearchBar from '../search-bar/search-bar.comp';


import './filterable-grades-table.style.css';


const FilterableGradesTable = () => {

    return (
        <div className= "filterable-grades-table-container">  
         
         FILTERABLE GRADES TABLE 
         <SearchBar/>
         <GradeTable/>
         
        </div>

    );
}

export default FilterableGradesTable;

